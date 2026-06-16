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
targetRing.position.set(0.0, 0.25, -45.0);
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

// Animate color variations of rocket hull
const reentryHullColor = new THREE.Color(0xffffff);

loadingManager.onProgress = (url, loaded, total) => {
  const pct = Math.floor((loaded / total) * 100);
  UI_MANAGER.updateProgress(pct, "Syncing Systems");
};

loadingManager.onLoad = () => {
  landingSystem.configureMonolith(monolithScene);
  landingSystem.activateOcean();
  
  // Setup timeline once models are loaded
  cinematicTimeline = buildCinematicTimeline(rocketModel, earthGroup, spaceGroup, oceanGroup, renderer, camera);
  window.cinematicTimeline = cinematicTimeline;
  
  // Connect leg animation triggers
  cinematicTimeline.add(() => {
    landingLegs.forEach((leg) => {
      leg.scale.set(1.0, 1.0, 1.0);
    });
  }, CONFIG.timeline.landingStart + 5.0); // deploy legs instantly 5s after exiting clouds
  
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
          mat.metalness = 0.8;
          mat.roughness = 0.2;
          if (mat.color) mat.color.setHex(0xaaaaaa); // Solid neutral gray matte color
          mat.envMap = cubeRenderTarget.texture; // Enable real-time reflection
          mat.envMapIntensity = 2.0;
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
  rocketModel.position.set(1.4, -3.5, 2.0);
  rocketModel.rotation.set(0, -Math.PI / 4, 0);
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
  if (cinematicTimeline) {
    cinematicTimeline.play();
  }
}

// Tick loop
const clock = new THREE.Clock();
let sequenceTime = 0.0;

function tick() {
  const delta = clock.getDelta();
  const elapsed = clock.getElapsedTime();
  ENGINE_STATE.globalTime = elapsed;
  if (cinematicTimeline) {
    ENGINE_STATE.timelineTime = cinematicTimeline.time();
  } else {
    ENGINE_STATE.timelineTime = 0.0;
  }
  
  if (ENGINE_STATE.currentScene !== "INITIAL") {
    sequenceTime += delta;
  } else {
    sequenceTime = 0.0;
  }
  
  UI_MANAGER.tick(rocketModel);
  
  // Update dynamic cube reflection camera
  if (rocketModel && cubeCamera) {
    rocketModel.visible = false;
    cubeCamera.position.copy(rocketModel.position);
    cubeCamera.update(renderer, scene);
    rocketModel.visible = true;
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
    trajectoryLine.visible = (ENGINE_STATE.currentScene !== "WARP" && ENGINE_STATE.currentScene !== "INITIAL" && ENGINE_STATE.currentScene !== "SNAP_BACK");
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
    stormSystem.update(sequenceTime, delta, rocketModel);
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
  } else {
    scene.fog.density = 0.0;
  }
  
  if (window.activeControls) {
    window.activeControls.update();
  }
  
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

tick();
