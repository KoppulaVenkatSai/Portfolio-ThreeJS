import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

import { PROJECTS_DATA, CONFIG } from './config.js';
import { 
  createNebulaTexture, 
  createCircleTexture, 
  createBinaryRingTexture,
  createCharTexture,
  createCurvedTextTexture
} from './textures.js';
import { 
  createOrbitRing, 
  buildPlanet1, 
  buildPlanet2, 
  buildPlanet3 
} from './planets.js';

// ==========================================
// FRESNEL GLOW SHADER DEFINITION
// ==========================================
const FresnelShader = {
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vNormal = normalize(normalMatrix * normal);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    uniform vec3 glowColor;
    uniform float power;
    uniform float opacity;
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      float intensity = pow(1.0 - max(dot(normal, viewDir), 0.0), power);
      gl_FragColor = vec4(glowColor, intensity * opacity);
    }
  `
};

// ==========================================
// Star Shader from Earth landing POC
// ==========================================
const StarShader = {
  vertexShader: `
    uniform float uWarpProgress;
    uniform float uWarpOffset;
    uniform vec3 uCameraPos;
    attribute float aSpeed;
    attribute float aAngle;
    attribute float aSize;
    varying vec3 vColor;
    varying float vOpacity;
    varying float vAngle;
    varying float vSpeed;
    varying float vWarpProgress;
    
    void main() {
      vSpeed = aSpeed;
      vWarpProgress = uWarpProgress;
      
      float zBase = position.z - (aSpeed * uWarpOffset);
      zBase = mod(zBase + 500.0, 1000.0) - 500.0;
      
      float spiral = aAngle + uWarpProgress * 0.9 * log(1.0 + (500.0 - zBase) * 0.015);
      
      float r = length(position.xy);
      r = mix(r * 2.5, r, clamp(uWarpProgress / 0.2, 0.0, 1.0));
      
      vec3 pos = vec3(
        uCameraPos.x + r * cos(spiral),
        uCameraPos.y + r * sin(spiral),
        uCameraPos.z + zBase
      );
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      vAngle = atan(gl_Position.y, gl_Position.x);
      
      vec3 colorWhite = vec3(1.0, 1.0, 1.0);
      vec3 colorBlue = vec3(0.78, 0.90, 1.0);
      vec3 colorGold = vec3(1.0, 0.96, 0.84);
      
      float colorHash = fract(aSpeed * 43.123);
      vec3 starColor = mix(colorWhite, mix(colorBlue, colorGold, step(0.5, colorHash)), 0.35);
      vColor = mix(starColor, vec3(0.65, 0.88, 1.0), uWarpProgress * 0.4);
      
      vOpacity = smoothstep(-500.0, -350.0, zBase) * smoothstep(500.0, 350.0, zBase);
      gl_PointSize = aSize * (1.0 + uWarpProgress * aSpeed * 1.2);
    }
  `,
  fragmentShader: `
    uniform float uStarsOpacity;
    varying vec3 vColor;
    varying float vOpacity;
    varying float vAngle;
    varying float vSpeed;
    varying float vWarpProgress;
    
    void main() {
      float starHash = fract(vSpeed * 73.849);
      float densityThreshold = mix(0.28, 1.0, clamp(vWarpProgress / 0.15, 0.0, 1.0));
      if (starHash > densityThreshold) discard;

      vec2 p = gl_PointCoord - vec2(0.5);
      float cosA = cos(vAngle);
      float sinA = sin(vAngle);
      vec2 rp = vec2(p.x * cosA - p.y * sinA, p.x * sinA + p.y * cosA);
      
      float halfLength = (0.05 + vSpeed * 0.55) * vWarpProgress;
      float thickness = mix(0.12, 0.008, vWarpProgress);
      
      float dist = length(vec2(rp.x - clamp(rp.x, -halfLength, halfLength), rp.y));
      
      float core = smoothstep(thickness, 0.0, dist);
      float glow = exp(-dist * 55.0) * 0.60;
      float intensity = (core * 0.60 + glow * 0.40) * vOpacity * uStarsOpacity;
      
      if (intensity < 0.01) discard;
      gl_FragColor = vec4(vColor, intensity);
    }
  `
};

// ==========================================
// MAIN THREE.JS BOOTSTRAP
// ==========================================
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.colors.bgSpace);
scene.fog = new THREE.FogExp2(CONFIG.colors.bgSpace, 0.0035);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-5.78, 18.20, 56.75); // Custom isometric 3/4 Camera view

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.95;

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxDistance = 100;
controls.minDistance = 6;
controls.enabled = false; // Free camera OFF by default

// Log camera position + target whenever it changes via OrbitControls
controls.addEventListener('change', () => {
  const p = camera.position;
  const t = controls.target;
  console.log(`📷 Camera Position → x: ${p.x.toFixed(2)}, y: ${p.y.toFixed(2)}, z: ${p.z.toFixed(2)}`);
  console.log(`🎯 Camera Target  → x: ${t.x.toFixed(2)}, y: ${t.y.toFixed(2)}, z: ${t.z.toFixed(2)}`);
});

// Post Processing Unreal Bloom
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.0, // Default bloom strength set to 1.0
  0.8,
  0.25
);
const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);

// ==========================================
// STARFIELD (MOVING SHADER-BASED STARS)
// ==========================================
const starCount = 12000;
const starGeom = new THREE.BufferGeometry();
const starPos = [];
const starSpeeds = [];
const starAngles = [];
const starSizes = [];

for (let i = 0; i < starCount; i++) {
  const theta = Math.random() * Math.PI * 2;
  const r = 25.0 + Math.random() * 260.0;
  starPos.push(r * Math.cos(theta), (Math.random() - 0.5) * 240.0, Math.random() * 1000.0 - 500.0);
  starSpeeds.push(0.04 + Math.random() * 0.12);
  starAngles.push(theta);
  starSizes.push(2.5 + Math.random() * 6.5);
}

starGeom.setAttribute("position", new THREE.Float32BufferAttribute(starPos, 3));
starGeom.setAttribute("aSpeed", new THREE.Float32BufferAttribute(starSpeeds, 1));
starGeom.setAttribute("aAngle", new THREE.Float32BufferAttribute(starAngles, 1));
starGeom.setAttribute("aSize", new THREE.Float32BufferAttribute(starSizes, 1));

let warpOffset = 0.0;
const starMat = new THREE.ShaderMaterial({
  vertexShader: StarShader.vertexShader,
  fragmentShader: StarShader.fragmentShader,
  uniforms: {
    uWarpProgress: { value: 0.015 },
    uWarpOffset: { value: 0.0 },
    uCameraPos: { value: new THREE.Vector3() },
    uStarsOpacity: { value: 0.75 }
  },
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const starPoints = new THREE.Points(starGeom, starMat);
scene.add(starPoints);

// ==========================================
// DYNAMIC 6-NEBULA DEEP BACKGROUND SYSTEM
// ==========================================
const nebulaGroup = new THREE.Group();
nebulaGroup.renderOrder = -100;
window.nebulaGroup = nebulaGroup;
scene.add(nebulaGroup);

const nebulaConfigs = [
  { localOffset: { x: -90, y: 55, z: -280 }, c1: 'rgba(20, 140, 255, 0.38)', c2: 'rgba(5, 18, 55, 0)', size: 420, freq: { x: 0.20, y: 0.25 }, amp: { x: 30, y: 20 }, rotSpeed: 0.0004 },
  { localOffset: { x: 95, y: -45, z: -300 }, c1: 'rgba(170, 40, 220, 0.32)', c2: 'rgba(18, 4, 35, 0)', size: 450, freq: { x: 0.16, y: 0.22 }, amp: { x: 35, y: 25 }, rotSpeed: -0.0003 },
  { localOffset: { x: -110, y: -50, z: -320 }, c1: 'rgba(0, 220, 190, 0.28)', c2: 'rgba(2, 28, 28, 0)', size: 440, freq: { x: 0.14, y: 0.19 }, amp: { x: 32, y: 22 }, rotSpeed: 0.0005 },
  { localOffset: { x: 105, y: 60, z: -290 }, c1: 'rgba(255, 100, 30, 0.26)', c2: 'rgba(32, 10, 3, 0)', size: 430, freq: { x: 0.18, y: 0.15 }, amp: { x: 28, y: 24 }, rotSpeed: -0.0004 },
  { localOffset: { x: 0, y: 70, z: -340 }, c1: 'rgba(110, 20, 250, 0.30)', c2: 'rgba(14, 2, 40, 0)', size: 480, freq: { x: 0.12, y: 0.17 }, amp: { x: 35, y: 18 }, rotSpeed: 0.0003 },
  { localOffset: { x: 0, y: -75, z: -350 }, c1: 'rgba(240, 190, 40, 0.24)', c2: 'rgba(30, 22, 3, 0)', size: 460, freq: { x: 0.15, y: 0.21 }, amp: { x: 40, y: 22 }, rotSpeed: -0.0005 }
];

const nebulaeList = nebulaConfigs.map((cfg) => {
  const mat = new THREE.MeshBasicMaterial({
    map: createNebulaTexture(cfg.c1, cfg.c2),
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  const geo = new THREE.PlaneGeometry(cfg.size, cfg.size);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = -100;
  nebulaGroup.add(mesh);
  return { mesh, ...cfg };
});

// ==========================================
// CENTRAL DATA SUN (CINEMATIC GLOW)
// ==========================================
const sunGroup = new THREE.Group();
scene.add(sunGroup);

const sunCoreGeometry = new THREE.SphereGeometry(3.6, 64, 64);
const sunCoreMaterial = new THREE.MeshBasicMaterial({
  color: CONFIG.colors.sunCore
});
const sunCoreMesh = new THREE.Mesh(sunCoreGeometry, sunCoreMaterial);
sunGroup.add(sunCoreMesh);

const corona1Geo = new THREE.PlaneGeometry(16, 16);
const corona1 = new THREE.Mesh(corona1Geo, new THREE.MeshBasicMaterial({
  map: createCircleTexture('#ff7700'),
  transparent: true,
  opacity: 0.55,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  side: THREE.DoubleSide
}));
sunGroup.add(corona1);

const corona2 = new THREE.Mesh(corona1Geo, new THREE.MeshBasicMaterial({
  map: createCircleTexture('#ffddaa'),
  transparent: true,
  opacity: 0.4,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  side: THREE.DoubleSide
}));
corona2.scale.set(1.35, 1.35, 1.35);
sunGroup.add(corona2);

// Concentric Orbiting Binary Code Rings
const binaryRings = [];
const ringData = [
  { inner: 5.2, outer: 5.8, speed: 0.0018, rotX: Math.PI / 2.1, rotY: 0 },
  { inner: 6.1, outer: 6.7, speed: -0.001, rotX: Math.PI / 1.9, rotY: 0.25 },
  { inner: 7.0, outer: 7.6, speed: 0.0006, rotX: Math.PI / 2.05, rotY: -0.15 }
];

ringData.forEach((r) => {
  const geom = new THREE.RingGeometry(r.inner, r.outer, 64);
  const uvs = geom.attributes.uv;
  for (let i = 0; i < uvs.count; i++) {
    const u = uvs.getX(i);
    const v = uvs.getY(i);
    const angle = Math.atan2(v - 0.5, u - 0.5);
    uvs.setX(i, (angle + Math.PI) / (Math.PI * 2));
    uvs.setY(i, Math.sqrt((u-0.5)*(u-0.5) + (v-0.5)*(v-0.5)) * 2);
  }
  
  const mat = new THREE.MeshBasicMaterial({
    map: createBinaryRingTexture(),
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false
  });
  
  const mesh = new THREE.Mesh(geom, mat);
  mesh.rotation.x = r.rotX;
  mesh.rotation.y = r.rotY;
  sunGroup.add(mesh);
  binaryRings.push({ mesh, speed: r.speed });
});

// Floating character-based data wind particles
const sPartCount = 36;
const sunParticlesGroup = new THREE.Group();
const sunParticlesList = [];

// Prepare textures for obscure sci-fi glyphs
const glyphs = ['▰', '✦', '✷', '☿', '⚡', '❈', '𐍈', '☼', '⚙', '✛'];
const glyphTextures = glyphs.map(g => createCharTexture(g));
const spriteMaterials = glyphTextures.map(tex => new THREE.SpriteMaterial({
  map: tex,
  transparent: true,
  opacity: 0.85,
  blending: THREE.AdditiveBlending,
  depthWrite: false
}));

for (let i = 0; i < sPartCount; i++) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos((Math.random() * 2) - 1);
  const r = 0.5 + Math.random() * 15.5;
  
  // Assign a random glyph material
  const mat = spriteMaterials[Math.floor(Math.random() * spriteMaterials.length)];
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.6, 0.6, 1.0);
  sprite.position.set(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi)
  );
  
  const direction = new THREE.Vector3(
    Math.sin(phi) * Math.cos(theta),
    Math.sin(phi) * Math.sin(theta),
    Math.cos(phi)
  ).multiplyScalar(0.005 + Math.random() * 0.005);
  
  sunParticlesGroup.add(sprite);
  sunParticlesList.push({ sprite, direction });
}
sunGroup.add(sunParticlesGroup);

// ==========================================
// PLANET INSTANTIATION
// ==========================================
const planetObjects = {};
const orbitRingsMap = {};

// Create orbit rings
orbitRingsMap.planet1 = createOrbitRing(scene, CONFIG.orbits.p1.radius);
orbitRingsMap.planet2 = createOrbitRing(scene, CONFIG.orbits.p2.radius);
orbitRingsMap.planet3 = createOrbitRing(scene, CONFIG.orbits.p3.radius);

// Build planets
planetObjects.planet1 = buildPlanet1(scene);
planetObjects.planet2 = buildPlanet2(scene);
planetObjects.planet3 = buildPlanet3(scene);

// Randomize starting orbit offsets (in radians)
Object.keys(planetObjects).forEach((key) => {
  planetObjects[key].startAngleOffset = Math.random() * Math.PI * 2;
});

// Add Fresnel Glow Exosphere overlays & Holographic Curved Hover Labels to each planet group
Object.keys(planetObjects).forEach((key) => {
  const p = planetObjects[key];
  const data = PROJECTS_DATA[key];
  const colorHex = key === 'planet1' ? '#00e5ff' : (key === 'planet2' ? '#ff6600' : '#d044ff');
  
  // Exosphere glow slightly larger than crust outer bounds
  const glowGeo = new THREE.SphereGeometry(p.config.size * 1.06, 32, 32);
  const glowMat = new THREE.ShaderMaterial({
    vertexShader: FresnelShader.vertexShader,
    fragmentShader: FresnelShader.fragmentShader,
    uniforms: {
      glowColor: { value: new THREE.Color(key === 'planet1' ? 0x00c8ff : (key === 'planet2' ? 0xff5500 : 0xaa22ff)) },
      power: { value: 2.2 },
      opacity: { value: 0.0 } // Invisible unless hovered/focused
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  
  const glowMesh = new THREE.Mesh(glowGeo, glowMat);
  p.group.add(glowMesh);
  p.glowMaterial = glowMat;

  // Create Holographic Curved Text Title Label Mesh along top rim of planet sphere
  const labelTex = createCurvedTextTexture(data.title, colorHex);
  const labelGeo = new THREE.PlaneGeometry(p.config.size * 6.2, p.config.size * 3.1);
  const labelMat = new THREE.MeshBasicMaterial({
    map: labelTex,
    transparent: true,
    opacity: 0.0, // Invisible until hovered
    depthTest: false, // Prevents planet geometry occlusion
    depthWrite: false,
    blending: THREE.NormalBlending, // Normal blending prevents UnrealBloom distortion
    side: THREE.DoubleSide
  });

  const labelMesh = new THREE.Mesh(labelGeo, labelMat);
  labelMesh.renderOrder = 100;
  scene.add(labelMesh); // Added to scene so it does NOT spin with p.group.rotation.y
  p.hoverLabelMaterial = labelMat;
  p.hoverLabelMesh = labelMesh;
});

// Refresh curved text textures once web fonts finish loading
document.fonts.ready.then(() => {
  Object.keys(planetObjects).forEach((key) => {
    const p = planetObjects[key];
    const data = PROJECTS_DATA[key];
    const colorHex = key === 'planet1' ? '#00e5ff' : (key === 'planet2' ? '#ff6600' : '#d044ff');
    if (p.hoverLabelMesh) {
      p.hoverLabelMesh.material.map = createCurvedTextTexture(data.title, colorHex);
      p.hoverLabelMesh.material.map.needsUpdate = true;
    }
  });
});

// Add dynamic lighting headlight
const headlight = new THREE.PointLight(0xffffff, 2.5, 90, 0.5);
headlight.position.set(2, 2, 2);
camera.add(headlight);
scene.add(camera);

// Shared Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffecd9, 10.0, 250, 0.85);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
sunLight.shadow.bias = -0.0005;
sunLight.shadow.normalBias = 0.03;
scene.add(sunLight);

const rimLight = new THREE.DirectionalLight(0x0044cc, 0.25); // Initialize to 0.25
rimLight.position.set(-15, -15, -15);
scene.add(rimLight);

// Volumetric laser scan line beam core
const laserGroup = new THREE.Group();
scene.add(laserGroup);

const innerBeamGeo = new THREE.CylinderGeometry(0.07, 0.07, 1, 16, 1, true);
innerBeamGeo.translate(0, 0.5, 0); // Base pivot at Sun center (0,0,0)
const innerBeamMat = new THREE.MeshBasicMaterial({
  color: 0xffea00, // Bright intense yellow
  transparent: true,
  opacity: 0.0,
  side: THREE.DoubleSide,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});
const innerBeam = new THREE.Mesh(innerBeamGeo, innerBeamMat);
innerBeam.renderOrder = 50;
laserGroup.add(innerBeam);

const outerBeamGeo = new THREE.CylinderGeometry(0.20, 0.20, 1, 16, 1, true);
outerBeamGeo.translate(0, 0.5, 0); // Base pivot at Sun center (0,0,0)
const outerBeamMat = new THREE.MeshBasicMaterial({
  color: 0xffa800, // Warm golden amber glow
  transparent: true,
  opacity: 0.0,
  side: THREE.DoubleSide,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});
const outerBeam = new THREE.Mesh(outerBeamGeo, outerBeamMat);
outerBeam.renderOrder = 49;
laserGroup.add(outerBeam);

// ==========================================
// TELEMETRY HUD DOM BINDINGS
// ==========================================
const gridCoordVal = document.getElementById('hud-grid-coord');
const activeFocusVal = document.getElementById('hud-active-focus');

const dataHudOverlayEl = document.getElementById('data-hud-overlay');
const dataTitle = document.getElementById('project-title');
const dataClassification = document.getElementById('project-classification');
const dataUsecase = document.getElementById('project-usecase');
const dataBuild = document.getElementById('project-build');
const dataTechBadges = document.getElementById('project-tech-badges');

const tooltipEl = document.getElementById('custom-tooltip');
const tooltipText = tooltipEl.querySelector('.tooltip-text');

// Close Data blade rewind button logic
document.getElementById('close-blade-btn').addEventListener('click', () => {
  triggerReset();
});

// Settings Console Drawer Toggle Logic
const consoleToggleBtn = document.getElementById('console-toggle-btn');
const closeConsoleBtn = document.getElementById('close-console-btn');
const debugPanelEl = document.getElementById('debug-panel');

if (consoleToggleBtn && debugPanelEl) {
  consoleToggleBtn.addEventListener('click', () => {
    debugPanelEl.classList.toggle('closed');
  });
}

if (closeConsoleBtn && debugPanelEl) {
  closeConsoleBtn.addEventListener('click', () => {
    debugPanelEl.classList.add('closed');
  });
}

// ==========================================
// INTERACTIVE RAYCASTING (HOVER/CLICK FOCUS)
// ==========================================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let hoveredPlanetId = null;
let activeFocusPlanetId = null;
let isTransitioningFocus = false;
let hudOpenTimer = null;

// Global keyboard shortcuts (Escape key resets focused view)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    if (activeFocusPlanetId) {
      triggerReset();
    }
  }
});

// Track mouse position on screen
window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
  tooltipEl.style.left = `${e.clientX + 15}px`;
  tooltipEl.style.top = `${e.clientY + 15}px`;
});

// Track window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

// Click listener to toggle zoom-in deconstruction
window.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('#debug-panel') || e.target.closest('#data-blade')) return;

  const clickMouse = new THREE.Vector2(
    (e.clientX / window.innerWidth) * 2 - 1,
    -(e.clientY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(clickMouse, camera);
  const intersects = [];
  
  Object.keys(planetObjects).forEach((key) => {
    // Recursively intersect against entire planet group (crust, mantle, core)
    const hits = raycaster.intersectObject(planetObjects[key].group, true);
    if (hits.length > 0) intersects.push({ id: key, distance: hits[0].distance });
  });

  if (intersects.length > 0) {
    intersects.sort((a, b) => a.distance - b.distance);
    const planetId = intersects[0].id;
    
    if (activeFocusPlanetId === planetId) {
      triggerReset();
    } else {
      if (activeFocusPlanetId) triggerReset();
      triggerExplode(planetId);
    }
  } else {
    // Click blank space -> Reset
    if (activeFocusPlanetId) triggerReset();
  }
});

// Core Hover check loop
function checkHover() {
  if (activeFocusPlanetId) return;

  raycaster.setFromCamera(mouse, camera);
  const intersects = [];
  
  Object.keys(planetObjects).forEach((key) => {
    // Recursively intersect against entire planet group (crust, mantle, core)
    const hits = raycaster.intersectObject(planetObjects[key].group, true);
    if (hits.length > 0) intersects.push({ id: key, distance: hits[0].distance });
  });

  if (intersects.length > 0) {
    intersects.sort((a, b) => a.distance - b.distance);
    const foundHover = intersects[0].id;
    if (hoveredPlanetId !== foundHover) {
      if (hoveredPlanetId) triggerHoverEnd(hoveredPlanetId);
      triggerHover(foundHover);
    }
  } else {
    if (hoveredPlanetId) triggerHoverEnd(hoveredPlanetId);
  }
}

// Hover state transitions
function triggerHover(planetId) {
  hoveredPlanetId = planetId;
  tooltipEl.classList.add('visible');
  const planet = planetObjects[planetId];
  
  activeFocusVal.innerText = PROJECTS_DATA[planetId].title;
  
  if (planet.glowMaterial) {
    gsap.to(planet.glowMaterial.uniforms.opacity, {
      value: 1.0,
      duration: 0.3,
      overwrite: 'auto'
    });
  }

  if (planet.hoverLabelMaterial) {
    gsap.to(planet.hoverLabelMaterial, {
      opacity: 1.0,
      duration: 0.3,
      overwrite: 'auto'
    });
  }

  // Ensure label elevation is at normal position in non-exploded view
  if (!activeFocusPlanetId || activeFocusPlanetId !== planetId) {
    gsap.to(planet, {
      currentYOffset: planet.config.size * 0.55,
      duration: 0.4,
      overwrite: 'auto'
    });
  }
  
  gsap.to(orbitRingsMap[planetId].material, {
    opacity: 0.7,
    duration: 0.3,
    overwrite: 'auto'
  });
  
  updateDebugButtonState(planetId, 'hover');
}

function triggerHoverEnd(planetId) {
  if (hoveredPlanetId === planetId) {
    hoveredPlanetId = null;
  }
  tooltipEl.classList.remove('visible');
  const planet = planetObjects[planetId];
  
  if (!activeFocusPlanetId) {
    activeFocusVal.innerText = "NONE";
  }
  
  if (planet.glowMaterial) {
    gsap.to(planet.glowMaterial.uniforms.opacity, {
      value: 0.0,
      duration: 0.3,
      overwrite: 'auto'
    });
  }

  if (planet.hoverLabelMaterial) {
    gsap.to(planet.hoverLabelMaterial, {
      opacity: 0.0,
      duration: 0.3,
      overwrite: 'auto'
    });
  }
  
  gsap.to(orbitRingsMap[planetId].material, {
    opacity: 0.15,
    duration: 0.3,
    overwrite: 'auto'
  });
  
  updateDebugButtonState(planetId, 'orbit');
}

// Explode / Focused State Animations
function triggerExplode(planetId) {
  if (hoveredPlanetId && hoveredPlanetId !== planetId) {
    triggerHoverEnd(hoveredPlanetId);
  }
  
  activeFocusPlanetId = planetId;
  const planet = planetObjects[planetId];
  activeFocusVal.innerText = PROJECTS_DATA[planetId].title;
  
  // Show data blade
  const data = PROJECTS_DATA[planetId];
  dataTitle.innerText = data.title;
  dataClassification.innerText = data.classification;
  dataUsecase.innerText = data.usecase;
  dataBuild.innerText = data.build;
  
  dataTechBadges.innerHTML = '';
  data.tech.forEach((tech) => {
    const span = document.createElement('span');
    span.className = 'tech-badge';
    span.innerText = tech;
    dataTechBadges.appendChild(span);
  });
  
  if (hudOpenTimer) clearTimeout(hudOpenTimer);
  hudOpenTimer = setTimeout(() => {
    if (dataHudOverlayEl && activeFocusPlanetId === planetId) {
      dataHudOverlayEl.classList.remove('closed');
    }
  }, 600);
  
  // Camera focus animation transition triggered in the animate loop
  isTransitioningFocus = true;
  const planetWorldPos = new THREE.Vector3();
  planet.group.getWorldPosition(planetWorldPos);

  // Tectonic Layer explode positions
  planet.crustPlates.forEach((plate) => {
    const offset = plate.normal.clone().multiplyScalar(planet.config.size * 0.45);
    offset.y *= 0.1;
    gsap.to(plate.helper.position, { x: offset.x, y: offset.y, z: offset.z, duration: 1.2, ease: 'power3.out' });

    const startQ = new THREE.Quaternion().identity();
    const endQ = new THREE.Quaternion().setFromAxisAngle(plate.tiltAxis, plate.tiltAngle);
    const obj = { t: 0 };
    gsap.to(obj, {
      t: 1,
      duration: 1.2,
      ease: 'power3.out',
      onUpdate: () => {
        plate.helper.quaternion.slerpQuaternions(startQ, endQ, obj.t);
      }
    });
  });
  
  planet.outerMantlePlates.forEach((plate) => {
    const offset = plate.normal.clone().multiplyScalar(planet.config.size * 0.45);
    offset.y *= 0.1;
    gsap.to(plate.helper.position, { x: offset.x, y: offset.y, z: offset.z, duration: 1.2, ease: 'power3.out' });

    const startQ = new THREE.Quaternion().identity();
    const endQ = new THREE.Quaternion().setFromAxisAngle(plate.tiltAxis, plate.tiltAngle);
    const obj = { t: 0 };
    gsap.to(obj, {
      t: 1,
      duration: 1.2,
      ease: 'power3.out',
      onUpdate: () => {
        plate.helper.quaternion.slerpQuaternions(startQ, endQ, obj.t);
      }
    });
  });
  
  planet.innerMantlePlates.forEach((plate) => {
    const offset = plate.normal.clone().multiplyScalar(planet.config.size * 0.45);
    offset.y *= 0.1;
    gsap.to(plate.helper.position, { x: offset.x, y: offset.y, z: offset.z, duration: 1.2, ease: 'power3.out' });

    const startQ = new THREE.Quaternion().identity();
    const endQ = new THREE.Quaternion().setFromAxisAngle(plate.tiltAxis, plate.tiltAngle);
    const obj = { t: 0 };
    gsap.to(obj, {
      t: 1,
      duration: 1.2,
      ease: 'power3.out',
      onUpdate: () => {
        plate.helper.quaternion.slerpQuaternions(startQ, endQ, obj.t);
      }
    });
  });

  // Keep title text visible and smoothly shift position upward clear of exploding plates
  if (planet.hoverLabelMaterial) {
    gsap.to(planet.hoverLabelMaterial, { opacity: 1.0, duration: 0.4, overwrite: 'auto' });
  }
  if (planet.currentYOffset === undefined) planet.currentYOffset = planet.config.size * 0.95;
  gsap.to(planet, {
    currentYOffset: planet.config.size * 0.7,
    duration: 1.2,
    ease: 'power3.out',
    overwrite: 'auto'
  });

  // Fade in holographic scan line beam
  gsap.to(innerBeam.material, { opacity: 0.95, duration: 0.4, overwrite: 'auto' });
  gsap.to(outerBeam.material, { opacity: 0.75, duration: 0.4, overwrite: 'auto' });
  
  updateDebugButtonState(planetId, 'explode');
}

function triggerReset() {
  if (!activeFocusPlanetId) return;
  
  const planetId = activeFocusPlanetId;
  const planet = planetObjects[planetId];
  activeFocusPlanetId = null;
  isTransitioningFocus = false;
  activeFocusVal.innerText = "NONE";
  
  if (hudOpenTimer) clearTimeout(hudOpenTimer);
  if (dataHudOverlayEl) dataHudOverlayEl.classList.add('closed');
  
  gsap.to(controls.target, {
    x: 0, y: 0, z: 0,
    duration: 1.0,
    ease: 'power3.inOut'
  });
  
  gsap.to(camera.position, {
    x: -5.78, y: 18.20, z: 56.75,
    duration: 1.0,
    ease: 'power3.inOut',
    onUpdate: () => {
      controls.update();
    }
  });

  planet.crustPlates.forEach((plate) => {
    gsap.to(plate.helper.position, { x: 0, y: 0, z: 0, duration: 0.8, ease: 'power2.out' });

    const startQ = plate.helper.quaternion.clone();
    const endQ = new THREE.Quaternion().identity();
    const obj = { t: 0 };
    gsap.to(obj, {
      t: 1,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        plate.helper.quaternion.slerpQuaternions(startQ, endQ, obj.t);
      }
    });
  });
  planet.outerMantlePlates.forEach((plate) => {
    gsap.to(plate.helper.position, { x: 0, y: 0, z: 0, duration: 0.8, ease: 'power2.out' });

    const startQ = plate.helper.quaternion.clone();
    const endQ = new THREE.Quaternion().identity();
    const obj = { t: 0 };
    gsap.to(obj, {
      t: 1,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        plate.helper.quaternion.slerpQuaternions(startQ, endQ, obj.t);
      }
    });
  });
  planet.innerMantlePlates.forEach((plate) => {
    gsap.to(plate.helper.position, { x: 0, y: 0, z: 0, duration: 0.8, ease: 'power2.out' });

    const startQ = plate.helper.quaternion.clone();
    const endQ = new THREE.Quaternion().identity();
    const obj = { t: 0 };
    gsap.to(obj, {
      t: 1,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: () => {
        plate.helper.quaternion.slerpQuaternions(startQ, endQ, obj.t);
      }
    });
  });
  
  gsap.to(innerBeam.material, { opacity: 0, duration: 0.4 });
  gsap.to(outerBeam.material, { opacity: 0, duration: 0.4 });

  gsap.to(planet, {
    currentYOffset: planet.config.size * 0.55,
    duration: 0.8,
    ease: 'power2.out',
    overwrite: 'auto',
    onComplete: () => {
      if (hoveredPlanetId !== planetId && planet.hoverLabelMaterial) {
        gsap.to(planet.hoverLabelMaterial, { opacity: 0.0, duration: 0.3 });
      }
    }
  });
  
  updateDebugButtonState(planetId, 'orbit');
}

function updateDebugButtonState(planetId, state) {
  const num = planetId.replace('planet', 'p');
  
  document.getElementById(`${num}-hover-btn`)?.classList.remove('active');
  document.getElementById(`${num}-explode-btn`)?.classList.remove('active');
  
  if (state === 'hover') {
    document.getElementById(`${num}-hover-btn`)?.classList.add('active');
  } else if (state === 'explode') {
    document.getElementById(`${num}-explode-btn`)?.classList.add('active');
  }
}

// Bind state console buttons
for (let i = 1; i <= 3; i++) {
  const planetId = `planet${i}`;
  
  document.getElementById(`p${i}-hover-btn`).addEventListener('click', () => {
    if (activeFocusPlanetId) triggerReset();
    
    if (hoveredPlanetId === planetId) {
      triggerHoverEnd(planetId);
    } else {
      if (hoveredPlanetId) triggerHoverEnd(hoveredPlanetId);
      triggerHover(planetId);
    }
  });
  
  document.getElementById(`p${i}-explode-btn`).addEventListener('click', () => {
    if (activeFocusPlanetId === planetId) {
      triggerReset();
    } else {
      if (activeFocusPlanetId) triggerReset();
      triggerExplode(planetId);
    }
  });
}

// Free Camera toggle
const freeCameraBtn = document.getElementById('free-camera-btn');
freeCameraBtn.addEventListener('click', () => {
  controls.enabled = !controls.enabled;
  freeCameraBtn.textContent = controls.enabled ? 'Free Camera: ON' : 'Free Camera: OFF';
  freeCameraBtn.classList.toggle('active', controls.enabled);
});

document.getElementById('global-reset-btn').addEventListener('click', () => {
  if (activeFocusPlanetId) triggerReset();
  if (hoveredPlanetId) triggerHoverEnd(hoveredPlanetId);
});

// Lighting Sliders bindings
const ambientSlider = document.getElementById('ambient-slider');
const ambientVal = document.getElementById('ambient-val');
ambientSlider.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  ambientLight.intensity = val;
  ambientVal.innerText = val.toFixed(2);
});

const sunSlider = document.getElementById('sun-slider');
const sunVal = document.getElementById('sun-val');
sunSlider.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  sunLight.intensity = val;
  sunVal.innerText = val.toFixed(2);
});

const rimSlider = document.getElementById('rim-slider');
const rimVal = document.getElementById('rim-val');
rimSlider.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  rimLight.intensity = val;
  rimVal.innerText = val.toFixed(2);
});

const bloomSlider = document.getElementById('bloom-slider');
const bloomVal = document.getElementById('bloom-val');
bloomSlider.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  bloomPass.strength = val;
  bloomVal.innerText = val.toFixed(2);
});

// ==========================================
// ANIMATION TICK LOOP (COMPOSER)
// ==========================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const time = clock.getElapsedTime();
  
  if (!window.lastTime) window.lastTime = 0;
  const delta = Math.min(time - window.lastTime, 0.1);
  window.lastTime = time;

  warpOffset += 0.02 * delta * 480.0;
  starMat.uniforms.uWarpOffset.value = warpOffset;
  starMat.uniforms.uCameraPos.value.copy(camera.position);

  starPoints.rotation.y = time * 0.008;
  starPoints.rotation.x = time * 0.003;
  starPoints.rotation.z = time * 0.002;
  if (nebulaeList) {
    const phaseStep = (Math.PI * 2) / nebulaeList.length;
    nebulaeList.forEach((neb, index) => {
      // Ensure all nebulae billboard flat facing camera lens
      neb.mesh.quaternion.copy(camera.quaternion);

      // Deep camera-local background positioning (guarantees zero foreground clipping)
      const localX = neb.localOffset.x + Math.sin(time * neb.freq.x) * neb.amp.x;
      const localY = neb.localOffset.y + Math.cos(time * neb.freq.y) * neb.amp.y;
      const localPos = new THREE.Vector3(localX, localY, neb.localOffset.z);
      neb.mesh.position.copy(localPos.applyMatrix4(camera.matrixWorld));
      neb.mesh.rotation.z += neb.rotSpeed;

      // Dynamic visibility cycling: strictly bounds active on-screen nebulae between min 3 and max 4
      const rawScore = Math.sin(time * 0.10 + index * phaseStep);
      const visibilityRamp = Math.max(0, Math.min(1, (rawScore + 0.08) / 0.48));
      neb.mesh.material.opacity = visibilityRamp;
    });
  }
  
  const pulseFactor = 1.0 + Math.sin(time * 2.2) * 0.03;
  sunCoreMesh.scale.set(pulseFactor, pulseFactor, pulseFactor);
  
  corona1.quaternion.copy(camera.quaternion);
  corona2.quaternion.copy(camera.quaternion);
  
  corona1.rotation.z += time * 0.004;
  corona2.rotation.z -= time * 0.006;
  
  binaryRings.forEach((r) => {
    r.mesh.rotation.z += r.speed;
  });

  // Animate character sprite particles radiating from the sun
  sunParticlesList.forEach((p) => {
    p.sprite.position.add(p.direction);
    
    const dist = p.sprite.position.length();
    if (dist > 16.0) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.0;
      p.sprite.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
  });

  // Capture active focus planet's position before it moves in this frame
  const oldPlanetPos = new THREE.Vector3();
  let activePlanet = null;
  if (activeFocusPlanetId) {
    activePlanet = planetObjects[activeFocusPlanetId];
    activePlanet.group.getWorldPosition(oldPlanetPos);
  }

  // Orbit & Sway mechanics for the planets
  Object.keys(planetObjects).forEach((key) => {
    const p = planetObjects[key];
    const orbit = p.config;
    
    // Incorporate starting angle offset to randomize orbit positions
    let angle = time * orbit.speed + (p.startAngleOffset || 0);
    const sway = Math.sin(time * 1.5 + orbit.radius) * orbit.swayAmplitude;
    
    const targetX = Math.cos(angle) * orbit.radius;
    const targetZ = Math.sin(angle) * orbit.radius;
    const targetY = sway;
    
    // Directly assign position to prevent spawning at (0,0,0) and animating out
    p.group.position.x = targetX;
    p.group.position.y = targetY;
    p.group.position.z = targetZ;
    
    // Slow planetary rotation of the entire unified group (core + chunks)
    p.group.rotation.y += 0.0035;

    // Copy planet world position & elevate curved hover label ABOVE planet top pole
    if (p.hoverLabelMesh) {
      const worldPos = new THREE.Vector3();
      p.group.getWorldPosition(worldPos);
      
      const labelPos = worldPos.clone();
      const yOffset = p.currentYOffset !== undefined ? p.currentYOffset : (p.config.size * 0.55);
      labelPos.y += yOffset;

      p.hoverLabelMesh.position.copy(labelPos);
      p.hoverLabelMesh.quaternion.copy(camera.quaternion);
    }
  });

  if (activePlanet) {
    const newPlanetPos = new THREE.Vector3();
    activePlanet.group.getWorldPosition(newPlanetPos);
    
    // Continuously align laser beam from Sun (0,0,0) to active planet position as it orbits
    const beamLength = newPlanetPos.length();
    laserGroup.position.set(0, 0, 0);
    laserGroup.scale.set(1, beamLength, 1);
    laserGroup.lookAt(newPlanetPos);
    laserGroup.rotateX(Math.PI / 2);
    
    // Calculate the displacement from orbit & sway movement
    const displacement = new THREE.Vector3().subVectors(newPlanetPos, oldPlanetPos);
    
    // Shift camera by displacement so it moves with the orbiting planet
    camera.position.add(displacement);
    
    if (isTransitioningFocus) {
      // Smoothly lerp controls.target to the new position
      controls.target.lerp(newPlanetPos, 0.08);
      
      const focusDistance = activePlanet.config.size * 3.8;
      const cameraDir = new THREE.Vector3().copy(camera.position).sub(newPlanetPos);
      cameraDir.y = 0; // Flatten vertically to guarantee a side view
      cameraDir.normalize();
      const targetCamPos = new THREE.Vector3().copy(newPlanetPos).addScaledVector(cameraDir, focusDistance);
      targetCamPos.y += 0.3; // Slight elevation for a dynamic side-on view (instead of top-down)
      
      // Smoothly zoom in the camera
      camera.position.lerp(targetCamPos, 0.08);
      controls.update();
      
      // Transition is complete when both target and camera position are very close
      if (controls.target.distanceTo(newPlanetPos) < 0.05 && camera.position.distanceTo(targetCamPos) < 0.1) {
        isTransitioningFocus = false;
      }
    } else {
      // Once transitioned, lock the controls target to the planet exactly
      controls.target.copy(newPlanetPos);
      controls.update();
    }
  }

  checkHover();
  
  if (activeFocusPlanetId) {
    const p = planetObjects[activeFocusPlanetId];
    const planetWorldPos = new THREE.Vector3();
    p.group.getWorldPosition(planetWorldPos);
    
    laserGroup.scale.set(1, planetWorldPos.length(), 1);
    laserGroup.lookAt(planetWorldPos);
    laserGroup.rotateX(Math.PI / 2);
  }

  // Update dynamic HUD telemetry info
  if (activeFocusPlanetId) {
    const p = planetObjects[activeFocusPlanetId];
    const pos = p.group.position;
    gridCoordVal.innerText = `X: ${pos.x.toFixed(2)} / Z: ${pos.z.toFixed(2)}`;
  } else {
    gridCoordVal.innerText = "X-Z ORBIT PLANE";
  }

  composer.render();
}

animate();
