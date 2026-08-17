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
import { RocketDockingPad } from './dockingPad.js';
import { EarthLandingManager } from '../EarthLanding/earthLandingManager.js';
import { ENGINE_STATE } from '../EarthLanding/state.js';

export function initScene1() {
  // ==========================================
  // 1. SCENE & RENDERER SETUP
  // ==========================================
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x02040a);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 800);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    powerPreference: 'high-performance',
    logarithmicDepthBuffer: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  // Post-Processing Composer & Bloom (Half-resolution for maximum fillrate performance)
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(Math.floor(window.innerWidth / 2), Math.floor(window.innerHeight / 2)),
    0.45,
    0.5,
    0.92
  );
  composer.addPass(renderPass);
  composer.addPass(bloomPass);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enabled = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // ==========================================
  // 2. LOADING MANAGER
  // ==========================================
  const loaderScreen = document.getElementById('loader-screen');
  const loaderBar = document.getElementById('loader-bar');
  const loaderStatus = document.getElementById('loader-status');

  const loadingManager = new THREE.LoadingManager();
  const progressState = { pct: 0 };
  let isLoaderDismissed = false;

  loadingManager.onProgress = (url, loaded, total) => {
    const rawPct = total > 0 ? Math.floor((loaded / total) * 100) : 0;
    const targetPct = Math.max(progressState.pct, Math.min(rawPct, 99));
    gsap.to(progressState, {
      pct: targetPct,
      duration: 0.35,
      ease: 'power1.out',
      onUpdate: () => {
        const displayPct = Math.floor(progressState.pct);
        if (loaderBar) loaderBar.style.width = `${displayPct}%`;
        if (loaderStatus) loaderStatus.innerText = `Preloading WebGL and assets... (${displayPct}%)`;
      }
    });
  };

  loadingManager.onLoad = () => {
    if (isLoaderDismissed) return;
    isLoaderDismissed = true;
    gsap.to(progressState, {
      pct: 100,
      duration: 0.35,
      ease: 'power1.out',
      onUpdate: () => {
        if (loaderBar) loaderBar.style.width = '100%';
        if (loaderStatus) loaderStatus.innerText = 'Initialization Complete (100%)';
      },
      onComplete: () => {
        if (loaderScreen) {
          loaderScreen.style.transition = 'opacity 0.6s ease';
          loaderScreen.style.opacity = '0';
          setTimeout(() => {
            loaderScreen.style.display = 'none';
          }, 600);
        }
      }
    });
    console.log('[SCENE 1] Loading Manager complete.');
  };

  loadingManager.onError = (url) => {
    console.error('[SCENE 1] Error loading asset:', url);
    if (loaderStatus) loaderStatus.innerText = `Error loading: ${url}`;
  };

  // ==========================================
  // 3. CAMERA POSITIONS
  // ==========================================
  const INTERIOR_CAM_POS = new THREE.Vector3(39.80, 0.10, -6.80);
  const INTERIOR_LOOK_TARGET = new THREE.Vector3(36.20, -0.40, 2.80);

  const EXTERIOR_CAM_POS = new THREE.Vector3(-12.68, 29.89, 78.14);
  const EXTERIOR_LOOK_TARGET = new THREE.Vector3(14.65, 23.30, 17.59);

  const currentLookTarget = INTERIOR_LOOK_TARGET.clone();
  camera.position.copy(INTERIOR_CAM_POS);
  camera.lookAt(currentLookTarget);
  controls.target.copy(INTERIOR_LOOK_TARGET);

  window.triggerBlastOff = triggerBlastOff;

  // ==========================================
  // 4. LIGHTING SETUP
  // ==========================================
  const ambientLight = new THREE.AmbientLight(0x1d3557, 1.2);
  scene.add(ambientLight);

  const hemisphereLight = new THREE.HemisphereLight(0x38bdf8, 0x090d16, 0.3);
  scene.add(hemisphereLight);

  const sunLight = new THREE.DirectionalLight(0xfff7ed, 1.5);
  sunLight.position.set(45.0, 30.0, 60.0);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 2048;
  sunLight.shadow.mapSize.height = 2048;
  scene.add(sunLight);

  const cabinLight = new THREE.PointLight(0x38bdf8, 1.4, 20.0);
  cabinLight.position.set(37.5, 5.0, 2.0);
  scene.add(cabinLight);

  const buttonRedLight = new THREE.PointLight(0xff0033, 4.5, 8.0);
  buttonRedLight.position.set(37.5, -2.2, 6.5);
  scene.add(buttonRedLight);

  let rocketLight = null;

  // ==========================================
  // 5. SPACE ENVIRONMENT & EARTH LANDING MANAGER
  // ==========================================
  const cosmosBackground = new SpaceCosmosBackground(scene);
  const earthLandingManager = new EarthLandingManager(scene, camera, renderer, composer, bloomPass, loadingManager);

  // ==========================================
  // 6. DYNAMIC "BLAST OFF" CANVAS TEXTURE
  // ==========================================
  function drawBlastOffLidCanvas(ctx) {
    ctx.clearRect(0, 0, 1024, 512);
    ctx.save();

    const text = "BLAST OFF";
    const letters = text.split('');
    const total = letters.length;

    const startX = 260;
    const endX = 780;
    const topY = 65;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    for (let i = 0; i < total; i++) {
      const letter = letters[i];
      if (letter === ' ') continue;

      const t = i / (total - 1);
      const scaleY = 1.75 * (1.30 - t * 0.50);
      const scaleX = 0.85 * (1.20 - t * 0.38);

      const x = startX + t * (endX - startX);

      ctx.save();
      ctx.translate(x, topY);
      ctx.scale(scaleX, scaleY);

      const textGradient = ctx.createLinearGradient(0, 0, 0, 160);
      textGradient.addColorStop(0.0, '#ffea00');
      textGradient.addColorStop(0.4, '#ff7700ff');
      textGradient.addColorStop(1.0, '#ff2a00ff');

      ctx.shadowColor = '#ff0000';
      ctx.shadowBlur = 35;
      ctx.fillStyle = textGradient;
      ctx.font = 'bold 160px "Bebas Neue", "Oswald", "Anton", sans-serif';
      ctx.fillText(letter, 0, 0);

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

  // 6.5 HIGH-POLY PROCEDURAL ROCKET DOCKING PAD & ALIGNED BOOM
  const rocketDockingPadInstance = new RocketDockingPad();
  scene.add(rocketDockingPadInstance.group);

  let stationModel = null;
  let buttonCylinderMesh = null;
  let lidOverlayMesh = null;
  const clickableObjects = [];

  const collarLeftNodes = [];
  const collarRightNodes = [];
  const collarFrontNodes = [];
  const collarBackNodes = [];
  const rocketPadNodes = [];
  const allRocketPadNodes = [];
  const stationEmissiveMaterials = [];

  const stationGoldMaterial = new THREE.MeshStandardMaterial({
    color: 0x2e230a,
    roughness: 0.22,
    metalness: 0.94,
    envMapIntensity: 1.3
  });

  const stationCopperMaterial = new THREE.MeshStandardMaterial({
    color: 0x2e230a,
    roughness: 0.24,
    metalness: 0.92,
    envMapIntensity: 1.3
  });

  gltfLoader.load(
    '/assets/FinalSpaceStationModel.glb',
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
        
        // Hide old low-poly / misaligned GLB docking platform and neck meshes
        const isOldPadNode = /docking_platform/i.test(nodeName);
        if (isOldPadNode) {
          node.visible = false;
        }

        // Hide all old built-in GLB rocket meshes (so only the standalone NewRocket.glb is rendered)
        const isOldRocketNode = /rocket/i.test(nodeName);
        if (isOldRocketNode) {
          node.visible = false;
          return;
        }

        if (node.isMesh && node.material) {
          node.castShadow = true;
          node.receiveShadow = true;

          const matName = node.material.name || '';

          if (nodeName.includes('Cabin_Light_Strip') || nodeName.includes('Light_Strip')) {
            node.visible = false;
          }

          // Pure circular rings with alternating Gold & Warm Copper colorway
          const isGoldRing = /^(Collar_(Left|Right)_Detail_Ring|Sphere_Cap_Top_Ring_1|Hub_Front_Ring_1|Hub_Hatch_Ring_[13]|Arm_Truss_(North|South)_Ring_[13])$/i.test(nodeName);
          const isCopperRing = /^(Collar_(Front|Back)_Detail_Ring|Sphere_Cap_Bottom_Ring_1|Hub_Front_Ring_2|Hub_Hatch_Ring_[24]|Arm_Truss_(North|South)_Ring_2)$/i.test(nodeName);

          if (isGoldRing) {
            node.material = stationGoldMaterial;
          } else if (isCopperRing) {
            node.material = stationCopperMaterial;
          } else if (matName === 'Hull_Light') {
            node.material.color.setHex(0x64748b);
            node.material.roughness = 0.35;
            node.material.metalness = 0.8;
          } else if (matName === 'Hull_Dark') {
            node.material.color.setHex(0x1e293b);
            node.material.roughness = 0.4;
            node.material.metalness = 0.85;
          } else if (matName === 'Rocket_Silver' || matName.toLowerCase().includes('rocket') || nodeName.toLowerCase().includes('rocket')) {
            node.visible = false;
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
            stationEmissiveMaterials.push(node.material);
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
            stationEmissiveMaterials.push(node.material);
            clickableObjects.push(node);
          }

          if (matName.includes('Glow') || nodeName.includes('Indicator') || (node.material.emissiveIntensity && node.material.emissiveIntensity > 0)) {
            if (!stationEmissiveMaterials.includes(node.material)) {
              stationEmissiveMaterials.push(node.material);
            }
          }
        }
      });

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
      lidOverlayMesh.position.set(37.50, -2.75, 7.34);
      lidOverlayMesh.rotation.set(-0.04, 3.15, 0);
      lidOverlayMesh.scale.set(2.30, 2.30, 2.30);
      scene.add(lidOverlayMesh);

      rocketLight = new THREE.PointLight(0x38bdf8, 3.5, 45.0);
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
    cursiveTextInstance.group.position.set(35.10, 0.40, 9.40);
    cursiveTextInstance.group.rotation.set(0, 3.05, 0);
    cursiveTextInstance.group.scale.set(1.45, 1.45, 1.45);
  });
  scene.add(cursiveTextInstance.group);

  // gsap.to(cursiveTextInstance.floatGroup.position, {
  //   y: '+=0.06',
  //   duration: 2.8,
  //   repeat: -1,
  //   yoyo: true,
  //   ease: 'sine.inOut'
  // });

  // ==========================================
  // 8.5 3D AVATAR ("Venky Avatar")
  // ==========================================
  const techAvatarInstance = new TechAvatar('/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb', null, loadingManager);
  techAvatarInstance.group.position.set(32.95, -5.50, 1.10);
  techAvatarInstance.group.rotation.set(0.00, 2.04, 0.00);
  techAvatarInstance.group.scale.set(7.70, 7.70, 7.70);
  scene.add(techAvatarInstance.group);

  const avatarLight = new THREE.PointLight(0xffdab9, 0.85, 15.0);
  avatarLight.position.set(36.0, 1.5, -2.0);
  scene.add(avatarLight);

  // ==========================================
  // 8.6 3D HOLOGRAPHIC SELECTION SCREEN (SCENE 2)
  // ==========================================
  const hologramScreenInstance = new HologramScreen();
  hologramScreenInstance.group.position.set(-11.50, 30.60, 70.30);
  hologramScreenInstance.group.rotation.set(0.10, -0.30, 0.02);
  hologramScreenInstance.group.scale.set(0.25, 0.25, 0.25);

  hologramScreenInstance.setBeamTransform(1.00, 0.70, -2.20, 0.21);
  hologramScreenInstance.setBeamProps(0.28, 60, 0.50);
  hologramScreenInstance.setHoverBrightness(0.0);

  hologramScreenInstance.group.visible = false;
  scene.add(hologramScreenInstance.group);

  // ==========================================
  // 9. RAYCASTING INTERACTION ON 3D MODEL BUTTON
  // ==========================================
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-9999, -9999);

  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    if (hologramScreenInstance && hologramScreenInstance.isVisible) {
      raycaster.setFromCamera(mouse, camera);
      const holoIntersects = raycaster.intersectObject(hologramScreenInstance.screenMesh);
      if (holoIntersects.length > 0) {
        document.body.style.cursor = 'pointer';
        const uv = holoIntersects[0].uv;
        if (uv.x < 0.5) {
          hologramScreenInstance.setHoverTarget(1);
        } else {
          hologramScreenInstance.setHoverTarget(2);
        }
        return;
      } else {
        hologramScreenInstance.setHoverTarget(0);
      }
    }

    if (clickableObjects.length > 0) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clickableObjects, true);
      if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
        if (buttonCylinderMesh && buttonCylinderMesh.material) {
          buttonCylinderMesh.material.emissiveIntensity = 2.5;
        }
      } else {
        document.body.style.cursor = 'default';
        if (buttonCylinderMesh && buttonCylinderMesh.material) {
          buttonCylinderMesh.material.emissiveIntensity = 1.4;
        }
      }
    }
  });

  window.addEventListener('click', (event) => {
    if (event.target.closest('#hud-container') || event.target.closest('#camera-inspector') || event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT') return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

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
      strength: 0.85,
      duration: 1.0,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut'
    }, 1.0);
  }

  // ==========================================
  // 10.5 DESTINATION SELECTION TRANSITION (SCENE 2 CLICK)
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

    // Vertical 50/50 Camera Framing on the Rocket Hull (user exact calibrated 50/50 state)
    const PAD_CAM_POS = new THREE.Vector3(38.38948, -8.53400, 30.21334);
    const PAD_CAM_LOOK = new THREE.Vector3(38.71423, -5.01504, 30.55209);

    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioning = false;
        window.isTransitioning = false;

        // Re-enable free orbit controls around the rocket base so user can move camera freely
        controls.enabled = true;
        controls.target.copy(PAD_CAM_LOOK);
        camera.up.set(0.0, 1.0, 0.0);
        if (toggleOrbitBtn) toggleOrbitBtn.innerText = 'DISABLE FREE CAM';

        if (camStatus) camStatus.innerText = 'BASE_REACHED // FREE_CAM_ACTIVE';
        console.log('[DESTINATION SELECTION] Camera reached rocket base. Free Cam is active!');

        // Display the Warp Action HUD
        const warpActionContainer = document.getElementById('warp-action-container');
        if (warpActionContainer) {
          warpActionContainer.classList.remove('warp-action-hidden');
        }
      }
    });

    // Step 1: Projection fades out, while station lights dim to a moody cinematic level (t = 0 to 1.5s)
    if (hologramScreenInstance) {
      hologramScreenInstance.fadeOut(1.5);
    }
    if (ambientLight) tl.to(ambientLight, { intensity: 0.45, duration: 1.5, ease: 'power2.inOut' }, 0);
    if (hemisphereLight) tl.to(hemisphereLight, { intensity: 0.15, duration: 1.5, ease: 'power2.inOut' }, 0);
    if (sunLight) tl.to(sunLight, { intensity: 0.55, duration: 1.5, ease: 'power2.inOut' }, 0);
    if (cabinLight) tl.to(cabinLight, { intensity: 0.35, duration: 1.5, ease: 'power2.inOut' }, 0);
    if (buttonRedLight) tl.to(buttonRedLight, { intensity: 0.0, duration: 1.5, ease: 'power2.inOut' }, 0);
    if (rocketLight) tl.to(rocketLight, { intensity: 1.2, duration: 1.5, ease: 'power2.inOut' }, 0);
    if (avatarLight) tl.to(avatarLight, { intensity: 0.2, duration: 1.5, ease: 'power2.inOut' }, 0);

    // Extinguish Table & Console Glows (t = 0 to 1.5s)
    stationEmissiveMaterials.forEach((mat) => {
      tl.to(mat, { emissiveIntensity: 0.0, duration: 1.5, ease: 'power2.inOut' }, 0);
    });

    // Hide pad ring when lights dim
    tl.add(() => {
      if (rocketDockingPadInstance && rocketDockingPadInstance.padRingGroup) {
        rocketDockingPadInstance.padRingGroup.visible = false;
      }
      allRocketPadNodes.forEach((node) => {
        node.visible = false;
      });
    }, 1.5);

    // Step 2: Camera flies along a unified 3D curved arc bulging under the rocket with continuous gaze curvature
    const pStart = camera.position.clone();
    const pC1 = new THREE.Vector3(6.0, 6.0, 66.0); // Forward & downward swoop
    const pC2 = new THREE.Vector3(24.0, -14.0, 46.0); // Bulge under the rocket launchpad
    const pEnd = PAD_CAM_POS.clone();
    const posCurve = new THREE.CubicBezierCurve3(pStart, pC1, pC2, pEnd);

    // Continuous 3D Look Curve (seamlessly arcs gaze from station -> pad -> rocket tip)
    const lStart = currentLookTarget.clone();
    const lC1 = new THREE.Vector3(22.0, -3.0, 16.0); // Anticipates pad approach
    const lC2 = new THREE.Vector3(38.0, -6.0, 26.0); // Rocket fuselage base
    const lEnd = PAD_CAM_LOOK.clone(); // Rocket tip in 50/50 vertical framing
    const lookCurve = new THREE.CubicBezierCurve3(lStart, lC1, lC2, lEnd);

    const arcState = { progress: 0.0 };

    tl.to(arcState, {
      progress: 1.0,
      duration: 3.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        const t = arcState.progress;
        // Evaluate continuous 3D spatial position
        posCurve.getPoint(t, camera.position);
        lookCurve.getPoint(t, currentLookTarget);

        // Strictly locked World Up - ZERO twist, ZERO barrel roll, ZERO world rotation
        camera.up.set(0.0, 1.0, 0.0);

        camera.lookAt(currentLookTarget);
        if (controls) controls.target.copy(currentLookTarget);

        // Keep rocket in its natural upright launchpad stance
        if (earthLandingManager && earthLandingManager.rocketModel) {
          const r = earthLandingManager.rocketModel;
          r.visible = true;
          r.position.set(42.0, -6.25, 30.0);
          r.scale.set(1.0, 1.0, 1.0);
          r.rotation.set(0, 0, 0);
          r.updateMatrixWorld(true);
        }
      }
    }, 1.5);

    // Step 3: Procedural background crossfade & space transition as camera nests on the hull (t = 4.2s to 5.5s)
    if (cosmosBackground && cosmosBackground.fadeOut) {
      cosmosBackground.fadeOut(1.3, tl, 4.2);
    }
    tl.to(scene.background, {
      r: 2 / 255,
      g: 2 / 255,
      b: 5 / 255,
      duration: 1.3,
      ease: 'power2.inOut'
    }, 4.2);

    tl.add(() => {
      if (earthLandingManager) {
        earthLandingManager.spaceGroup.visible = true;
      }
    }, 4.2);
    ENGINE_STATE.starsOpacity = 0.0;
    tl.to(ENGINE_STATE, { starsOpacity: 1.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);

    // Smoothly dissolve station body + gantry (t = 4.2s to 5.5s)
    if (stationModel) {
      stationModel.traverse((node) => {
        if (node.isMesh && node.material) {
          node.material.transparent = true;
          tl.to(node.material, { opacity: 0.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);
        }
      });
    }

    // Step 4: Clean up dissolved station elements once fully invisible
    tl.add(() => {
      if (stationModel) stationModel.visible = false;
      if (rocketDockingPadInstance && rocketDockingPadInstance.group) rocketDockingPadInstance.group.visible = false;
      if (techAvatarInstance && techAvatarInstance.group) techAvatarInstance.group.visible = false;
      if (cursiveTextInstance && cursiveTextInstance.group) cursiveTextInstance.group.visible = false;
      if (lidOverlayMesh) lidOverlayMesh.visible = false;
      if (cosmosBackground && cosmosBackground.group) cosmosBackground.group.visible = false;
    }, 5.5);

    // Fade out partial station lights smoothly
    if (ambientLight) tl.to(ambientLight, { intensity: 0.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);
    if (sunLight) tl.to(sunLight, { intensity: 0.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);
    if (cabinLight) tl.to(cabinLight, { intensity: 0.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);
    if (rocketLight) tl.to(rocketLight, { intensity: 0.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);
    if (avatarLight) tl.to(avatarLight, { intensity: 0.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);

    if (earthLandingManager) {
      tl.to(earthLandingManager.spaceAmbient, { intensity: 0.6, duration: 1.3, ease: 'power2.inOut' }, 4.2);
      tl.to(earthLandingManager.spaceSun, { intensity: 1.5, duration: 1.3, ease: 'power2.inOut' }, 4.2);
      tl.to(earthLandingManager.hemisphereLight, { intensity: 1.2, duration: 1.3, ease: 'power2.inOut' }, 4.2);
    }
    tl.to(renderer, { toneMappingExposure: 0.9, duration: 1.3, ease: 'power2.inOut' }, 4.2);
    if (bloomPass) tl.to(bloomPass, { strength: 0.0, duration: 1.3, ease: 'power2.inOut' }, 4.2);
  }

  // ==========================================
  // 11. INSPECTOR CONTROLS WIRING
  // ==========================================
  const cameraInspector = document.getElementById('camera-inspector');
  const settingsToggleBtn = document.getElementById('settings-toggle-btn');
  const camPosVal = document.getElementById('cam-pos-val');
  const camTargetVal = document.getElementById('cam-target-val');
  const camFovVal = document.getElementById('cam-fov-val');
  const toggleOrbitBtn = document.getElementById('toggle-orbit-btn');
  const copyCamBtn = document.getElementById('copy-cam-btn');
  const copyToast = document.getElementById('copy-toast');

  settingsToggleBtn?.addEventListener('click', () => {
    if (cameraInspector) {
      cameraInspector.classList.toggle('inspector-hidden');
    }
  });

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

    const codeSnippet = `const INTERIOR_CAM_POS = new THREE.Vector3(${posX}, ${posY}, ${posZ});\nconst INTERIOR_LOOK_TARGET = new THREE.Vector3(${targetX}, ${targetY}, ${targetZ});`;

    navigator.clipboard.writeText(codeSnippet).then(() => {
      console.log('[CAMERA INSPECTOR] Coordinates copied to clipboard:\n' + codeSnippet);
    }).catch(() => {});

    if (copyToast) {
      copyToast.style.display = 'block';
      setTimeout(() => {
        copyToast.style.display = 'none';
      }, 2500);
    }
  });

  // Warp Action Buttons (Rocket Base Free Cam & Warp Sequence)
  const igniteWarpBtn = document.getElementById('ignite-warp-btn');
  const resetBaseCamBtn = document.getElementById('reset-base-cam-btn');
  const copyBaseCamBtn = document.getElementById('copy-base-cam-btn');

  igniteWarpBtn?.addEventListener('click', () => {
    const warpActionContainer = document.getElementById('warp-action-container');
    if (warpActionContainer) warpActionContainer.classList.add('warp-action-hidden');
    controls.enabled = false;
    const camStatus = document.getElementById('cam-status');
    if (camStatus) camStatus.innerText = 'WARP_IGNITION_ACTIVE';
    console.log('[WARP IGNITION] Starting EarthLanding Warp sequence...');
    if (earthLandingManager) {
      earthLandingManager.updateCubeNow();
      earthLandingManager.startSequence();
    }
  });

  resetBaseCamBtn?.addEventListener('click', () => {
    gsap.to(camera.position, {
      x: 38.38948,
      y: -8.53400,
      z: 30.21334,
      duration: 0.8,
      ease: 'power2.inOut'
    });
    gsap.to(controls.target, {
      x: 38.71423,
      y: -5.01504,
      z: 30.55209,
      duration: 0.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.up.set(0.0, 1.0, 0.0);
        camera.lookAt(controls.target);
      }
    });
  });

  copyBaseCamBtn?.addEventListener('click', () => {
    const posStr = `new THREE.Vector3(${camera.position.x.toFixed(5)}, ${camera.position.y.toFixed(5)}, ${camera.position.z.toFixed(5)})`;
    const lookStr = `new THREE.Vector3(${controls.target.x.toFixed(5)}, ${controls.target.y.toFixed(5)}, ${controls.target.z.toFixed(5)})`;
    const fullStr = `PAD_CAM_POS = ${posStr};\nPAD_CAM_LOOK = ${lookStr};\nPAD_CAM_UP = new THREE.Vector3(${camera.up.x.toFixed(2)}, ${camera.up.y.toFixed(2)}, ${camera.up.z.toFixed(2)});`;
    navigator.clipboard.writeText(fullStr);
    console.log('[CAMERA COPIED]:\n' + fullStr);
    if (copyToast) {
      copyToast.style.display = 'block';
      setTimeout(() => { copyToast.style.display = 'none'; }, 2500);
    }
  });

  // Bloom controls
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

  // Cursive Text controls
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

  // Avatar controls
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

  // Hologram screen controls
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

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    composer.setSize(window.innerWidth, window.innerHeight);
    bloomPass.resolution.set(Math.floor(window.innerWidth / 2), Math.floor(window.innerHeight / 2));
  });

  // ==========================================
  // 12. ANIMATION LOOP
  // ==========================================
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    if (cosmosBackground && cosmosBackground.group && cosmosBackground.group.visible) {
      cosmosBackground.update(elapsedTime);
    }
    if (techAvatarInstance && techAvatarInstance.update) {
      techAvatarInstance.update(delta);
    }
    if (hologramScreenInstance && hologramScreenInstance.update) {
      hologramScreenInstance.update(elapsedTime);
    }

    // Earth Landing Manager Tick
    if (earthLandingManager) {
      earthLandingManager.update(elapsedTime, delta);
    }

    if (!earthLandingManager || !earthLandingManager.isActive) {
      if (controls.enabled) {
        controls.update();
      } else {
        camera.lookAt(currentLookTarget);
      }
    } else {
      if (window.activeControls) {
        window.activeControls.update();
      }
    }

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
}
