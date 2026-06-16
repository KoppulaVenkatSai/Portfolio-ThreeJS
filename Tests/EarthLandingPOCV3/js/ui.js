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
  
  tick(rocket) {
    if (!telemetryText) return;
    
    const sc = ENGINE_STATE.currentScene;
    const time = ENGINE_STATE.timelineTime;
    
    if (sc === "INITIAL") {
      telemetryText.innerText = "SYSTEM STANDBY // IG_READY";
    } else if (sc === "WARP") {
      const speed = Math.floor(ENGINE_STATE.warpProgress * 9999);
      telemetryText.innerText = `WARP TRANSIT // VELOCITY: ${speed} LY/SEC // SYS_SYNC`;
    } else if (sc === "SNAP_BACK") {
      if (time < 23.8) {
        telemetryText.innerText = "SILHOUETTE SCAN ACTIVE // DETECTING SHADOW PROFILE";
      } else if (time < 28.8) {
        telemetryText.innerText = "ILLUMINATION ACTIVE // REVEALING SURFACE DETAILS";
      } else if (time < 30.8) {
        telemetryText.innerText = "APPROACH INITIATED // POSITIONING HULL CAMERA";
      } else {
        telemetryText.innerText = "ORBIT SIZE ACQUIRED // DESCENT SEQUENCE PAUSED";
      }
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

    // Update timeline progress bar and marker dot
    const progressEl = document.getElementById("hud-timeline-progress");
    const markerEl = document.getElementById("hud-timeline-marker");
    const maxTime = 49.6; // Extended to include Earth illumination phase
    const pct = Math.min((time / maxTime) * 100, 100);
    
    if (progressEl) progressEl.style.width = `${pct}%`;
    if (markerEl) markerEl.style.left = `${pct}%`;
    
    // Update telemetry panel values
    const altitudeEl = document.getElementById("hud-altitude");
    const velocityEl = document.getElementById("hud-velocity");
    const coordsEl = document.getElementById("hud-coords");
    
    if (rocket) {
      let altStr = "-- m";
      let velStr = "-- m/s";
      
      const rx = rocket.position.x.toFixed(2);
      const ry = rocket.position.y.toFixed(2);
      const rz = rocket.position.z.toFixed(2);
      const coordsStr = `X: ${rx}, Y: ${ry}, Z: ${rz}`;
      
      if (sc === "INITIAL") {
        altStr = "384,400 km";
        velStr = "0.0 km/s";
      } else if (sc === "WARP") {
        const altVal = Math.floor(384400 - time * 12000);
        altStr = `${altVal.toLocaleString()} km`;
        const speed = Math.floor(ENGINE_STATE.warpProgress * 9999);
        velStr = `${speed} LY/s`;
      } else if (sc === "SNAP_BACK") {
        if (time < 23.8) {
          const altVal = Math.floor(120000 - (time - 16.8) * 10000);
          altStr = `${altVal.toLocaleString()} km (APPROACH)`;
          velStr = "12.0 km/s";
        } else if (time < 28.8) {
          altStr = "50,000 km (REVEALING SURFACE)";
          velStr = "0.0 m/s";
        } else if (time < 30.8) {
          const distVal = Math.floor(50000 - (time - 28.8) * 12000);
          altStr = `${distVal.toLocaleString()} km (ORBIT ENTRY)`;
          velStr = "24.0 km/s";
        } else {
          altStr = "26,000 km (STATIONARY PAUSE)";
          velStr = "0.0 m/s";
        }
      } else if (sc === "REENTRY") {
        const altVal = Math.floor(120000 - (time - 30.8) * 10000); // Shifted by +5.0s
        altStr = `${altVal.toLocaleString()} m`;
        const velVal = Math.floor(7800 - (time - 30.8) * 1650); // Shifted by +5.0s
        velStr = `${velVal.toLocaleString()} m/s`;
      } else if (sc === "STORM") {
        const altVal = Math.floor(Math.max(3000, rocket.position.y * 150));
        altStr = `${altVal.toLocaleString()} m`;
        const velVal = Math.floor(1200 - (time - 34.8) * 150); // Shifted by +5.0s
        velStr = `${velVal.toLocaleString()} m/s`;
      } else if (sc === "LANDING") {
        const altVal = Math.floor(Math.max(0, (rocket.position.y - 2.9) * 150));
        altStr = `${altVal.toLocaleString()} m`;
        const velVal = Math.floor(Math.max(0, (rocket.position.y - 2.9) * 45));
        velStr = `${velVal.toLocaleString()} m/s`;
      } else if (sc === "MANUAL") {
        altStr = "0.0 m (TOUCHDOWN)";
        velStr = "0.0 m/s";
      }
      
      if (altitudeEl) altitudeEl.innerText = altStr;
      if (velocityEl) velocityEl.innerText = velStr;
      if (coordsEl) coordsEl.innerText = coordsStr;
    }
  }
};
