import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

import { CursiveNeonText } from './cursiveText.js';
import { SpaceCosmosBackground } from './spaceBackground.js';

// ==========================================
// 1. SCENE & RENDERER SETUP
// ==========================================
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x02040a);

const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 2000);

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
renderer.toneMappingExposure = 1.15;

// Post-Processing Composer & Bloom (Selective Threshold)
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.4,  // Bloom Strength (0.4)
  0.5,  // Bloom Radius
  0.96  // Bloom Threshold (0.96)
);
composer.addPass(renderPass);
composer.addPass(bloomPass);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false; // Disabled by default until toggled in settings
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// ==========================================
// 2. LOADING MANAGER (Matching EarthLandingPOCV3)
// ==========================================
const loaderScreen = document.getElementById('loader-screen');
const loaderBar = document.getElementById('loader-bar');
const loaderStatus = document.getElementById('loader-status');

const loadingManager = new THREE.LoadingManager();

loadingManager.onProgress = (url, loaded, total) => {
  const pct = Math.floor((loaded / total) * 100);
  if (loaderBar) loaderBar.style.width = `${pct}%`;
  if (loaderStatus) loaderStatus.innerText = `Preloading WebGL and assets... (${pct}%)`;
};

loadingManager.onLoad = () => {
  if (loaderStatus) loaderStatus.innerText = 'Initialization Complete';
  if (loaderScreen) {
    loaderScreen.style.opacity = '0';
    setTimeout(() => {
      loaderScreen.style.display = 'none';
    }, 800);
  }
  console.log('[SCENE 1] Loading Manager complete.');
};

loadingManager.onError = (url) => {
  console.error('[SCENE 1] Error loading asset:', url);
  if (loaderStatus) loaderStatus.innerText = `Error loading: ${url}`;
};

// ==========================================
// 3. CAMERA POSITIONS (User Configured Coordinates)
// ==========================================
// SCENE 1 CAMERA COORDINATES
const INTERIOR_CAM_POS = new THREE.Vector3(41.31, -0.37, -7.14);
const INTERIOR_LOOK_TARGET = new THREE.Vector3(36.37, -0.49, 1.56);

// BLAST OFF EXTERIOR TARGET CAMERA COORDINATES (User Configured)
const EXTERIOR_CAM_POS = new THREE.Vector3(-12.68, 29.89, 78.14);
const EXTERIOR_LOOK_TARGET = new THREE.Vector3(14.65, 23.30, 17.59);

const currentLookTarget = INTERIOR_LOOK_TARGET.clone();
camera.position.copy(INTERIOR_CAM_POS);
camera.lookAt(currentLookTarget);
controls.target.copy(INTERIOR_LOOK_TARGET);

// ==========================================
// 4. LIGHTING SETUP
// ==========================================
const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.7);
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0x38bdf8, 0x0f172a, 0.9);
scene.add(hemisphereLight);

const sunLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
sunLight.position.set(40.0, -50.0, 60.0);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
scene.add(sunLight);

// Cabin fill light
const cabinLight = new THREE.PointLight(0x38bdf8, 1.8, 20.0);
cabinLight.position.set(37.5, -1.0, 2.0);
scene.add(cabinLight);

// Red glowing button light
const buttonRedLight = new THREE.PointLight(0xff0033, 4.5, 8.0);
buttonRedLight.position.set(37.5, -2.2, 6.5);
scene.add(buttonRedLight);

// ==========================================
// 5. SPACE ENVIRONMENT (No Planet Structure / No Orbits)
// ==========================================
const cosmosBackground = new SpaceCosmosBackground(scene);

// ==========================================
// 6. DYNAMIC "BLAST OFF" CANVAS TEXTURE FOR 3D MODEL BUTTON LID (TEXT ONLY - NO FRAME)
// ==========================================
function drawBlastOffLidCanvas(ctx) {
  ctx.clearRect(0, 0, 1024, 512);

  ctx.save();
  ctx.translate(512, 256);
  ctx.scale(0.80, 1.65); // Ultra-tall condensed font transform

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Intense orange-red glow halo
  ctx.shadowColor = '#ff0000ff';
  ctx.shadowBlur = 30;
  ctx.fillStyle = '#ff1900ff';
  ctx.font = 'bold 185px "Bebas Neue", "Oswald", "Anton", sans-serif';
  ctx.fillText('BLAST OFF', 0, 0);

  // Bright yellow core highlight
  ctx.shadowBlur = 10;
  ctx.fillStyle = '#ff3c00ff';
  ctx.fillText('BLAST OFF', 0, 0);

  ctx.restore();
}

function createBlastOffLidTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  drawBlastOffLidCanvas(ctx);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Re-draw canvas once web fonts finish loading for 100% font consistency
  if (document.fonts) {
    document.fonts.ready.then(() => {
      drawBlastOffLidCanvas(ctx);
      texture.needsUpdate = true;
    });
  }

  return texture;
}

const blastOffLidTexture = createBlastOffLidTexture();

function createConsoleScreenTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 0, 512, 256);

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  for (let x = 0; x < 512; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 256);
    ctx.stroke();
  }
  for (let y = 0; y < 256; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
    ctx.stroke();
  }

  ctx.fillStyle = '#e0f2fe';
  ctx.font = 'bold 24px monospace';
  ctx.fillText('STATION_DIAGNOSTICS // ONLINE', 20, 40);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const consoleScreenTexture = createConsoleScreenTexture();

// ==========================================
// 7. GLTF MODEL LOADING & 3D MODEL BUTTON WIRING
// ==========================================
const gltfLoader = new GLTFLoader(loadingManager);

let stationModel = null;
let buttonCylinderMesh = null;
let lidOverlayMesh = null;
const clickableObjects = [];

gltfLoader.load(
  '../../assets/FinalSpaceStationModel.glb',
  (gltf) => {
    stationModel = gltf.scene;
    scene.add(stationModel);

    const lightsToRemove = [];
    stationModel.traverse((node) => {
      if (node.isLight) {
        lightsToRemove.push(node);
      }

      if (node.isMesh && node.material) {
        node.castShadow = true;
        node.receiveShadow = true;

        const matName = node.material.name || '';
        const nodeName = node.name || '';

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
        } else if (matName === 'Gantry_Copper' || nodeName.includes('Window_Inner_Frame') || nodeName.includes('Window_Frame')) {
          node.material = new THREE.MeshStandardMaterial({
            color: 0x0f2b5c, // Deep metallic dark blue
            roughness: 0.3,
            metalness: 0.85
          });
        } else if (matName === 'Window_Glass_Mat' || nodeName.includes('Window_Glass')) {
          node.material.transparent = true;
          node.material.opacity = 0.18;
          node.material.color.setHex(0x38bdf8);
          node.material.roughness = 0.05;
          node.material.metalness = 0.1;
        }

        // Reflective Dark Blue Metallic Material for Button Casing (Matching window border with higher reflectivity)
        const buttonCasingMaterial = new THREE.MeshStandardMaterial({
          color: 0x0f2b5c, // Metallic dark blue matching window border
          metalness: 0.95, // High metallic reflectivity
          roughness: 0.1,  // Smooth reflective finish
          envMapIntensity: 1.0
        });

        if (nodeName.includes('Button_Lid') || nodeName.includes('Button_Base') || nodeName.includes('Button_Bezel') || nodeName.includes('Button_Hinge') || nodeName.includes('Button_Screw') || nodeName.includes('Button_Indicator')) {
          node.material = buttonCasingMaterial;
          clickableObjects.push(node);
        }

        if (nodeName.includes('Console_Screen')) {
          node.material = new THREE.MeshStandardMaterial({
            map: consoleScreenTexture,
            emissiveMap: consoleScreenTexture,
            emissive: new THREE.Color(0x38bdf8),
            emissiveIntensity: 1.2
          });
        }
        if (nodeName.includes('Button_Cylinder')) {
          buttonCylinderMesh = node;
          node.material = new THREE.MeshStandardMaterial({
            color: 0xff0000, // Vibrant saturated physical red
            emissive: 0xff0011, // High HDR red emissive
            emissiveIntensity: 1.8, // Normal resting emissive intensity (not hovered)
            roughness: 0.1,
            metalness: 0.2
          });
          clickableObjects.push(node);
        }

        if (nodeName.includes('Button_Lid') || nodeName.includes('Button_Base') || nodeName.includes('Button_Bezel')) {
          clickableObjects.push(node);
        }

        if (nodeName.includes('Console_Screen')) {
          node.material = new THREE.MeshStandardMaterial({
            map: consoleScreenTexture,
            emissiveMap: consoleScreenTexture,
            emissive: new THREE.Color(0x38bdf8),
            emissiveIntensity: 1.2
          });
        }
      }
    });

    // Create 3D Screen Overlay directly on Button Lid so "BLAST OFF" is 100% visible
    const lidOverlayGeom = new THREE.PlaneGeometry(1.5, 0.85);
    const lidOverlayMat = new THREE.MeshBasicMaterial({
      map: blastOffLidTexture,
      transparent: true,
      side: THREE.DoubleSide
    });
    lidOverlayMesh = new THREE.Mesh(lidOverlayGeom, lidOverlayMat);
    // BLAST OFF LID SCREEN TRANSFORM
    lidOverlayMesh.position.set(37.50, -2.55, 7.35);
    lidOverlayMesh.rotation.set(-0.04, 3.15, 0);
    lidOverlayMesh.scale.set(2.30, 2.30, 2.30);
    scene.add(lidOverlayMesh);

    lightsToRemove.forEach((light) => {
      if (light.parent) light.parent.remove(light);
    });

    console.log(`[SCENE 1] Station loaded. 3D Model Button & Lid wired!`);
  },
  undefined,
  (error) => {
    console.error('[SCENE 1] Error loading station model:', error);
  }
);

// ==========================================
// 8. 3D NEON CURSIVE TEXT ("Hi, I am Venkat Koppula")
// ==========================================
const cursiveTextInstance = new CursiveNeonText(() => {
  // 3D TEXT POSITION, ROTATION & SCALE
  cursiveTextInstance.group.position.set(36.00, 0.40, 9.40);
  cursiveTextInstance.group.rotation.set(0, 3.05, 0);
  cursiveTextInstance.group.scale.set(1.45, 1.45, 1.45);
});
scene.add(cursiveTextInstance.group);

gsap.to(cursiveTextInstance.floatGroup.position, {
  y: '+=0.06',
  duration: 2.8,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

// ==========================================
// 9. RAYCASTING INTERACTION ON 3D MODEL BUTTON
// ==========================================
// Raycasting mouse initialized offscreen (-9999, -9999) so default (0,0) center screen does not trigger false hover on initial load
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-9999, -9999);

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  if (clickableObjects.length > 0) {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clickableObjects, true);
    if (intersects.length > 0) {
      document.body.style.cursor = 'pointer';
      if (buttonCylinderMesh && buttonCylinderMesh.material) {
        buttonCylinderMesh.material.emissiveIntensity = 2.5; // Glow boost on hover
      }
    } else {
      document.body.style.cursor = 'default';
      if (buttonCylinderMesh && buttonCylinderMesh.material) {
        buttonCylinderMesh.material.emissiveIntensity = 1.4; // Return to normal resting state
      }
    }
  }
});

window.addEventListener('click', (event) => {
  if (isTransitioning || clickableObjects.length === 0) return;
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(clickableObjects, true);
  if (intersects.length > 0) {
    if (buttonCylinderMesh) {
      gsap.to(buttonCylinderMesh.position, {
        y: '-=0.15',
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          triggerBlastOff();
        }
      });
    } else {
      triggerBlastOff();
    }
  }
});

// ==========================================
// 10. BLAST OFF CAMERA PULL-OUT TRANSITION
// ==========================================
let isTransitioning = false;

function triggerBlastOff() {
  if (isTransitioning) return;
  isTransitioning = true;

  const camStatus = document.getElementById('cam-status');
  if (camStatus) camStatus.innerText = 'LAUNCH_SEQUENCE_ACTIVE';

  const timeline = gsap.timeline({
    onComplete: () => {
      if (camStatus) camStatus.innerText = 'EXTERIOR_VIEW // DESTINATION_SELECTION_READY';
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
    strength: 1.2,
    duration: 1.2,
    yoyo: true,
    repeat: 1,
    ease: 'sine.inOut'
  }, 1.0);
}

// ==========================================
// 11. CAMERA INSPECTOR TOGGLE & POSITION COPY TOOL
// ==========================================
const cameraInspector = document.getElementById('camera-inspector');
const settingsToggleBtn = document.getElementById('settings-toggle-btn');
const camPosVal = document.getElementById('cam-pos-val');
const camTargetVal = document.getElementById('cam-target-val');
const camFovVal = document.getElementById('cam-fov-val');
const toggleOrbitBtn = document.getElementById('toggle-orbit-btn');
const copyCamBtn = document.getElementById('copy-cam-btn');
const copyToast = document.getElementById('copy-toast');

// Toggle Settings Icon to Show/Hide Inspector Panel
settingsToggleBtn?.addEventListener('click', () => {
  if (cameraInspector) {
    cameraInspector.classList.toggle('inspector-hidden');
  }
});

// Accordion Expand/Collapse Handlers
document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    if (item) item.classList.toggle('active');
  });
});

toggleOrbitBtn?.addEventListener('click', () => {
  controls.enabled = !controls.enabled;
  const camStatus = document.getElementById('cam-status');
  if (controls.enabled) {
    toggleOrbitBtn.innerText = 'DISABLE FREE CAM';
    if (camStatus) camStatus.innerText = 'FREE_ORBIT_ENABLED';
  } else {
    toggleOrbitBtn.innerText = 'ENABLE FREE CAM';
    if (camStatus) camStatus.innerText = isTransitioning ? 'EXTERIOR_VIEW' : 'INTERIOR_VIEW';
  }
});

copyCamBtn?.addEventListener('click', () => {
  const posX = camera.position.x.toFixed(2);
  const posY = camera.position.y.toFixed(2);
  const posZ = camera.position.z.toFixed(2);

  const targetX = controls.target.x.toFixed(2);
  const targetY = controls.target.y.toFixed(2);
  const targetZ = controls.target.z.toFixed(2);

  const codeSnippet = `// SCENE 1 CAMERA COORDINATES
const INTERIOR_CAM_POS = new THREE.Vector3(${posX}, ${posY}, ${posZ});
const INTERIOR_LOOK_TARGET = new THREE.Vector3(${targetX}, ${targetY}, ${targetZ});`;

  // Copy to clipboard
  navigator.clipboard.writeText(codeSnippet).then(() => {
    console.log('[CAMERA INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
  }).catch((err) => {
    console.warn('[CAMERA INSPECTOR] Clipboard blocked, see console log below:');
  });

  // Always log to console
  console.log('\n==========================================');
  console.log('📌 COPIED CAMERA COORDINATES:');
  console.log(codeSnippet);
  console.log('==========================================\n');

  // Show Toast
  if (copyToast) {
    copyToast.style.display = 'block';
    setTimeout(() => {
      copyToast.style.display = 'none';
    }, 2500);
  }
});

// ==========================================
// 12. BLOOM CONTROLS
// ==========================================
const bloomStrengthSlider = document.getElementById('bloom-strength-slider');
const bloomThresholdSlider = document.getElementById('bloom-threshold-slider');
const bloomStrengthVal = document.getElementById('bloom-strength-val');
const bloomThresholdVal = document.getElementById('bloom-threshold-val');

bloomStrengthSlider?.addEventListener('input', () => {
  const val = parseFloat(bloomStrengthSlider.value);
  bloomPass.strength = val;
  if (bloomStrengthVal) bloomStrengthVal.innerText = val.toFixed(2);
});

bloomThresholdSlider?.addEventListener('input', () => {
  const val = parseFloat(bloomThresholdSlider.value);
  bloomPass.threshold = val;
  if (bloomThresholdVal) bloomThresholdVal.innerText = val.toFixed(2);
});

// ==========================================
// 13. 3D NAME TEXT TRANSFORM SLIDER HANDLERS
// ==========================================
const textScaleSlider = document.getElementById('text-scale-slider');
const textXSlider = document.getElementById('text-x-slider');
const textYSlider = document.getElementById('text-y-slider');
const textZSlider = document.getElementById('text-z-slider');
const textRotYSlider = document.getElementById('text-roty-slider');

const textScaleVal = document.getElementById('text-scale-val');
const textXVal = document.getElementById('text-x-val');
const textYVal = document.getElementById('text-y-val');
const textZVal = document.getElementById('text-z-val');
const textRotYVal = document.getElementById('text-roty-val');

const copyTextBtn = document.getElementById('copy-text-btn');

function updateTextTransformFromSliders() {
  if (!cursiveTextInstance) return;
  const scale = parseFloat(textScaleSlider.value);
  const x = parseFloat(textXSlider.value);
  const y = parseFloat(textYSlider.value);
  const z = parseFloat(textZSlider.value);
  const rotY = parseFloat(textRotYSlider.value);

  cursiveTextInstance.group.scale.set(scale, scale, scale);
  cursiveTextInstance.group.position.set(x, y, z);
  cursiveTextInstance.group.rotation.set(0, rotY, 0);

  if (textScaleVal) textScaleVal.innerText = scale.toFixed(2);
  if (textXVal) textXVal.innerText = x.toFixed(2);
  if (textYVal) textYVal.innerText = y.toFixed(2);
  if (textZVal) textZVal.innerText = z.toFixed(2);
  if (textRotYVal) textRotYVal.innerText = rotY.toFixed(2);
}

textScaleSlider?.addEventListener('input', updateTextTransformFromSliders);
textXSlider?.addEventListener('input', updateTextTransformFromSliders);
textYSlider?.addEventListener('input', updateTextTransformFromSliders);
textZSlider?.addEventListener('input', updateTextTransformFromSliders);
textRotYSlider?.addEventListener('input', updateTextTransformFromSliders);

copyTextBtn?.addEventListener('click', () => {
  if (!cursiveTextInstance) return;
  const scale = cursiveTextInstance.group.scale.x.toFixed(2);
  const posX = cursiveTextInstance.group.position.x.toFixed(2);
  const posY = cursiveTextInstance.group.position.y.toFixed(2);
  const posZ = cursiveTextInstance.group.position.z.toFixed(2);
  const rotY = cursiveTextInstance.group.rotation.y.toFixed(2);

  const codeSnippet = `// 3D TEXT POSITION, ROTATION & SCALE
cursiveTextInstance.group.position.set(${posX}, ${posY}, ${posZ});
cursiveTextInstance.group.rotation.set(0, ${rotY}, 0);
cursiveTextInstance.group.scale.set(${scale}, ${scale}, ${scale});`;

  navigator.clipboard.writeText(codeSnippet).then(() => {
    console.log('[TEXT INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
  }).catch(() => {
    console.warn('[TEXT INSPECTOR] Clipboard blocked, see console log below:');
  });

  console.log('\n==========================================');
  console.log('📌 COPIED 3D TEXT COORDINATES:');
  console.log(codeSnippet);
  console.log('==========================================\n');

  if (copyToast) {
    copyToast.style.display = 'block';
    setTimeout(() => {
      copyToast.style.display = 'none';
    }, 2500);
  }
});

// ==========================================
// 14. BLAST OFF LID TEXT SLIDER HANDLERS
// ==========================================
const lidScaleSlider = document.getElementById('lid-scale-slider');
const lidXSlider = document.getElementById('lid-x-slider');
const lidYSlider = document.getElementById('lid-y-slider');
const lidZSlider = document.getElementById('lid-z-slider');
const lidRotXSlider = document.getElementById('lid-rotx-slider');
const lidRotYSlider = document.getElementById('lid-roty-slider');

const lidScaleVal = document.getElementById('lid-scale-val');
const lidXVal = document.getElementById('lid-x-val');
const lidYVal = document.getElementById('lid-y-val');
const lidZVal = document.getElementById('lid-z-val');
const lidRotXVal = document.getElementById('lid-rotx-val');
const lidRotYVal = document.getElementById('lid-roty-val');
const copyLidBtn = document.getElementById('copy-lid-btn');

function updateLidTransformFromSliders() {
  if (!lidOverlayMesh) return;
  const scale = parseFloat(lidScaleSlider.value);
  const x = parseFloat(lidXSlider.value);
  const y = parseFloat(lidYSlider.value);
  const z = parseFloat(lidZSlider.value);
  const rotX = parseFloat(lidRotXSlider.value);
  const rotY = parseFloat(lidRotYSlider.value);

  lidOverlayMesh.scale.set(scale, scale, scale);
  lidOverlayMesh.position.set(x, y, z);
  lidOverlayMesh.rotation.set(rotX, rotY, 0);

  if (lidScaleVal) lidScaleVal.innerText = scale.toFixed(2);
  if (lidXVal) lidXVal.innerText = x.toFixed(2);
  if (lidYVal) lidYVal.innerText = y.toFixed(2);
  if (lidZVal) lidZVal.innerText = z.toFixed(2);
  if (lidRotXVal) lidRotXVal.innerText = rotX.toFixed(2);
  if (lidRotYVal) lidRotYVal.innerText = rotY.toFixed(2);
}

lidScaleSlider?.addEventListener('input', updateLidTransformFromSliders);
lidXSlider?.addEventListener('input', updateLidTransformFromSliders);
lidYSlider?.addEventListener('input', updateLidTransformFromSliders);
lidZSlider?.addEventListener('input', updateLidTransformFromSliders);
lidRotXSlider?.addEventListener('input', updateLidTransformFromSliders);
lidRotYSlider?.addEventListener('input', updateLidTransformFromSliders);

copyLidBtn?.addEventListener('click', () => {
  if (!lidOverlayMesh) return;
  const scale = lidOverlayMesh.scale.x.toFixed(2);
  const posX = lidOverlayMesh.position.x.toFixed(2);
  const posY = lidOverlayMesh.position.y.toFixed(2);
  const posZ = lidOverlayMesh.position.z.toFixed(2);
  const rotX = lidOverlayMesh.rotation.x.toFixed(2);
  const rotY = lidOverlayMesh.rotation.y.toFixed(2);

  const codeSnippet = `// BLAST OFF LID SCREEN TRANSFORM
lidOverlayMesh.position.set(${posX}, ${posY}, ${posZ});
lidOverlayMesh.rotation.set(${rotX}, ${rotY}, 0);
lidOverlayMesh.scale.set(${scale}, ${scale}, ${scale});`;

  navigator.clipboard.writeText(codeSnippet).then(() => {
    console.log('[LID INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
  }).catch(() => {
    console.warn('[LID INSPECTOR] Clipboard blocked, see console log below:');
  });

  console.log('\n==========================================');
  console.log('📌 COPIED BLAST OFF LID TRANSFORM:');
  console.log(codeSnippet);
  console.log('==========================================\n');

  if (copyToast) {
    copyToast.style.display = 'block';
    setTimeout(() => {
      copyToast.style.display = 'none';
    }, 2500);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================
// 12. ANIMATION LOOP
// ==========================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();
  cosmosBackground.update(elapsedTime);

  if (controls.enabled) {
    controls.update();
  } else {
    camera.lookAt(currentLookTarget);
  }

  // Update Inspector HUD Values
  if (camPosVal) {
    camPosVal.innerText = `${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)}`;
  }
  if (camTargetVal) {
    camTargetVal.innerText = `${controls.target.x.toFixed(2)}, ${controls.target.y.toFixed(2)}, ${controls.target.z.toFixed(2)}`;
  }
  if (camFovVal) {
    camFovVal.innerText = `${camera.fov.toFixed(0)}°`;
  }

  composer.render();
}

animate();
