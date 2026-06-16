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
      if (sc === "STORM") {
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
        
        let localCamPos, localCamLook;
        
        // Continuous blend function to smoothly slide the camera from the hull offset to the forward center axis
        const startY = -1.0;
        const endY = 35.0;
        const blend = THREE.MathUtils.clamp((this.localYOffset - startY) / (endY - startY), 0.0, 1.0);
        
        localCamPos = new THREE.Vector3();
        localCamPos.y = this.localYOffset;

        // Transition from side hull to centerline without going inside the rocket fuselage (skimming just above it):
        // 1. Move the camera to the left and slightly up early (X=0.0, Z=2.75, which is directly above the rocket fuselage).
        // 2. Travel straight along the top of the rocket body/nose (X=0.0, Z=2.75).
        // 3. Once past the nose cone, smoothly glide down to the centerline (X=0.0, Z=0.0).
        if (blend < 0.25) {
          const phaseBlend = blend / 0.25;
          localCamPos.x = THREE.MathUtils.lerp(3.92, 0.0, phaseBlend);
          localCamPos.z = THREE.MathUtils.lerp(2.2, 2.75, phaseBlend);
        } else if (blend < 0.65) {
          localCamPos.x = 0.0;
          localCamPos.z = 2.75;
        } else if (blend < 0.90) {
          const phaseBlend = (blend - 0.65) / 0.25;
          const t = Math.sin(phaseBlend * Math.PI / 2); // smooth ease-out slide
          localCamPos.x = 0.0;
          localCamPos.z = THREE.MathUtils.lerp(2.75, 0.0, t);
        } else {
          localCamPos.x = 0.0;
          localCamPos.z = 0.0;
        }
        
        // Point straight ahead parallel to the Y axis to keep the warp center aligned
        // and eliminate any camera yaw/pitch swivels relative to the tunnel direction
        localCamLook = new THREE.Vector3(localCamPos.x, this.localYOffset + 30.0, localCamPos.z);
        
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
    const isFlight = (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "REENTRY");
    
    if (isFlight) {
      // Direct lock-on for onboard hull camera to prevent lag at high speeds
      this.currentPos.copy(this.targetPos);
      this.currentLook.copy(this.targetLook);
      
      // Lock camera's up vector to the rocket's local +Z axis during WARP/INITIAL/SNAP_BACK to prevent flips/rolls
      if (rocket && (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK")) {
        const localCamUp = new THREE.Vector3(0.0, 0.0, 1.0);
        const worldCamUp = localCamUp.clone().applyQuaternion(rocket.quaternion);
        camera.up.copy(worldCamUp);
      } else {
        // Stabilized upright view for REENTRY and STORM flight phases
        camera.up.lerp(new THREE.Vector3(0.0, 1.0, 0.0), 0.1);
      }
    } else {
      // Smooth detach transition during landing & manual & storm exit (after storm entry)
      this.lerpSpeed = 0.04;
      this.currentPos.lerp(this.targetPos, this.lerpSpeed);
      this.currentLook.lerp(this.targetLook, this.lerpSpeed);
      
      // Smoothly return up vector to standard world UP (0, 1, 0)
      camera.up.lerp(new THREE.Vector3(0.0, 1.0, 0.0), this.lerpSpeed);
    }
    
    // Apply interpolated values to camera
    camera.position.copy(this.currentPos);
    
    camera.lookAt(this.currentLook);
  }
}

export const CAMERA_RIG = new CameraRigController();
