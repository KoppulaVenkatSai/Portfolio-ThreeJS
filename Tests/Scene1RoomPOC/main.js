import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

import { CursiveNeonText } from './cursiveText.js';
import { SpaceCosmosBackground } from './spaceBackground.js';
import { TechAvatar } from './avatar.js';
import { HologramScreen } from './hologramScreen.js';

// ==========================================
// 1. SCENE & RENDERER SETUP
// ==========================================
const canvas = document.getElementById('webgl-canvas');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x02040a);

// Optimized FOV and Near/Far planes (0.5 to 800) to eliminate z-fighting depth precision loss
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 800);

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
renderer.toneMappingExposure = 1.25;

// Post-Processing Composer & Bloom (Selective Threshold)
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.45, // Bloom Strength
  0.5,  // Bloom Radius
  0.92  // Bloom Threshold
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
// 3. CAMERA POSITIONS (Refined & Balanced Composition)
// ==========================================
// SCENE 1 CAMERA COORDINATES - Centered room framing with portal ring framing the right
const INTERIOR_CAM_POS = new THREE.Vector3(39.80, 0.10, -6.80);
const INTERIOR_LOOK_TARGET = new THREE.Vector3(36.20, -0.40, 2.80);

// BLAST OFF EXTERIOR TARGET CAMERA COORDINATES
const EXTERIOR_CAM_POS = new THREE.Vector3(-12.68, 29.89, 78.14);
const EXTERIOR_LOOK_TARGET = new THREE.Vector3(14.65, 23.30, 17.59);

const currentLookTarget = INTERIOR_LOOK_TARGET.clone();
camera.position.copy(INTERIOR_CAM_POS);
camera.lookAt(currentLookTarget);
controls.target.copy(INTERIOR_LOOK_TARGET);

// Expose triggerBlastOff on window for testing & automated triggers
window.triggerBlastOff = triggerBlastOff;

// ==========================================
// 4. LIGHTING SETUP (Atmospheric & Soft Cabin Interior)
// ==========================================
const ambientLight = new THREE.AmbientLight(0x1d3557, 1.2);
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0x38bdf8, 0x090d16, 0.3);
scene.add(hemisphereLight);

const sunLight = new THREE.DirectionalLight(0xfff7ed, 1.5);
sunLight.position.set(45.0, 30.0, 60.0);
sunLight.castShadow = true;

// Shadow map camera optimization to remove shadow acne and flickering
sunLight.shadow.mapSize.width = 2048;
sunLight.shadow.mapSize.height = 2048;
scene.add(sunLight);

// Cabin fill light (soft overhead cabin illumination)
const cabinLight = new THREE.PointLight(0x38bdf8, 1.4, 20.0);
cabinLight.position.set(37.5, 5.0, 2.0);
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

  const text = "BLAST OFF";
  const letters = text.split('');
  const total = letters.length;

  const startX = 260;
  const endX = 780;
  const topY = 65; // Fixed top horizontal line for all letters

  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  for (let i = 0; i < total; i++) {
    const letter = letters[i];
    if (letter === ' ') continue;

    const t = i / (total - 1);
    // Scale tapering: Left is 1.30x scale, tapering smaller to 0.80x on the right
    const scaleY = 1.75 * (1.30 - t * 0.50);
    const scaleX = 0.85 * (1.20 - t * 0.38);

    const x = startX + t * (endX - startX);

    ctx.save();
    ctx.translate(x, topY);
    ctx.scale(scaleX, scaleY);

    // Create vertical gradient: Top half bright yellow (#ffea00), bottom half deep fiery orange (#d92600)
    const textGradient = ctx.createLinearGradient(0, 0, 0, 160);
    textGradient.addColorStop(0.0, '#ffea00'); // Top half: bright yellow core
    textGradient.addColorStop(0.4, '#ff7700ff'); // Mid transition: warm orange
    textGradient.addColorStop(1.0, '#ff2a00ff'); // Bottom half: deep rich orange

    // Intense orange-red glow halo
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 35;
    ctx.fillStyle = textGradient;
    ctx.font = 'bold 160px "Bebas Neue", "Oswald", "Anton", sans-serif';
    ctx.fillText(letter, 0, 0);

    // Bright core highlight with vertical gradient
    ctx.shadowBlur = 12;
    ctx.fillStyle = textGradient;
    ctx.fillText(letter, 0, 0);

    ctx.restore();
  }

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
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

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

const collarLeftNodes = [];
const collarRightNodes = [];
const collarFrontNodes = [];
const collarBackNodes = [];
const rocketPadNodes = [];

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

      const nodeName = node.name || '';
      if (nodeName.includes('Collar_Left')) collarLeftNodes.push(node);
      if (nodeName.includes('Collar_Right')) collarRightNodes.push(node);
      if (nodeName.includes('Collar_Front')) collarFrontNodes.push(node);
      if (nodeName.includes('Collar_Back')) collarBackNodes.push(node);
      if (nodeName.includes('Docking_Platform') || nodeName.includes('Exterior_Docking_Collar')) rocketPadNodes.push(node);

      if (node.isMesh && node.material) {
        node.castShadow = true;
        node.receiveShadow = true;

        const matName = node.material.name || '';
        const nodeName = node.name || '';

        if (nodeName.includes('Cabin_Light_Strip') || nodeName.includes('Light_Strip')) {
          node.visible = false;
        }

        if (matName === 'Hull_Light') {
          node.material.color.setHex(0x64748b);
          node.material.roughness = 0.35;
          node.material.metalness = 0.8;
        } else if (matName === 'Hull_Dark') {
          node.material.color.setHex(0x1e293b);
          node.material.roughness = 0.4;
          node.material.metalness = 0.85;
        } else if (matName === 'Rocket_Silver' || matName.toLowerCase().includes('rocket') || nodeName.toLowerCase().includes('rocket')) {
          node.material.color.setHex(0xaaaaaa); // Chrome silver base for reflections from EarthLandingPOCV3
          node.material.metalness = 0.99;
          node.material.roughness = 0.01;
          node.material.envMapIntensity = 0.35;
          node.material.needsUpdate = true;
        } else if (matName === 'Gantry_Copper' || nodeName.includes('Window_Inner_Frame') || nodeName.includes('Window_Frame')) {
          node.material = new THREE.MeshStandardMaterial({
            color: 0x0f2b5c,
            roughness: 0.25,
            metalness: 0.90
          });
        } else if (matName === 'Window_Glass_Mat' || nodeName.includes('Window_Glass')) {
          node.material.transparent = true;
          node.material.opacity = 0.22;
          node.material.color.setHex(0x38bdf8);
          node.material.roughness = 0.02;
          node.material.metalness = 0.2;
        }

        if (nodeName.includes('Button_Lid') || nodeName.includes('Button_Base') || nodeName.includes('Button_Bezel') || nodeName.includes('Button_Hinge') || nodeName.includes('Button_Screw') || nodeName.includes('Button_Indicator')) {
          node.material = new THREE.MeshStandardMaterial({
            color: 0x0f2b5c,
            metalness: 0.95,
            roughness: 0.1,
            envMapIntensity: 1.0
          });
          clickableObjects.push(node);
        }

        if (nodeName.includes('Console_Screen')) {
          node.material = new THREE.MeshStandardMaterial({
            map: consoleScreenTexture,
            emissiveMap: consoleScreenTexture,
            emissive: new THREE.Color(0x38bdf8),
            emissiveIntensity: 1.4
          });
        }
        if (nodeName.includes('Button_Cylinder')) {
          buttonCylinderMesh = node;
          node.material = new THREE.MeshStandardMaterial({
            color: 0xff0000,
            emissive: 0xff0011,
            emissiveIntensity: 1.8,
            roughness: 0.1,
            metalness: 0.2
          });
          clickableObjects.push(node);
        }
      }
    });

    // Create 3D Screen Overlay directly on Button Lid with depthTest: false to eliminate black clipping box
    const lidOverlayGeom = new THREE.PlaneGeometry(1.5, 0.85);
    const lidOverlayMat = new THREE.MeshStandardMaterial({
      map: blastOffLidTexture,
      emissiveMap: blastOffLidTexture,
      emissive: new THREE.Color(0xff4400),
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.52,
      roughness: 0.55,
      metalness: 0.35,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      depthTest: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    lidOverlayMesh = new THREE.Mesh(lidOverlayGeom, lidOverlayMat);
    // BLAST OFF LID SCREEN TRANSFORM
    lidOverlayMesh.position.set(37.50, -2.75, 7.34);
    lidOverlayMesh.rotation.set(-0.04, 3.15, 0);
    lidOverlayMesh.scale.set(2.30, 2.30, 2.30);
    scene.add(lidOverlayMesh);

    // Dedicated Rocket Launchpad Accent Light outside window
    const rocketLight = new THREE.PointLight(0x38bdf8, 3.5, 45.0);
    rocketLight.position.set(20.0, 5.0, 18.0);
    scene.add(rocketLight);

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
  cursiveTextInstance.group.position.set(35.10, 0.40, 9.40);
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
// 8.5 3D AVATAR ("Venky Avatar")
// ==========================================
const techAvatarInstance = new TechAvatar();
// Positioned inside cabin room on the right side of control console
techAvatarInstance.group.position.set(32.95, -5.50, 1.10);
techAvatarInstance.group.rotation.set(0.00, 2.04, 0.00);
techAvatarInstance.group.scale.set(7.70, 7.70, 7.70);
scene.add(techAvatarInstance.group);

// Dedicated soft cream/peach fill/key light on Avatar to prevent facial blowout
const avatarLight = new THREE.PointLight(0xffdab9, 0.85, 15.0);
avatarLight.position.set(36.0, 1.5, -2.0);
scene.add(avatarLight);

// ==========================================
// 8.6 3D HOLOGRAPHIC SELECTION SCREEN (SCENE 2)
// ==========================================
const hologramScreenInstance = new HologramScreen();
// Framed in front of space station viewing target when camera halts at EXTERIOR_CAM_POS
hologramScreenInstance.group.position.set(-11.50, 30.60, 70.30);
hologramScreenInstance.group.rotation.set(0.10, -0.30, 0.02);
hologramScreenInstance.group.scale.set(0.25, 0.25, 0.25);

// PROJECTOR CONE TRANSFORM & PROPERTIES (LOCKED IN)
hologramScreenInstance.setBeamTransform(1.00, 0.70, -2.20, 0.21);
hologramScreenInstance.setBeamProps(0.28, 60, 0.50);
hologramScreenInstance.setHoverBrightness(0.0);

hologramScreenInstance.group.visible = false;
scene.add(hologramScreenInstance.group);

// ==========================================
// 9. RAYCASTING INTERACTION ON 3D MODEL BUTTON
// ==========================================
// Raycasting mouse initialized offscreen (-9999, -9999) so default (0,0) center screen does not trigger false hover on initial load
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(-9999, -9999);

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Scene 2 Hologram Screen Hover Handling
  if (hologramScreenInstance && hologramScreenInstance.isVisible) {
    raycaster.setFromCamera(mouse, camera);
    const holoIntersects = raycaster.intersectObject(hologramScreenInstance.screenMesh);
    if (holoIntersects.length > 0) {
      document.body.style.cursor = 'pointer';
      const uv = holoIntersects[0].uv;
      if (uv.x < 0.5) {
        hologramScreenInstance.setHoverTarget(1); // Target A (Koppula System)
      } else {
        hologramScreenInstance.setHoverTarget(2); // Target B (Origin Planet)
      }
      return;
    } else {
      hologramScreenInstance.setHoverTarget(0);
    }
  }

  // Scene 1 Blast Off Button Hover Handling
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
  // Ignore clicks on HUD/UI overlays
  if (event.target.closest('#hud-container') || event.target.closest('#camera-inspector') || event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT') return;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Scene 2 Hologram Selection Click Handling
  if (hologramScreenInstance && hologramScreenInstance.isVisible) {
    raycaster.setFromCamera(mouse, camera);
    const holoIntersects = raycaster.intersectObject(hologramScreenInstance.screenMesh);
    if (holoIntersects.length > 0) {
      const uv = holoIntersects[0].uv;
      const targetName = uv.x < 0.5 ? 'TARGET A: KOPPULA SYSTEM' : 'TARGET B: ORIGIN PLANET';
      triggerDestinationTransition(targetName);
      return;
    }
  }

  // Scene 1 Blast Off Button Click Handling
  if (isTransitioning || clickableObjects.length === 0) return;

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
window.isTransitioning = isTransitioning;

function triggerBlastOff() {
  if (window.isTransitioning && isTransitioning) return;
  isTransitioning = true;
  window.isTransitioning = true;

  // Disable free cam controls during blast off transition so GSAP can animate camera freely
  controls.enabled = false;
  const toggleOrbitBtn = document.getElementById('toggle-orbit-btn');
  if (toggleOrbitBtn) toggleOrbitBtn.innerText = 'ENABLE FREE CAM';

  const camStatus = document.getElementById('cam-status');
  if (camStatus) camStatus.innerText = 'LAUNCH_SEQUENCE_ACTIVE';

  const timeline = gsap.timeline({
    onComplete: () => {
      isTransitioning = false;
      window.isTransitioning = false;
      if (camStatus) camStatus.innerText = 'EXTERIOR_VIEW // DESTINATION_SELECTION_READY';
      console.log('[SCENE 1] Blast Off pullout complete! Projecting Hologram Screen...');
      if (hologramScreenInstance) {
        hologramScreenInstance.fadeIn(1.2);
      }
    }
  });

  timeline.to(camera.position, {
    x: EXTERIOR_CAM_POS.x,
    y: EXTERIOR_CAM_POS.y,
    z: EXTERIOR_CAM_POS.z,
    duration: 3.8,
    ease: 'power3.inOut',
    onUpdate: () => {
      camera.lookAt(currentLookTarget);
      if (controls) controls.target.copy(currentLookTarget);
      console.log(`[BLAST OFF TRANSITION] Cam Pos: (${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)})`);
    }
  }, 0);

  timeline.to(currentLookTarget, {
    x: EXTERIOR_LOOK_TARGET.x,
    y: EXTERIOR_LOOK_TARGET.y,
    z: EXTERIOR_LOOK_TARGET.z,
    duration: 3.8,
    ease: 'power3.inOut',
    onUpdate: () => {
      camera.lookAt(currentLookTarget);
      controls.target.copy(currentLookTarget);
    }
  }, 0);

  // Instant text removal as the camera passes through the glass window at 1.2s
  if (cursiveTextInstance && cursiveTextInstance.textMaterial) {
    timeline.to(cursiveTextInstance.textMaterial, {
      opacity: 0,
      duration: 0.01
    }, 1.3);
  }

  if (lidOverlayMesh && lidOverlayMesh.material) {
    timeline.to(lidOverlayMesh.material, {
      opacity: 0,
      duration: 0.01
    }, 1.3);
  }

  // Hide Avatar model and its dedicated key light as camera exits window
  if (techAvatarInstance && techAvatarInstance.group) {
    timeline.set(techAvatarInstance.group, {
      visible: false
    }, 1.3);
  }

  if (avatarLight) {
    timeline.set(avatarLight, {
      visible: false
    }, 1.3);
  }

  timeline.to(bloomPass, {
    strength: 1.2,
    duration: 1.2,
    yoyo: true,
    repeat: 1,
    ease: 'sine.inOut'
  }, 1.0);
}

// ==========================================
// 10.5 DESTINATION SELECTION TRANSITION (SCENE 2 CLICK SEQUENCE)
// ==========================================
function triggerDestinationTransition(targetName = 'TARGET A: KOPPULA SYSTEM') {
  window.triggerDestinationTransition = triggerDestinationTransition;
  if (window.isTransitioning || isTransitioning) return;
  isTransitioning = true;
  window.isTransitioning = true;

  controls.enabled = false;
  const toggleOrbitBtn = document.getElementById('toggle-orbit-btn');
  if (toggleOrbitBtn) toggleOrbitBtn.innerText = 'ENABLE FREE CAM';

  const camStatus = document.getElementById('cam-status');
  if (camStatus) camStatus.innerText = `DESTINATION_LOCKED // ${targetName}`;

  console.log(`[DESTINATION SELECTION] Initiating sequence for ${targetName}...`);

  const tl = gsap.timeline({
    onComplete: () => {
      // Step 4: After steps 1-3 complete, move camera to specified interior view
      console.log('[DESTINATION SELECTION] Steps 1-3 complete. Moving camera to interior view...');

      const INTERIOR_CAM_POS = new THREE.Vector3(38.88, -7.64, 32.98);
      const INTERIOR_LOOK_TARGET = new THREE.Vector3(46.73, 20.65, 31.94);

      const camTl = gsap.timeline({
        onComplete: () => {
          isTransitioning = false;
          window.isTransitioning = false;
          controls.enabled = true;
          if (toggleOrbitBtn) toggleOrbitBtn.innerText = 'DISABLE FREE CAM';
          if (camStatus) camStatus.innerText = 'DESTINATION_ARRIVED';
          console.log('[DESTINATION SELECTION] Sequence complete!');
        }
      });

      camTl.to(camera.position, {
        x: INTERIOR_CAM_POS.x,
        y: INTERIOR_CAM_POS.y,
        z: INTERIOR_CAM_POS.z,
        duration: 2.5,
        ease: 'power2.inOut'
      }, 0);

      camTl.to(currentLookTarget, {
        x: INTERIOR_LOOK_TARGET.x,
        y: INTERIOR_LOOK_TARGET.y,
        z: INTERIOR_LOOK_TARGET.z,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          controls.target.copy(currentLookTarget);
        }
      }, 0);
    }
  });

  // Step 1: Decrease opacity of hologram to 0 (simultaneous)
  if (hologramScreenInstance) {
    hologramScreenInstance.fadeOut(1.8);
  }

  // Step 2: Reduce ALL lights to minimum (mainly ambient lighting) (simultaneous)
  if (ambientLight) tl.to(ambientLight, { intensity: 0.02, duration: 1.8, ease: 'power2.inOut' }, 0);
  if (hemisphereLight) tl.to(hemisphereLight, { intensity: 0.01, duration: 1.8, ease: 'power2.inOut' }, 0);
  if (sunLight) tl.to(sunLight, { intensity: 0.02, duration: 1.8, ease: 'power2.inOut' }, 0);
  if (cabinLight) tl.to(cabinLight, { intensity: 0.0, duration: 1.8, ease: 'power2.inOut' }, 0);
  if (buttonRedLight) tl.to(buttonRedLight, { intensity: 0.0, duration: 1.8, ease: 'power2.inOut' }, 0);
  if (rocketLight) tl.to(rocketLight, { intensity: 0.0, duration: 1.8, ease: 'power2.inOut' }, 0);
  if (avatarLight) tl.to(avatarLight, { intensity: 0.0, duration: 1.8, ease: 'power2.inOut' }, 0);

  // Step 3: Retract gantry hands (collars) inside gantry & remove rocket pad downward (simultaneous)
  collarLeftNodes.forEach(node => {
    tl.to(node.position, { x: '-=15.0', duration: 1.8, ease: 'power2.inOut' }, 0);
  });
  collarRightNodes.forEach(node => {
    tl.to(node.position, { x: '+=15.0', duration: 1.8, ease: 'power2.inOut' }, 0);
  });
  collarFrontNodes.forEach(node => {
    tl.to(node.position, { z: '+=15.0', duration: 1.8, ease: 'power2.inOut' }, 0);
  });
  collarBackNodes.forEach(node => {
    tl.to(node.position, { z: '-=15.0', duration: 1.8, ease: 'power2.inOut' }, 0);
  });

  rocketPadNodes.forEach(node => {
    tl.to(node.position, { y: '-=25.0', duration: 1.8, ease: 'power2.inOut' }, 0);
  });
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

// ==========================================
// 15. AVATAR MODEL SLIDER HANDLERS
// ==========================================
const avatarScaleSlider = document.getElementById('avatar-scale-slider');
const avatarXSlider = document.getElementById('avatar-x-slider');
const avatarYSlider = document.getElementById('avatar-y-slider');
const avatarZSlider = document.getElementById('avatar-z-slider');
const avatarRotXSlider = document.getElementById('avatar-rotx-slider');
const avatarRotYSlider = document.getElementById('avatar-roty-slider');
const avatarRotZSlider = document.getElementById('avatar-rotz-slider');

const avatarScaleVal = document.getElementById('avatar-scale-val');
const avatarXVal = document.getElementById('avatar-x-val');
const avatarYVal = document.getElementById('avatar-y-val');
const avatarZVal = document.getElementById('avatar-z-val');
const avatarRotXVal = document.getElementById('avatar-rotx-val');
const avatarRotYVal = document.getElementById('avatar-roty-val');
const avatarRotZVal = document.getElementById('avatar-rotz-val');
const copyAvatarBtn = document.getElementById('copy-avatar-btn');

function updateAvatarTransformFromSliders() {
  if (!techAvatarInstance || !techAvatarInstance.group) return;
  const scale = parseFloat(avatarScaleSlider.value);
  const x = parseFloat(avatarXSlider.value);
  const y = parseFloat(avatarYSlider.value);
  const z = parseFloat(avatarZSlider.value);
  const rotX = parseFloat(avatarRotXSlider.value);
  const rotY = parseFloat(avatarRotYSlider.value);
  const rotZ = parseFloat(avatarRotZSlider.value);

  techAvatarInstance.group.scale.set(scale, scale, scale);
  techAvatarInstance.group.position.set(x, y, z);
  techAvatarInstance.group.rotation.set(rotX, rotY, rotZ);

  if (avatarScaleVal) avatarScaleVal.innerText = scale.toFixed(2);
  if (avatarXVal) avatarXVal.innerText = x.toFixed(2);
  if (avatarYVal) avatarYVal.innerText = y.toFixed(2);
  if (avatarZVal) avatarZVal.innerText = z.toFixed(2);
  if (avatarRotXVal) avatarRotXVal.innerText = rotX.toFixed(2);
  if (avatarRotYVal) avatarRotYVal.innerText = rotY.toFixed(2);
  if (avatarRotZVal) avatarRotZVal.innerText = rotZ.toFixed(2);
}

avatarScaleSlider?.addEventListener('input', updateAvatarTransformFromSliders);
avatarXSlider?.addEventListener('input', updateAvatarTransformFromSliders);
avatarYSlider?.addEventListener('input', updateAvatarTransformFromSliders);
avatarZSlider?.addEventListener('input', updateAvatarTransformFromSliders);
avatarRotXSlider?.addEventListener('input', updateAvatarTransformFromSliders);
avatarRotYSlider?.addEventListener('input', updateAvatarTransformFromSliders);
avatarRotZSlider?.addEventListener('input', updateAvatarTransformFromSliders);

const avatarSkinPicker = document.getElementById('avatar-skin-picker');
avatarSkinPicker?.addEventListener('input', () => {
  if (techAvatarInstance && techAvatarInstance.setSkinColor) {
    techAvatarInstance.setSkinColor(avatarSkinPicker.value);
  }
});

copyAvatarBtn?.addEventListener('click', () => {
  if (!techAvatarInstance || !techAvatarInstance.group) return;
  const scale = techAvatarInstance.group.scale.x.toFixed(2);
  const posX = techAvatarInstance.group.position.x.toFixed(2);
  const posY = techAvatarInstance.group.position.y.toFixed(2);
  const posZ = techAvatarInstance.group.position.z.toFixed(2);
  const rotX = techAvatarInstance.group.rotation.x.toFixed(2);
  const rotY = techAvatarInstance.group.rotation.y.toFixed(2);
  const rotZ = techAvatarInstance.group.rotation.z.toFixed(2);

  const codeSnippet = `// AVATAR MODEL TRANSFORM
techAvatarInstance.group.position.set(${posX}, ${posY}, ${posZ});
techAvatarInstance.group.rotation.set(${rotX}, ${rotY}, ${rotZ});
techAvatarInstance.group.scale.set(${scale}, ${scale}, ${scale});`;

  navigator.clipboard.writeText(codeSnippet).then(() => {
    console.log('[AVATAR INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
  }).catch(() => {
    console.warn('[AVATAR INSPECTOR] Clipboard blocked, see console log below:');
  });

  console.log('\n==========================================');
  console.log('📌 COPIED AVATAR TRANSFORM:');
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
// 16. HOLOGRAM SCREEN SLIDER HANDLERS
// ==========================================
const hologramScaleSlider = document.getElementById('hologram-scale-slider');
const hologramXSlider = document.getElementById('hologram-x-slider');
const hologramYSlider = document.getElementById('hologram-y-slider');
const hologramZSlider = document.getElementById('hologram-z-slider');
const hologramRotXSlider = document.getElementById('hologram-rotx-slider');
const hologramRotYSlider = document.getElementById('hologram-roty-slider');
const hologramRotZSlider = document.getElementById('hologram-rotz-slider');
const hologramHoverBrightSlider = document.getElementById('hologram-hoverbright-slider');

const hologramScaleVal = document.getElementById('hologram-scale-val');
const hologramXVal = document.getElementById('hologram-x-val');
const hologramYVal = document.getElementById('hologram-y-val');
const hologramZVal = document.getElementById('hologram-z-val');
const hologramRotXVal = document.getElementById('hologram-rotx-val');
const hologramRotYVal = document.getElementById('hologram-roty-val');
const hologramRotZVal = document.getElementById('hologram-rotz-val');
const hologramHoverBrightVal = document.getElementById('hologram-hoverbright-val');

const toggleHologramVisBtn = document.getElementById('toggle-hologram-vis-btn');
const copyHologramBtn = document.getElementById('copy-hologram-btn');

function updateHologramTransformFromSliders() {
  if (!hologramScreenInstance || !hologramScreenInstance.group) return;
  const scale = parseFloat(hologramScaleSlider.value);
  const x = parseFloat(hologramXSlider.value);
  const y = parseFloat(hologramYSlider.value);
  const z = parseFloat(hologramZSlider.value);
  const rotX = parseFloat(hologramRotXSlider.value);
  const rotY = parseFloat(hologramRotYSlider.value);
  const rotZ = parseFloat(hologramRotZSlider.value);
  const hoverBright = parseFloat(hologramHoverBrightSlider?.value || 1.0);

  hologramScreenInstance.group.scale.set(scale, scale, scale);
  hologramScreenInstance.group.position.set(x, y, z);
  hologramScreenInstance.group.rotation.set(rotX, rotY, rotZ);
  hologramScreenInstance.setHoverBrightness(hoverBright);

  if (hologramScaleVal) hologramScaleVal.innerText = scale.toFixed(2);
  if (hologramXVal) hologramXVal.innerText = x.toFixed(2);
  if (hologramYVal) hologramYVal.innerText = y.toFixed(2);
  if (hologramZVal) hologramZVal.innerText = z.toFixed(2);
  if (hologramRotXVal) hologramRotXVal.innerText = rotX.toFixed(2);
  if (hologramRotYVal) hologramRotYVal.innerText = rotY.toFixed(2);
  if (hologramRotZVal) hologramRotZVal.innerText = rotZ.toFixed(2);
  if (hologramHoverBrightVal) hologramHoverBrightVal.innerText = hoverBright.toFixed(2);
}

hologramScaleSlider?.addEventListener('input', updateHologramTransformFromSliders);
hologramXSlider?.addEventListener('input', updateHologramTransformFromSliders);
hologramYSlider?.addEventListener('input', updateHologramTransformFromSliders);
hologramZSlider?.addEventListener('input', updateHologramTransformFromSliders);
hologramRotXSlider?.addEventListener('input', updateHologramTransformFromSliders);
hologramRotYSlider?.addEventListener('input', updateHologramTransformFromSliders);
hologramRotZSlider?.addEventListener('input', updateHologramTransformFromSliders);
hologramHoverBrightSlider?.addEventListener('input', updateHologramTransformFromSliders);

toggleHologramVisBtn?.addEventListener('click', () => {
  if (!hologramScreenInstance) return;
  if (hologramScreenInstance.isVisible) {
    hologramScreenInstance.fadeOut(0.4);
  } else {
    hologramScreenInstance.fadeIn(0.4);
  }
});

copyHologramBtn?.addEventListener('click', () => {
  if (!hologramScreenInstance || !hologramScreenInstance.group) return;
  const scale = hologramScreenInstance.group.scale.x.toFixed(2);
  const posX = hologramScreenInstance.group.position.x.toFixed(2);
  const posY = hologramScreenInstance.group.position.y.toFixed(2);
  const posZ = hologramScreenInstance.group.position.z.toFixed(2);
  const rotX = hologramScreenInstance.group.rotation.x.toFixed(2);
  const rotY = hologramScreenInstance.group.rotation.y.toFixed(2);
  const rotZ = hologramScreenInstance.group.rotation.z.toFixed(2);

  const codeSnippet = `// HOLOGRAM SCREEN TRANSFORM
hologramScreenInstance.group.position.set(${posX}, ${posY}, ${posZ});
hologramScreenInstance.group.rotation.set(${rotX}, ${rotY}, ${rotZ});
hologramScreenInstance.group.scale.set(${scale}, ${scale}, ${scale});`;

  navigator.clipboard.writeText(codeSnippet).then(() => {
    console.log('[HOLOGRAM INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
  }).catch(() => {
    console.warn('[HOLOGRAM INSPECTOR] Clipboard blocked, see console log below:');
  });

  console.log('\n==========================================');
  console.log('📌 COPIED HOLOGRAM SCREEN TRANSFORM:');
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
// 17. PROJECTOR CONE SLIDER HANDLERS
// ==========================================
const coneScaleYSlider = document.getElementById('cone-scaley-slider');
const coneScaleXZSlider = document.getElementById('cone-scalexz-slider');
const conePosYSlider = document.getElementById('cone-posy-slider');
const coneRotXSlider = document.getElementById('cone-rotx-slider');
const coneOpacitySlider = document.getElementById('cone-opacity-slider');
const coneDensitySlider = document.getElementById('cone-density-slider');
const coneSpeedSlider = document.getElementById('cone-speed-slider');

const coneScaleYVal = document.getElementById('cone-scaley-val');
const coneScaleXZVal = document.getElementById('cone-scalexz-val');
const conePosYVal = document.getElementById('cone-posy-val');
const coneRotXVal = document.getElementById('cone-rotx-val');
const coneOpacityVal = document.getElementById('cone-opacity-val');
const coneDensityVal = document.getElementById('cone-density-val');
const coneSpeedVal = document.getElementById('cone-speed-val');

const copyConeBtn = document.getElementById('copy-cone-btn');

function updateConeFromSliders() {
  if (!hologramScreenInstance) return;

  const scaleY = parseFloat(coneScaleYSlider.value);
  const scaleXZ = parseFloat(coneScaleXZSlider.value);
  const posY = parseFloat(conePosYSlider.value);
  const rotX = parseFloat(coneRotXSlider.value);
  const opacity = parseFloat(coneOpacitySlider.value);
  const density = parseFloat(coneDensitySlider.value);
  const speed = parseFloat(coneSpeedSlider.value);

  hologramScreenInstance.setBeamTransform(scaleXZ, scaleY, posY, rotX);
  hologramScreenInstance.setBeamProps(opacity, density, speed);

  if (coneScaleYVal) coneScaleYVal.innerText = scaleY.toFixed(2);
  if (coneScaleXZVal) coneScaleXZVal.innerText = scaleXZ.toFixed(2);
  if (conePosYVal) conePosYVal.innerText = posY.toFixed(2);
  if (coneRotXVal) coneRotXVal.innerText = rotX.toFixed(2);
  if (coneOpacityVal) coneOpacityVal.innerText = opacity.toFixed(2);
  if (coneDensityVal) coneDensityVal.innerText = density.toFixed(0);
  if (coneSpeedVal) coneSpeedVal.innerText = speed.toFixed(2);
}

coneScaleYSlider?.addEventListener('input', updateConeFromSliders);
coneScaleXZSlider?.addEventListener('input', updateConeFromSliders);
conePosYSlider?.addEventListener('input', updateConeFromSliders);
coneRotXSlider?.addEventListener('input', updateConeFromSliders);
coneOpacitySlider?.addEventListener('input', updateConeFromSliders);
coneDensitySlider?.addEventListener('input', updateConeFromSliders);
coneSpeedSlider?.addEventListener('input', updateConeFromSliders);

copyConeBtn?.addEventListener('click', () => {
  if (!hologramScreenInstance) return;
  const scaleY = parseFloat(coneScaleYSlider.value).toFixed(2);
  const scaleXZ = parseFloat(coneScaleXZSlider.value).toFixed(2);
  const posY = parseFloat(conePosYSlider.value).toFixed(2);
  const rotX = parseFloat(coneRotXSlider.value).toFixed(2);
  const opacity = parseFloat(coneOpacitySlider.value).toFixed(2);
  const density = parseFloat(coneDensitySlider.value).toFixed(0);
  const speed = parseFloat(coneSpeedSlider.value).toFixed(2);

  const codeSnippet = `// PROJECTOR CONE TRANSFORM & PROPERTIES
hologramScreenInstance.setBeamTransform(${scaleXZ}, ${scaleY}, ${posY}, ${rotX});
hologramScreenInstance.setBeamProps(${opacity}, ${density}, ${speed});`;

  navigator.clipboard.writeText(codeSnippet).then(() => {
    console.log('[CONE INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
  }).catch(() => {
    console.warn('[CONE INSPECTOR] Clipboard blocked, see console log below:');
  });

  console.log('\n==========================================');
  console.log('📌 COPIED PROJECTOR CONE TRANSFORM:');
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

  const delta = clock.getDelta();
  const elapsedTime = clock.getElapsedTime();
  cosmosBackground.update(elapsedTime);
  if (techAvatarInstance && techAvatarInstance.update) {
    techAvatarInstance.update(delta);
  }
  if (hologramScreenInstance && hologramScreenInstance.update) {
    hologramScreenInstance.update(elapsedTime);
  }

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
