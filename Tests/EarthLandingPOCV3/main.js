import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { CONFIG } from "./js/config.js";
import { ENGINE_STATE } from "./js/state.js";
import { UI_MANAGER } from "./js/ui.js";
import { CAMERA_RIG } from "./js/camera.js";
import { buildCinematicTimeline } from "./js/timeline.js";
import { WarpSystem } from "./js/warp.js";
import { AtmosphereSystem } from "./js/atmosphere.js";
import { StormSystem } from "./js/storm.js";
import { LandingSystem } from "./js/landing.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Main WebGL Setup
const canvas = document.getElementById("webgl-canvas");
const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.colors.bgSpace);
scene.fog = new THREE.FogExp2(CONFIG.colors.bgSpace, 0.0);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  powerPreference: "high-performance"
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.90; // Reduced from 1.35 to restore deep contrast and cinematic shadow levels

// Real-time Cube Camera environment reflection mapping
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
  generateMipmaps: true,
  minFilter: THREE.LinearMipmapLinearFilter,
  format: THREE.RGBAFormat
});
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

// Post-Processing Composer and Bloom Pass
const renderPass = new RenderPass(scene, camera);
export const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.0, 1.0, 0.65);
export const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);

// Coordinate isolate groups
export const spaceGroup = new THREE.Group();
export const oceanGroup = new THREE.Group();
scene.add(spaceGroup);
scene.add(oceanGroup);

// Default blue sphere for Earth
export const earthGroup = new THREE.Group();
spaceGroup.add(earthGroup);
earthGroup.visible = false;
ENGINE_STATE.earth = earthGroup;

const earthMat = new THREE.MeshStandardMaterial({
  color: 0x112244,
  roughness: 0.7,
  metalness: 0.1,
  emissive: 0x1d4ed8,
  emissiveIntensity: 0.35
});
const earthGeom = new THREE.SphereGeometry(120, 32, 32);
const earthMesh = new THREE.Mesh(earthGeom, earthMat);
earthGroup.add(earthMesh);

// Shared Lights
const spaceAmbient = new THREE.AmbientLight(0xffffff, 0.9); // Raised ambient light for clean blockout visibility
spaceGroup.add(spaceAmbient);

const spaceSun = new THREE.DirectionalLight(0xffffff, 1.5); // Prevent blowing out highlights on chrome rocket
spaceSun.name = "spaceSun";
spaceSun.position.set(-100, 150, 100);
spaceGroup.add(spaceSun);

const earthFrontLight = new THREE.DirectionalLight(0xffffff, 0.0);
earthFrontLight.name = "earthFrontLight";
spaceGroup.add(earthFrontLight);

// Hemisphere Fill Light to keep the shadow areas lit
const hemisphereLight = new THREE.HemisphereLight(0x7dd3fc, 0x1e293b, 1.2); // sky blue, dark gray, intensity
scene.add(hemisphereLight);

// Rocket green searchlight pointing downwards in world coordinates
export const searchLight = new THREE.SpotLight(0x00ffaa, 20.0, 180, Math.PI / 5, 0.4, 0.5);
searchLight.castShadow = true;
searchLight.shadow.mapSize.width = 1024;
searchLight.shadow.mapSize.height = 1024;
scene.add(searchLight);
scene.add(searchLight.target);

// Ocean coordinates landing target grid helper (green)
export const oceanGrid = new THREE.GridHelper(800, 80, 0x00ff66, 0x032210);
oceanGrid.position.y = 0.2;
oceanGrid.visible = false;
oceanGroup.add(oceanGrid);

// Flight Trajectory descent path line (neon green)
const pathPoints = [
  new THREE.Vector3(1.4, 120, 2.0), // deep space start
  new THREE.Vector3(1.4, 45, 2.0),  // storm entry
  new THREE.Vector3(0.7, 20, -21.5), // midway descent
  new THREE.Vector3(0.0, 2.9, -45.0) // landing target
];
const pathCurve = new THREE.CatmullRomCurve3(pathPoints);
const pathGeom = new THREE.BufferGeometry().setFromPoints(pathCurve.getPoints(80));
const pathMat = new THREE.LineDashedMaterial({
  color: 0x00ffaa,
  dashSize: 2.5,
  gapSize: 1.5
});
export const trajectoryLine = new THREE.Line(pathGeom, pathMat);
trajectoryLine.computeLineDistances();
scene.add(trajectoryLine);

// Circular target ring on the landing zone
const targetRingGeom = new THREE.RingGeometry(4.0, 4.4, 32);
const targetRingMat = new THREE.MeshBasicMaterial({ color: 0x00ffaa, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
export const targetRing = new THREE.Mesh(targetRingGeom, targetRingMat);
targetRing.rotation.x = -Math.PI / 2;
targetRing.position.set(20.0, 0.25, -65.0);
oceanGroup.add(targetRing);

// Vertical laser beacon connecting rocket to its ground projection point
const beaconGeom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -1, 0)]);
const beaconMat = new THREE.LineBasicMaterial({ color: 0x00ff66, transparent: true, opacity: 0.65 });
export const beaconLine = new THREE.Line(beaconGeom, beaconMat);
scene.add(beaconLine);

// Camera Initial Locking
camera.position.copy(CONFIG.camera.initial.pos);
camera.lookAt(CONFIG.camera.initial.look);

// Initialize modular visual systems
const warpSystem = new WarpSystem(spaceGroup);
const atmosphereSystem = new AtmosphereSystem(spaceGroup);
const landingSystem = new LandingSystem(oceanGroup);
let stormSystem = null; // initialized when rocket loads

// Loading Manager
const loadingManager = new THREE.LoadingManager();
const gltfLoader = new GLTFLoader(loadingManager);

const RingShader = {
  vertex: `
    varying vec2 vUv;
    varying vec3 vLocalPos;
    void main() {
      vUv = uv;
      vLocalPos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragment: `
    varying vec2 vUv;
    varying vec3 vLocalPos;
    uniform float uTime;
    uniform float uOpacity;
    
    void main() {
      // Angle around the ring center (XY plane in geometry coords)
      float angle = atan(vLocalPos.y, vLocalPos.x);
      
      // Radial glow (fade out towards inner and outer edges)
      float radialGlow = sin(vUv.y * 3.14159);
      
      // Rotating segments (arcs)
      float speed = uTime * 3.0;
      float arc = step(0.0, sin(angle * 6.0 + speed)) * step(0.55, cos(angle * 2.5 - speed * 0.4));
      
      // Solid outer/inner thin boundaries
      float edge = step(0.95, vUv.y) + step(vUv.y, 0.05);
      
      float intensity = (arc * 2.0 + edge * 0.4) * radialGlow;
      vec3 color = vec3(0.0, 1.0, 0.4); // Neon green HUD color
      
      gl_FragColor = vec4(color, intensity * uOpacity);
    }
  `
};

let diagnosticGroup = null;
const ringMaterials = [];

export let rocketModel = null;
export let monolithScene = null;
let landingLegs = [];
let cinematicTimeline = null;
let thrusterFlame = null;
const analysisMaterials = [];
export const rocketMaterials = [];


// Animate color variations of rocket hull
const reentryHullColor = new THREE.Color(0xffffff);

loadingManager.onProgress = (url, loaded, total) => {
  const pct = Math.floor((loaded / total) * 100);
  UI_MANAGER.updateProgress(pct, "Syncing Systems");
};

loadingManager.onLoad = () => {
  landingSystem.configureMonolith(monolithScene);
  landingSystem.activateOcean();
  
  cinematicTimeline = buildCinematicTimeline(rocketModel, earthGroup, spaceGroup, oceanGroup, renderer, camera, landingLegs);
  window.cinematicTimeline = cinematicTimeline;
  window.scene = scene;
  window.camera = camera;
  window.rocketModel = rocketModel;
  window.ENGINE_STATE = ENGINE_STATE;
  
  // Apply timeScale
  ENGINE_STATE.timeScale = CONFIG.timeScale || 1.0;
  cinematicTimeline.timeScale(ENGINE_STATE.timeScale);
  
  UI_MANAGER.hideLoader(() => {
    startSequence();
  });
};

loadingManager.onError = (url) => {
  console.error("Critical System Load Failure on: " + url);
};

// Configure Rocket Matte Grey properties and locate landing legs
function configureRocketModel(model) {
  model.traverse((node) => {
    if (node.name && (node.name.toLowerCase().includes("leg") || node.name.toLowerCase().includes("foot") || node.name.toLowerCase().includes("gear") || node.name.toLowerCase().includes("strut"))) {
      landingLegs.push(node);
      node.scale.set(0.001, 0.001, 0.001); // collapsed
    }
    
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material) {
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach((mat) => {
          rocketMaterials.push(mat);
          mat.metalness = 0.99;
          mat.roughness = 0.01;
          if (mat.color) mat.color.setHex(0xffffff); // Pure white base for correct mirror reflections
          mat.envMap = cubeRenderTarget.texture; // Enable real-time reflection
          mat.envMapIntensity = 1.8; // Reduced specular reflection intensity (was 3.0)
          mat.needsUpdate = true;
          
          // Inject custom diagnostic scan overlay
          mat.onBeforeCompile = (shader) => {
            shader.uniforms.uAnalysisTime = { value: 0.0 };
            shader.uniforms.uAnalysisActive = { value: 1.0 };
            
            // 1. Inject local position varying in vertex shader
            shader.vertexShader = 'varying vec3 vLocalPosition;\n' + shader.vertexShader;
            shader.vertexShader = shader.vertexShader.replace(
              '#include <begin_vertex>',
              '#include <begin_vertex>\nvLocalPosition = position;'
            );
            
            // 2. Inject varying and uniforms in fragment shader
            shader.fragmentShader = 'varying vec3 vLocalPosition;\nuniform float uAnalysisTime;\nuniform float uAnalysisActive;\n' + shader.fragmentShader;
            
            // 3. Inject diagnostic overlays
            const entry = '#include <dithering_fragment>';
            const replacement = `
              #include <dithering_fragment>
              if (uAnalysisActive > 0.01) {
                float yPos = vLocalPosition.y;
                float angle = atan(vLocalPosition.x, vLocalPosition.z);
                
                // 1. Sliding scanning bar (neon ring)
                float scanBar = sin(uAnalysisTime * 1.8) * 4.5;
                float ring = smoothstep(0.18, 0.0, abs(yPos - scanBar));
                
                // 2. Rotating diagnostic arcs confined to moving bands
                float arcSpeed = uAnalysisTime * 3.5;
                float arcSegment = step(0.0, sin(angle * 4.0 + arcSpeed)) * step(0.72, cos(angle * 1.5 - arcSpeed * 0.4));
                float band1 = smoothstep(0.25, 0.0, abs(yPos - sin(uAnalysisTime * 1.2) * 3.0));
                float band2 = smoothstep(0.15, 0.0, abs(yPos - cos(uAnalysisTime * 2.0) * 2.0));
                float activeBands = band1 + band2;
                float arcRing = activeBands * arcSegment;
                
                // 3. Technical dashed dot grid pattern
                float gridDots = step(0.975, sin(angle * 32.0)) * step(0.975, sin(yPos * 16.0));
                
                // 4. Vertical scrolling scanning lines
                float vertLine = step(0.992, cos(angle * 8.0 + uAnalysisTime * 0.5));
                
                // 5. Combined HUD scan glow
                vec3 diagnosticGreen = vec3(0.0, 1.0, 0.4); // Neon green HUD
                float totalGlow = (ring * 1.5 + arcRing * 2.5 + gridDots * 0.9 + vertLine * 0.65) * uAnalysisActive;
                
                gl_FragColor.rgb = mix(gl_FragColor.rgb, diagnosticGreen, totalGlow * 0.55);
                gl_FragColor.rgb += diagnosticGreen * totalGlow * 1.4;
              }
            `;
            shader.fragmentShader = shader.fragmentShader.replace(entry, replacement);
            
            mat.userData.shader = shader;
            analysisMaterials.push(mat);
          };
        });
      }
    }
  });
}

// Load assets
gltfLoader.load(CONFIG.assets.rocketModel, (gltf) => {
  rocketModel = gltf.scene;
  rocketModel.scale.set(0.65, 0.65, 0.65);
  rocketModel.position.set(12.0, -1.0, -0.5);
  rocketModel.rotation.set(Math.PI / 2, 0, 5 * Math.PI / 180);
  scene.add(rocketModel);
  
  configureRocketModel(rocketModel);
  atmosphereSystem.createShell(rocketModel);
  
  // Create 3D holographic diagnostic rings
  diagnosticGroup = new THREE.Group();
  rocketModel.add(diagnosticGroup);
  
  const ringConfigs = [
    { inner: 1.12, outer: 1.22, y: 1.5 },
    { inner: 1.18, outer: 1.26, y: -0.5 },
    { inner: 1.25, outer: 1.35, y: -2.2 }
  ];
  
  ringConfigs.forEach((cfg) => {
    const geom = new THREE.RingGeometry(cfg.inner, cfg.outer, 64);
    const mat = new THREE.ShaderMaterial({
      vertexShader: RingShader.vertex,
      fragmentShader: RingShader.fragment,
      uniforms: {
        uTime: { value: 0.0 },
        uOpacity: { value: 0.0 }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    
    const mesh = new THREE.Mesh(geom, mat);
    mesh.rotation.x = Math.PI / 2; // Lie horizontal in XZ plane
    mesh.position.y = cfg.y;
    
    diagnosticGroup.add(mesh);
    ringMaterials.push(mat);
  });
  
  // Initialize storm system with reference to rocket model for lightning tracking
  stormSystem = new StormSystem(scene, rocketModel);
  
  // Add a simple thruster flame cone mesh at the bottom of the engine bells
  const flameGeom = new THREE.ConeGeometry(0.8, 6.0, 16, 1, true);
  flameGeom.translate(0, -3.0, 0);
  const flameMat = new THREE.MeshBasicMaterial({
    color: 0xffaa44,
    transparent: true,
    opacity: 0.0,
    blending: THREE.AdditiveBlending
  });
  thrusterFlame = new THREE.Mesh(flameGeom, flameMat);
  thrusterFlame.position.set(0, -1.8, 0);
  rocketModel.add(thrusterFlame);
});

gltfLoader.load(CONFIG.assets.monolithScene, (gltf) => {
  monolithScene = gltf.scene;
  monolithScene.scale.set(0.6, 0.6, 0.6);
  monolithScene.position.set(0, 2.5, -45);
  oceanGroup.add(monolithScene);
});

function startSequence() {
  orbitControls.enabled = false;
  window.activeControls = null;
  if (cinematicTimeline) {
    // Debug Mode: Seek with suppressEvents=false so all preceding setup callbacks run, then play
    cinematicTimeline.seek(CONFIG.timeline.landingStart - 0.1, false);
    cinematicTimeline.play();
  }
}

// Tick loop
const clock = new THREE.Clock();
let sequenceTime = 0.0;
let prevActiveControls = null; // Track orbit control transitions to reset camera on dismiss

function tick() {
  const delta = clock.getDelta() * ENGINE_STATE.timeScale;
  if (cinematicTimeline) {
    if (cinematicTimeline.timeScale() !== ENGINE_STATE.timeScale) {
      cinematicTimeline.timeScale(ENGINE_STATE.timeScale);
    }
    ENGINE_STATE.timelineTime = cinematicTimeline.time();
  } else {
    ENGINE_STATE.timelineTime = 0.0;
  }
  
  if (ENGINE_STATE.currentScene !== "INITIAL") {
    sequenceTime += delta;
  } else {
    sequenceTime = 0.0;
  }
  ENGINE_STATE.globalTime = sequenceTime;
  
  UI_MANAGER.tick(rocketModel);
  
  // Update dynamic cube reflection camera
  if (rocketModel && cubeCamera) {
    const originalVisibility = rocketModel.visible;
    rocketModel.visible = false;
    cubeCamera.position.copy(rocketModel.position);
    cubeCamera.update(renderer, scene);
    rocketModel.visible = originalVisibility;
  }
  
  // Update camera rig continuous movement
  CAMERA_RIG.update(camera, rocketModel, sequenceTime, delta);
  
  // Update searchlight target and position
  if (rocketModel && searchLight) {
    searchLight.position.copy(rocketModel.position);
    searchLight.target.position.set(rocketModel.position.x, rocketModel.position.y - 60.0, rocketModel.position.z);
  }

  // Update vertical beacon laser line to project rocket's ground location
  if (rocketModel && beaconLine) {
    const rPos = rocketModel.position;
    const targetY = (ENGINE_STATE.currentScene === "STORM" || ENGINE_STATE.currentScene === "LANDING" || ENGINE_STATE.currentScene === "MANUAL") ? 0.2 : -15.0;
    const points = [
      rPos.clone(),
      new THREE.Vector3(rPos.x, targetY, rPos.z)
    ];
    beaconLine.geometry.setFromPoints(points);
    
    // Only show beacon line during descent when rocket is visible
    const isDescent = (ENGINE_STATE.currentScene === "REENTRY" || ENGINE_STATE.currentScene === "STORM" || ENGINE_STATE.currentScene === "LANDING");
    beaconLine.visible = isDescent && rocketModel.visible;
  }

  // Update visibility of flight path trajectory line, target ring, and searchlight
  if (trajectoryLine) {
    trajectoryLine.visible = false;
  }
  if (targetRing) {
    targetRing.visible = (ENGINE_STATE.currentScene === "STORM" || ENGINE_STATE.currentScene === "LANDING" || ENGINE_STATE.currentScene === "MANUAL");
  }
  if (searchLight) {
    // Only show searchlight when the rocket is visible and not in warp/silhouette phase
    searchLight.visible = rocketModel && rocketModel.visible && (ENGINE_STATE.currentScene !== "WARP" && ENGINE_STATE.currentScene !== "INITIAL" && ENGINE_STATE.currentScene !== "SNAP_BACK");
  }

  // Update rocket hull analysis shader uniforms (disabled during Warp and Initial phases)
  const isAnalysisActive = (ENGINE_STATE.currentScene !== "WARP" && ENGINE_STATE.currentScene !== "INITIAL" && ENGINE_STATE.currentScene !== "LANDING" && ENGINE_STATE.currentScene !== "MANUAL");
  const targetActive = isAnalysisActive ? 1.0 : 0.0;
  
  analysisMaterials.forEach((mat) => {
    if (mat.userData.shader) {
      mat.userData.shader.uniforms.uAnalysisTime.value = sequenceTime;
      const currentVal = mat.userData.shader.uniforms.uAnalysisActive.value;
      mat.userData.shader.uniforms.uAnalysisActive.value = THREE.MathUtils.lerp(currentVal, targetActive, 0.06);
    }
  });
  
  // Update 3D holographic diagnostic rings uniforms and positions
  if (diagnosticGroup) {
    ringMaterials.forEach((mat) => {
      mat.uniforms.uTime.value = sequenceTime;
      const currentOpacity = mat.uniforms.uOpacity.value;
      mat.uniforms.uOpacity.value = THREE.MathUtils.lerp(currentOpacity, targetActive * 0.75, 0.06);
    });
    
    // Slide the rings up and down along Y axis using independent speeds and offsets
    if (diagnosticGroup.children.length >= 3) {
      diagnosticGroup.children[0].position.y = 1.5 + Math.sin(sequenceTime * 1.5) * 1.0;
      diagnosticGroup.children[1].position.y = -0.5 + Math.cos(sequenceTime * 2.2) * 1.2;
      diagnosticGroup.children[2].position.y = -2.2 + Math.sin(sequenceTime * 0.9 + 1.5) * 0.8;
    }
  }

  // Update modular scene system parameters
  warpSystem.update(sequenceTime, camera, delta);
  atmosphereSystem.update(sequenceTime);
  landingSystem.update(sequenceTime, rocketModel);
  if (stormSystem) {
    stormSystem.update(sequenceTime, delta, rocketModel, camera);
  }
  
  // Apply whiteout overlay opacity
  const whiteoutOverlay = document.getElementById("storm-overlay");
  if (whiteoutOverlay) {
    whiteoutOverlay.style.opacity = ENGINE_STATE.whiteoutOpacity;
  }
  
  // Update rocket's curvy arc path towards Earth (finesse shot wide right, curving behind Earth)
  if (ENGINE_STATE.currentScene === "REENTRY" && rocketModel) {
    const u = ENGINE_STATE.rocketArcProgress;
    // Curving diagonally from the bottom-left of the screen, looping wide around the Earth's right limb.
    // Start position (u=0): (99.45, -53.54, 25.23) -> 100.0 units behind camera, offset bottom-left to prevent lens clipping, scaled to 10.0 (half-size)
    // End position (u=1): (-31.84, 380.0, -16.91) -> Behind Earth, physically outside its 54-unit radius (dist: 90.1) but visually occluded
    // Middle excursion (u=0.5): (-60.7, 163.23, 21.3) -> Wide-Right loop clear of Earth's surface (dist: 134.2)
    const rx = 99.45 * (1.0 - u) - 31.84 * u - 378.02 * u * (1.0 - u);
    const ry = -53.54 + 433.54 * u;
    const rz = 25.23 * (1.0 - u) - 16.91 * u + 68.56 * u * (1.0 - u);
    const scale = 10.0 * (1.0 - 0.94 * u); // Starts at 10.0 (half size), shrinks to 0.6 at the end
    
    rocketModel.position.set(rx, ry, rz);
    rocketModel.scale.set(scale, scale, scale);
    
    // Calculate direction of travel (tangent of the path) for realistic steering
    const nextU = Math.min(u + 0.002, 1.0);
    const nextRx = 99.45 * (1.0 - nextU) - 31.84 * nextU - 378.02 * nextU * (1.0 - nextU);
    const nextRy = -53.54 + 433.54 * nextU;
    const nextRz = 25.23 * (1.0 - nextU) - 16.91 * nextU + 68.56 * nextU * (1.0 - nextU);
    
    const travelDir = new THREE.Vector3(nextRx - rx, nextRy - ry, nextRz - rz).normalize();
    
    // Instantly snap rotation to initial tangent at u === 0 to prevent abrupt turning; smoothly slerp thereafter
    const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), travelDir);
    if (u === 0) {
      rocketModel.quaternion.copy(targetQuaternion);
    } else {
      rocketModel.quaternion.slerp(targetQuaternion, 0.08);
    }
  }
  
  // Thruster Flame scale/opacity updates
  if (thrusterFlame) {
    const scale = ENGINE_STATE.thrusterIntensity / 8.0;
    thrusterFlame.scale.set(1.0, scale, 1.0);
    thrusterFlame.material.opacity = scale * 0.85;
  }
  
  // Synchronize dynamic scene fog
  if (ENGINE_STATE.currentScene === "STORM") {
    scene.fog.color.setHex(CONFIG.colors.bgStorm);
    scene.fog.density = ENGINE_STATE.globalFogDensity;
  } else if (ENGINE_STATE.currentScene === "LANDING" || ENGINE_STATE.currentScene === "MANUAL") {
    scene.fog.color.setHex(CONFIG.colors.bgLanding);
    scene.fog.density = ENGINE_STATE.globalFogDensity;
  } else if (ENGINE_STATE.currentScene === "REENTRY") {
    scene.fog.color.setHex(CONFIG.colors.bgSpace);
    scene.fog.density = ENGINE_STATE.globalFogDensity;
  } else {
    scene.fog.density = 0.0;
  }
  
  if (window.activeControls) {
    window.activeControls.update();
  } else if (prevActiveControls) {
    // activeControls was just cleared — snap the camera rig back to the default
    // position so it resumes smooth lerping from the correct starting point
    CAMERA_RIG.resetToDefault();
  }
  prevActiveControls = window.activeControls || null;

  composer.render();
  requestAnimationFrame(tick);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    if (cinematicTimeline && cinematicTimeline.paused()) {
      cinematicTimeline.resume();
      console.log("[INPUT] Resumed cinematic timeline via keypress.");
    }
  }
});

// Settings UI & Metalness Slider Logic
const settingsBtn = document.getElementById("hud-settings-btn");
const settingsPanel = document.getElementById("hud-settings-panel");
const metallicSlider = document.getElementById("metallic-slider");
const metallicVal = document.getElementById("metallic-val");

if (settingsBtn && settingsPanel) {
  settingsBtn.addEventListener("click", () => {
    const isVisible = settingsPanel.style.display === "flex";
    settingsPanel.style.display = isVisible ? "none" : "flex";
  });
}

if (metallicSlider) {
  metallicSlider.addEventListener("input", (e) => {
    const value = e.target.value;
    if (metallicVal) metallicVal.innerText = `${value}%`;
    const valFloat = parseFloat(value) / 100;
    rocketMaterials.forEach((mat) => {
      mat.metalness = valFloat;
      mat.needsUpdate = true;
    });
  });
}

// Initialize OrbitControls (active by default so the user can frame the camera)
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.05;
orbitControls.enabled = true;
orbitControls.target.copy(CONFIG.camera.initial.look);
window.activeControls = orbitControls;

// Rocket position & rotation inputs
const posX = document.getElementById("rocket-pos-x");
const posY = document.getElementById("rocket-pos-y");
const posZ = document.getElementById("rocket-pos-z");
const rotX = document.getElementById("rocket-rot-x");
const rotY = document.getElementById("rocket-rot-y");
const rotZ = document.getElementById("rocket-rot-z");
const applyBtn = document.getElementById("settings-apply-btn");
const copyBtn = document.getElementById("settings-copy-btn");

function applyRocketTransform() {
  if (!rocketModel) return;
  
  const px = parseFloat(posX?.value) || 0;
  const py = parseFloat(posY?.value) || 0;
  const pz = parseFloat(posZ?.value) || 0;
  
  rocketModel.position.set(px, py, pz);
  
  // Keep the OrbitControls target locked to the rocket position as it changes
  if (orbitControls.enabled) {
    orbitControls.target.set(px, py, pz);
  }
  
  const deg = Math.PI / 180;
  rocketModel.rotation.set(
    (parseFloat(rotX?.value) || 0) * deg,
    (parseFloat(rotY?.value) || 0) * deg,
    (parseFloat(rotZ?.value) || 0) * deg
  );
}

if (applyBtn) {
  applyBtn.addEventListener("click", applyRocketTransform);
}

[posX, posY, posZ, rotX, rotY, rotZ].forEach((el) => {
  if (el) el.addEventListener("change", applyRocketTransform);
  if (el) el.addEventListener("input", applyRocketTransform);
});

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const rx = rocketModel ? rocketModel.position.x.toFixed(2) : "0.00";
    const ry = rocketModel ? rocketModel.position.y.toFixed(2) : "0.00";
    const rz = rocketModel ? rocketModel.position.z.toFixed(2) : "0.00";
    
    const rRotX = rocketModel ? (rocketModel.rotation.x * 180 / Math.PI).toFixed(1) : "0.0";
    const rRotY = rocketModel ? (rocketModel.rotation.y * 180 / Math.PI).toFixed(1) : "0.0";
    const rRotZ = rocketModel ? (rocketModel.rotation.z * 180 / Math.PI).toFixed(1) : "0.0";
    
    const cx = camera.position.x.toFixed(2);
    const cy = camera.position.y.toFixed(2);
    const cz = camera.position.z.toFixed(2);
    
    const tx = orbitControls.target.x.toFixed(2);
    const ty = orbitControls.target.y.toFixed(2);
    const tz = orbitControls.target.z.toFixed(2);
    
    const outputText = `--- EARTH LANDING POC V3 SETUP ---\n` +
                       `Rocket Position: x: ${rx}, y: ${ry}, z: ${rz}\n` +
                       `Rocket Rotation: x: ${rRotX}, y: ${rRotY}, z: ${rRotZ} (degrees)\n` +
                       `Camera Position: x: ${cx}, y: ${cy}, z: ${cz}\n` +
                       `Camera Target  : x: ${tx}, y: ${ty}, z: ${tz}\n` +
                       `----------------------------------`;
                       
    navigator.clipboard.writeText(outputText).then(() => {
      const originalText = copyBtn.innerText;
      copyBtn.innerText = "COPIED!";
      copyBtn.style.color = "#00ff66";
      setTimeout(() => {
        copyBtn.innerText = originalText;
        copyBtn.style.color = "";
      }, 2000);
    }).catch(err => {
      alert("Values:\n" + outputText);
    });
  });
}

tick();
