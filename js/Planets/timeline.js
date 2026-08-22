import * as THREE from "three";
import gsap from "gsap";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "../EarthLanding/state.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function buildPlanetsTimeline(
  rocket,
  solarSystemGroup,
  spaceGroup,
  renderer,
  camera,
  bloomPass,
  scene,
  lights,
  nebulaMasterOpacity,
  sunMasterOpacity,
  warpSystem,
  onCompleteCallback
) {
  const tl = gsap.timeline({ paused: true });

  const { flightAmbient, flightSun, flightHemi, sunLight, rimLight, spaceAmbient, headlight } = lights || {};

  const PAD_CAM_POS = new THREE.Vector3(38.69034, -8.56499, 30.52824);
  const PAD_CAM_LOOK = new THREE.Vector3(38.71423, -5.01504, 30.55209);
  const _vForward = new THREE.Vector3().subVectors(PAD_CAM_LOOK, PAD_CAM_POS).normalize();
  const padPos = new THREE.Vector3(42.0, -6.25, 30.0);

  // 1. SCENE: WARP IGNITION & ROCKET BANKING (t = 0.0s)
  tl.add(() => {
    ENGINE_STATE.setScene("WARP");
    ENGINE_STATE.warpProgress = 0.0;
    ENGINE_STATE.warpBankProgress = 0.0;
    ENGINE_STATE.starBatchProgress = 0.0;
    ENGINE_STATE.starsOpacity = 1.0;
    ENGINE_STATE.starDriftSpeed = 25.0; // Cruising drift speed
    if (nebulaMasterOpacity) nebulaMasterOpacity.value = 0.0;
    if (sunMasterOpacity) sunMasterOpacity.value = 0.0;

    // Start with 2000 stars during the warp
    if (warpSystem) warpSystem.setStarCount(2000);

    camera.position.copy(PAD_CAM_POS);
    camera.up.set(0.0, 1.0, 0.0);
    camera.lookAt(PAD_CAM_LOOK);

    if (rocket) {
      rocket.visible = true;
      rocket.position.copy(padPos);
      rocket.rotation.set(0, 0, 0);
      rocket.scale.set(1.0, 1.0, 1.0);
      rocket.updateMatrixWorld(true);
    }

    if (spaceGroup) spaceGroup.visible = true;
    if (solarSystemGroup) solarSystemGroup.visible = false;

    // Flight lighting shining on the rocket
    if (flightAmbient) flightAmbient.intensity = 0.7;
    if (flightSun) flightSun.intensity = 1.8;
    if (flightHemi) flightHemi.intensity = 1.3;

    // Solar system lights & Sun brightness are completely 0 before reveal
    if (sunLight) sunLight.intensity = 0.0;
    if (rimLight) rimLight.intensity = 0.0;
    if (spaceAmbient) spaceAmbient.intensity = 0.0;
    if (headlight) headlight.intensity = 0.0;
    if (bloomPass) {
      bloomPass.strength = 0.0;
      bloomPass.radius = 0.8;
      bloomPass.threshold = 0.25;
    }
  }, 0.0);

  // Progressive batch-wise star emergence (t = 0.0s to 4.5s)
  tl.to(ENGINE_STATE, {
    starBatchProgress: 1.0,
    duration: 4.5,
    ease: "none"
  }, 0.0);

  // Vertical warp streaks ignition (t = 0.0s to 2.5s)
  tl.to(ENGINE_STATE, {
    warpProgress: 0.18,
    duration: 2.5,
    ease: "power2.in"
  }, 0.0);

  // Slow 90-degree Y-axis rotation on upright rocket (t = 0.0s to 5.5s)
  tl.to(ENGINE_STATE, {
    warpBankProgress: 1.0,
    duration: 5.5,
    ease: "power1.inOut",
    onUpdate: () => {
      const t = ENGINE_STATE.warpBankProgress;
      if (rocket) {
        rocket.position.copy(padPos);
        rocket.scale.set(1.0, 1.0, 1.0);
        rocket.rotation.set(0, t * Math.PI * 0.5, 0);
        rocket.updateMatrixWorld(true);
      }
    }
  }, 0.0);

  // Acceleration to maximum warp speed (t = 2.5s to 6.0s)
  tl.to(ENGINE_STATE, {
    warpProgress: 1.0,
    duration: 3.5,
    ease: "power2.in"
  }, 2.5);

  // Camera shoots forward past rocket nose into the warp core (t = 5.0s to 8.0s)
  const camOvertake = { travel: 0.0 };
  tl.to(camOvertake, {
    travel: 55.0,
    duration: 3.0,
    ease: "power2.inOut",
    onUpdate: () => {
      const d = camOvertake.travel;
      camera.position.copy(PAD_CAM_POS).addScaledVector(_vForward, d);
      const lookTarget = PAD_CAM_LOOK.clone().addScaledVector(_vForward, d);
      camera.up.set(0.0, 1.0, 0.0);
      camera.lookAt(lookTarget);
    }
  }, 5.0);

  // 2. WARP EXIT & GRADUAL STAR COUNT REDUCTION (t = 7.0s to 9.5s)
  tl.add(() => {
    // Cleanly hide rocket after camera overtakes it
    if (rocket) rocket.visible = false;

    // Extinguish flight lights
    if (flightAmbient) flightAmbient.intensity = 0.0;
    if (flightSun) flightSun.intensity = 0.0;
    if (flightHemi) flightHemi.intensity = 0.0;
  }, 7.5);

  // Decelerate warp speed to 0.0
  tl.to(ENGINE_STATE, {
    warpProgress: 0.0,
    duration: 2.5,
    ease: "power2.inOut"
  }, 7.0);

  // Gradually reduce star count from 2000 down to 750 as warp ends (t = 7.0s to 9.5s)
  const starCountTracker = { count: 2000 };
  tl.to(starCountTracker, {
    count: 750,
    duration: 2.5,
    ease: "power2.inOut",
    onUpdate: () => {
      if (warpSystem) warpSystem.setStarCount(Math.round(starCountTracker.count));
    }
  }, 7.0);

  // Settle background stars at 50% brightness (0.50)
  tl.to(ENGINE_STATE, {
    starsOpacity: 0.50,
    duration: 2.0,
    ease: "power2.out"
  }, 7.5);

  // Lock camera into exact isometric 3/4 framing at warp exit (t = 9.5s)
  const targetCamPos = CONFIG.camera.overview.pos; // (-5.78, 18.20, 56.75)
  const targetCamLook = CONFIG.camera.overview.target; // (0, 0, 0)

  tl.add(() => {
    camera.position.copy(targetCamPos);
    camera.up.set(0.0, 1.0, 0.0);
    camera.lookAt(targetCamLook);

    if (scene) {
      scene.background = new THREE.Color(0x010204);
      scene.fog = new THREE.FogExp2(0x010204, 0.0035);
    }
  }, 9.5);

  // 3. POST-WARP SERENE DRIFT (t = 9.5s to 11.0s)
  // (Camera is fixed in 3/4 view, cruising smoothly through 750 stars drifting past at driftSpeed 25.0)

  // 4. CENTRAL PLANETARY SCALE-UP IN TOTAL DARKNESS (t = 11.0s to 13.2s)
  tl.add(() => {
    // Position solar system in DEAD CENTER and scale down in pitch darkness
    if (solarSystemGroup) {
      solarSystemGroup.position.set(0, 0, 0);
      solarSystemGroup.scale.set(0.04, 0.04, 0.04);
      solarSystemGroup.visible = true;
    }

    // Keep all solar lights and Sun brightness strictly at 0 during scale-up
    if (sunMasterOpacity) sunMasterOpacity.value = 0.0;
    if (nebulaMasterOpacity) nebulaMasterOpacity.value = 0.0;
    if (sunLight) sunLight.intensity = 0.0;
    if (spaceAmbient) spaceAmbient.intensity = 0.0;
    if (rimLight) rimLight.intensity = 0.0;
    if (headlight) headlight.intensity = 0.0;
    if (bloomPass) bloomPass.strength = 0.0;
  }, 11.0);

  // Smoothly bring star motion to a standstill as planets scale in (t = 11.0s to 12.5s)
  tl.to(ENGINE_STATE, {
    starDriftSpeed: 0.0,
    duration: 1.5,
    ease: "power2.out"
  }, 11.0);

  // Scale up Solar System in darkness from 0.04 to 1.0 (t = 11.0s to 13.2s - punchy 2.2s duration)
  tl.to(solarSystemGroup.scale, {
    x: 1.0,
    y: 1.0,
    z: 1.0,
    duration: 2.2,
    ease: "power2.out"
  }, 11.0);

  // 5. PROGRESSIVE IGNITION OF SUN, BLOOM, NEBULAE & LIGHTING (IMMEDIATELY AFTER SCALE-UP: t = 13.2s to 15.8s)
  if (sunMasterOpacity) {
    tl.to(sunMasterOpacity, {
      value: 1.0,
      duration: 2.6,
      ease: "power3.inOut"
    }, 13.2);
  }

  if (sunLight) {
    tl.to(sunLight, {
      intensity: 10.0,
      duration: 2.6,
      ease: "power3.inOut"
    }, 13.2);
  }

  if (bloomPass) {
    tl.to(bloomPass, {
      strength: 1.0,
      duration: 2.6,
      ease: "power3.inOut"
    }, 13.2);
  }

  if (nebulaMasterOpacity) {
    tl.to(nebulaMasterOpacity, {
      value: 1.0,
      duration: 2.6,
      ease: "power2.inOut"
    }, 13.2);
  }

  if (rimLight) {
    tl.to(rimLight, {
      intensity: 0.25,
      duration: 2.6,
      ease: "power2.inOut"
    }, 13.2);
  }

  if (spaceAmbient) {
    tl.to(spaceAmbient, {
      intensity: 0.10,
      duration: 2.6,
      ease: "power2.inOut"
    }, 13.2);
  }

  if (headlight) {
    tl.to(headlight, {
      intensity: 2.5,
      duration: 2.6,
      ease: "power2.inOut"
    }, 13.2);
  }

  if (renderer) {
    tl.to(renderer, {
      toneMappingExposure: 0.95,
      duration: 2.6,
      ease: "power2.inOut"
    }, 13.2);
  }

  // 6. COMPLETION & INTERACTION HANDOFF (t = 15.8s)
  tl.add(() => {
    ENGINE_STATE.setScene("MANUAL");

    camera.position.copy(targetCamPos);
    camera.up.set(0.0, 1.0, 0.0);
    camera.lookAt(targetCamLook);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 100;
    controls.minDistance = 6;
    controls.target.copy(targetCamLook);
    controls.enabled = true;
    window.activeControls = controls;

    // Show star controls widget if present
    const starWidget = document.getElementById('stars-control-widget');
    if (starWidget) starWidget.classList.add('visible');

    if (typeof onCompleteCallback === "function") {
      onCompleteCallback(controls);
    }
  }, 15.8);

  return tl;
}
