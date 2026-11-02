import * as THREE from "three";
import gsap from "gsap";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";
import { CAMERA_RIG } from "./camera.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { navigationState, NAV_PHASES } from '../navigation/navigationState.js';
import { setRewindDisabled } from '../navigation/rewindController.js';

export function buildCinematicTimeline(rocket, earthGroup, spaceGroup, oceanGroup, renderer, camera, landingLegs, bloomPass) {
  const tl = gsap.timeline({ paused: true });
  
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

  const padPos = new THREE.Vector3(42.0, -6.25, 30.0);
  const flightPos = new THREE.Vector3(12.0, -1.0, -0.5);

  // 1. SCENE X: THE WARP
  tl.add(() => {
    ENGINE_STATE.setScene("WARP");
    ENGINE_STATE.warpProgress = 0.0;
    ENGINE_STATE.warpBankProgress = 0.0;
    ENGINE_STATE.starBatchProgress = 0.0;
    ENGINE_STATE.starsOpacity = 0.0;
    if (bloomPass) bloomPass.strength = 0.0;
    CAMERA_RIG.localYOffset = -8.0;
    if (rocket) {
      rocket.visible = true;
      rocket.position.copy(padPos);
      rocket.rotation.set(0, 0, 0);
      rocket.scale.set(1.0, 1.0, 1.0);
    }
    if (spaceGroup) spaceGroup.visible = true;
    if (oceanGroup) oceanGroup.visible = false;
    if (earthGroup) earthGroup.visible = false;
    if (spaceAmbient) spaceAmbient.intensity = ENGINE_STATE.ambientIntensity;
  }, 0.0);
  
  // Progressive star brightness emergence from 0.0 to 1.0 (t = 0.0s to 3.5s)
  tl.to(ENGINE_STATE, {
    starsOpacity: 1.0,
    duration: 3.5,
    ease: "power2.inOut"
  }, 0.0);

  // Progressive batch-wise star emergence: 5 batches with 1.0s delay between batches (t = 0.0s to 5.0s)
  tl.to(ENGINE_STATE, {
    starBatchProgress: 1.0,
    duration: 5.0,
    ease: "power1.inOut"
  }, 0.0);

  // Vertical warp streaks ignition (t = 0.0s to 3.0s)
  tl.to(ENGINE_STATE, {
    warpProgress: 0.18,
    duration: 3.0,
    ease: "power2.in"
  }, 0.0);
  
  // Slow, majestic Y-axis rotation on the upright rocket
  tl.to(ENGINE_STATE, {
    warpBankProgress: 1.0,
    duration: 6.8,
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
  
  // Acceleration to maximum warp speed (t = 3.0s to 7.5s)
  tl.to(ENGINE_STATE, {
    warpProgress: 1.0,
    duration: 4.5,
    ease: "power2.in"
  }, 3.0);
  
  // Camera shoots forward ahead of the rocket during warp peak
  tl.to(CAMERA_RIG, {
    localYOffset: 50.0,
    duration: 10.0,
    ease: "power2.out"
  }, 6.8);

  // Fade out stars and ambient lights as camera goes past the rocket (8.8s to 16.8s)
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
    
    if (rocket) {
      rocket.visible = false;
      rocket.rotation.set(0.0, 0.0, 0.0);
      rocket.position.set(-1.1, -1.0, -8.6);
      rocket.updateMatrixWorld(true);
    }
    
    if (spaceAmbient) spaceAmbient.intensity = 0.0;
    if (hemisphereLight) hemisphereLight.intensity = 0.0;
    if (searchLight) searchLight.intensity = 0.0;
    if (spaceSun) spaceSun.intensity = 0.0;
    if (earthFrontLight) earthFrontLight.intensity = 0.0;
    
    if (earthGroup) {
      earthGroup.visible = true;
      earthGroup.scale.set(0.12, 0.12, 0.12);
      earthGroup.position.set(1.4, 296.5, 2.0);
      
      if (spaceSun) {
        spaceSun.position.set(1.4, 426.5, -78.0);
        spaceSun.target = earthGroup;
        spaceSun.intensity = 0.0;
      }

      if (earthFrontLight) {
        earthFrontLight.position.set(-148.6, 146.5, -148.0);
        earthFrontLight.target = earthGroup;
        earthFrontLight.intensity = 0.0;
      }
    }
    
    if (earthMesh && earthMesh.material) {
      earthMesh.material.emissiveIntensity = 0.0;
    }
  }, CONFIG.timeline.snapBackStart);

  if (spaceSun) {
    tl.to(spaceSun, {
      intensity: 1.5,
      duration: 7.0,
      ease: "power1.inOut"
    }, CONFIG.timeline.snapBackStart);
  }

  if (earthGroup) {
    tl.to(earthGroup.scale, {
      x: 0.45,
      y: 0.45,
      z: 0.45,
      duration: 7.0,
      ease: "power1.inOut"
    }, CONFIG.timeline.snapBackStart);
  }

  if (earthFrontLight) {
    tl.to(earthFrontLight, {
      intensity: 2.0,
      duration: 5.0,
      ease: "power1.inOut"
    }, 19.8);
  }

  // 3. BEAT 2: FLY TO EARTH ARC
  tl.add(() => {
    ENGINE_STATE.setScene("REENTRY");
    ENGINE_STATE.rocketArcProgress = 0.0;
    ENGINE_STATE.cameraArcProgress = 0.0;
    ENGINE_STATE.whiteoutOpacity = 0.0;
    ENGINE_STATE.globalFogDensity = 0.0;
    ENGINE_STATE.starsOpacity = 0.25;
    
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

  // 3b. BEAT 2b: CAMERA CHASE PLUNGE
  tl.add(() => {
    if (rocket) {
      rocket.visible = false;
    }
  }, CONFIG.timeline.cameraChaseStart);

  tl.to(ENGINE_STATE, {
    cameraArcProgress: 1.0,
    duration: CONFIG.timeline.cameraChaseDuration,
    ease: "power1.inOut"
  }, CONFIG.timeline.cameraChaseStart);

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

  tl.to(ENGINE_STATE, {
    globalFogDensity: 0.08,
    duration: CONFIG.timeline.cameraChaseDuration,
    ease: "power2.in"
  }, CONFIG.timeline.cameraChaseStart);

  tl.to(ENGINE_STATE, {
    starsOpacity: 0.0,
    duration: CONFIG.timeline.cameraChaseDuration,
    ease: "power1.inOut"
  }, CONFIG.timeline.cameraChaseStart);

  // 4. BEAT 3: CLOUDBREAK WHITEOUT
  tl.add(() => {
    const overlay = document.getElementById("storm-overlay");
    if (overlay) {
      overlay.style.backgroundColor = "#020205";
    }
  }, CONFIG.timeline.whiteoutStart);

  tl.to(ENGINE_STATE, {
    whiteoutOpacity: 1.0,
    duration: 1.0,
    ease: "none"
  }, CONFIG.timeline.whiteoutStart);

  // Switch scene at peak dark transition
  tl.add(() => {
    ENGINE_STATE.setScene("LANDING");
    navigationState.push(NAV_PHASES.EARTH_LANDING);
    CAMERA_RIG.instantSnapNextFrame = true;
    ENGINE_STATE.globalFogDensity = 0.045;
    ENGINE_STATE.landingFadeInProgress = 0.0;
    
    if (spaceGroup) spaceGroup.visible = false;
    if (oceanGroup) oceanGroup.visible = true;
    
    if (rocket) {
      rocket.position.set(40.0, 70.0, -100.0);
      rocket.scale.set(0.65, 0.65, 0.65);
      rocket.rotation.set(0, -Math.PI / 4, 0);
      rocket.visible = true;
      
      landingLegs.forEach((leg) => {
        leg.scale.set(0.001, 0.001, 0.001);
      });
    }
    
    ENGINE_STATE.thrusterIntensity = 8.0;
    ENGINE_STATE.cameraDescentProgress = 0.0;
  }, CONFIG.timeline.whiteoutStart + 1.5);

  tl.to(ENGINE_STATE, {
    whiteoutOpacity: 0.0,
    duration: 1.0,
    ease: "none"
  }, CONFIG.timeline.whiteoutStart + 2.0);

  tl.add(() => {
    const overlay = document.getElementById("storm-overlay");
    if (overlay) {
      overlay.style.backgroundColor = "#ffffff";
    }
  }, CONFIG.timeline.landingStart);

  // 5. BEAT 4: OCEAN DESCENT & ANGLE SWEEP
  tl.to(ENGINE_STATE, {
    cameraDescentProgress: 1.0,
    duration: 10.0,
    ease: "power2.inOut"
  }, CONFIG.timeline.landingStart);

  tl.to(ENGINE_STATE, {
    globalFogDensity: 0.008,
    duration: 8.0,
    ease: "power1.inOut"
  }, CONFIG.timeline.landingStart);

  tl.to(ENGINE_STATE, {
    landingFadeInProgress: 1.0,
    duration: 4.0,
    ease: "power1.inOut"
  }, CONFIG.timeline.landingStart);

  ENGINE_STATE.monolithRiseProgress = 0.0;
  tl.to(ENGINE_STATE, {
    monolithRiseProgress: 1.0,
    duration: (CONFIG.monolith && CONFIG.monolith.riseDuration) ? CONFIG.monolith.riseDuration : 10.0,
    ease: (CONFIG.monolith && CONFIG.monolith.ease) ? CONFIG.monolith.ease : "power2.in"
  }, CONFIG.timeline.landingStart + 0.5);

  // 6. BEAT 5: ROCKET CORNER LANDING
  tl.add(() => {
  }, CONFIG.timeline.rocketDescentStart);

  if (rocket) {
    tl.to(rocket.position, {
      y: 7.4,
      duration: CONFIG.timeline.touchdownTime - CONFIG.timeline.rocketDescentStart,
      ease: "power1.out"
    }, CONFIG.timeline.rocketDescentStart);
  }

  tl.add(() => {
    landingLegs.forEach((leg) => {
      leg.scale.set(1.0, 1.0, 1.0);
    });
  }, CONFIG.timeline.rocketDescentStart + 3.0);

  tl.add(() => {
    ENGINE_STATE.setScene("MANUAL");
    ENGINE_STATE.thrusterIntensity = 0.0;
  }, CONFIG.timeline.touchdownTime);

  tl.add(() => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.target.set(-0.74, 17.04, -74.29);
    controls.enabled = false;
    window.activeControls = controls;
    setRewindDisabled(false);
  }, CONFIG.timeline.manualControlTime);

  return tl;
}
