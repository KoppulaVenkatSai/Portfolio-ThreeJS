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
    this.snapBackCaptured = false;
    this.instantSnapNextFrame = false;
    this.shakeIntensity = 0.0;
    this.lerpSpeed = 0.04;
    this.stormDetachPos = null;
    this.localYOffset = -8.0;
    this.camOffsetX = 4.2;
    this.camOffsetZ = -4.5;
    this.camDistance = -8.0;
  }
  
  setTarget(pos, look) {
    this.targetPos.copy(pos);
    this.targetLook.copy(look);
  }

  resetToDefault() {
    this.currentPos.copy(CONFIG.camera.initial.pos);
    this.currentLook.copy(CONFIG.camera.initial.look);
    this.targetPos.copy(CONFIG.camera.initial.pos);
    this.targetLook.copy(CONFIG.camera.initial.look);
    this.snapBackPos.copy(CONFIG.camera.initial.pos);
    this.snapBackLook.copy(CONFIG.camera.initial.look);
    this.snapBackCaptured = false;
    this.instantSnapNextFrame = false;
  }
  
  update(camera, rocket, elapsed, delta) {
    if (window.activeControls) return;
    
    const sc = ENGINE_STATE.currentScene;
    
    if (sc === "REENTRY") {
      this.stormDetachPos = null;
      if (!this.snapBackCaptured) {
        const rocketPos = new THREE.Vector3(-1.1, -1.0, -8.6);
        const rocketScale = new THREE.Vector3(0.65, 0.65, 0.65);
        const localCamPos = new THREE.Vector3(0.0, 50.0, 0.0);
        this.snapBackPos.copy(localCamPos).multiply(rocketScale).add(rocketPos);
        this.snapBackLook.set(1.4, 296.5, 2.0);
        this.snapBackCaptured = true;
      }
      const u = ENGINE_STATE.cameraArcProgress;
      const p0 = this.snapBackPos;
      const p1 = new THREE.Vector3(-100.4, 296.5, -30.0);
      const worldCamPos = new THREE.Vector3().lerpVectors(p0, p1, u);
      const initialLookDir = new THREE.Vector3().subVectors(this.snapBackLook, p0).normalize();
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
        const travelDistance = this.localYOffset - (-8.0);
        const forwardDir = new THREE.Vector3(0, 0, 1);
        
        const worldCamPos = CONFIG.camera.initial.pos.clone().addScaledVector(forwardDir, travelDistance);
        const worldCamLook = CONFIG.camera.initial.look.clone().addScaledVector(forwardDir, travelDistance);
        this.setTarget(worldCamPos, worldCamLook);
      } else if (sc === "STORM") {
        if (!this.stormDetachPos) {
          rocket.updateMatrixWorld();
          const localCamPos = new THREE.Vector3(6.8, this.localYOffset, 3.8);
          this.stormDetachPos = localCamPos.clone().applyMatrix4(rocket.matrixWorld);
        }
        this.setTarget(this.stormDetachPos, rocket.position.clone());
      } else {
        this.stormDetachPos = null;
        
        let localCamPos, localCamLook;
        const startY = 13.0;
        const endY = 45.0;
        const blend = THREE.MathUtils.clamp((this.localYOffset - startY) / (endY - startY), 0.0, 1.0);
        
        localCamPos = new THREE.Vector3();
        localCamPos.y = this.localYOffset;

        if (blend < 0.25) {
          const phaseBlend = blend / 0.25;
          localCamPos.x = THREE.MathUtils.lerp(this.camOffsetX, 0.0, phaseBlend);
          localCamPos.z = THREE.MathUtils.lerp(this.camOffsetZ, -3.5, phaseBlend);
        } else if (blend < 0.65) {
          localCamPos.x = 0.0;
          localCamPos.z = -3.5;
        } else if (blend < 0.90) {
          const phaseBlend = (blend - 0.65) / 0.25;
          const t = Math.sin(phaseBlend * Math.PI / 2);
          localCamPos.x = 0.0;
          localCamPos.z = THREE.MathUtils.lerp(-3.5, 0.0, t);
        } else {
          localCamPos.x = 0.0;
          localCamPos.z = 0.0;
        }
        
        localCamLook = new THREE.Vector3(0.0, this.localYOffset + 30.0, 0.0);
        
        rocket.updateMatrixWorld();
        const worldCamPos = localCamPos.clone().applyMatrix4(rocket.matrixWorld);
        
        let worldCamLook;
        if (sc === "WARP" || sc === "INITIAL") {
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
          this.snapBackCaptured = true;
        }
      }
    } else if (sc === "LANDING") {
      this.stormDetachPos = null;
      const u = ENGINE_STATE.cameraDescentProgress;
      const camX = 0.0 * (1 - u) - 0.74 * u;
      const camY = 57.0 * (1 - u) + 18.95 * u; 
      const camZ = -22.0 * (1 - u) - 36.13 * u;
      
      const lookX = 0.0 * (1 - u) - 0.74 * u;
      const lookY = 7.0 * (1 - u) + 17.04 * u; 
      const lookZ = -72.0 * (1 - u) - 74.29 * u;
      
      this.setTarget(new THREE.Vector3(camX, camY, camZ), new THREE.Vector3(lookX, lookY, lookZ));
    } else if (sc === "MANUAL") {
      this.stormDetachPos = null;
      this.setTarget(new THREE.Vector3(-0.74, 18.95, -36.13), new THREE.Vector3(-0.74, 17.04, -74.29));
    } else {
      this.stormDetachPos = null;
      this.setTarget(
        CONFIG.camera.initial.pos.clone(),
        CONFIG.camera.initial.look.clone()
      );
    }
    
    const isFlight = (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "REENTRY");
    
    if (isFlight) {
      this.currentPos.copy(this.targetPos);
      this.currentLook.copy(this.targetLook);
      
      if (rocket && (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK")) {
        camera.up.set(0.0, 1.0, 0.0);
      } else if (sc === "REENTRY") {
        // Handled in REENTRY block above
      } else {
        camera.up.lerp(new THREE.Vector3(0.0, 1.0, 0.0), 0.1);
      }
    } else {
      this.lerpSpeed = 0.04;
      if (this.instantSnapNextFrame) {
        this.currentPos.copy(this.targetPos);
        this.currentLook.copy(this.targetLook);
        camera.up.set(0.0, 1.0, 0.0);
        this.instantSnapNextFrame = false;
      } else {
        this.currentPos.lerp(this.targetPos, this.lerpSpeed);
        this.currentLook.lerp(this.targetLook, this.lerpSpeed);
        camera.up.lerp(new THREE.Vector3(0.0, 1.0, 0.0), this.lerpSpeed);
      }
    }
    
    camera.position.copy(this.currentPos);
    camera.lookAt(this.currentLook);
  }
}

export const CAMERA_RIG = new CameraRigController();
