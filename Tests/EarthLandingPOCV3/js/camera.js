import * as THREE from "three";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";

class CameraRigController {
  constructor() {
    this.currentPos = new THREE.Vector3().copy(CONFIG.camera.initial.pos);
    this.currentLook = new THREE.Vector3().copy(CONFIG.camera.initial.look);
    
    this.targetPos = new THREE.Vector3().copy(CONFIG.camera.initial.pos);
    this.targetLook = new THREE.Vector3().copy(CONFIG.camera.initial.look);
    
    this.shakeIntensity = 0.0;
    this.lerpSpeed = 0.04; // Dampened smooth tracking
    this.stormDetachPos = null;
    this.localYOffset = -1.0; // Animatable Y position along rocket's heading axis
  }
  
  setTarget(pos, look) {
    this.targetPos.copy(pos);
    this.targetLook.copy(look);
  }
  
  update(camera, rocket, elapsed, delta) {
    // If manual OrbitControls are active, do not overwrite the camera state
    if (window.activeControls) return;
    
    // 1. Determine camera coordinates based on current scene state
    const sc = ENGINE_STATE.currentScene;
    
    if (rocket && (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "REENTRY" || sc === "STORM")) {
      if (sc === "STORM" && elapsed >= 19.5) {
        // Camera detaches and stays behind in the clouds, looking down as the rocket plunges away
        if (!this.stormDetachPos) {
          rocket.updateMatrixWorld();
          // Mounted 2m to the side of the 2.5m radius hull, shifted further up the circumference (local X = 3.92, local Z = 2.2)
          const localCamPos = new THREE.Vector3(3.92, this.localYOffset, 2.2);
          this.stormDetachPos = localCamPos.clone().applyMatrix4(rocket.matrixWorld);
        }
        this.setTarget(this.stormDetachPos, rocket.position.clone());
      } else {
        this.stormDetachPos = null;
        
        // Hull camera: mounted 2m to the side of the 2.5m radius hull, shifted further up the circumference (local X = 3.92, local Z = 2.2)
        const localCamPos = new THREE.Vector3(3.92, this.localYOffset, 2.2);
        
        // Local look-at target: looking along heading direction (+Y), angled 4.0 degrees towards rocket's top/axis
        // tan(4.0 deg) = 0.69 / 10.0, look-at target at (3.3, 9.0, 1.9)
        const localCamLook = new THREE.Vector3(3.3, 9.0, 1.9);
        
        rocket.updateMatrixWorld();
        const worldCamPos = localCamPos.clone().applyMatrix4(rocket.matrixWorld);
        
        let worldCamLook;
        // Lock look-at target directly to the Earth when it is revealed
        if (ENGINE_STATE.earth && (sc === "SNAP_BACK" || sc === "REENTRY")) {
          const earthPos = new THREE.Vector3();
          ENGINE_STATE.earth.getWorldPosition(earthPos);
          worldCamLook = earthPos;
        } else {
          worldCamLook = localCamLook.clone().applyMatrix4(rocket.matrixWorld);
        }
        
        this.setTarget(worldCamPos, worldCamLook);
      }
    } else if (sc === "LANDING" || sc === "MANUAL") {
      this.stormDetachPos = null;
      // Wide level angle focusing on rocket hover & monolith
      if (rocket) {
        const rocketPos = rocket.position;
        const targetX = rocketPos.x + CONFIG.camera.landing.offsetPos.x;
        const targetY = rocketPos.y + CONFIG.camera.landing.offsetPos.y;
        const targetZ = rocketPos.z + CONFIG.camera.landing.offsetPos.z;
        
        const lookX = CONFIG.camera.landing.offsetLook.x;
        const lookY = CONFIG.camera.landing.offsetLook.y;
        const lookZ = CONFIG.camera.landing.offsetLook.z;
        
        this.setTarget(new THREE.Vector3(targetX, targetY, targetZ), new THREE.Vector3(lookX, lookY, lookZ));
      }
    }
    
    // 2. Perform smooth interpolation (lerp) with dynamic speed per phase
    const isFlight = (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "REENTRY" || (sc === "STORM" && elapsed < 19.5));
    
    if (isFlight) {
      // Direct lock-on for onboard hull camera to prevent lag at high speeds
      this.currentPos.copy(this.targetPos);
      this.currentLook.copy(this.targetLook);
      
      // Lock camera's up vector to the rocket's local +Z axis ONLY during WARP/INITIAL to prevent flips during snapback/reentry pitch maneuvers
      if (rocket && (sc === "WARP" || sc === "INITIAL")) {
        const localCamUp = new THREE.Vector3(0.0, 0.0, 1.0);
        const worldCamUp = localCamUp.clone().applyQuaternion(rocket.quaternion);
        camera.up.copy(worldCamUp);
      } else {
        // Stabilized upright view for SNAP_BACK, REENTRY, and STORM flight phases
        camera.up.lerp(new THREE.Vector3(0.0, 1.0, 0.0), 0.1);
      }
    } else {
      // Smooth detach transition during landing & manual & storm exit (after 19.5s)
      this.lerpSpeed = 0.04;
      this.currentPos.lerp(this.targetPos, this.lerpSpeed);
      this.currentLook.lerp(this.targetLook, this.lerpSpeed);
      
      // Smoothly return up vector to standard world UP (0, 1, 0)
      camera.up.lerp(new THREE.Vector3(0.0, 1.0, 0.0), this.lerpSpeed);
    }
    
    // Apply interpolated values to camera
    camera.position.copy(this.currentPos);
    
    // 3. Add non-cumulative multi-frequency noise camera shake
    let shakeFactor = 0.0;
    let frequency = 1.0;
    
    if (sc === "WARP") {
      shakeFactor = ENGINE_STATE.warpProgress * CONFIG.shake.warp.amp;
      frequency = CONFIG.shake.warp.freq;
    } else if (sc === "REENTRY") {
      shakeFactor = ENGINE_STATE.atmosphereFriction * CONFIG.shake.reentry.amp;
      frequency = CONFIG.shake.reentry.freq;
    } else if (sc === "STORM") {
      shakeFactor = CONFIG.shake.storm.amp;
      frequency = CONFIG.shake.storm.freq;
    } else if (sc === "LANDING") {
      shakeFactor = this.shakeIntensity * CONFIG.shake.landing.amp;
      frequency = CONFIG.shake.landing.freq;
    }
    
    if (shakeFactor > 0.0) {
      const timeScale = elapsed * frequency;
      // Multi-octave sinusoidal offsets to simulate engine vibration and aerodynamic drag
      const dx = Math.sin(timeScale) * Math.cos(timeScale * 0.7) * shakeFactor;
      const dy = Math.cos(timeScale * 1.3) * Math.sin(timeScale * 0.4) * shakeFactor;
      const dz = Math.sin(timeScale * 0.9) * Math.cos(timeScale * 1.6) * shakeFactor;
      
      camera.position.x += dx;
      camera.position.y += dy;
      camera.position.z += dz;
    }
    
    camera.lookAt(this.currentLook);
  }
}

export const CAMERA_RIG = new CameraRigController();
