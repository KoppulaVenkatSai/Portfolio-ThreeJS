import * as THREE from 'three';

export class SceneInspectorHelper {
  constructor(options = {}) {
    this.camera = options.camera;
    this.controls = options.controls;
    this.bloomPass = options.bloomPass;
    this.cursiveTextInstance = options.cursiveTextInstance;
    this.techAvatarInstance = options.techAvatarInstance;
    this.hologramScreenInstance = options.hologramScreenInstance;
    this.earthLandingManager = options.earthLandingManager;
    this.isTransitioningRef = options.isTransitioningRef;

    this.isEnabled = false; // default false (hidden)
    this.init();
  }

  init() {
    this.bindDOM();
    this.bindSliders();
  }

  bindDOM() {
    const cameraInspector = document.getElementById('camera-inspector');
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const toggleOrbitBtn = document.getElementById('toggle-orbit-btn');
    const copyCamBtn = document.getElementById('copy-cam-btn');
    const copyToast = document.getElementById('copy-toast');

    settingsToggleBtn?.addEventListener('click', () => {
      if (cameraInspector) {
        cameraInspector.classList.toggle('inspector-hidden');
      }
    });

    document.querySelectorAll('.accordion-header').forEach((header) => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        if (item) item.classList.toggle('active');
      });
    });

    toggleOrbitBtn?.addEventListener('click', () => {
      if (!this.controls) return;
      this.controls.enabled = !this.controls.enabled;
      const camStatus = document.getElementById('cam-status');
      if (this.controls.enabled) {
        toggleOrbitBtn.innerText = 'DISABLE FREE CAM';
        if (camStatus) camStatus.innerText = 'FREE_ORBIT_ENABLED';
      } else {
        toggleOrbitBtn.innerText = 'ENABLE FREE CAM';
        if (camStatus) {
          const isTrans = typeof this.isTransitioningRef === 'function' ? this.isTransitioningRef() : false;
          camStatus.innerText = isTrans ? 'EXTERIOR_VIEW' : 'INTERIOR_VIEW';
        }
      }
    });

    copyCamBtn?.addEventListener('click', () => {
      if (!this.camera || !this.controls) return;
      const posX = this.camera.position.x.toFixed(2);
      const posY = this.camera.position.y.toFixed(2);
      const posZ = this.camera.position.z.toFixed(2);

      const targetX = this.controls.target.x.toFixed(2);
      const targetY = this.controls.target.y.toFixed(2);
      const targetZ = this.controls.target.z.toFixed(2);

      const codeSnippet = `const INTERIOR_CAM_POS = new THREE.Vector3(${posX}, ${posY}, ${posZ});\nconst INTERIOR_LOOK_TARGET = new THREE.Vector3(${targetX}, ${targetY}, ${targetZ});`;

      navigator.clipboard.writeText(codeSnippet).then(() => {
        console.log('[CAMERA INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
      }).catch(() => {});

      if (copyToast) {
        copyToast.style.display = 'block';
        setTimeout(() => {
          copyToast.style.display = 'none';
        }, 2500);
      }
    });
  }

  bindSliders() {
    // Bloom controls
    const bloomStrengthSlider = document.getElementById('bloom-strength-slider');
    const bloomThresholdSlider = document.getElementById('bloom-threshold-slider');
    const bloomStrengthVal = document.getElementById('bloom-strength-val');
    const bloomThresholdVal = document.getElementById('bloom-threshold-val');

    bloomStrengthSlider?.addEventListener('input', () => {
      if (!this.bloomPass) return;
      const val = parseFloat(bloomStrengthSlider.value);
      this.bloomPass.strength = val;
      if (bloomStrengthVal) bloomStrengthVal.innerText = val.toFixed(2);
    });

    bloomThresholdSlider?.addEventListener('input', () => {
      if (!this.bloomPass) return;
      const val = parseFloat(bloomThresholdSlider.value);
      this.bloomPass.threshold = val;
      if (bloomThresholdVal) bloomThresholdVal.innerText = val.toFixed(2);
    });

    // Cursive Text controls
    const textScaleSlider = document.getElementById('text-scale-slider');
    const textXSlider = document.getElementById('text-x-slider');
    const textYSlider = document.getElementById('text-y-slider');
    const textZSlider = document.getElementById('text-z-slider');
    const textRotYSlider = document.getElementById('text-roty-slider');

    const textScaleVal = document.getElementById('text-scale-val');
    const textXVal = document.getElementById('text-x-val');
    const textYVal = document.getElementById('text-y-val');
    const textZVal = document.getElementById('text-z-val');
    const textRotYVal = document.getElementById('text-roty-val');

    const updateTextTransform = () => {
      if (!this.cursiveTextInstance) return;
      const scale = parseFloat(textScaleSlider.value);
      const x = parseFloat(textXSlider.value);
      const y = parseFloat(textYSlider.value);
      const z = parseFloat(textZSlider.value);
      const rotY = parseFloat(textRotYSlider.value);

      this.cursiveTextInstance.group.scale.set(scale, scale, scale);
      this.cursiveTextInstance.group.position.set(x, y, z);
      this.cursiveTextInstance.group.rotation.set(0, rotY, 0);

      if (textScaleVal) textScaleVal.innerText = scale.toFixed(2);
      if (textXVal) textXVal.innerText = x.toFixed(2);
      if (textYVal) textYVal.innerText = y.toFixed(2);
      if (textZVal) textZVal.innerText = z.toFixed(2);
      if (textRotYVal) textRotYVal.innerText = rotY.toFixed(2);
    };

    textScaleSlider?.addEventListener('input', updateTextTransform);
    textXSlider?.addEventListener('input', updateTextTransform);
    textYSlider?.addEventListener('input', updateTextTransform);
    textZSlider?.addEventListener('input', updateTextTransform);
    textRotYSlider?.addEventListener('input', updateTextTransform);

    // Avatar controls
    const avatarScaleSlider = document.getElementById('avatar-scale-slider');
    const avatarXSlider = document.getElementById('avatar-x-slider');
    const avatarYSlider = document.getElementById('avatar-y-slider');
    const avatarZSlider = document.getElementById('avatar-z-slider');
    const avatarRotXSlider = document.getElementById('avatar-rotx-slider');
    const avatarRotYSlider = document.getElementById('avatar-roty-slider');
    const avatarRotZSlider = document.getElementById('avatar-rotz-slider');

    const avatarScaleVal = document.getElementById('avatar-scale-val');
    const avatarXVal = document.getElementById('avatar-x-val');
    const avatarYVal = document.getElementById('avatar-y-val');
    const avatarZVal = document.getElementById('avatar-z-val');
    const avatarRotXVal = document.getElementById('avatar-rotx-val');
    const avatarRotYVal = document.getElementById('avatar-roty-val');
    const avatarRotZVal = document.getElementById('avatar-rotz-val');

    const updateAvatarTransform = () => {
      if (!this.techAvatarInstance || !this.techAvatarInstance.group) return;
      const scale = parseFloat(avatarScaleSlider.value);
      const x = parseFloat(avatarXSlider.value);
      const y = parseFloat(avatarYSlider.value);
      const z = parseFloat(avatarZSlider.value);
      const rotX = parseFloat(avatarRotXSlider.value);
      const rotY = parseFloat(avatarRotYSlider.value);
      const rotZ = parseFloat(avatarRotZSlider.value);

      this.techAvatarInstance.group.scale.set(scale, scale, scale);
      this.techAvatarInstance.group.position.set(x, y, z);
      this.techAvatarInstance.group.rotation.set(rotX, rotY, rotZ);

      if (avatarScaleVal) avatarScaleVal.innerText = scale.toFixed(2);
      if (avatarXVal) avatarXVal.innerText = x.toFixed(2);
      if (avatarYVal) avatarYVal.innerText = y.toFixed(2);
      if (avatarZVal) avatarZVal.innerText = z.toFixed(2);
      if (avatarRotXVal) avatarRotXVal.innerText = rotX.toFixed(2);
      if (avatarRotYVal) avatarRotYVal.innerText = rotY.toFixed(2);
      if (avatarRotZVal) avatarRotZVal.innerText = rotZ.toFixed(2);
    };

    avatarScaleSlider?.addEventListener('input', updateAvatarTransform);
    avatarXSlider?.addEventListener('input', updateAvatarTransform);
    avatarYSlider?.addEventListener('input', updateAvatarTransform);
    avatarZSlider?.addEventListener('input', updateAvatarTransform);
    avatarRotXSlider?.addEventListener('input', updateAvatarTransform);
    avatarRotYSlider?.addEventListener('input', updateAvatarTransform);
    avatarRotZSlider?.addEventListener('input', updateAvatarTransform);

    const avatarSkinPicker = document.getElementById('avatar-skin-picker');
    avatarSkinPicker?.addEventListener('input', () => {
      if (this.techAvatarInstance && this.techAvatarInstance.setSkinColor) {
        this.techAvatarInstance.setSkinColor(avatarSkinPicker.value);
      }
    });

    // Hologram screen controls
    const hologramScaleSlider = document.getElementById('hologram-scale-slider');
    const hologramXSlider = document.getElementById('hologram-x-slider');
    const hologramYSlider = document.getElementById('hologram-y-slider');
    const hologramZSlider = document.getElementById('hologram-z-slider');
    const hologramRotXSlider = document.getElementById('hologram-rotx-slider');
    const hologramRotYSlider = document.getElementById('hologram-roty-slider');
    const hologramRotZSlider = document.getElementById('hologram-rotz-slider');
    const hologramHoverBrightSlider = document.getElementById('hologram-hoverbright-slider');

    const hologramScaleVal = document.getElementById('hologram-scale-val');
    const hologramXVal = document.getElementById('hologram-x-val');
    const hologramYVal = document.getElementById('hologram-y-val');
    const hologramZVal = document.getElementById('hologram-z-val');
    const hologramRotXVal = document.getElementById('hologram-rotx-val');
    const hologramRotYVal = document.getElementById('hologram-roty-val');
    const hologramRotZVal = document.getElementById('hologram-rotz-val');
    const hologramHoverBrightVal = document.getElementById('hologram-hoverbright-val');
    const toggleHologramVisBtn = document.getElementById('toggle-hologram-vis-btn');

    const updateHologramTransform = () => {
      if (!this.hologramScreenInstance || !this.hologramScreenInstance.group) return;
      const scale = parseFloat(hologramScaleSlider.value);
      const x = parseFloat(hologramXSlider.value);
      const y = parseFloat(hologramYSlider.value);
      const z = parseFloat(hologramZSlider.value);
      const rotX = parseFloat(hologramRotXSlider.value);
      const rotY = parseFloat(hologramRotYSlider.value);
      const rotZ = parseFloat(hologramRotZSlider.value);
      const hoverBright = parseFloat(hologramHoverBrightSlider?.value || 1.0);

      this.hologramScreenInstance.group.scale.set(scale, scale, scale);
      this.hologramScreenInstance.group.position.set(x, y, z);
      this.hologramScreenInstance.group.rotation.set(rotX, rotY, rotZ);
      this.hologramScreenInstance.setHoverBrightness(hoverBright);

      if (hologramScaleVal) hologramScaleVal.innerText = scale.toFixed(2);
      if (hologramXVal) hologramXVal.innerText = x.toFixed(2);
      if (hologramYVal) hologramYVal.innerText = y.toFixed(2);
      if (hologramZVal) hologramZVal.innerText = z.toFixed(2);
      if (hologramRotXVal) hologramRotXVal.innerText = rotX.toFixed(2);
      if (hologramRotYVal) hologramRotYVal.innerText = rotY.toFixed(2);
      if (hologramRotZVal) hologramRotZVal.innerText = rotZ.toFixed(2);
      if (hologramHoverBrightVal) hologramHoverBrightVal.innerText = hoverBright.toFixed(2);
    };

    hologramScaleSlider?.addEventListener('input', updateHologramTransform);
    hologramXSlider?.addEventListener('input', updateHologramTransform);
    hologramYSlider?.addEventListener('input', updateHologramTransform);
    hologramZSlider?.addEventListener('input', updateHologramTransform);
    hologramRotXSlider?.addEventListener('input', updateHologramTransform);
    hologramRotYSlider?.addEventListener('input', updateHologramTransform);
    hologramRotZSlider?.addEventListener('input', updateHologramTransform);
    hologramHoverBrightSlider?.addEventListener('input', updateHologramTransform);

    toggleHologramVisBtn?.addEventListener('click', () => {
      if (!this.hologramScreenInstance) return;
      if (this.hologramScreenInstance.isVisible) {
        this.hologramScreenInstance.fadeOut(0.4);
      } else {
        this.hologramScreenInstance.fadeIn(0.4);
      }
    });

    // Starfield & Twinkling controls
    const starCountSlider = document.getElementById('star-count-slider');
    const twinkleSpeedSlider = document.getElementById('twinkle-speed-slider');
    const twinkleRatioSlider = document.getElementById('twinkle-ratio-slider');
    const twinkleDepthSlider = document.getElementById('twinkle-depth-slider');
    const starSizeSlider = document.getElementById('star-size-slider');
    const centroidSpaceSlider = document.getElementById('centroid-space-slider');
    const warpSpeedSlider = document.getElementById('warp-speed-slider');
    const copyStarBtn = document.getElementById('copy-star-btn');

    const starCountVal = document.getElementById('star-count-val');
    const twinkleSpeedVal = document.getElementById('twinkle-speed-val');
    const twinkleRatioVal = document.getElementById('twinkle-ratio-val');
    const twinkleDepthVal = document.getElementById('twinkle-depth-val');
    const starSizeVal = document.getElementById('star-size-val');
    const centroidSpaceVal = document.getElementById('centroid-space-val');
    const warpSpeedVal = document.getElementById('warp-speed-val');

    const getWarp = () => this.earthLandingManager?.warpSystem || window.warpSystem;

    starCountSlider?.addEventListener('input', () => {
      const val = parseInt(starCountSlider.value, 10);
      const warp = getWarp();
      if (warp) warp.setStarCount(val);
      if (starCountVal) starCountVal.innerText = val.toString();
    });

    twinkleSpeedSlider?.addEventListener('input', () => {
      const val = parseFloat(twinkleSpeedSlider.value);
      const warp = getWarp();
      if (warp) warp.setTwinkleSpeed(val);
      if (twinkleSpeedVal) twinkleSpeedVal.innerText = val.toFixed(1);
    });

    twinkleRatioSlider?.addEventListener('input', () => {
      const val = parseFloat(twinkleRatioSlider.value);
      const warp = getWarp();
      if (warp) warp.setTwinkleRatio(val);
      if (twinkleRatioVal) twinkleRatioVal.innerText = `${Math.round(val * 100)}%`;
    });

    twinkleDepthSlider?.addEventListener('input', () => {
      const val = parseFloat(twinkleDepthSlider.value);
      const warp = getWarp();
      if (warp) warp.setTwinkleDepth(val);
      if (twinkleDepthVal) twinkleDepthVal.innerText = val.toFixed(2);
    });

    starSizeSlider?.addEventListener('input', () => {
      const val = parseFloat(starSizeSlider.value);
      const warp = getWarp();
      if (warp) warp.setSizeMultiplier(val);
      if (starSizeVal) starSizeVal.innerText = `${val.toFixed(1)}x`;
    });

    centroidSpaceSlider?.addEventListener('input', () => {
      const val = parseFloat(centroidSpaceSlider.value);
      const warp = getWarp();
      if (warp) warp.setCentroidSpace(val);
      if (centroidSpaceVal) centroidSpaceVal.innerText = val.toFixed(1);
    });

    warpSpeedSlider?.addEventListener('input', () => {
      const val = parseFloat(warpSpeedSlider.value);
      const warp = getWarp();
      if (warp) warp.setWarpSpeed(val);
      if (warpSpeedVal) warpSpeedVal.innerText = Math.round(val).toString();
    });

    copyStarBtn?.addEventListener('click', () => {
      const warp = getWarp();
      const count = starCountSlider?.value || 2000;
      const speed = twinkleSpeedSlider?.value || 2.5;
      const ratio = twinkleRatioSlider?.value || 0.70;
      const depth = twinkleDepthSlider?.value || 0.85;
      const size = starSizeSlider?.value || 1.0;
      const centroid = centroidSpaceSlider?.value || 17.0;
      const warpSpd = warpSpeedSlider?.value || 220;

      const code = `// Tuned Starfield & Warp Speed Settings\nconst STARFIELD_CONFIG = {\n  totalStars: ${count},\n  twinkleSpeed: ${speed},\n  twinkleRatio: ${ratio},\n  twinkleDepth: ${depth},\n  sizeMultiplier: ${size},\n  centroidSpace: ${centroid},\n  warpSpeed: ${warpSpd}\n};`;
      navigator.clipboard.writeText(code).then(() => {
        console.log('[STARFIELD CONFIG COPIED]:\n' + code);
      });

      const copyToast = document.getElementById('copy-toast');
      if (copyToast) {
        copyToast.style.display = 'block';
        setTimeout(() => { copyToast.style.display = 'none'; }, 2500);
      }
    });
  }

  updateHUD() {
    const camPosVal = document.getElementById('cam-pos-val');
    const camTargetVal = document.getElementById('cam-target-val');
    const camFovVal = document.getElementById('cam-fov-val');

    if (camPosVal && this.camera) {
      camPosVal.innerText = `${this.camera.position.x.toFixed(2)}, ${this.camera.position.y.toFixed(2)}, ${this.camera.position.z.toFixed(2)}`;
    }
    if (camTargetVal && this.controls) {
      camTargetVal.innerText = `${this.controls.target.x.toFixed(2)}, ${this.controls.target.y.toFixed(2)}, ${this.controls.target.z.toFixed(2)}`;
    }
    if (camFovVal && this.camera) {
      camFovVal.innerText = `${this.camera.fov.toFixed(0)}°`;
    }
  }
}
