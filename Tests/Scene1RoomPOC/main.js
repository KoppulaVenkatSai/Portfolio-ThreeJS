import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

import { TechAvatar } from './avatar.js';

// ==========================================
// 1. SCENE & RENDERER SETUP
// ==========================================
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x02040a);
scene.fog = new THREE.FogExp2(0x02040a, 0.0008);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  powerPreference: 'high-performance'
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

// Post-Processing Composer & Bloom
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.45,
  0.4,
  0.85
);
composer.addPass(renderPass);
composer.addPass(bloomPass);

// OrbitControls (Disabled by default, toggleable via HUD)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// ==========================================
// 2. CAMERA POSITIONS & CALCULATED VECTORS
// ==========================================
const INTERIOR_CAM_POS = new THREE.Vector3(25.0, -2.0, -3.0);
const INTERIOR_LOOK_TARGET = new THREE.Vector3(34.35, -5.37, -4.12);

const EXTERIOR_CAM_POS = new THREE.Vector3(22.0, -75.0, 28.0);
const EXTERIOR_LOOK_TARGET = new THREE.Vector3(37.5, -10.0, 0.0);

const currentLookTarget = INTERIOR_LOOK_TARGET.clone();
camera.position.copy(INTERIOR_CAM_POS);
camera.lookAt(currentLookTarget);

// ==========================================
// 3. LIGHTING SETUP
// ==========================================
const ambientLight = new THREE.AmbientLight(0x1e293b, 0.6);
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 0.8);
scene.add(hemisphereLight);

const sunLight = new THREE.DirectionalLight(0xfff7ed, 1.8);
sunLight.position.set(40.0, -50.0, 60.0);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
scene.add(sunLight);

// Soft interior cabin fill light
const cabinLight = new THREE.PointLight(0x38bdf8, 1.2, 15.0);
cabinLight.position.set(25.0, 1.5, -3.0);
scene.add(cabinLight);

// ==========================================
// 4. DEEP SPACE STARFIELD
// ==========================================
function buildStarfield() {
  const count = 3000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 800 + Math.random() * 400;

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const colorType = Math.random();
    if (colorType < 0.6) {
      colors[i * 3] = 0.9; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 1.0;
    } else if (colorType < 0.85) {
      colors[i * 3] = 0.4; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 1.0;
    } else {
      colors[i * 3] = 1.0; colors[i * 3 + 1] = 0.85; colors[i * 3 + 2] = 0.6;
    }
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 2.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.85
  });

  const starfield = new THREE.Points(geom, mat);
  scene.add(starfield);
}
buildStarfield();

// ==========================================
// 5. MODEL LOADING & LIGHT STRIPPING
// ==========================================
const gltfLoader = new GLTFLoader();
const fontLoader = new FontLoader();

let stationModel = null;
let avatarInstance = null;
let textMeshGroup = new THREE.Group();
scene.add(textMeshGroup);

gltfLoader.load(
  '../../assets/FinalSpaceStationModel.glb',
  (gltf) => {
    stationModel = gltf.scene;
    scene.add(stationModel);

    // Collect and remove embedded GLTF lights to prevent 2.7M lux blowout
    const lightsToRemove = [];
    stationModel.traverse((node) => {
      if (node.isLight) {
        lightsToRemove.push(node);
      }

      if (node.isMesh && node.material) {
        node.castShadow = true;
        node.receiveShadow = true;

        const matName = node.material.name || '';

        if (matName === 'Hull_Light') {
          node.material.color.setHex(0x475569);
          node.material.roughness = 0.45;
          node.material.metalness = 0.7;
        } else if (matName === 'Hull_Dark') {
          node.material.color.setHex(0x1e293b);
          node.material.roughness = 0.5;
          node.material.metalness = 0.8;
        } else if (matName === 'Rocket_Silver') {
          node.material.color.setHex(0xc0cdaf);
          node.material.roughness = 0.15;
          node.material.metalness = 0.9;
        } else if (matName === 'Gantry_Copper') {
          node.material.color.setHex(0xb45309);
          node.material.roughness = 0.35;
          node.material.metalness = 0.75;
        } else if (matName === 'Cabin_Red') {
          node.material.color.setHex(0x7f1d1d);
          node.material.emissive.setHex(0x000000);
        } else if (matName === 'Window_Glass_Mat' || node.name.includes('Window_Glass')) {
          node.material.transparent = true;
          node.material.opacity = 0.2;
          node.material.color.setHex(0x38bdf8);
          node.material.roughness = 0.05;
          node.material.metalness = 0.1;
        } else if (matName.includes('Glow')) {
          node.material.emissiveIntensity = 1.5;
        }
      }
    });

    lightsToRemove.forEach((light) => {
      if (light.parent) light.parent.remove(light);
    });

    console.log(`[SCENE 1] Stripped ${lightsToRemove.length} overexposed GLTF lights`);
  },
  undefined,
  (error) => {
    console.error('[SCENE 1] Error loading station model:', error);
  }
);

// Instantiate Waving Tech Avatar inside Cabin FOV
avatarInstance = new TechAvatar();
avatarInstance.group.position.set(29.0, -3.8, -4.5);
avatarInstance.group.rotation.set(0, -Math.PI / 3, 0);
scene.add(avatarInstance.group);

// Load 3D Font for Dynamic Glowing Text
fontLoader.load('/fonts/Poppins_Regular.json', (font) => {
  const textGeom = new TextGeometry('Hi, I am Venkat Koppula', {
    font: font,
    size: 0.4,
    height: 0.06,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.008,
    bevelSegments: 4
  });

  textGeom.center();

  const textMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    roughness: 0.2,
    metalness: 0.8,
    emissive: 0x0284c7,
    emissiveIntensity: 0.8
  });

  const textMesh = new THREE.Mesh(textGeom, textMat);
  textMeshGroup.add(textMesh);

  textMeshGroup.position.set(30.5, -2.6, -3.2);
  textMeshGroup.rotation.set(0, -Math.PI / 3.2, 0);

  gsap.to(textMeshGroup.position, {
    y: '-=0.1',
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
});

// ==========================================
// 6. BLAST OFF CAMERA PULL-OUT TRANSITION
// ==========================================
let isTransitioning = false;

function triggerBlastOff() {
  if (isTransitioning) return;
  isTransitioning = true;

  const blastBtn = document.getElementById('blast-off-btn');
  const camStatus = document.getElementById('cam-status');
  blastBtn.style.pointerEvents = 'none';
  blastBtn.style.opacity = '0.5';
  camStatus.innerText = 'LAUNCH_SEQUENCE_ACTIVE';

  // 1. Engine Ignition Camera Shake & Rumble
  const shakeObj = { x: 0, y: 0 };
  gsap.to(shakeObj, {
    x: 0.25,
    y: 0.25,
    duration: 0.1,
    repeat: 8,
    yoyo: true,
    onUpdate: () => {
      camera.position.x = INTERIOR_CAM_POS.x + (Math.random() - 0.5) * shakeObj.x;
      camera.position.y = INTERIOR_CAM_POS.y + (Math.random() - 0.5) * shakeObj.y;
    }
  });

  // 2. Backward Camera Pull-Out through Viewport Window
  const timeline = gsap.timeline({
    delay: 0.6,
    onComplete: () => {
      camStatus.innerText = 'EXTERIOR_VIEW // DESTINATION_SELECTION_READY';
      console.log('[SCENE 1] Blast Off pullout complete!');
    }
  });

  timeline.to(camera.position, {
    x: EXTERIOR_CAM_POS.x,
    y: EXTERIOR_CAM_POS.y,
    z: EXTERIOR_CAM_POS.z,
    duration: 3.8,
    ease: 'power3.inOut'
  }, 0);

  timeline.to(currentLookTarget, {
    x: EXTERIOR_LOOK_TARGET.x,
    y: EXTERIOR_LOOK_TARGET.y,
    z: EXTERIOR_LOOK_TARGET.z,
    duration: 3.8,
    ease: 'power3.inOut',
    onUpdate: () => {
      if (!controls.enabled) {
        camera.lookAt(currentLookTarget);
      }
    }
  }, 0);

  timeline.to(bloomPass, {
    strength: 1.0,
    duration: 1.2,
    yoyo: true,
    repeat: 1,
    ease: 'sine.inOut'
  }, 1.0);
}

// ==========================================
// 7. EVENT LISTENERS & RESIZE
// ==========================================
document.getElementById('blast-off-btn').addEventListener('click', triggerBlastOff);

const toggleOrbitBtn = document.getElementById('toggle-orbit-btn');
toggleOrbitBtn.addEventListener('click', () => {
  controls.enabled = !controls.enabled;
  const camStatus = document.getElementById('cam-status');
  if (controls.enabled) {
    controls.target.copy(currentLookTarget);
    toggleOrbitBtn.innerText = 'DISABLE FREE CAM';
    camStatus.innerText = 'FREE_ORBIT_ENABLED';
  } else {
    toggleOrbitBtn.innerText = 'TOGGLE FREE CAM';
    camStatus.innerText = isTransitioning ? 'EXTERIOR_VIEW' : 'INTERIOR_VIEW';
    camera.lookAt(currentLookTarget);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================
// 8. ANIMATION LOOP
// ==========================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();

  if (avatarInstance) {
    avatarInstance.update(elapsedTime);
  }

  if (controls.enabled) {
    controls.update();
  } else {
    camera.lookAt(currentLookTarget);
  }

  composer.render();
}

animate();
