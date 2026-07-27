import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

import { TechAvatar } from './avatar.js';

// ==========================================
// 1. SCENE, CAMERA & RENDERER SETUP
// ==========================================
const canvas = document.getElementById('avatar-webgl-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x070a12);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.4, 4.2);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  powerPreference: 'high-performance',
  logarithmicDepthBuffer: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

// Post-Processing Bloom
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.35, // Bloom strength
  0.4,  // Bloom radius
  0.90  // Bloom threshold
);
composer.addPass(renderPass);
composer.addPass(bloomPass);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 1.1, 0);
controls.autoRotate = true;
controls.autoRotateSpeed = 1.5;
controls.minDistance = 0.8;
controls.maxDistance = 8.0;

// ==========================================
// 2. STUDIO LIGHTING SETUP
// ==========================================
// Ambient Fill Light (Soft neutral warm ambient)
const ambientLight = new THREE.AmbientLight(0xfff8f0, 0.75);
scene.add(ambientLight);

// Key Light (Warm Key Light from Front-Right)
const keyLight = new THREE.DirectionalLight(0xfffaed, 1.4);
keyLight.position.set(2.5, 4.0, 3.5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 2048;
keyLight.shadow.mapSize.height = 2048;
keyLight.shadow.bias = -0.0001;
scene.add(keyLight);

// Fill Light (Soft neutral fill light from Front-Left)
const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.5);
fillLight.position.set(-2.5, 2.0, 2.5);
scene.add(fillLight);

// Rim Light (Cyan/Indigo Rim Highlight from Back)
const rimLight = new THREE.DirectionalLight(0x818cf8, 1.0);
rimLight.position.set(0, 3.0, -3.5);
scene.add(rimLight);

// Ground Shadow Plane
const groundGeom = new THREE.PlaneGeometry(10, 10);
const groundMat = new THREE.ShadowMaterial({ opacity: 0.35 });
const ground = new THREE.Mesh(groundGeom, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.04;
ground.receiveShadow = true;
scene.add(ground);

// ==========================================
// 3. INSTANTIATE PROCEDURAL 3D AVATAR
// ==========================================
const avatar = new TechAvatar();
scene.add(avatar.group);

// ==========================================
// 4. CAMERA PRESETS & UI CONTROLS
// ==========================================
const cameraPresets = {
  full: { pos: { x: 0, y: 1.2, z: 4.0 }, target: { x: 0, y: 1.0, z: 0 } },
  portrait: { pos: { x: 0, y: 1.65, z: 1.15 }, target: { x: 0, y: 1.65, z: 0 } },
  watch: { pos: { x: -0.45, y: 0.95, z: 0.65 }, target: { x: -0.32, y: 0.90, z: 0.15 } },
  shoes: { pos: { x: 0, y: 0.25, z: 1.35 }, target: { x: 0, y: 0.10, z: 0 } }
};

function animateCameraToPreset(presetKey, activeBtnId) {
  const preset = cameraPresets[presetKey];
  if (!preset) return;

  // Update active button state
  document.querySelectorAll('.hud-btn').forEach(btn => {
    if (btn.id.startsWith('cam-')) btn.classList.remove('active');
  });
  if (activeBtnId) {
    const btn = document.getElementById(activeBtnId);
    if (btn) btn.classList.add('active');
  }

  // Smooth GSAP transition
  gsap.to(camera.position, {
    x: preset.pos.x,
    y: preset.pos.y,
    z: preset.pos.z,
    duration: 1.6,
    ease: 'power2.inOut',
    onUpdate: () => controls.update()
  });

  gsap.to(controls.target, {
    x: preset.target.x,
    y: preset.target.y,
    z: preset.target.z,
    duration: 1.6,
    ease: 'power2.inOut',
    onUpdate: () => controls.update()
  });
}

// Wire UI Buttons
document.getElementById('cam-full-btn')?.addEventListener('click', () => {
  animateCameraToPreset('full', 'cam-full-btn');
});

document.getElementById('cam-portrait-btn')?.addEventListener('click', () => {
  animateCameraToPreset('portrait', 'cam-portrait-btn');
});

document.getElementById('cam-watch-btn')?.addEventListener('click', () => {
  animateCameraToPreset('watch', 'cam-watch-btn');
});

document.getElementById('cam-shoes-btn')?.addEventListener('click', () => {
  animateCameraToPreset('shoes', 'cam-shoes-btn');
});

const turntableBtn = document.getElementById('toggle-turntable-btn');
turntableBtn?.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  turntableBtn.textContent = `Auto Rotate: ${controls.autoRotate ? 'ON' : 'OFF'}`;
});

// ==========================================
// 5. RESIZE HANDLER & RENDER LOOP
// ==========================================
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  if (avatar && avatar.update) {
    avatar.update(delta);
  }
  controls.update();
  composer.render();
}

animate();

console.log('[AVATAR POC] Showcase initialized successfully!');
