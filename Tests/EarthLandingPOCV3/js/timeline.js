import * as THREE from "three";
import gsap from "gsap";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";
import { CAMERA_RIG } from "./camera.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { bloomPass } from "../main.js";

export function buildCinematicTimeline(rocket, earthGroup, spaceGroup, oceanGroup, renderer, camera, landingLegs) {
  const tl = gsap.timeline({ paused: true });
  
  // 1. SCENE X: THE WARP
  tl.add(() => {
    ENGINE_STATE.setScene("WARP");
    ENGINE_STATE.warpProgress = 0.0;
    ENGINE_STATE.starsOpacity = 1.0; // Reset stars opacity
    if (bloomPass) bloomPass.strength = 0.0;
    CAMERA_RIG.localYOffset = -8.0;
    if (rocket) {
      rocket.visible = true;
      rocket.rotation.set(Math.PI / 2, 0, 5 * Math.PI / 180);
    }
    if (spaceGroup) spaceGroup.visible = true;
    if (oceanGroup) oceanGroup.visible = false;
    if (earthGroup) earthGroup.visible = false;
    if (spaceAmbient) spaceAmbient.intensity = ENGINE_STATE.ambientIntensity;
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
    
    // Hide the rocket entirely and reset its rotation/position to align along Y-axis
    if (rocket) {
      rocket.visible = false;
      rocket.rotation.set(0.0, 0.0, 0.0);
      rocket.position.set(-1.1, -1.0, -8.6);
      rocket.updateMatrixWorld(true);
    }
    
    // Complete light blackout (nothing is visible, completely black)
    if (spaceAmbient) spaceAmbient.intensity = 0.0;
    if (hemisphereLight) hemisphereLight.intensity = 0.0;
    if (searchLight) searchLight.intensity = 0.0;
    if (spaceSun) spaceSun.intensity = 0.0;
    if (earthFrontLight) earthFrontLight.intensity = 0.0;
    
    // Position a small Earth in the middle of the screen
    if (earthGroup) {
      earthGroup.visible = true;
      earthGroup.scale.set(0.12, 0.12, 0.12); // starts small
      earthGroup.position.set(1.4, 296.5, 2.0);
      
      // Position spaceSun behind and slightly above the Earth (starts unlit)
      if (spaceSun) {
        // Earth is at (1.4, 296.5, 2.0), offset rotated to top side (behind): dx = 0, dy = 130, dz = -80
        spaceSun.position.set(1.4, 426.5, -78.0);
        spaceSun.target = earthGroup;
        spaceSun.intensity = 0.0; // Starts unlit
      }

      // Position earthFrontLight in front-top-right relative to the rocket, pointing to Earth
      if (earthFrontLight) {
        // Rocket is at (1.4, -3.5, 2.0), offset rotated 90 deg clockwise around Y: dx = -150, dy = -150, dz = -150
        earthFrontLight.position.set(-148.6, 146.5, -148.0);
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

  // 3. BEAT 2: FLY TO EARTH ARC (Starts at 25.8s, duration 11.0s)
  // Camera remains completely stationary during this curvy rocket flight phase
  tl.add(() => {
    ENGINE_STATE.setScene("REENTRY");
    ENGINE_STATE.rocketArcProgress = 0.0;
    ENGINE_STATE.cameraArcProgress = 0.0;
    ENGINE_STATE.whiteoutOpacity = 0.0;
    ENGINE_STATE.globalFogDensity = 0.0; // Reset fog density for space
    ENGINE_STATE.starsOpacity = 0.25; // Reset stars opacity to snapshot level for reentry start
    
    // Ensure lights are initialized to full intensity at start of phase
    if (spaceSun) spaceSun.intensity = 1.5;
    if (earthFrontLight) earthFrontLight.intensity = 2.0;
    
    if (rocket) {
      rocket.visible = true;
      rocket.scale.set(10.0, 10.0, 10.0);
    }
  }, CONFIG.timeline.flyToEarthStart);

  tl.to(ENGINE_STATE, {
    rocketArcProgress: 1.0,
    duration: CONFIG.timeline.flyToEarthDuration,
    ease: "power2.inOut"
  }, CONFIG.timeline.flyToEarthStart);

  // 3b. BEAT 2b: CAMERA CHASE PLUNGE (Starts at 36.8s, duration 12.0s)
  // Once the rocket has vanished, the camera starts plunging down towards the Earth
  tl.add(() => {
    if (rocket) {
      rocket.visible = false; // Rocket is now barely visible and vanishes
    }
  }, CONFIG.timeline.cameraChaseStart);

  tl.to(ENGINE_STATE, {
    cameraArcProgress: 1.0,
    duration: CONFIG.timeline.cameraChaseDuration,
    ease: "power1.inOut"
  }, CONFIG.timeline.cameraChaseStart);

  // Fade out directional lights as camera approaches the Earth
  if (spaceSun) {
    tl.to(spaceSun, {
      intensity: 0.0,
      duration: CONFIG.timeline.cameraChaseDuration,
      ease: "power1.inOut"
    }, CONFIG.timeline.cameraChaseStart);
  }
  if (earthFrontLight) {
    tl.to(earthFrontLight, {
      intensity: 0.0,
      duration: CONFIG.timeline.cameraChaseDuration,
      ease: "power1.inOut"
    }, CONFIG.timeline.cameraChaseStart);
  }

  // Increase space fog density to simulate moving through dark, thick mist
  tl.to(ENGINE_STATE, {
    globalFogDensity: 0.08,
    duration: CONFIG.timeline.cameraChaseDuration,
    ease: "power2.in"
  }, CONFIG.timeline.cameraChaseStart);

  // Fade out stars in sync with the lights
  tl.to(ENGINE_STATE, {
    starsOpacity: 0.0,
    duration: CONFIG.timeline.cameraChaseDuration,
    ease: "power1.inOut"
  }, CONFIG.timeline.cameraChaseStart);

  // 4. BEAT 3: CLOUDBREAK WHITEOUT (Starts at 48.8s, duration 3.0s)
  tl.add(() => {
    // Setup for dark transition: change overlay color to dark space color
    const overlay = document.getElementById("storm-overlay");
    if (overlay) {
      overlay.style.backgroundColor = "#020205";
    }
  }, CONFIG.timeline.whiteoutStart);

  // Fade screen to solid dark mist over 1.0s
  tl.to(ENGINE_STATE, {
    whiteoutOpacity: 1.0,
    duration: 1.0,
    ease: "none"
  }, CONFIG.timeline.whiteoutStart);

  // Switch scene at peak dark transition (50.3s)
  tl.add(() => {
    ENGINE_STATE.setScene("LANDING");
    CAMERA_RIG.instantSnapNextFrame = true;
    ENGINE_STATE.globalFogDensity = 0.045; // Start with thick fog
    ENGINE_STATE.landingFadeInProgress = 0.0;
    
    // Hide space, show ocean
    if (spaceGroup) spaceGroup.visible = false;
    if (oceanGroup) oceanGroup.visible = true;
    
    // Position rocket high up on the back-right corner
    if (rocket) {
      rocket.position.set(20.0, 70.0, -65.0);
      rocket.scale.set(0.65, 0.65, 0.65);
      rocket.rotation.set(0, -Math.PI / 4, 0);
      rocket.visible = true;
      
      // Make sure landing legs are collapsed initially
      landingLegs.forEach((leg) => {
        leg.scale.set(0.001, 0.001, 0.001);
      });
    }
    
    // Prepare thruster intensity
    ENGINE_STATE.thrusterIntensity = 8.0;
    
    // Reset camera descent progress
    ENGINE_STATE.cameraDescentProgress = 0.0;
  }, CONFIG.timeline.whiteoutStart + 1.5);

  // Fade dark overlay back to transparent over 1.0s
  tl.to(ENGINE_STATE, {
    whiteoutOpacity: 0.0,
    duration: 1.0,
    ease: "none"
  }, CONFIG.timeline.whiteoutStart + 2.0);

  // Reset overlay background color to white for lightning strikes once it's invisible
  tl.add(() => {
    const overlay = document.getElementById("storm-overlay");
    if (overlay) {
      overlay.style.backgroundColor = "#ffffff";
    }
  }, CONFIG.timeline.landingStart);

  // 5. BEAT 4: OCEAN DESCENT & ANGLE SWEEP (Starts at 40.3s, duration 10.0s)

  tl.to(ENGINE_STATE, {
    cameraDescentProgress: 1.0,
    duration: 10.0,
    ease: "power2.inOut"
  }, CONFIG.timeline.landingStart);

  // Clear up fog during descent (over 8.0s)
  tl.to(ENGINE_STATE, {
    globalFogDensity: 0.008,
    duration: 8.0,
    ease: "power1.inOut"
  }, CONFIG.timeline.landingStart);

  // Fade in the sea and monolith lights (over 4.0s)
  tl.to(ENGINE_STATE, {
    landingFadeInProgress: 1.0,
    duration: 4.0,
    ease: "power1.inOut"
  }, CONFIG.timeline.landingStart);

  // 6. BEAT 5: ROCKET CORNER LANDING (Starts at 55.0s, duration 10.0s)
  tl.add(() => {
    // Rocket begins descent
  }, CONFIG.timeline.rocketDescentStart);

  if (rocket) {
    tl.to(rocket.position, {
      y: 2.9, // touchdown height
      duration: CONFIG.timeline.touchdownTime - CONFIG.timeline.rocketDescentStart, // 10.0s
      ease: "power1.out"
    }, CONFIG.timeline.rocketDescentStart);
  }

  // Deploy landing legs during descent (at 58.0s)
  tl.add(() => {
    landingLegs.forEach((leg) => {
      leg.scale.set(1.0, 1.0, 1.0); // Deploy legs
    });
  }, CONFIG.timeline.rocketDescentStart + 3.0);

  // Touchdown confirmed at 65.0s
  tl.add(() => {
    ENGINE_STATE.setScene("MANUAL");
    ENGINE_STATE.thrusterIntensity = 0.0;
  }, CONFIG.timeline.touchdownTime);

  // Enable manual OrbitControls at 67.0s
  tl.add(() => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // don't go below water
    controls.target.set(0, 2.5, -45.0); // target the monolith in center
    window.activeControls = controls;
  }, CONFIG.timeline.manualControlTime); // 55.0s

  return tl;
}
