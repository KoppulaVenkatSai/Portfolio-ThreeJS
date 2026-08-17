import * as THREE from "three";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";

const _vPos = new THREE.Vector3();
const _vLook = new THREE.Vector3();
const _vRocketPos = new THREE.Vector3(-1.1, -1.0, -8.6);
const _vRocketScale = new THREE.Vector3(0.65, 0.65, 0.65);
const _vLocalCamPos = new THREE.Vector3();
const _vLocalLookPos = new THREE.Vector3();
const _vCameraUp = new THREE.Vector3();
const _vLocalUp = new THREE.Vector3(0.0, 0.0, -1.0);
const _vForward = new THREE.Vector3(0, 0, 1);
const _vP1 = new THREE.Vector3(-100.4, 296.5, -30.0);
const _vInitialLookDir = new THREE.Vector3();
const _vUpDefault = new THREE.Vector3(0.0, 1.0, 0.0);
const _vEarthPos = new THREE.Vector3();

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
        _vLocalCamPos.set(0.0, 50.0, 0.0);
        this.snapBackPos.copy(_vLocalCamPos).multiply(_vRocketScale).add(_vRocketPos);
        this.snapBackLook.set(1.4, 296.5, 2.0);
        this.snapBackCaptured = true;
      }
      const u = ENGINE_STATE.cameraArcProgress;
      const p0 = this.snapBackPos;
      _vPos.lerpVectors(p0, _vP1, u);
      _vInitialLookDir.subVectors(this.snapBackLook, p0).normalize();
      _vLook.addVectors(_vPos, _vInitialLookDir.multiplyScalar(100.0));
      
      this.setTarget(_vPos, _vLook);
      camera.up.set(0.0, 1.0, 0.0);
    } else if (rocket && (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "STORM")) {
      if (sc === "INITIAL") {
        this.stormDetachPos = null;
        this.setTarget(CONFIG.camera.initial.pos, CONFIG.camera.initial.look);
      } else if (sc === "WARP") {
        this.stormDetachPos = null;
        const travelDistance = Math.max(0.0, this.localYOffset - (-8.0));
        
        // Locked 50/50 rocket-local framing (looking up at rocket tip when vertical, forward when horizontal):
        _vLocalCamPos.set(-4.32766, -2.86449 + travelDistance, -2.00000);
        _vLocalLookPos.set(-3.70432, 1.43601 + travelDistance, -1.66154);
        
        rocket.updateMatrixWorld(true);
        _vPos.copy(_vLocalCamPos).applyMatrix4(rocket.matrixWorld);
        _vLook.copy(_vLocalLookPos).applyMatrix4(rocket.matrixWorld);
        
        this.setTarget(_vPos, _vLook);
        
        _vCameraUp.copy(_vLocalUp).transformDirection(rocket.matrixWorld);
        camera.up.copy(_vCameraUp);
      } else if (sc === "STORM") {
        if (!this.stormDetachPos) {
          rocket.updateMatrixWorld();
          _vLocalCamPos.set(6.8, this.localYOffset, 3.8);
          this.stormDetachPos = _vLocalCamPos.clone().applyMatrix4(rocket.matrixWorld);
        }
        this.setTarget(this.stormDetachPos, rocket.position);
      } else {
        this.stormDetachPos = null;
        
        const startY = 13.0;
        const endY = 45.0;
        const blend = THREE.MathUtils.clamp((this.localYOffset - startY) / (endY - startY), 0.0, 1.0);
        
        _vLocalCamPos.set(0, this.localYOffset, 0);

        if (blend < 0.25) {
          const phaseBlend = blend / 0.25;
          _vLocalCamPos.x = THREE.MathUtils.lerp(this.camOffsetX, 0.0, phaseBlend);
          _vLocalCamPos.z = THREE.MathUtils.lerp(this.camOffsetZ, -3.5, phaseBlend);
        } else if (blend < 0.65) {
          _vLocalCamPos.x = 0.0;
          _vLocalCamPos.z = -3.5;
        } else if (blend < 0.90) {
          const phaseBlend = (blend - 0.65) / 0.25;
          const t = Math.sin(phaseBlend * Math.PI / 2);
          _vLocalCamPos.x = 0.0;
          _vLocalCamPos.z = THREE.MathUtils.lerp(-3.5, 0.0, t);
        } else {
          _vLocalCamPos.x = 0.0;
          _vLocalCamPos.z = 0.0;
        }
        
        rocket.updateMatrixWorld();
        _vPos.copy(_vLocalCamPos).applyMatrix4(rocket.matrixWorld);
        
        if (sc === "WARP" || sc === "INITIAL") {
          _vLook.set(_vPos.x, _vPos.y, _vPos.z + 100.0);
        } else if (ENGINE_STATE.earth && (sc === "SNAP_BACK" || sc === "REENTRY")) {
          ENGINE_STATE.earth.getWorldPosition(_vEarthPos);
          _vLook.copy(_vEarthPos);
        } else {
          _vLook.set(0.0, this.localYOffset + 30.0, 0.0).applyMatrix4(rocket.matrixWorld);
        }
        
        this.setTarget(_vPos, _vLook);
        if (sc === "SNAP_BACK") {
          this.snapBackPos.copy(_vPos);
          this.snapBackLook.copy(_vLook);
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
      
      _vPos.set(camX, camY, camZ);
      _vLook.set(lookX, lookY, lookZ);
      this.setTarget(_vPos, _vLook);
    } else if (sc === "MANUAL") {
      this.stormDetachPos = null;
      _vPos.set(-0.74, 18.95, -36.13);
      _vLook.set(-0.74, 17.04, -74.29);
      this.setTarget(_vPos, _vLook);
    } else {
      this.stormDetachPos = null;
      this.setTarget(CONFIG.camera.initial.pos, CONFIG.camera.initial.look);
    }
    
    const isFlight = (sc === "WARP" || sc === "INITIAL" || sc === "SNAP_BACK" || sc === "REENTRY");
    
    if (isFlight) {
      this.currentPos.copy(this.targetPos);
      this.currentLook.copy(this.targetLook);
      
      if (sc === "WARP") {
        // camera.up is dynamically computed from rocket.matrixWorld
      } else if (rocket && (sc === "INITIAL" || sc === "SNAP_BACK")) {
        camera.up.set(0.0, 1.0, 0.0);
      } else if (sc === "REENTRY") {
        // Handled in REENTRY block above
      } else {
        camera.up.lerp(_vUpDefault, 0.1);
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
        camera.up.lerp(_vUpDefault, this.lerpSpeed);
      }
    }
    
    camera.position.copy(this.currentPos);
    camera.lookAt(this.currentLook);
  }
}

export const CAMERA_RIG = new CameraRigController();
