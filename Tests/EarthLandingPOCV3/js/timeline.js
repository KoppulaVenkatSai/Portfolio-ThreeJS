import gsap from "gsap";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";
import { CAMERA_RIG } from "./camera.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { bloomPass } from "../main.js";

export function buildCinematicTimeline(rocket, earthGroup, spaceGroup, oceanGroup, renderer, camera) {
  const tl = gsap.timeline({ paused: true });
  
  // 1. SCENE X: THE WARP
  tl.add(() => {
    ENGINE_STATE.setScene("WARP");
    ENGINE_STATE.warpProgress = 0.0;
    if (bloomPass) bloomPass.strength = 0.0;
    CAMERA_RIG.localYOffset = -1.0;
    if (rocket) {
      rocket.rotation.set(Math.PI / 2, 0, 0);
    }
  }, 0.0);
  
  // Custom timing-driven progressive warp build-up (mimicking Frame X-010 to X-200)
  tl.to(ENGINE_STATE, {
    warpProgress: 1.0,
    duration: CONFIG.timeline.warpEnd,
    ease: "power2.inOut"
  }, 0.0);
  
  // Warp camera FOV stretching
  tl.to(camera, {
    fov: 95,
    duration: CONFIG.timeline.warpEnd,
    ease: "power2.in",
    onUpdate: () => camera.updateProjectionMatrix()
  }, 0.0);
  
  if (bloomPass) {
    tl.to(bloomPass, {
      strength: 1.3, // Lowered from 2.2 to reduce eye of the storm glare
      duration: CONFIG.timeline.warpEnd,
      ease: "power2.in"
    }, 0.0);
  }

  // Camera shoots forward ahead of the rocket during warp peak (9.0s to 10.0s)
  tl.to(CAMERA_RIG, {
    localYOffset: 20.0,
    duration: 1.0,
    ease: "power2.in"
  }, 9.0);
  
  // 2. BEAT 1: SNAP-BACK
  tl.add(() => {
    ENGINE_STATE.setScene("SNAP_BACK");
    if (bloomPass) bloomPass.strength = 0.0;
    // Hide space environment, show exosphere default blue sphere
    if (earthGroup) {
      earthGroup.visible = true;
      earthGroup.scale.set(0.01, 0.01, 0.01);
      earthGroup.position.set(0, -500, -850);
    }
  }, CONFIG.timeline.snapBackStart);

  // Keep camera ahead of rocket briefly to show only the Earth initially
  tl.to(CAMERA_RIG, {
    localYOffset: 20.0,
    duration: 0.6
  }, CONFIG.timeline.snapBackStart);

  // Rocket catches back up again (camera moves back to -1.0)
  tl.to(CAMERA_RIG, {
    localYOffset: -1.0,
    duration: 1.15,
    ease: "power3.out"
  }, CONFIG.timeline.snapBackStart + 0.6);
  
  // Return FOV to normal
  tl.to(camera, {
    fov: 50,
    duration: CONFIG.timeline.snapBackDuration,
    ease: "power2.out",
    onUpdate: () => camera.updateProjectionMatrix()
  }, CONFIG.timeline.snapBackStart);
  
  // Rapid exosphere scaling (frightening rate of arrival)
  tl.to(earthGroup.scale, {
    x: 1.0,
    y: 1.0,
    z: 1.0,
    duration: CONFIG.timeline.snapBackDuration,
    ease: "power3.out"
  }, CONFIG.timeline.snapBackStart);
  
  tl.to(earthGroup.position, {
    x: 0,
    y: -100,
    z: -180,
    duration: CONFIG.timeline.snapBackDuration,
    ease: "power3.out"
  }, CONFIG.timeline.snapBackStart);
  
  if (rocket) {
    tl.to(rocket.rotation, {
      x: -2.078,
      y: 0.0,
      z: 0.0,
      duration: CONFIG.timeline.snapBackDuration,
      ease: "power2.out"
    }, CONFIG.timeline.snapBackStart);
  }
  
  // 3. BEAT 2: ATMOSPHERIC ENTRY (PLASMA BURN)
  tl.add(() => {
    ENGINE_STATE.setScene("REENTRY");
    ENGINE_STATE.atmosphereFriction = 0.0;
  }, CONFIG.timeline.reentryStart);
  
  tl.to(ENGINE_STATE, {
    atmosphereFriction: 1.0,
    duration: CONFIG.timeline.reentryDuration,
    ease: "power1.inOut"
  }, CONFIG.timeline.reentryStart);
  
  if (bloomPass) {
    tl.to(bloomPass, {
      strength: 1.1, // Reduced from 1.8 to reduce glare
      duration: CONFIG.timeline.reentryDuration,
      ease: "power1.inOut"
    }, CONFIG.timeline.reentryStart);
  }
  
  // 4. BEAT 3: CLOUD PIERCER
  tl.add(() => {
    ENGINE_STATE.setScene("STORM");
    if (bloomPass) bloomPass.strength = 0.30; // Reduced from 0.45
    // Hide space elements
    spaceGroup.visible = false;
    // Show ocean elements (but fog is thick, so ocean is invisible at first)
    oceanGroup.visible = true;
    ENGINE_STATE.globalFogDensity = 0.045;
  }, CONFIG.timeline.stormStart);
  
  // Move rocket down through clouds (descent along Y coordinates)
  if (rocket) {
    tl.to(rocket.position, {
      y: 45.0,
      duration: CONFIG.timeline.stormDuration,
      ease: "none"
    }, CONFIG.timeline.stormStart);
    
    // Point straight down first
    tl.to(rocket.rotation, {
      x: -Math.PI,
      y: 0.0,
      z: 0.0,
      duration: 1.5,
      ease: "power1.inOut"
    }, CONFIG.timeline.stormStart);
    
    // Turn the rocket upright (upside down relative to descent) at the end of the storm cloud entry (19.5s to 22.0s)
    tl.to(rocket.rotation, {
      x: 0.0,
      y: -Math.PI / 4,
      z: 0.0,
      duration: 2.5,
      ease: "power2.inOut"
    }, 19.5);
  }
  
  // 5. BEAT 4: MONOLITH REVEAL & LANDING
  tl.add(() => {
    ENGINE_STATE.setScene("LANDING");
    CAMERA_RIG.shakeIntensity = 1.0;
    // Dissipate fog smoothly to reveal the ocean and monolith
    gsap.to(ENGINE_STATE, {
      globalFogDensity: 0.008,
      duration: 3.0,
      ease: "power1.out"
    });
  }, CONFIG.timeline.landingStart);
  
  // Slow down descent for hover & landing
  if (rocket) {
    tl.to(rocket.position, {
      y: 2.9, // hover alignment height
      duration: CONFIG.timeline.touchdownTime - CONFIG.timeline.landingStart,
      ease: "power2.out"
    }, CONFIG.timeline.landingStart);
  }
  
  // Ignite / fade thrusters
  tl.to(ENGINE_STATE, {
    thrusterIntensity: 8.0,
    duration: 1.0,
    ease: "power1.inOut"
  }, CONFIG.timeline.landingStart);
  
  // Touchdown confirmed at 29.8s
  tl.add(() => {
    ENGINE_STATE.setScene("MANUAL");
    ENGINE_STATE.thrusterIntensity = 0.0;
    // Touchdown impact camera rumble
    CAMERA_RIG.shakeIntensity = 2.0;
    gsap.to(CAMERA_RIG, {
      shakeIntensity: 0.0,
      duration: CONFIG.shake.touchdown.duration,
      ease: "power2.out"
    });
  }, CONFIG.timeline.touchdownTime);
  
  // Enable movable controls hand-off at 30.8s
  tl.add(() => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // don't go below water
    controls.target.set(0, 2.5, -45.0); // target the monolith
    window.activeControls = controls;
  }, CONFIG.timeline.manualControlTime);
  
  return tl;
}
