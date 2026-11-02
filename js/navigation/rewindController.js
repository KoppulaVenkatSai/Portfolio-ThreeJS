/**
 * Rewind Controller
 * Orchestrates the "back one step" rewind for every possible scene phase.
 * Each rewind plays the CRT overlay AND performs the actual scene/camera reversal.
 */

import gsap from 'gsap';
import * as THREE from 'three';
import { navigationState, NAV_PHASES } from './navigationState.js';
import { playCRTRewindEffect } from './crtRewindEffect.js';
import { ENGINE_STATE } from '../EarthLanding/state.js';

let _ctx = null;
let _isRewinding = false;
let _isTransitionBlocked = false;

export function initRewindController(ctx) {
  _ctx = ctx;
  window._rewindCtx = ctx;
  _setupButton();
}

export function isRewinding() {
  return _isRewinding;
}

/**
 * Enable or disable the rewind button during active transitions (e.g. blast off or warp).
 * @param {boolean} disabled
 * @param {string} reason
 */
export function setRewindDisabled(disabled, reason = '') {
  _isTransitionBlocked = disabled;
  const btn = document.getElementById('rewind-back-btn');
  if (!btn) return;

  if (disabled) {
    btn.disabled = true;
    btn.classList.add('is-disabled');
    btn.setAttribute('title', reason || 'CANNOT REWIND DURING TRANSITION // SYSTEMS BUSY');
  } else {
    btn.disabled = false;
    btn.classList.remove('is-disabled');
    btn.setAttribute('title', 'Rewind back one step');
  }
}

function _setupButton() {
  const btn = document.getElementById('rewind-back-btn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (_isRewinding || _isTransitionBlocked || navigationState.isAtOrigin) return;
    triggerRewind();
  });

  navigationState.onChange(() => _updateButtonVisibility());
  _updateButtonVisibility();
}

function _updateButtonVisibility() {
  const btn = document.getElementById('rewind-back-btn');
  if (!btn) return;

  if (navigationState.isAtOrigin || _isRewinding) {
    btn.classList.remove('visible');
  } else {
    btn.classList.add('visible');
  }
}

export function triggerRewind() {
  if (_isRewinding || _isTransitionBlocked || navigationState.isAtOrigin || !_ctx) return;
  _isRewinding = true;
  _updateButtonVisibility();

  const currentPhase = navigationState.current;
  const targetPhase = navigationState.previousPhase;

  console.log(`[REWIND] ${currentPhase} => ${targetPhase}`);

  // Update Status Chip to "REWINDING..."
  const camStatus = document.getElementById('cam-status');
  const statusChip = document.getElementById('hud-status-chip');
  if (camStatus) camStatus.innerText = 'REWINDING...';
  if (statusChip) statusChip.classList.add('is-rewinding');

  // Trigger high-speed retro CRT rewind overlay (0.85s)
  const CRT_DURATION = 0.85;
  const crtTl = playCRTRewindEffect(CRT_DURATION);

  // Pop navigation stack
  navigationState.pop();

  // Execute reverse scene & camera timeline
  const rewindTl = _buildRewindTimeline(currentPhase, targetPhase, CRT_DURATION);

  const masterTl = gsap.timeline({
    onComplete: () => {
      _isRewinding = false;
      if (statusChip) statusChip.classList.remove('is-rewinding');
      _updateButtonVisibility();
      window.isTransitioning = false;
      console.log(`[REWIND] Complete. Current: ${navigationState.current}`);
    }
  });

  masterTl.add(crtTl, 0);
  masterTl.add(rewindTl, 0);
}

function _buildRewindTimeline(fromPhase, toPhase, duration) {
  const tl = gsap.timeline();
  const ctx = _ctx;

  window.isTransitioning = true;

  switch (fromPhase) {
    // 1. From Planet focus back to Koppula system overview
    case NAV_PHASES.PLANET_FOCUS: {
      tl.add(() => {
        if (ctx.koppulaSystemManager && ctx.koppulaSystemManager.activeFocusPlanetId) {
          ctx.koppulaSystemManager.triggerReset();
        }
      }, 0.05);

      tl.add(() => {
        const camStatus = document.getElementById('cam-status');
        if (camStatus) camStatus.innerText = 'KOPPULA_SYSTEM // SYSTEM_VIEW';
      }, duration * 0.85);
      break;
    }

    // 2. From Koppula Solar System back to Destination Selection (Exterior)
    case NAV_PHASES.KOPPULA_SYSTEM: {
      tl.add(() => {
        _teardownKoppulaSystem(ctx);
      }, 0.02);

      _restoreToExteriorSelection(tl, 0.06, duration);
      break;
    }

    // 3. From Earth Landing back to Destination Selection (Exterior)
    case NAV_PHASES.EARTH_LANDING: {
      tl.add(() => {
        _teardownEarthLanding(ctx);
      }, 0.02);

      _restoreToExteriorSelection(tl, 0.06, duration);
      break;
    }

    // 4. From Destination Selection (Exterior) back to Station Room Interior
    case NAV_PHASES.EXTERIOR_SELECTION: {
      tl.add(() => {
        if (ctx.hologramScreenInstance) {
          ctx.hologramScreenInstance.fadeOut(0.2);
        }
      }, 0);

      _restoreToRoomInterior(tl, 0.05, duration);
      break;
    }

    default: {
      console.warn(`[REWIND] Unhandled phase: ${fromPhase}`);
      break;
    }
  }

  return tl;
}

// ──────────────────────────────────────────────────────────
// Subsystem Teardowns (Clean zero-leak resets)
// ──────────────────────────────────────────────────────────

function _teardownKoppulaSystem(ctx) {
  if (!ctx.koppulaSystemManager) return;
  const km = ctx.koppulaSystemManager;

  if (km.activeFocusPlanetId) {
    km.triggerReset();
  }

  if (km.cinematicTimeline) {
    km.cinematicTimeline.kill();
    km.cinematicTimeline = null;
  }

  km.isActive = false;
  km.isHoverEnabled = false;

  // Extinguish all planetary lights
  if (km.flightAmbient) km.flightAmbient.intensity = 0;
  if (km.flightSun) km.flightSun.intensity = 0;
  if (km.flightHemi) km.flightHemi.intensity = 0;
  if (km.sunLight) km.sunLight.intensity = 0;
  if (km.rimLight) km.rimLight.intensity = 0;
  if (km.spaceAmbient) km.spaceAmbient.intensity = 0;
  if (km.headlight) km.headlight.intensity = 0;
  if (km.sunMasterOpacity) km.sunMasterOpacity.value = 0;
  if (km.nebulaMasterOpacity) km.nebulaMasterOpacity.value = 0;

  // Fully extinguish and hide all Koppula nebulas and background elements
  if (km.nebulaeList) {
    km.nebulaeList.forEach((neb) => {
      if (neb.mesh) {
        neb.mesh.visible = false;
        if (neb.mesh.material) neb.mesh.material.opacity = 0;
      }
    });
  }
  if (km.nebulaGroup) km.nebulaGroup.visible = false;
  if (km.sunGroup) km.sunGroup.visible = false;
  if (km.laserGroup) km.laserGroup.visible = false;
  if (km.headlight) {
    km.headlight.intensity = 0;
    km.headlight.visible = false;
  }

  // Hide 3D groups
  if (km.solarSystemGroup) km.solarSystemGroup.visible = false;
  if (km.spaceGroup) km.spaceGroup.visible = false;

  // Hide widgets & data HUD
  const starWidget = document.getElementById('stars-control-widget');
  if (starWidget) starWidget.classList.remove('visible');

  const dataHud = document.getElementById('data-hud-overlay');
  if (dataHud) {
    dataHud.classList.add('closed');
    dataHud.classList.remove('active');
  }

  // Dispose active controls
  if (window.activeControls) {
    window.activeControls.enabled = false;
    window.activeControls.dispose();
    window.activeControls = null;
  }
}

function _teardownEarthLanding(ctx) {
  if (!ctx.earthLandingManager) return;
  const em = ctx.earthLandingManager;

  if (em.cinematicTimeline) {
    em.cinematicTimeline.pause();
  }
  em.isActive = false;

  // Extinguish Earth landing lights
  if (em.spaceAmbient) em.spaceAmbient.intensity = 0;
  if (em.spaceSun) em.spaceSun.intensity = 0;
  if (em.earthFrontLight) em.earthFrontLight.intensity = 0;
  if (em.hemisphereLight) {
    em.hemisphereLight.intensity = 0;
    em.hemisphereLight.visible = false;
  }
  if (em.searchLight) em.searchLight.visible = false;
  if (em.targetRing) em.targetRing.visible = false;

  if (em.thrusterFlame) {
    em.thrusterFlame.scale.set(1, 0, 1);
    em.thrusterFlame.material.opacity = 0;
  }

  // Hide 3D groups
  if (em.spaceGroup) em.spaceGroup.visible = false;
  if (em.oceanGroup) em.oceanGroup.visible = false;
  if (em.earthGroup) em.earthGroup.visible = false;
  if (em.stormSystem && em.stormSystem.group) em.stormSystem.group.visible = false;
  if (em.atmosphereSystem && em.atmosphereSystem.shell) em.atmosphereSystem.shell.visible = false;

  const stormOverlay = document.getElementById('storm-overlay');
  if (stormOverlay) stormOverlay.style.opacity = '0';

  const rotContainer = document.getElementById('monolith-rotation-controls');
  if (rotContainer) rotContainer.classList.remove('visible');
}

// ──────────────────────────────────────────────────────────
// Restoration to Exterior Selection (Hologram Screen View)
// ──────────────────────────────────────────────────────────

function _restoreToExteriorSelection(tl, startTime, duration) {
  const ctx = _ctx;

  tl.add(() => {
    // 1. Reset Global Environment & Eliminate Any Fog
    ctx.scene.fog = null;
    ctx.scene.background = new THREE.Color(0x02040a);

    // 2. Reset Tone Mapping & Bloom
    if (ctx.renderer) ctx.renderer.toneMappingExposure = 1.25;
    if (ctx.bloomPass) {
      ctx.bloomPass.strength = 0.45;
      ctx.bloomPass.radius = 0.5;
      ctx.bloomPass.threshold = 0.92;
    }

    // 3. Reset Engine State (no ghost stars)
    if (ENGINE_STATE) {
      ENGINE_STATE.setScene('INITIAL');
      ENGINE_STATE.warpProgress = 0;
      ENGINE_STATE.warpBankProgress = 0;
      ENGINE_STATE.starsOpacity = 0.0;
      ENGINE_STATE.whiteoutOpacity = 0.0;
      ENGINE_STATE.globalFogDensity = 0.0;
      ENGINE_STATE.thrusterIntensity = 0.0;
    }

    // 4. Restore Station Model and fix all mesh opacities / transparency
    if (ctx.stationModel) {
      ctx.stationModel.visible = true;
      ctx.stationModel.traverse((node) => {
        if (node.isMesh && node.material) {
          const matName = (node.material.name || '').toLowerCase();
          const nodeName = (node.name || '').toLowerCase();
          const isGlass = matName.includes('glass') || nodeName.includes('glass');

          if (isGlass) {
            node.material.transparent = true;
            node.material.opacity = 0.22;
          } else {
            node.material.transparent = false;
            node.material.opacity = 1.0;
          }
          node.material.needsUpdate = true;
        }
      });
    }

    // 5. Restore Procedural Docking Pad & Nodes
    if (ctx.rocketDockingPadInstance) {
      ctx.rocketDockingPadInstance.group.visible = true;
      if (ctx.rocketDockingPadInstance.padRingGroup) {
        ctx.rocketDockingPadInstance.padRingGroup.visible = true;
      }
    }
    if (ctx.allRocketPadNodes) {
      ctx.allRocketPadNodes.forEach((node) => {
        node.visible = true;
      });
    }

    // 6. Restore Space Cosmos Background with fadeIn
    if (ctx.cosmosBackground) {
      if (ctx.cosmosBackground.fadeIn) {
        ctx.cosmosBackground.fadeIn(0.6);
      } else if (ctx.cosmosBackground.group) {
        ctx.cosmosBackground.group.visible = true;
      }
    }

    // 7. Reset Destination Hologram Screen to pristine unclicked state
    if (ctx.hologramScreenInstance) {
      ctx.hologramScreenInstance.resetState();
    }

    // 8. Hide interior-only meshes
    if (ctx.cursiveTextInstance && ctx.cursiveTextInstance.group) ctx.cursiveTextInstance.group.visible = false;
    if (ctx.lidOverlayMesh) ctx.lidOverlayMesh.visible = false;
    if (ctx.techAvatarInstance && ctx.techAvatarInstance.group) ctx.techAvatarInstance.group.visible = false;
    if (ctx.avatarLight) ctx.avatarLight.visible = false;

    // 8. Restore Rocket Position to Docking Pad and Refresh Reflection Map
    if (ctx.earthLandingManager && ctx.earthLandingManager.rocketModel) {
      const rm = ctx.earthLandingManager.rocketModel;
      rm.visible = true;
      rm.position.set(42.0, -6.25, 30.0);
      rm.rotation.set(0, 0, 0);
      rm.scale.set(1.0, 1.0, 1.0);
      rm.updateMatrixWorld(true);

      if (ctx.earthLandingManager.landingLegs) {
        ctx.earthLandingManager.landingLegs.forEach((leg) => {
          leg.scale.set(0.001, 0.001, 0.001);
        });
      }

      if (ctx.earthLandingManager.rocketMaterials) {
        ctx.earthLandingManager.rocketMaterials.forEach((mat) => {
          mat.metalness = 0.98;
          mat.roughness = 0.03;
          mat.color.setHex(0xcccccc);
          mat.envMapIntensity = 1.0;
        });
      }

      // Capture clean station exterior in CubeCamera (wipes out warp stars reflection)
      ctx.earthLandingManager.updateCubeNow();
    }
  }, startTime);

  // Restore exterior lighting intensities
  _restoreExteriorLighting(tl, startTime + 0.02, duration * 0.7);

  // Snappy camera rewind pull back
  tl.to(ctx.camera.position, {
    x: ctx.EXTERIOR_CAM_POS.x,
    y: ctx.EXTERIOR_CAM_POS.y,
    z: ctx.EXTERIOR_CAM_POS.z,
    duration: duration * 0.85,
    ease: 'power3.inOut',
    onUpdate: () => {
      ctx.camera.up.set(0, 1, 0);
      ctx.camera.lookAt(ctx.currentLookTarget);
      if (ctx.controls) ctx.controls.target.copy(ctx.currentLookTarget);
    }
  }, startTime + 0.04);

  tl.to(ctx.currentLookTarget, {
    x: ctx.EXTERIOR_LOOK_TARGET.x,
    y: ctx.EXTERIOR_LOOK_TARGET.y,
    z: ctx.EXTERIOR_LOOK_TARGET.z,
    duration: duration * 0.85,
    ease: 'power3.inOut',
    onUpdate: () => {
      ctx.camera.lookAt(ctx.currentLookTarget);
      if (ctx.controls) ctx.controls.target.copy(ctx.currentLookTarget);
    }
  }, startTime + 0.04);

  // Display Hologram Screen when camera settles
  tl.add(() => {
    if (ctx.hologramScreenInstance) {
      ctx.hologramScreenInstance.fadeIn(0.8);
    }

    // Refresh cube reflection one more time with full exterior lighting restored
    if (ctx.earthLandingManager) {
      ctx.earthLandingManager.updateCubeNow();
    }

    const camStatus = document.getElementById('cam-status');
    if (camStatus) camStatus.innerText = 'EXTERIOR_VIEW // DESTINATION_SELECTION_READY';
  }, startTime + duration * 0.82);
}

// ──────────────────────────────────────────────────────────
// Restoration to Station Room Interior (Cockpit View)
// ──────────────────────────────────────────────────────────

function _restoreToRoomInterior(tl, startTime, duration) {
  const ctx = _ctx;

  tl.add(() => {
    // 1. Reset Global Environment & Eliminate Any Fog
    ctx.scene.fog = null;
    ctx.scene.background = new THREE.Color(0x02040a);

    // 2. Reset Tone Mapping & Bloom
    if (ctx.renderer) ctx.renderer.toneMappingExposure = 1.25;
    if (ctx.bloomPass) {
      ctx.bloomPass.strength = 0.45;
      ctx.bloomPass.radius = 0.5;
      ctx.bloomPass.threshold = 0.92;
    }

    // 3. Make all interior meshes visible & restore opacities
    if (ctx.stationModel) {
      ctx.stationModel.visible = true;
      ctx.stationModel.traverse((node) => {
        if (node.isMesh && node.material) {
          const matName = (node.material.name || '').toLowerCase();
          const nodeName = (node.name || '').toLowerCase();
          const isGlass = matName.includes('glass') || nodeName.includes('glass');

          if (isGlass) {
            node.material.transparent = true;
            node.material.opacity = 0.22;
          } else {
            node.material.transparent = false;
            node.material.opacity = 1.0;
          }
          node.material.needsUpdate = true;
        }
      });
    }

    if (ctx.rocketDockingPadInstance) {
      ctx.rocketDockingPadInstance.group.visible = true;
      if (ctx.rocketDockingPadInstance.padRingGroup) {
        ctx.rocketDockingPadInstance.padRingGroup.visible = true;
      }
    }

    if (ctx.cursiveTextInstance) {
      if (ctx.cursiveTextInstance.group) ctx.cursiveTextInstance.group.visible = true;
      if (ctx.cursiveTextInstance.textMaterial) ctx.cursiveTextInstance.textMaterial.opacity = 1.0;
    }

    if (ctx.lidOverlayMesh) {
      ctx.lidOverlayMesh.visible = true;
      if (ctx.lidOverlayMesh.material) ctx.lidOverlayMesh.material.opacity = 0.52;
    }

    if (ctx.techAvatarInstance && ctx.techAvatarInstance.group) ctx.techAvatarInstance.group.visible = true;
    if (ctx.avatarLight) ctx.avatarLight.visible = true;

    if (ctx.hologramScreenInstance) {
      ctx.hologramScreenInstance.resetState();
      ctx.hologramScreenInstance.group.visible = false;
      ctx.hologramScreenInstance.isVisible = false;
    }

    // 4. Restore Cosmos Background
    if (ctx.cosmosBackground) {
      if (ctx.cosmosBackground.fadeIn) {
        ctx.cosmosBackground.fadeIn(0.6);
      } else if (ctx.cosmosBackground.group) {
        ctx.cosmosBackground.group.visible = true;
      }
    }

    // 5. Docked Rocket & Cube Camera refresh
    if (ctx.earthLandingManager && ctx.earthLandingManager.rocketModel) {
      const rm = ctx.earthLandingManager.rocketModel;
      rm.visible = true;
      rm.position.set(42.0, -6.25, 30.0);
      rm.rotation.set(0, 0, 0);
      rm.scale.set(1.0, 1.0, 1.0);
      rm.updateMatrixWorld(true);
      ctx.earthLandingManager.updateCubeNow();
    }
  }, startTime);

  // Restore Interior Lighting
  _restoreInteriorLighting(tl, startTime + 0.02, duration * 0.7);

  // Fast reverse camera fly into cockpit
  tl.to(ctx.camera.position, {
    x: ctx.INTERIOR_CAM_POS.x,
    y: ctx.INTERIOR_CAM_POS.y,
    z: ctx.INTERIOR_CAM_POS.z,
    duration: duration * 0.88,
    ease: 'power3.inOut',
    onUpdate: () => {
      ctx.camera.up.set(0, 1, 0);
      ctx.camera.lookAt(ctx.currentLookTarget);
      if (ctx.controls) ctx.controls.target.copy(ctx.currentLookTarget);
    }
  }, startTime + 0.04);

  tl.to(ctx.currentLookTarget, {
    x: ctx.INTERIOR_LOOK_TARGET.x,
    y: ctx.INTERIOR_LOOK_TARGET.y,
    z: ctx.INTERIOR_LOOK_TARGET.z,
    duration: duration * 0.88,
    ease: 'power3.inOut',
    onUpdate: () => {
      ctx.camera.lookAt(ctx.currentLookTarget);
      if (ctx.controls) ctx.controls.target.copy(ctx.currentLookTarget);
    }
  }, startTime + 0.04);

  tl.add(() => {
    const camStatus = document.getElementById('cam-status');
    if (camStatus) camStatus.innerText = 'INTERIOR_VIEW';

    // Refresh cube reflection in cockpit view
    if (ctx.earthLandingManager) {
      ctx.earthLandingManager.updateCubeNow();
    }
  }, startTime + duration * 0.85);
}

// ──────────────────────────────────────────────────────────
// Lighting Restorations
// ──────────────────────────────────────────────────────────

function _restoreInteriorLighting(tl, startTime, dur) {
  const ctx = _ctx;
  if (ctx.ambientLight) tl.to(ctx.ambientLight, { intensity: 1.2, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.hemisphereLight) tl.to(ctx.hemisphereLight, { intensity: 0.3, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.sunLight) tl.to(ctx.sunLight, { intensity: 1.5, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.cabinLight) tl.to(ctx.cabinLight, { intensity: 1.4, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.buttonRedLight) tl.to(ctx.buttonRedLight, { intensity: 4.5, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.rocketLight) tl.to(ctx.rocketLight, { intensity: 3.5, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.avatarLight) tl.to(ctx.avatarLight, { intensity: 0.85, duration: dur, ease: 'power2.inOut' }, startTime);

  if (ctx.stationEmissiveMaterials) {
    ctx.stationEmissiveMaterials.forEach((mat) => {
      tl.to(mat, { emissiveIntensity: 1.4, duration: dur, ease: 'power2.inOut' }, startTime);
    });
  }
}

function _restoreExteriorLighting(tl, startTime, dur) {
  const ctx = _ctx;
  if (ctx.ambientLight) tl.to(ctx.ambientLight, { intensity: 0.95, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.hemisphereLight) tl.to(ctx.hemisphereLight, { intensity: 0.35, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.sunLight) tl.to(ctx.sunLight, { intensity: 1.2, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.cabinLight) tl.to(ctx.cabinLight, { intensity: 0.8, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.buttonRedLight) tl.to(ctx.buttonRedLight, { intensity: 0.0, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.rocketLight) tl.to(ctx.rocketLight, { intensity: 2.2, duration: dur, ease: 'power2.inOut' }, startTime);
  if (ctx.avatarLight) tl.to(ctx.avatarLight, { intensity: 0.2, duration: dur, ease: 'power2.inOut' }, startTime);

  if (ctx.stationEmissiveMaterials) {
    ctx.stationEmissiveMaterials.forEach((mat) => {
      tl.to(mat, { emissiveIntensity: 0.0, duration: dur, ease: 'power2.inOut' }, startTime);
    });
  }
}
