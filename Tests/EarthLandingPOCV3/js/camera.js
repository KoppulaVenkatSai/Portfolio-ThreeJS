import * as THREE from "three";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";

class CameraRigController {
  constructor() {
    this.currentPos = new THREE.Vector3().copy(CONFIG.camera.initial.pos);
    this.currentLook = new THREE.Vector3().copy(CONFIG.camera.initial.look);
    
    this.targetPos = new THREE.Vector3().copy(CONFIG.camera.initial.pos);
    this.targetLook = new THREE.Vector3().copy(CONFIG.camera.initial.look);
    
    this.snapBackPos = new THREE.Vector3().copy(CONFIG.camera.initial.pos);
    this.snapBackLook = new THREE.Vector3().copy(CONFIG.camera.initial.look);
    
    this.shakeIntensity = 0.0;
    this.lerpSpeed = 0.04; // Dampened smooth tracking
    this.stormDetachPos = null;
    this.localYOffset = -8.0; // Animatable Y position along rocket's heading axis (negative = camera behind rocket in world Z)
    // Camera view offset overrides — these control what you actually SEE on screen
    this.camOffsetX = 4.2;   // +X: camera right of rocket → rocket appears on left side of screen
    this.camOffsetZ = -4.5;  // -Z: camera above rocket (due to PI/2 rotation mapping) → rocket appears lower
    this.camDistance = -8.0; // how far behind the rocket the camera starts (same as initial localYOffset)
  }
  
  setTarget(pos, look) {
    this.targetPos.copy(pos);
    this.targetLook.copy(look);
  }

  // Call this when returning from planet orbit / dismissing activeControls
  // Snaps the rig's internal state to the default position so it resumes from there
  resetToDefault() {
    this.currentPos.copy(CONFIG.camera.initial.pos);
    this.currentLook.copy(CONFIG.camera.initial.look);
    this.targetPos.copy(CONFIG.camera.initial.pos);
    this.targetLook.copy(CONFIG.camera.initial.look);
    this.snapBackPos.copy(CONFIG.camera.initial.pos);
    this.snapBackLook.copy(CONFIG.camera.initial.look);
  }
  
  update(camera, rocket, elapsed, delta) {
    // If manual OrbitControls are active, do not overwrite the camera state
    if (window.activeControls) return;
    
    // 1. Determine camera coordinates based on current scene state
    const sc = ENGINE_STATE.currentScene;
    
    if (sc === "REENTRY") {
      this.stormDetachPos = null;
      const u = ENGINE_STATE.cameraArcProgress;
      
      // Define the start point and the end point for the zoom-past trajectory
      // Start point (u=0): The captured camera snapBackPos
      const p0 = this.snapBackPos;
      
      // End point (u=1): Centered with Earth, stopping just behind Earth in Z
      // USER CONFIGURABLE: Adjust these coordinates to change where the camera ends up
      // - (1.4, 296.5) matches Earth's center in X and Y.
      // - Z = -70.0 stops just behind Earth's 54-unit radius (Earth center is at Z=2.0).
      const p1 = new THREE.Vector3(-100.4, 296.5, -30.0);
      
      // Linearly interpolate the camera position
      const worldCamPos = new THREE.Vector3().lerpVectors(p0, p1, u);
      
      // Calculate direction looking at the Earth at the start of the reentry phase
      const initialLookDir = new THREE.Vector3().subVectors(this.snapBackLook, p0).normalize();
      
      // Lock the look direction to be constant, achieving purely translation and zero rotation
      const worldCamLook = new THREE.Vector3().addVectors(worldCamPos, initialLookDir.multiplyScalar(100.0));
      
      this.setTarget(worldCamPos, worldCamLook);
      
      camera.up.set(0.0, 1.0, 0.0);
    } else if (rocket && (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "STORM")) {
      if (sc === "INITIAL") {
        this.stormDetachPos = null;
        this.setTarget(
          CONFIG.camera.initial.pos.clone(),
          CONFIG.camera.initial.look.clone()
        );
      } else if (sc === "WARP") {
        this.stormDetachPos = null;
        // Travel forward along flight axis (world +Z) starting exactly from custom config framing
        const travelDistance = this.localYOffset - (-8.0);
        const forwardDir = new THREE.Vector3(0, 0, 1);
        
        const worldCamPos = CONFIG.camera.initial.pos.clone().addScaledVector(forwardDir, travelDistance);
        const worldCamLook = CONFIG.camera.initial.look.clone().addScaledVector(forwardDir, travelDistance);
        this.setTarget(worldCamPos, worldCamLook);
      } else if (sc === "STORM") {
        // Camera detaches and stays behind in the clouds, looking down as the rocket plunges away
        if (!this.stormDetachPos) {
          rocket.updateMatrixWorld();
          const localCamPos = new THREE.Vector3(6.8, this.localYOffset, 3.8);
          this.stormDetachPos = localCamPos.clone().applyMatrix4(rocket.matrixWorld);
        }
        this.setTarget(this.stormDetachPos, rocket.position.clone());
      } else {
        this.stormDetachPos = null;
        
        let localCamPos, localCamLook;
        
        // Continuous blend function to smoothly slide the camera from the hull offset to the forward center axis
        const startY = 13.0;
        const endY = 45.0;
        const blend = THREE.MathUtils.clamp((this.localYOffset - startY) / (endY - startY), 0.0, 1.0);
        
        localCamPos = new THREE.Vector3();
        localCamPos.y = this.localYOffset;

        // Transition from side hull to centerline without going inside the rocket fuselage (skimming just above it):
        // 1. Move the camera to the left and slightly up early (X=0.0, Z=3.5, which is directly above the rocket fuselage).
        // 2. Travel straight along the top of the rocket body/nose (X=0.0, Z=3.5).
        // 3. Once past the nose cone, smoothly glide down to the centerline (X=0.0, Z=0.0).
        if (blend < 0.25) {
          const phaseBlend = blend / 0.25;
          localCamPos.x = THREE.MathUtils.lerp(this.camOffsetX, 0.0, phaseBlend);
          localCamPos.z = THREE.MathUtils.lerp(this.camOffsetZ, -3.5, phaseBlend);
        } else if (blend < 0.65) {
          localCamPos.x = 0.0;
          localCamPos.z = -3.5;
        } else if (blend < 0.90) {
          const phaseBlend = (blend - 0.65) / 0.25;
          const t = Math.sin(phaseBlend * Math.PI / 2); // smooth ease-out slide
          localCamPos.x = 0.0;
          localCamPos.z = THREE.MathUtils.lerp(-3.5, 0.0, t);
        } else {
          localCamPos.x = 0.0;
          localCamPos.z = 0.0;
        }
        
        // Point slightly inward towards the centerline (0, 0) of the rocket to keep the hull visible on the left
        // and smoothly transition to straight ahead as the camera slides to the center
        localCamLook = new THREE.Vector3(0.0, this.localYOffset + 30.0, 0.0);
        
        rocket.updateMatrixWorld();
        const worldCamPos = localCamPos.clone().applyMatrix4(rocket.matrixWorld);
        
        let worldCamLook;
        if (sc === "WARP" || sc === "INITIAL") {
          // Look directly down the center of the warp tunnel (along positive Z-axis relative to the camera)
          worldCamLook = new THREE.Vector3(worldCamPos.x, worldCamPos.y, worldCamPos.z + 100.0);
        } else if (ENGINE_STATE.earth && (sc === "SNAP_BACK" || sc === "REENTRY")) {
          const earthPos = new THREE.Vector3();
          ENGINE_STATE.earth.getWorldPosition(earthPos);
          worldCamLook = earthPos;
        } else {
          worldCamLook = localCamLook.clone().applyMatrix4(rocket.matrixWorld);
        }
        
        this.setTarget(worldCamPos, worldCamLook);
        if (sc === "SNAP_BACK") {
          this.snapBackPos.copy(worldCamPos);
          this.snapBackLook.copy(worldCamLook);
        }
      }
    } else if (sc === "LANDING") {
      this.stormDetachPos = null;
      // Independent ocean descent and angle sweep (from 30 deg down to level)
      const u = ENGINE_STATE.cameraDescentProgress;
      const camY = 30.0 * (1 - u) + 6.0 * u;
      const camZ = 5.0 * (1 - u) + 12.0 * u;
      const lookY = 6.0 * (1 - u) + 3.5 * u;
      
      this.setTarget(new THREE.Vector3(0, camY, camZ), new THREE.Vector3(0, lookY, -45.0));
    } else if (sc === "MANUAL") {
      this.stormDetachPos = null;
      // Level camera settled at the final position
      this.setTarget(new THREE.Vector3(0, 6.0, 12.0), new THREE.Vector3(0, 3.5, -45.0));
    } else {
      // Fallback: no rocket yet (pre-load) or unrecognised scene.
      // Always return smoothly to the config default position.
      this.stormDetachPos = null;
      this.setTarget(
        CONFIG.camera.initial.pos.clone(),
        CONFIG.camera.initial.look.clone()
      );
    }
    
    // 2. Perform smooth interpolation (lerp) with dynamic speed per phase
    const isFlight = (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "REENTRY");
    
    if (isFlight) {
      // Direct lock-on for onboard hull camera to prevent lag at high speeds
      this.currentPos.copy(this.targetPos);
      this.currentLook.copy(this.targetLook);
      
      if (rocket && (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK")) {
        camera.up.set(0.0, 1.0, 0.0);
      } else if (sc === "REENTRY") {
        // Handled in REENTRY block above
      } else {
        // Stabilized upright view for other phases
        camera.up.lerp(new THREE.Vector3(0.0, 1.0, 0.0), 0.1);
      }
    } else {
      // Smooth detach transition during landing & manual
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
