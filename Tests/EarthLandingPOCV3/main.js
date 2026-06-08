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
const spaceAmbient = new THREE.AmbientLight(0x0a0a0f, 0.15); // Lowered from 0.5 to keep deep space shadows rich
spaceGroup.add(spaceAmbient);

const spaceSun = new THREE.DirectionalLight(0xffffff, 1.3); // Lowered from 2.5 to prevent blowing out highlights on chrome rocket
spaceSun.position.set(-100, 150, 100);
spaceGroup.add(spaceSun);

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
      vec3 color = vec3(0.0, 0.75, 1.0); // Neon blue HUD color
      
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
  
  // Connect leg animation triggers
  cinematicTimeline.add(() => {
    landingLegs.forEach((leg) => {
      gsap.to(leg.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 1.5, ease: "back.out(1.7)" });
    });
  }, CONFIG.timeline.landingStart + 5.0); // deploy legs 5s after exiting clouds
  
  UI_MANAGER.hideLoader(() => {
    startSequence();
  });
};

loadingManager.onError = (url) => {
  console.error("Critical System Load Failure on: " + url);
};

// Configure Rocket Chrome properties and locate landing legs
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
          mat.metalness = 1.0;
          mat.roughness = 0.08;
          mat.envMap = cubeRenderTarget.texture; // Real-time reflections
          mat.envMapIntensity = 2.5;
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
                vec3 diagnosticBlue = vec3(0.0, 0.75, 1.0); // Neon blue HUD
                float totalGlow = (ring * 1.5 + arcRing * 2.5 + gridDots * 0.9 + vertLine * 0.65) * uAnalysisActive;
                
                gl_FragColor.rgb = mix(gl_FragColor.rgb, diagnosticBlue, totalGlow * 0.55);
                gl_FragColor.rgb += diagnosticBlue * totalGlow * 1.4;
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
function tick() {
  const elapsed = clock.getElapsedTime();
  const delta = clock.getDelta();
  ENGINE_STATE.globalTime = elapsed;
  
  UI_MANAGER.tick();
  
  // Update dynamic cube reflection camera
  if (rocketModel && cubeCamera) {
    rocketModel.visible = false;
    cubeCamera.position.copy(rocketModel.position);
    cubeCamera.update(renderer, scene);
    rocketModel.visible = true;
  }
  
  // Update camera rig continuous movement
  CAMERA_RIG.update(camera, rocketModel, elapsed, delta);
  
  // Update rocket hull analysis shader uniforms (disabled during Warp and Initial phases)
  const isAnalysisActive = (ENGINE_STATE.currentScene !== "WARP" && ENGINE_STATE.currentScene !== "INITIAL" && ENGINE_STATE.currentScene !== "LANDING" && ENGINE_STATE.currentScene !== "MANUAL");
  const targetActive = isAnalysisActive ? 1.0 : 0.0;
  
  analysisMaterials.forEach((mat) => {
    if (mat.userData.shader) {
      mat.userData.shader.uniforms.uAnalysisTime.value = elapsed;
      // Smoothly interpolate the active state
      const currentVal = mat.userData.shader.uniforms.uAnalysisActive.value;
      mat.userData.shader.uniforms.uAnalysisActive.value = THREE.MathUtils.lerp(currentVal, targetActive, 0.06);
    }
  });
  
  // Update 3D holographic diagnostic rings uniforms and positions
  if (diagnosticGroup) {
    ringMaterials.forEach((mat) => {
      mat.uniforms.uTime.value = elapsed;
      const currentOpacity = mat.uniforms.uOpacity.value;
      mat.uniforms.uOpacity.value = THREE.MathUtils.lerp(currentOpacity, targetActive * 0.75, 0.06);
    });
    
    // Slide the rings up and down along Y axis using independent speeds and offsets
    diagnosticGroup.children[0].position.y = 1.5 + Math.sin(elapsed * 1.5) * 1.0;
    diagnosticGroup.children[1].position.y = -0.5 + Math.cos(elapsed * 2.2) * 1.2;
    diagnosticGroup.children[2].position.y = -2.2 + Math.sin(elapsed * 0.9 + 1.5) * 0.8;
  }
  
  // Update modular scene system parameters
  warpSystem.update(elapsed, camera);
  atmosphereSystem.update(elapsed);
  landingSystem.update(elapsed, rocketModel);
  
  if (stormSystem) {
    stormSystem.update(elapsed, delta, rocketModel);
  }
  
  // Dynamic rocket color styling transitions based on friction heating
  if (rocketModel && (ENGINE_STATE.currentScene === "REENTRY" || ENGINE_STATE.currentScene === "STORM")) {
    // Animate hull metal color from white/chrome -> glowing yellow/orange -> black soot silhouette
    const factor = ENGINE_STATE.atmosphereFriction;
    if (ENGINE_STATE.currentScene === "REENTRY") {
      reentryHullColor.setRGB(
        1.0,
        THREE.MathUtils.lerp(1.0, 0.35, factor),
        THREE.MathUtils.lerp(1.0, 0.05, factor)
      );
    } else {
      // Dark grey soot silhouette in storm for visibility
      reentryHullColor.setHex(0x3c3e45);
    }
    
    rocketModel.traverse((node) => {
      if (node.isMesh && node.material) {
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach((mat) => {
          if (mat.color) mat.color.copy(reentryHullColor);
        });
      }
    });
  } else if (rocketModel && reentryHullColor.r < 1.0) {
    // Restore chrome color upon exiting storm
    reentryHullColor.setHex(0xffffff);
    rocketModel.traverse((node) => {
      if (node.isMesh && node.material) {
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach((mat) => {
          if (mat.color) mat.color.copy(reentryHullColor);
        });
      }
    });
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

tick();
