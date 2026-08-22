import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";
import { UI_MANAGER } from "./ui.js";
import { CAMERA_RIG } from "./camera.js";
import { buildCinematicTimeline } from "./timeline.js";
import { WarpSystem } from "./warp.js";
import { AtmosphereSystem } from "./atmosphere.js";
import { StormSystem } from "./storm.js";
import { LandingSystem } from "./landing.js";

export class EarthLandingManager {
  constructor(scene, camera, renderer, composer, bloomPass, loadingManager) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.composer = composer;
    this.bloomPass = bloomPass;
    this.loadingManager = loadingManager || new THREE.LoadingManager();

    this.isActive = false;
    this.sequenceTime = 0.0;
    this.cinematicTimeline = null;
    this.landingLegs = [];
    this.rocketMaterials = [];
    this.targetMonolithRotationY = 0;

    this.initGroups();
    this.initLightsAndEnvironment();
    this.initSystems();
    this.initInteractionHandlers();
    this.loadAssets();
  }

  initGroups() {
    this.spaceGroup = new THREE.Group();
    this.spaceGroup.name = "EarthLandingSpaceGroup";
    this.spaceGroup.visible = false;
    this.scene.add(this.spaceGroup);

    this.oceanGroup = new THREE.Group();
    this.oceanGroup.name = "EarthLandingOceanGroup";
    this.oceanGroup.visible = false;
    this.scene.add(this.oceanGroup);

    // Earth Sphere
    this.earthGroup = new THREE.Group();
    this.earthGroup.name = "EarthGroup";
    this.spaceGroup.add(this.earthGroup);
    this.earthGroup.visible = false;
    ENGINE_STATE.earth = this.earthGroup;

    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x112244,
      roughness: 0.7,
      metalness: 0.1,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.35
    });
    const earthGeom = new THREE.SphereGeometry(120, 32, 32);
    const earthMesh = new THREE.Mesh(earthGeom, earthMat);
    this.earthGroup.add(earthMesh);
  }

  initLightsAndEnvironment() {
    // Real-time Cube Camera environment reflection mapping
    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      format: THREE.RGBAFormat
    });
    this.cubeCamera = new THREE.CubeCamera(0.1, 1000, this.cubeRenderTarget);
    this.scene.add(this.cubeCamera);

    // Shared Lights
    this.spaceAmbient = new THREE.AmbientLight(0xffffff, 0.6);
    this.spaceGroup.add(this.spaceAmbient);

    this.spaceSun = new THREE.DirectionalLight(0xffffff, 1.5);
    this.spaceSun.name = "spaceSun";
    this.spaceSun.position.set(-100, 150, 100);
    this.spaceGroup.add(this.spaceSun);

    this.earthFrontLight = new THREE.DirectionalLight(0xffffff, 0.0);
    this.earthFrontLight.name = "earthFrontLight";
    this.spaceGroup.add(this.earthFrontLight);

    this.hemisphereLight = new THREE.HemisphereLight(0x7dd3fc, 0x1e293b, 1.2);
    this.hemisphereLight.name = "earthLandingHemiLight";
    this.hemisphereLight.visible = false;
    this.scene.add(this.hemisphereLight);

    // Rocket green searchlight pointing downwards
    this.searchLight = new THREE.SpotLight(0x00ffaa, 20.0, 180, Math.PI / 5, 0.4, 0.5);
    this.searchLight.castShadow = true;
    this.searchLight.shadow.mapSize.width = 1024;
    this.searchLight.shadow.mapSize.height = 1024;
    this.searchLight.visible = false;
    this.scene.add(this.searchLight);
    this.scene.add(this.searchLight.target);

    // Circular target ring on the landing zone
    const targetRingGeom = new THREE.RingGeometry(4.0, 4.4, 32);
    const targetRingMat = new THREE.MeshBasicMaterial({ color: 0x00ffaa, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
    this.targetRing = new THREE.Mesh(targetRingGeom, targetRingMat);
    this.targetRing.rotation.x = -Math.PI / 2;
    this.targetRing.position.set(40.0, 7.01, -100.0);
    this.oceanGroup.add(this.targetRing);
  }

  initSystems() {
    this.warpSystem = new WarpSystem(this.spaceGroup);
    this.atmosphereSystem = new AtmosphereSystem(this.spaceGroup);
    this.landingSystem = new LandingSystem(this.oceanGroup);
    this.stormSystem = null;
  }

  initInteractionHandlers() {
    const rotateLeftBtn = document.getElementById("monolith-rotate-left");
    const rotateRightBtn = document.getElementById("monolith-rotate-right");

    if (rotateLeftBtn) {
      rotateLeftBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!this.monolithScene) return;
        this.targetMonolithRotationY -= Math.PI / 2;
        gsap.to(this.monolithScene.rotation, {
          y: this.targetMonolithRotationY,
          duration: 0.85,
          ease: "power2.out"
        });
      });
    }

    if (rotateRightBtn) {
      rotateRightBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!this.monolithScene) return;
        this.targetMonolithRotationY += Math.PI / 2;
        gsap.to(this.monolithScene.rotation, {
          y: this.targetMonolithRotationY,
          duration: 0.85,
          ease: "power2.out"
        });
      });
    }
  }

  loadAssets() {
    const gltfLoader = new GLTFLoader(this.loadingManager);

    // 1. Load Rocket Model
    gltfLoader.load(CONFIG.assets.rocketModel, (gltf) => {
      this.rocketModel = gltf.scene;
      this.rocketModel.scale.set(1.0, 1.0, 1.0);
      this.rocketModel.position.set(42.0, -6.25, 30.0);
      this.rocketModel.rotation.set(0, 0, 0);
      this.rocketModel.visible = true;
      this.scene.add(this.rocketModel);

      this.configureRocketModel(this.rocketModel);
      this.atmosphereSystem.createShell(this.rocketModel);

      this.stormSystem = new StormSystem(this.scene, this.rocketModel);

      // Thruster Flame
      const flameGeom = new THREE.ConeGeometry(0.8, 6.0, 16, 1, true);
      flameGeom.translate(0, -3.0, 0);
      const flameMat = new THREE.MeshBasicMaterial({
        color: 0xffaa44,
        transparent: true,
        opacity: 0.0,
        blending: THREE.AdditiveBlending
      });
      this.thrusterFlame = new THREE.Mesh(flameGeom, flameMat);
      this.thrusterFlame.position.set(0, -1.8, 0);
      this.rocketModel.add(this.thrusterFlame);

      this.checkReadyAndBuildTimeline();
    });

    // 2. Load Monolith Scene
    gltfLoader.load(CONFIG.assets.monolithScene, (gltf) => {
      this.monolithScene = gltf.scene;
      const s = 0.6 * 0.76;
      this.monolithScene.scale.set(s, s, s);
      this.monolithScene.position.set(0, 7.0, -72.0 + s * 45.0);
      this.oceanGroup.add(this.monolithScene);

      this.landingSystem.configureMonolith(this.monolithScene);
      this.landingSystem.activateOcean();

      this.checkReadyAndBuildTimeline();
    });
  }

  configureRocketModel(model) {
    model.traverse((node) => {
      if (node.name && (node.name.toLowerCase().includes("leg") || node.name.toLowerCase().includes("foot") || node.name.toLowerCase().includes("gear") || node.name.toLowerCase().includes("strut"))) {
        this.landingLegs.push(node);
        node.scale.set(0.001, 0.001, 0.001); // collapsed
      }

      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material) {
          const mats = Array.isArray(node.material) ? node.material : [node.material];
          mats.forEach((mat) => {
            this.rocketMaterials.push(mat);
            mat.metalness = 0.98;
            mat.roughness = 0.03;
            if (mat.color) mat.color.setHex(0xcccccc);
            mat.envMap = this.cubeRenderTarget.texture;
            mat.envMapIntensity = 1.0;
            mat.needsUpdate = true;
          });
        }
      }
    });
  }

  checkReadyAndBuildTimeline() {
    if (this.rocketModel && this.monolithScene && !this.cinematicTimeline) {
      this.cinematicTimeline = buildCinematicTimeline(
        this.rocketModel,
        this.earthGroup,
        this.spaceGroup,
        this.oceanGroup,
        this.renderer,
        this.camera,
        this.landingLegs,
        this.bloomPass
      );
      ENGINE_STATE.timeScale = CONFIG.timeScale || 2.0;
      this.cinematicTimeline.timeScale(ENGINE_STATE.timeScale);
      console.log("[EARTH LANDING] Cinematic timeline successfully built & ready!");
    }
  }

  startSequence() {
    this.isActive = true;
    this.spaceGroup.visible = true;
    this.hemisphereLight.visible = true;
    if (this.scene.background && this.scene.background.isColor) {
      this.scene.background.setHex(CONFIG.colors.bgSpace);
    } else {
      this.scene.background = new THREE.Color(CONFIG.colors.bgSpace);
    }
    if (this.scene.fog) {
      this.scene.fog.color.setHex(CONFIG.colors.bgSpace);
      this.scene.fog.density = 0.0;
    } else {
      this.scene.fog = new THREE.FogExp2(CONFIG.colors.bgSpace, 0.0);
    }

    if (this.rocketModel) {
      this.rocketModel.visible = true;
      this.rocketModel.position.set(42.0, -6.25, 30.0);
      this.rocketModel.rotation.set(0, 0, 0);
      this.rocketModel.scale.set(1.0, 1.0, 1.0);
      this.rocketModel.updateMatrixWorld(true);
    }

    CAMERA_RIG.currentPos.copy(this.camera.position);
    CAMERA_RIG.targetPos.copy(this.camera.position);
    CAMERA_RIG.currentLook.set(38.71423, -5.01504, 30.55209);
    CAMERA_RIG.targetLook.set(38.71423, -5.01504, 30.55209);
    CAMERA_RIG.instantSnapNextFrame = true;
    CAMERA_RIG.localYOffset = -8.0;

    if (this.cinematicTimeline) {
      this.cinematicTimeline.play(0);
    }

    console.log("[EARTH LANDING] Sequence ignited at 50/50 starting frame with zero 1-frame hitch!");
  }

  updateCubeNow() {
    if (this.rocketModel && this.cubeCamera && this.rocketModel.visible) {
      const origVis = this.rocketModel.visible;
      const origShadows = this.renderer.shadowMap.enabled;
      this.renderer.shadowMap.enabled = false;
      this.rocketModel.visible = false;
      this.cubeCamera.position.copy(this.rocketModel.position);
      this.cubeCamera.update(this.renderer, this.scene);
      this.rocketModel.visible = origVis;
      this.renderer.shadowMap.enabled = origShadows;
      this.hasRenderedInitialCube = true;
    }
  }

  update(elapsed, delta) {
    // Smart Throttled Dynamic Cube Camera (every 6 frames or once on load)
    if (this.rocketModel && this.cubeCamera && this.rocketModel.visible) {
      if (!this.cubeFrameCounter) this.cubeFrameCounter = 0;
      this.cubeFrameCounter++;
      const isAnyWarpActive = this.isActive || (window.koppulaSystemManager && window.koppulaSystemManager.isActive);
      const shouldUpdateCube = !this.hasRenderedInitialCube || (isAnyWarpActive && this.cubeFrameCounter % 2 === 0);
      if (shouldUpdateCube) {
        this.updateCubeNow();
      }
    }

    if (!this.isActive) {
      if (this.warpSystem && (this.spaceGroup.visible || ENGINE_STATE.starsOpacity > 0.001)) {
        this.warpSystem.update(elapsed, this.camera, delta);
      }
      return;
    }

    const scaledDelta = delta * ENGINE_STATE.timeScale;

    if (this.cinematicTimeline) {
      if (this.cinematicTimeline.timeScale() !== ENGINE_STATE.timeScale) {
        this.cinematicTimeline.timeScale(ENGINE_STATE.timeScale);
      }
      ENGINE_STATE.timelineTime = this.cinematicTimeline.time();
    }

    if (ENGINE_STATE.currentScene !== "INITIAL") {
      this.sequenceTime += scaledDelta;
    } else {
      this.sequenceTime = 0.0;
    }
    ENGINE_STATE.globalTime = this.sequenceTime;

    UI_MANAGER.tick(this.rocketModel);

    // Camera Rig update
    CAMERA_RIG.update(this.camera, this.rocketModel, this.sequenceTime, scaledDelta);

    // Searchlight & Target Ring
    if (this.rocketModel && this.searchLight) {
      this.searchLight.position.copy(this.rocketModel.position);
      this.searchLight.target.position.set(this.rocketModel.position.x, this.rocketModel.position.y - 60.0, this.rocketModel.position.z);
      this.searchLight.visible = this.rocketModel.visible && (ENGINE_STATE.currentScene !== "WARP" && ENGINE_STATE.currentScene !== "INITIAL" && ENGINE_STATE.currentScene !== "SNAP_BACK");
    }

    if (this.targetRing) {
      this.targetRing.visible = (ENGINE_STATE.currentScene === "STORM" || ENGINE_STATE.currentScene === "LANDING" || ENGINE_STATE.currentScene === "MANUAL");
    }

    // Reentry curvy trajectory calculation
    if (ENGINE_STATE.currentScene === "REENTRY" && this.rocketModel) {
      const u = ENGINE_STATE.rocketArcProgress;
      const rx = 99.45 * (1.0 - u) - 31.84 * u - 378.02 * u * (1.0 - u);
      const ry = -53.54 + 433.54 * u;
      const rz = 25.23 * (1.0 - u) - 16.91 * u + 68.56 * u * (1.0 - u);
      const scale = 10.0 * (1.0 - 0.94 * u);

      this.rocketModel.position.set(rx, ry, rz);
      this.rocketModel.scale.set(scale, scale, scale);

      const nextU = Math.min(u + 0.002, 1.0);
      const nextRx = 99.45 * (1.0 - nextU) - 31.84 * nextU - 378.02 * nextU * (1.0 - nextU);
      const nextRy = -53.54 + 433.54 * nextU;
      const nextRz = 25.23 * (1.0 - nextU) - 16.91 * nextU + 68.56 * nextU * (1.0 - nextU);

      const travelDir = new THREE.Vector3(nextRx - rx, nextRy - ry, nextRz - rz).normalize();
      const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), travelDir);
      if (u === 0) {
        this.rocketModel.quaternion.copy(targetQuaternion);
      } else {
        this.rocketModel.quaternion.slerp(targetQuaternion, 0.08);
      }
    }

    // Thruster Flame scale/opacity
    if (this.thrusterFlame) {
      const scale = ENGINE_STATE.thrusterIntensity / 8.0;
      this.thrusterFlame.scale.set(1.0, scale, 1.0);
      this.thrusterFlame.material.opacity = scale * 0.85;
    }

    // Whiteout storm overlay
    const whiteoutOverlay = document.getElementById("storm-overlay");
    if (whiteoutOverlay) {
      whiteoutOverlay.style.opacity = ENGINE_STATE.whiteoutOpacity;
    }

    // Update Modular Systems
    if (this.warpSystem) this.warpSystem.update(this.sequenceTime, this.camera, scaledDelta);
    if (this.atmosphereSystem) this.atmosphereSystem.update(this.sequenceTime);
    if (this.landingSystem) this.landingSystem.update(this.sequenceTime, this.rocketModel);
    if (this.stormSystem) this.stormSystem.update(this.sequenceTime, scaledDelta, this.rocketModel, this.camera);

    // Fog & Background Colors
    let fogColorHex = CONFIG.colors.bgSpace;
    if (ENGINE_STATE.currentScene === "STORM") {
      fogColorHex = CONFIG.colors.bgStorm;
    } else if (ENGINE_STATE.currentScene === "LANDING" || ENGINE_STATE.currentScene === "MANUAL") {
      fogColorHex = CONFIG.colors.bgLanding;
    }
    const fogColor = new THREE.Color(fogColorHex);
    if (this.scene.fog) {
      this.scene.fog.color.copy(fogColor);
      this.scene.background.copy(fogColor);
      this.scene.fog.density = THREE.MathUtils.lerp(this.scene.fog.density, ENGINE_STATE.globalFogDensity || 0.0, 0.05);
    }

    // Monolith Ascension & Base Pillar Sync
    if (this.monolithScene) {
      const s = 0.6 * 0.76;
      const isLandingPhase = (ENGINE_STATE.currentScene === "LANDING" || ENGINE_STATE.currentScene === "MANUAL");
      const progress = isLandingPhase ? (ENGINE_STATE.monolithRiseProgress !== undefined ? ENGINE_STATE.monolithRiseProgress : 1.0) : 1.0;
      const startDepth = (CONFIG.monolith && CONFIG.monolith.startDepth) ? CONFIG.monolith.startDepth : -45.0;
      const currentY = 7.0 + startDepth * (1.0 - progress);

      this.monolithScene.scale.set(s, s, s);

      const rotY = this.monolithScene.rotation.y;
      const pivotOffset = s * 45.0;
      const posX = pivotOffset * Math.sin(rotY);
      const posZ = -72.0 + pivotOffset * Math.cos(rotY);

      this.monolithScene.position.set(posX, currentY, posZ);

      if (this.landingSystem && this.landingSystem.monolithPillar) {
        this.landingSystem.monolithPillar.rotation.y = this.monolithScene.rotation.y;
      }

      // Update 3D-anchored spatial position and visibility for monolith rotation buttons
      const rotContainer = document.getElementById("monolith-rotation-controls");
      const leftBtn = document.getElementById("monolith-rotate-left");
      const rightBtn = document.getElementById("monolith-rotate-right");

      if (rotContainer && leftBtn && rightBtn) {
        const isFullyRisen = isLandingPhase && (ENGINE_STATE.monolithRiseProgress !== undefined && ENGINE_STATE.monolithRiseProgress >= 0.98);
        if (isFullyRisen) {
          rotContainer.classList.add("visible");
          const vecLeft = new THREE.Vector3(-13.0, 14.0, -72.0);
          const vecRight = new THREE.Vector3(13.0, 14.0, -72.0);

          vecLeft.project(this.camera);
          vecRight.project(this.camera);

          const lx = (vecLeft.x * 0.5 + 0.5) * window.innerWidth;
          const ly = (-(vecLeft.y * 0.5) + 0.5) * window.innerHeight;
          const rx = (vecRight.x * 0.5 + 0.5) * window.innerWidth;
          const ry = (-(vecRight.y * 0.5) + 0.5) * window.innerHeight;

          leftBtn.style.left = `${lx}px`;
          leftBtn.style.top = `${ly}px`;
          rightBtn.style.left = `${rx}px`;
          rightBtn.style.top = `${ry}px`;
        } else {
          rotContainer.classList.remove("visible");
        }
      }
    }
  }
}
