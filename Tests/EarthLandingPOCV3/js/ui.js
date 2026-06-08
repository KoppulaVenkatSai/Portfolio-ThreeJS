import { ENGINE_STATE } from "./state.js";

const telemetryText = document.getElementById("hud-telemetry");
const ignitionTrigger = document.getElementById("ignition-trigger");
const loaderScreen = document.getElementById("loader-screen");
const loaderBar = document.getElementById("loader-bar");
const loaderStatus = document.getElementById("loader-status");

export const UI_MANAGER = {
  updateProgress(percent, label) {
    if (loaderBar) loaderBar.style.width = `${percent}%`;
    if (loaderStatus) loaderStatus.innerText = `${label} (${percent}%)`;
  },
  
  hideLoader(onStartCallback) {
    if (ignitionTrigger) {
      ignitionTrigger.disabled = false;
      ignitionTrigger.addEventListener("click", () => {
        ignitionTrigger.style.display = "none";
        onStartCallback();
      });
    }
    
    if (loaderScreen) {
      loaderScreen.style.opacity = 0;
      setTimeout(() => {
        loaderScreen.style.display = "none";
      }, 800);
    }
  },
  
  tick() {
    if (!telemetryText) return;
    
    const sc = ENGINE_STATE.currentScene;
    if (sc === "INITIAL") {
      telemetryText.innerText = "SYSTEM STANDBY // IG_READY";
    } else if (sc === "WARP") {
      const speed = Math.floor(ENGINE_STATE.warpProgress * 9999);
      telemetryText.innerText = `WARP TRANSIT // VELOCITY: ${speed} LY/SEC // SYS_SYNC`;
    } else if (sc === "SNAP_BACK") {
      telemetryText.innerText = "COSMIC SNAP-BACK // ORBITAL INTERCEPT";
    } else if (sc === "REENTRY") {
      const friction = Math.floor(ENGINE_STATE.atmosphereFriction * 100);
      telemetryText.innerText = `THERMAL DESCENT // FRICTION GLOW: ${friction}% // WARNING: CRITICAL HEAT`;
    } else if (sc === "STORM") {
      telemetryText.innerText = "CLOUDBREAK DECK // PIERCING CORE // WIND SHEAR LEVEL: MAX";
    } else if (sc === "LANDING") {
      telemetryText.innerText = "OCEAN LEVEL REACHED // ALIGNING WITH MONOLITH // THRUSTER DE-IGNITION";
    } else if (sc === "MANUAL") {
      telemetryText.innerText = "TOUCHDOWN DEPLOYED // MANUAL SCANNING INTERFACE ACTIVE";
    }
  }
};
