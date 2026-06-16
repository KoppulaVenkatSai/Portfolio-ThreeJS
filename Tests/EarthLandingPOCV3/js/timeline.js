import * as THREE from "three";
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
      rocket.visible = true;
      rocket.rotation.set(Math.PI / 2, 0, 0);
    }
    if (spaceGroup) spaceGroup.visible = true;
    if (oceanGroup) oceanGroup.visible = false;
    if (earthGroup) earthGroup.visible = false;
  }, 0.0);
  
  // Slow start: 0.0 to 0.1 over 4.0s (slowing the part where the stars start moving)
  tl.to(ENGINE_STATE, {
    warpProgress: 0.1,
    duration: 4.0,
    ease: "power2.in"
  }, 0.0);
  
  // Acceleration: 0.1 to 1.0 over 6.0s
  tl.to(ENGINE_STATE, {
    warpProgress: 1.0,
    duration: 6.0,
    ease: "power2.in"
  }, 4.0);
  
  // Camera shoots forward ahead of the rocket during warp peak (slower over 10.0s)
  tl.to(CAMERA_RIG, {
    localYOffset: 50.0,
    duration: 10.0,
    ease: "power2.out"
  }, 6.8);
  
  // Find all lights in the scene
  let spaceSun = null;
  let earthFrontLight = null;
  let spaceAmbient = null;
  let hemisphereLight = null;
  let searchLight = null;
  
  if (spaceGroup) {
    spaceGroup.traverse((child) => {
      if (child.isDirectionalLight) {
        if (child.name === "spaceSun") {
          spaceSun = child;
        } else if (child.name === "earthFrontLight") {
          earthFrontLight = child;
        }
      }
      if (child.isAmbientLight) spaceAmbient = child;
    });
    const scene = spaceGroup.parent;
    if (scene) {
      scene.traverse((child) => {
        if (child.isHemisphereLight) hemisphereLight = child;
        if (child.isSpotLight && child.name !== "lightningLight") searchLight = child;
      });
    }
  }

  // Find earthMesh inside earthGroup
  let earthMesh = null;
  if (earthGroup) {
    earthGroup.traverse((child) => {
      if (child.isMesh) {
        earthMesh = child;
      }
    });
  }

  // Fade out stars and ambient lights as camera goes past the rocket (8.8s to 16.8s)
  // We fade starsOpacity to 0.25 (allowing background drift) and warpProgress to 0.02 (drift speed)
  tl.to(ENGINE_STATE, {
    starsOpacity: 0.25,
    duration: 8.0,
    ease: "power1.inOut"
  }, 8.8);

  tl.to(ENGINE_STATE, {
    warpProgress: 0.02,
    duration: 8.0,
    ease: "power1.inOut"
  }, 8.8);

  if (spaceAmbient) {
    tl.to(spaceAmbient, {
      intensity: 0.0,
      duration: 8.0,
      ease: "power1.inOut"
    }, 8.8);
  }
  if (hemisphereLight) {
    tl.to(hemisphereLight, {
      intensity: 0.0,
      duration: 8.0,
      ease: "power1.inOut"
    }, 8.8);
  }
  if (searchLight) {
    tl.to(searchLight, {
      intensity: 0.0,
      duration: 8.0,
      ease: "power1.inOut"
    }, 8.8);
  }
  if (spaceSun) {
    tl.to(spaceSun, {
      intensity: 0.0,
      duration: 8.0,
      ease: "power1.inOut"
    }, 8.8);
  }
  if (earthFrontLight) {
    tl.to(earthFrontLight, {
      intensity: 0.0,
      duration: 8.0,
      ease: "power1.inOut"
    }, 8.8);
  }

  // 2. BEAT 1: SNAP-BACK (EARTH SILHOUETTE REVEAL & BLACKOUT)
  tl.add(() => {
    ENGINE_STATE.setScene("SNAP_BACK");
    
    // Hide the rocket entirely
    if (rocket) rocket.visible = false;
    
    // Complete light blackout (nothing is visible, completely black)
    if (spaceAmbient) spaceAmbient.intensity = 0.0;
    if (hemisphereLight) hemisphereLight.intensity = 0.0;
    if (searchLight) searchLight.intensity = 0.0;
    if (spaceSun) spaceSun.intensity = 0.0;
    if (earthFrontLight) earthFrontLight.intensity = 0.0;
    
    // Position a small Earth in the middle of the screen
    if (earthGroup && rocket) {
      earthGroup.visible = true;
      earthGroup.scale.set(0.12, 0.12, 0.12); // starts small
      
      rocket.updateMatrixWorld();
      const earthPos = new THREE.Vector3(0, 300, 0).applyMatrix4(rocket.matrixWorld);
      earthGroup.position.copy(earthPos);
      
      // Position spaceSun behind and slightly above the Earth to prepare it (starts unlit)
      if (spaceSun) {
        // Offset (0, 130, 80) in rocket's local space relative to Earth
        // Earth is at (0, 300, 0) locally, so sun is at (0, 430, 80) locally
        const localSunPos = new THREE.Vector3(0, 430, 80);
        const sunPos = localSunPos.applyMatrix4(rocket.matrixWorld);
        spaceSun.position.copy(sunPos);
        spaceSun.target = earthGroup;
        spaceSun.intensity = 0.0; // Starts unlit
      }

      // Position earthFrontLight in front-top-right relative to the rocket, pointing to Earth
      if (earthFrontLight) {
        const localLightPos = new THREE.Vector3(150, 150, 150);
        const lightPos = localLightPos.applyMatrix4(rocket.matrixWorld);
        earthFrontLight.position.copy(lightPos);
        earthFrontLight.target = earthGroup;
        earthFrontLight.intensity = 0.0; // Starts unlit
      }
    }
    
    // Turn off Earth emissive completely (completely black)
    if (earthMesh && earthMesh.material) {
      earthMesh.material.emissiveIntensity = 0.0;
    }
  }, CONFIG.timeline.snapBackStart);

  // Slowly fade in the directional light from the backside of the Earth from 16.8s to 23.8s
  if (spaceSun) {
    tl.to(spaceSun, {
      intensity: 1.5,
      duration: 7.0,
      ease: "power1.inOut"
    }, CONFIG.timeline.snapBackStart);
  }

  // Slowly increase the size of the Earth over 7 seconds (from 16.8s to 23.8s)
  if (earthGroup) {
    tl.to(earthGroup.scale, {
      x: 0.45,
      y: 0.45,
      z: 0.45,
      duration: 7.0,
      ease: "power1.inOut"
    }, CONFIG.timeline.snapBackStart);
  }

  // Slowly fade in the directional light from the front-top-right of the Earth from 23.8s to 28.8s
  if (earthFrontLight) {
    tl.to(earthFrontLight, {
      intensity: 2.0,
      duration: 5.0,
      ease: "power1.inOut"
    }, 19.8);
  }

  // Stop the animation sequence here as requested (just before atmospheric entry phase)
  tl.add(() => {
    tl.pause();
    console.log("[TIMELINE] Paused just before atmospheric entry phase.");
  }, 30.8);

  // 4. BEAT 3: ROCKET FLY-PAST
  tl.add(() => {
    if (rocket) {
      rocket.visible = true;
      // Ensure the rocket is rotated facing forward (along +Y)
      rocket.rotation.set(Math.PI / 2, 0, 0);
    }
  }, CONFIG.timeline.rocketFlyPastStart);

  // Camera retreats back to the base of the rocket
  tl.to(CAMERA_RIG, {
    localYOffset: -1.0,
    duration: CONFIG.timeline.rocketFlyPastDuration,
    ease: "power3.out"
  }, CONFIG.timeline.rocketFlyPastStart);

  // Move the rocket forward in world space past the camera (Z: 2.0 -> 50.0)
  if (rocket) {
    tl.to(rocket.position, {
      z: 50.0,
      duration: CONFIG.timeline.rocketFlyPastDuration,
      ease: "power3.out"
    }, CONFIG.timeline.rocketFlyPastStart);
  }

  // 5. BEAT 4: ATMOSPHERIC ENTRY (PLASMA BURN)
  tl.add(() => {
    ENGINE_STATE.setScene("REENTRY");
    ENGINE_STATE.atmosphereFriction = 0.0;
  }, CONFIG.timeline.reentryStart);
  
  tl.to(ENGINE_STATE, {
    atmosphereFriction: 1.0,
    duration: CONFIG.timeline.reentryDuration,
    ease: "none"
  }, CONFIG.timeline.reentryStart);

  // Slowly move the rocket towards the Earth along the world +Z axis (Z: 50.0 -> 70.0)
  if (rocket) {
    tl.to(rocket.position, {
      z: 70.0,
      duration: CONFIG.timeline.reentryDuration,
      ease: "power1.inOut"
    }, CONFIG.timeline.reentryStart);
  }
  
  // 6. BEAT 5: CLOUD PIERCER
  tl.add(() => {
    ENGINE_STATE.setScene("STORM");
    // Hide space elements
    spaceGroup.visible = false;
    // Show ocean elements (but fog is thick, so ocean is invisible at first)
    oceanGroup.visible = true;
    ENGINE_STATE.globalFogDensity = 0.045;

    // Reset camera rig localYOffset to -1.0 so the detached storm camera correctly mounts at the engine bells
    CAMERA_RIG.localYOffset = -1.0;
    
    // Reset rocket Z position to 2.0 to align with the landing path
    if (rocket) {
      rocket.position.set(0.0, 120.0, -45.0);
      rocket.rotation.set(0.0, 0.0, 0.0);
    }
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
      ease: "none"
    }, CONFIG.timeline.stormStart);
    
    // Turn the rocket upright (upside down relative to descent) at the end of the storm cloud entry
    tl.to(rocket.rotation, {
      x: 0.0,
      y: -Math.PI / 4,
      z: 0.0,
      duration: 2.5,
      ease: "none"
    }, CONFIG.timeline.stormStart + 3.5);
  }
  
  // 5. BEAT 4: MONOLITH REVEAL & LANDING
  tl.add(() => {
    ENGINE_STATE.setScene("LANDING");
    ENGINE_STATE.globalFogDensity = 0.008; // Set instantly
  }, CONFIG.timeline.landingStart);
  
  // Slow down descent for hover & landing (easing out to land smoothly)
  if (rocket) {
    tl.to(rocket.position, {
      y: 2.9, // hover alignment height
      duration: CONFIG.timeline.touchdownTime - CONFIG.timeline.landingStart,
      ease: "power3.out"
    }, CONFIG.timeline.landingStart);
  }
  
  // Ignite / fade thrusters
  tl.add(() => {
    ENGINE_STATE.thrusterIntensity = 8.0; // Set instantly
  }, CONFIG.timeline.landingStart);
  
  // Touchdown confirmed at 29.8s
  tl.add(() => {
    ENGINE_STATE.setScene("MANUAL");
    ENGINE_STATE.thrusterIntensity = 0.0;
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
