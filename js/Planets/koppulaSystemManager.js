import * as THREE from 'three';
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
  FresnelShader,
  createOrbitRing, 
  buildPlanet1, 
  buildPlanet2, 
  buildPlanet3 
} from './planets.js';
import { WarpSystem } from '../EarthLanding/warp.js';
import { CAMERA_RIG } from '../EarthLanding/camera.js';
import { buildPlanetsTimeline } from './timeline.js';

export class KoppulaSystemManager {
  constructor(scene, camera, renderer, composer, bloomPass, loadingManager) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.composer = composer;
    this.bloomPass = bloomPass;
    this.loadingManager = loadingManager || new THREE.LoadingManager();

    this.isActive = false;
    this.cinematicTimeline = null;
    this.controls = null;

    this.planetObjects = {};
    this.orbitRingsMap = {};
    this.binaryRings = [];
    this.sunParticlesList = [];
    this.nebulaeList = [];

    this.hoveredPlanetId = null;
    this.activeFocusPlanetId = null;
    this.isTransitioningFocus = false;
    this.hudOpenTimer = null;
    this.isHoverEnabled = false;
    this.nebulaMasterOpacity = { value: 0.0 };
    this.sunMasterOpacity = { value: 0.0 };

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-9999, -9999);

    this.initGroups();
    this.initLights();
    this.initNebulae();
    this.initDataSun();
    this.initPlanets();
    this.initLaserBeam();
    this.initDOMAndInteractions();
  }

  initGroups() {
    this.spaceGroup = new THREE.Group();
    this.spaceGroup.name = "KoppulaSystemSpaceGroup";
    this.spaceGroup.visible = false;
    this.scene.add(this.spaceGroup);

    this.solarSystemGroup = new THREE.Group();
    this.solarSystemGroup.name = "SolarSystemGroup";
    this.solarSystemGroup.visible = false;
    this.spaceGroup.add(this.solarSystemGroup);

    this.warpSystem = new WarpSystem(this.spaceGroup);
    this.warpSystem.setStarCount(750);
  }

  initLights() {
    // Flight space lights to illuminate the rocket during launchpad approach and warp
    this.flightAmbient = new THREE.AmbientLight(0xffffff, 0.7);
    this.spaceGroup.add(this.flightAmbient);

    this.flightSun = new THREE.DirectionalLight(0xffffff, 1.8);
    this.flightSun.position.set(50, 40, 50);
    this.spaceGroup.add(this.flightSun);

    this.flightHemi = new THREE.HemisphereLight(0xffffff, 0x223355, 1.3);
    this.spaceGroup.add(this.flightHemi);

    // Solar system specific lights (ignited at solar system reveal)
    this.spaceAmbient = new THREE.AmbientLight(0xffffff, 0.0);
    this.solarSystemGroup.add(this.spaceAmbient);

    this.sunLight = new THREE.PointLight(0xffecd9, 0.0, 250, 0.85);
    this.sunLight.name = "solarSunLight";
    this.sunLight.position.set(0, 0, 0);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.shadow.normalBias = 0.03;
    this.solarSystemGroup.add(this.sunLight);

    this.rimLight = new THREE.DirectionalLight(0x0044cc, 0.0);
    this.rimLight.name = "solarRimLight";
    this.rimLight.position.set(-15, -15, -15);
    this.solarSystemGroup.add(this.rimLight);

    // Dynamic headlight mounted to camera
    this.headlight = new THREE.PointLight(0xffffff, 0.0, 90, 0.5);
    this.headlight.position.set(2, 2, 2);
    this.camera.add(this.headlight);
    this.scene.add(this.camera);
  }

  initNebulae() {
    this.nebulaGroup = new THREE.Group();
    this.nebulaGroup.renderOrder = -100;
    this.solarSystemGroup.add(this.nebulaGroup);

    const nebulaConfigs = [
      { localOffset: { x: -90, y: 55, z: -280 }, c1: 'rgba(20, 140, 255, 0.38)', c2: 'rgba(5, 18, 55, 0)', size: 420, freq: { x: 0.20, y: 0.25 }, amp: { x: 30, y: 20 }, rotSpeed: 0.0004 },
      { localOffset: { x: 95, y: -45, z: -300 }, c1: 'rgba(170, 40, 220, 0.32)', c2: 'rgba(18, 4, 35, 0)', size: 450, freq: { x: 0.16, y: 0.22 }, amp: { x: 35, y: 25 }, rotSpeed: -0.0003 },
      { localOffset: { x: -110, y: -50, z: -320 }, c1: 'rgba(0, 220, 190, 0.28)', c2: 'rgba(2, 28, 28, 0)', size: 440, freq: { x: 0.14, y: 0.19 }, amp: { x: 32, y: 22 }, rotSpeed: 0.0005 },
      { localOffset: { x: 105, y: 60, z: -290 }, c1: 'rgba(255, 100, 30, 0.26)', c2: 'rgba(32, 10, 3, 0)', size: 430, freq: { x: 0.18, y: 0.15 }, amp: { x: 28, y: 24 }, rotSpeed: -0.0004 },
      { localOffset: { x: 0, y: 70, z: -340 }, c1: 'rgba(110, 20, 250, 0.30)', c2: 'rgba(14, 2, 40, 0)', size: 480, freq: { x: 0.12, y: 0.17 }, amp: { x: 35, y: 18 }, rotSpeed: 0.0003 },
      { localOffset: { x: 0, y: -75, z: -350 }, c1: 'rgba(240, 190, 40, 0.24)', c2: 'rgba(30, 22, 3, 0)', size: 460, freq: { x: 0.15, y: 0.21 }, amp: { x: 40, y: 22 }, rotSpeed: -0.0005 }
    ];

    this.nebulaeList = nebulaConfigs.map((cfg) => {
      const mat = new THREE.MeshBasicMaterial({
        map: createNebulaTexture(cfg.c1, cfg.c2),
        transparent: true,
        opacity: 0.0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      const geo = new THREE.PlaneGeometry(cfg.size, cfg.size);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.renderOrder = -100;
      this.nebulaGroup.add(mesh);
      return { mesh, ...cfg };
    });
  }

  initDataSun() {
    this.sunGroup = new THREE.Group();
    this.solarSystemGroup.add(this.sunGroup);

    const sunCoreGeometry = new THREE.SphereGeometry(3.6, 64, 64);
    this.sunCoreMaterial = new THREE.MeshBasicMaterial({
      color: CONFIG.colors.sunCore,
      transparent: true,
      opacity: 0.0
    });
    this.sunCoreMesh = new THREE.Mesh(sunCoreGeometry, this.sunCoreMaterial);
    this.sunGroup.add(this.sunCoreMesh);

    const coronaGeo = new THREE.PlaneGeometry(16, 16);
    this.corona1 = new THREE.Mesh(coronaGeo, new THREE.MeshBasicMaterial({
      map: createCircleTexture('#ff7700'),
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    }));
    this.sunGroup.add(this.corona1);

    this.corona2 = new THREE.Mesh(coronaGeo, new THREE.MeshBasicMaterial({
      map: createCircleTexture('#ffddaa'),
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    }));
    this.corona2.scale.set(1.35, 1.35, 1.35);
    this.sunGroup.add(this.corona2);

    // Concentric Binary Code Rings
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
        opacity: 0.0,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      
      const mesh = new THREE.Mesh(geom, mat);
      mesh.rotation.x = r.rotX;
      mesh.rotation.y = r.rotY;
      this.sunGroup.add(mesh);
      this.binaryRings.push({ mesh, speed: r.speed });
    });
  }

  initPlanets() {
    this.orbitRingsMap.planet1 = createOrbitRing(this.solarSystemGroup, CONFIG.orbits.p1.radius);
    this.orbitRingsMap.planet2 = createOrbitRing(this.solarSystemGroup, CONFIG.orbits.p2.radius);
    this.orbitRingsMap.planet3 = createOrbitRing(this.solarSystemGroup, CONFIG.orbits.p3.radius);

    this.planetObjects.planet1 = buildPlanet1(this.solarSystemGroup);
    this.planetObjects.planet2 = buildPlanet2(this.solarSystemGroup);
    this.planetObjects.planet3 = buildPlanet3(this.solarSystemGroup);

    Object.keys(this.planetObjects).forEach((key) => {
      const p = this.planetObjects[key];
      p.startAngleOffset = Math.random() * Math.PI * 2;
      const data = PROJECTS_DATA[key];
      const colorHex = key === 'planet1' ? '#00e5ff' : (key === 'planet2' ? '#ff6600' : '#d044ff');

      // Exosphere Fresnel Glow Mesh
      const glowGeo = new THREE.SphereGeometry(p.config.size * 1.06, 32, 32);
      const glowMat = new THREE.ShaderMaterial({
        vertexShader: FresnelShader.vertexShader,
        fragmentShader: FresnelShader.fragmentShader,
        uniforms: {
          glowColor: { value: new THREE.Color(key === 'planet1' ? 0x00c8ff : (key === 'planet2' ? 0xff5500 : 0xaa22ff)) },
          power: { value: 2.2 },
          opacity: { value: 0.0 }
        },
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      p.group.add(glowMesh);
      p.glowMaterial = glowMat;

      // Curved Text Title Label Mesh along top rim of planet
      const labelTex = createCurvedTextTexture(data.title, colorHex);
      const labelGeo = new THREE.PlaneGeometry(p.config.size * 6.2, p.config.size * 3.1);
      const labelMat = new THREE.MeshBasicMaterial({
        map: labelTex,
        transparent: true,
        opacity: 0.0,
        depthTest: false,
        depthWrite: false,
        blending: THREE.NormalBlending,
        side: THREE.DoubleSide
      });

      const labelMesh = new THREE.Mesh(labelGeo, labelMat);
      labelMesh.renderOrder = 100;
      this.solarSystemGroup.add(labelMesh);
      p.hoverLabelMaterial = labelMat;
      p.hoverLabelMesh = labelMesh;
    });

    document.fonts && document.fonts.ready && document.fonts.ready.then(() => {
      Object.keys(this.planetObjects).forEach((key) => {
        const p = this.planetObjects[key];
        const data = PROJECTS_DATA[key];
        const colorHex = key === 'planet1' ? '#00e5ff' : (key === 'planet2' ? '#ff6600' : '#d044ff');
        if (p.hoverLabelMesh) {
          p.hoverLabelMesh.material.map = createCurvedTextTexture(data.title, colorHex);
          p.hoverLabelMesh.material.map.needsUpdate = true;
        }
      });
    });
  }

  initLaserBeam() {
    this.laserGroup = new THREE.Group();
    this.solarSystemGroup.add(this.laserGroup);

    const innerBeamGeo = new THREE.CylinderGeometry(0.07, 0.07, 1, 16, 1, true);
    innerBeamGeo.translate(0, 0.5, 0);
    this.innerBeamMat = new THREE.MeshBasicMaterial({
      color: 0xffea00,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.innerBeam = new THREE.Mesh(innerBeamGeo, this.innerBeamMat);
    this.innerBeam.renderOrder = 50;
    this.laserGroup.add(this.innerBeam);

    const outerBeamGeo = new THREE.CylinderGeometry(0.20, 0.20, 1, 16, 1, true);
    outerBeamGeo.translate(0, 0.5, 0);
    this.outerBeamMat = new THREE.MeshBasicMaterial({
      color: 0xffa800,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.outerBeam = new THREE.Mesh(outerBeamGeo, this.outerBeamMat);
    this.outerBeam.renderOrder = 49;
    this.laserGroup.add(this.outerBeam);
  }

  initDOMAndInteractions() {
    this.dataHudOverlayEl = document.getElementById('data-hud-overlay');
    this.dataTitle = document.getElementById('project-title');
    this.dataClassification = document.getElementById('project-classification');
    this.dataUsecase = document.getElementById('project-usecase');
    this.dataBuild = document.getElementById('project-build');
    this.dataTechBadges = document.getElementById('project-tech-badges');

    this.tooltipEl = document.getElementById('custom-tooltip');

    const closeBladeBtn = document.getElementById('close-blade-btn');
    if (closeBladeBtn) {
      closeBladeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.triggerReset();
      });
    }

    // Starfield Calibration Widget Listeners
    const starWidget = document.getElementById('stars-control-widget');
    const starToggleBtn = document.getElementById('star-widget-toggle-btn');
    const starBody = document.getElementById('star-widget-body');
    const starBrightnessSlider = document.getElementById('star-brightness-slider');
    const starBrightnessVal = document.getElementById('star-brightness-val');
    const starSizeSlider = document.getElementById('star-size-slider');
    const starSizeVal = document.getElementById('star-size-val');
    const starDensitySlider = document.getElementById('star-density-slider');
    const starDensityVal = document.getElementById('star-density-val');

    if (starToggleBtn && starBody) {
      starToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        starBody.classList.toggle('collapsed');
        starToggleBtn.innerText = starBody.classList.contains('collapsed') ? '+' : '−';
      });
    }

    if (starBrightnessSlider && starBrightnessVal) {
      starBrightnessSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        starBrightnessVal.innerText = `${Math.round(val * 100)}%`;
        import('../EarthLanding/state.js').then(({ ENGINE_STATE }) => {
          ENGINE_STATE.starsOpacity = val;
        });
      });
    }

    if (starSizeSlider && starSizeVal) {
      starSizeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        starSizeVal.innerText = `${val.toFixed(1)}x`;
        if (this.warpSystem) this.warpSystem.setSizeMultiplier(val);
      });
    }

    if (starDensitySlider && starDensityVal) {
      starDensitySlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        starDensityVal.innerText = `${val}`;
        if (this.warpSystem) this.warpSystem.setStarCount(val);
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (this.activeFocusPlanetId) {
          this.triggerReset();
        }
      }
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (this.tooltipEl) {
        this.tooltipEl.style.left = `${e.clientX + 15}px`;
        this.tooltipEl.style.top = `${e.clientY + 15}px`;
      }
    });

    window.addEventListener('click', (e) => {
      if (!this.isActive || !this.isHoverEnabled || !this.solarSystemGroup.visible) return;
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('#hud-container') || e.target.closest('#camera-inspector') || e.target.closest('#data-hud-overlay')) return;

      const clickMouse = new THREE.Vector2(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      this.raycaster.setFromCamera(clickMouse, this.camera);
      const intersects = [];

      Object.keys(this.planetObjects).forEach((key) => {
        const hits = this.raycaster.intersectObject(this.planetObjects[key].group, true);
        if (hits.length > 0) intersects.push({ id: key, distance: hits[0].distance });
      });

      if (intersects.length > 0) {
        intersects.sort((a, b) => a.distance - b.distance);
        const planetId = intersects[0].id;

        if (this.activeFocusPlanetId === planetId) {
          this.triggerReset();
        } else {
          if (this.activeFocusPlanetId) this.triggerReset();
          this.triggerExplode(planetId);
        }
      } else {
        if (this.activeFocusPlanetId) this.triggerReset();
      }
    });
  }

  startSequence(rocket) {
    this.isActive = true;
    this.spaceGroup.visible = true;
    this.isHoverEnabled = false;
    this.nebulaMasterOpacity.value = 0.0;
    this.sunMasterOpacity.value = 0.0;
    if (this.warpSystem) this.warpSystem.setStarCount(2000);

    if (this.dataHudOverlayEl) {
      this.dataHudOverlayEl.classList.add('active');
      this.dataHudOverlayEl.classList.add('closed');
    }

    const lights = {
      flightAmbient: this.flightAmbient,
      flightSun: this.flightSun,
      flightHemi: this.flightHemi,
      sunLight: this.sunLight,
      rimLight: this.rimLight,
      spaceAmbient: this.spaceAmbient,
      headlight: this.headlight
    };

    this.cinematicTimeline = buildPlanetsTimeline(
      rocket,
      this.solarSystemGroup,
      this.spaceGroup,
      this.renderer,
      this.camera,
      this.bloomPass,
      this.scene,
      lights,
      this.nebulaMasterOpacity,
      this.sunMasterOpacity,
      this.warpSystem,
      (controls) => {
        this.controls = controls;
        console.log("[KOPPULA SYSTEM] Arrived at Solar System! Waiting 1s before enabling hover...");
        setTimeout(() => {
          this.isHoverEnabled = true;
          console.log("[KOPPULA SYSTEM] Planet Hover & Click Interactions ACTIVE!");
        }, 1000);
      }
    );

    this.cinematicTimeline.play();
  }

  checkHover() {
    if (!this.isActive || !this.isHoverEnabled || !this.solarSystemGroup.visible || this.activeFocusPlanetId) return;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = [];

    Object.keys(this.planetObjects).forEach((key) => {
      const hits = this.raycaster.intersectObject(this.planetObjects[key].group, true);
      if (hits.length > 0) intersects.push({ id: key, distance: hits[0].distance });
    });

    if (intersects.length > 0) {
      intersects.sort((a, b) => a.distance - b.distance);
      const foundHover = intersects[0].id;
      if (this.hoveredPlanetId !== foundHover) {
        if (this.hoveredPlanetId) this.triggerHoverEnd(this.hoveredPlanetId);
        this.triggerHover(foundHover);
      }
    } else {
      if (this.hoveredPlanetId) this.triggerHoverEnd(this.hoveredPlanetId);
    }
  }

  triggerHover(planetId) {
    this.hoveredPlanetId = planetId;
    if (this.tooltipEl) this.tooltipEl.classList.add('visible');
    const planet = this.planetObjects[planetId];

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

    if (!this.activeFocusPlanetId || this.activeFocusPlanetId !== planetId) {
      gsap.to(planet, {
        currentYOffset: planet.config.size * 0.55,
        duration: 0.4,
        overwrite: 'auto'
      });
    }

    if (this.orbitRingsMap[planetId]) {
      gsap.to(this.orbitRingsMap[planetId].material, {
        opacity: 0.7,
        duration: 0.3,
        overwrite: 'auto'
      });
    }
  }

  triggerHoverEnd(planetId) {
    if (this.hoveredPlanetId === planetId) {
      this.hoveredPlanetId = null;
    }
    if (this.tooltipEl) this.tooltipEl.classList.remove('visible');
    const planet = this.planetObjects[planetId];

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

    if (this.orbitRingsMap[planetId]) {
      gsap.to(this.orbitRingsMap[planetId].material, {
        opacity: 0.15,
        duration: 0.3,
        overwrite: 'auto'
      });
    }
  }

  triggerExplode(planetId) {
    if (this.hoveredPlanetId && this.hoveredPlanetId !== planetId) {
      this.triggerHoverEnd(this.hoveredPlanetId);
    }

    this.activeFocusPlanetId = planetId;
    const planet = this.planetObjects[planetId];

    const data = PROJECTS_DATA[planetId];
    if (this.dataTitle) this.dataTitle.innerText = data.title;
    if (this.dataClassification) this.dataClassification.innerText = data.classification;
    if (this.dataUsecase) this.dataUsecase.innerText = data.usecase;
    if (this.dataBuild) this.dataBuild.innerText = data.build;

    if (this.dataTechBadges) {
      this.dataTechBadges.innerHTML = '';
      data.tech.forEach((tech) => {
        const span = document.createElement('span');
        span.className = 'tech-badge';
        span.innerText = tech;
        this.dataTechBadges.appendChild(span);
      });
    }

    if (this.hudOpenTimer) clearTimeout(this.hudOpenTimer);
    this.hudOpenTimer = setTimeout(() => {
      if (this.dataHudOverlayEl && this.activeFocusPlanetId === planetId) {
        this.dataHudOverlayEl.classList.remove('closed');
      }
    }, 600);

    this.isTransitioningFocus = true;

    // Tectonic plate deconstruction animations
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

    gsap.to(this.innerBeamMat, { opacity: 0.95, duration: 0.4, overwrite: 'auto' });
    gsap.to(this.outerBeamMat, { opacity: 0.75, duration: 0.4, overwrite: 'auto' });
  }

  triggerReset() {
    if (!this.activeFocusPlanetId) return;

    const planetId = this.activeFocusPlanetId;
    const planet = this.planetObjects[planetId];
    this.activeFocusPlanetId = null;
    this.isTransitioningFocus = false;

    if (this.hudOpenTimer) clearTimeout(this.hudOpenTimer);
    if (this.dataHudOverlayEl) this.dataHudOverlayEl.classList.add('closed');

    if (this.controls) {
      gsap.to(this.controls.target, {
        x: 0, y: 0, z: 0,
        duration: 1.0,
        ease: 'power3.inOut'
      });
    }

    gsap.to(this.camera.position, {
      x: CONFIG.camera.overview.pos.x,
      y: CONFIG.camera.overview.pos.y,
      z: CONFIG.camera.overview.pos.z,
      duration: 1.0,
      ease: 'power3.inOut',
      onUpdate: () => {
        if (this.controls) this.controls.update();
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

    gsap.to(this.innerBeamMat, { opacity: 0, duration: 0.4 });
    gsap.to(this.outerBeamMat, { opacity: 0, duration: 0.4 });

    gsap.to(planet, {
      currentYOffset: planet.config.size * 0.55,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
      onComplete: () => {
        if (this.hoveredPlanetId !== planetId && planet.hoverLabelMaterial) {
          gsap.to(planet.hoverLabelMaterial, { opacity: 0.0, duration: 0.3 });
        }
      }
    });
  }

  update(elapsed, delta) {
    if (!this.isActive) return;

    if (this.warpSystem) {
      this.warpSystem.update(elapsed, this.camera, delta);
    }

    if (!this.solarSystemGroup.visible) return;

    // 1. Nebulae Billboard & Floating (Matches Tests/PlanetsPOC)
    if (this.nebulaeList && this.nebulaeList.length > 0) {
      const phaseStep = (Math.PI * 2) / this.nebulaeList.length;
      this.nebulaeList.forEach((neb, index) => {
        neb.mesh.quaternion.copy(this.camera.quaternion);

        const localX = neb.localOffset.x + Math.sin(elapsed * neb.freq.x) * neb.amp.x;
        const localY = neb.localOffset.y + Math.cos(elapsed * neb.freq.y) * neb.amp.y;
        const localPos = new THREE.Vector3(localX, localY, neb.localOffset.z);
        neb.mesh.position.copy(localPos.applyMatrix4(this.camera.matrixWorld));
        neb.mesh.rotation.z += neb.rotSpeed;

        const rawScore = Math.sin(elapsed * 0.10 + index * phaseStep);
        const visibilityRamp = Math.max(0, Math.min(1, (rawScore + 0.08) / 0.48));
        const masterFade = this.nebulaMasterOpacity ? this.nebulaMasterOpacity.value : 1.0;
        neb.mesh.material.opacity = visibilityRamp * masterFade;
      });
    }

    // 2. Data Sun Coronas & Binary Code Rings (Matches Tests/PlanetsPOC)
    const sunFade = this.sunMasterOpacity ? this.sunMasterOpacity.value : 1.0;

    if (this.sunCoreMesh) {
      const pulseFactor = 1.0 + Math.sin(elapsed * 2.2) * 0.03;
      this.sunCoreMesh.scale.set(pulseFactor, pulseFactor, pulseFactor);
      if (this.sunCoreMaterial) {
        this.sunCoreMaterial.opacity = sunFade;
      }
    }

    if (this.corona1 && this.corona2) {
      this.corona1.material.opacity = 0.55 * sunFade;
      this.corona2.material.opacity = 0.40 * sunFade;
      this.corona1.quaternion.copy(this.camera.quaternion);
      this.corona2.quaternion.copy(this.camera.quaternion);
      this.corona1.rotation.z += elapsed * 0.004;
      this.corona2.rotation.z -= elapsed * 0.006;
    }

    this.binaryRings.forEach((r) => {
      r.mesh.material.opacity = 0.65 * sunFade;
      r.mesh.rotation.z += r.speed;
    });

    // 3. Capture active planet old position before moving
    const oldPlanetPos = new THREE.Vector3();
    let activePlanet = null;
    if (this.activeFocusPlanetId) {
      activePlanet = this.planetObjects[this.activeFocusPlanetId];
      activePlanet.group.getWorldPosition(oldPlanetPos);
    }

    // 5. Planetary Orbit & Sway (Matches Tests/PlanetsPOC)
    Object.keys(this.planetObjects).forEach((key) => {
      const p = this.planetObjects[key];
      const orbit = p.config;

      let angle = elapsed * orbit.speed + (p.startAngleOffset || 0);
      const sway = Math.sin(elapsed * 1.5 + orbit.radius) * orbit.swayAmplitude;

      p.group.position.x = Math.cos(angle) * orbit.radius;
      p.group.position.y = sway;
      p.group.position.z = Math.sin(angle) * orbit.radius;

      p.group.rotation.y += 0.0035;

      if (p.hoverLabelMesh) {
        const worldPos = new THREE.Vector3();
        p.group.getWorldPosition(worldPos);

        const labelPos = worldPos.clone();
        const yOffset = p.currentYOffset !== undefined ? p.currentYOffset : (p.config.size * 0.55);
        labelPos.y += yOffset;

        p.hoverLabelMesh.position.copy(labelPos);
        p.hoverLabelMesh.quaternion.copy(this.camera.quaternion);
      }
    });

    // 6. Camera Follow Active Planet (Matches Tests/PlanetsPOC)
    if (activePlanet) {
      const newPlanetPos = new THREE.Vector3();
      activePlanet.group.getWorldPosition(newPlanetPos);

      const beamLength = newPlanetPos.length();
      this.laserGroup.position.set(0, 0, 0);
      this.laserGroup.scale.set(1, beamLength, 1);
      this.laserGroup.lookAt(newPlanetPos);
      this.laserGroup.rotateX(Math.PI / 2);

      const displacement = new THREE.Vector3().subVectors(newPlanetPos, oldPlanetPos);
      this.camera.position.add(displacement);

      if (this.controls) {
        if (this.isTransitioningFocus) {
          this.controls.target.lerp(newPlanetPos, 0.08);

          const focusDistance = activePlanet.config.size * 3.8;
          const cameraDir = new THREE.Vector3().copy(this.camera.position).sub(newPlanetPos);
          cameraDir.y = 0;
          cameraDir.normalize();
          const targetCamPos = new THREE.Vector3().copy(newPlanetPos).addScaledVector(cameraDir, focusDistance);
          targetCamPos.y += 0.3;

          this.camera.position.lerp(targetCamPos, 0.08);
          this.controls.update();

          if (this.controls.target.distanceTo(newPlanetPos) < 0.05 && this.camera.position.distanceTo(targetCamPos) < 0.1) {
            this.isTransitioningFocus = false;
          }
        } else {
          this.controls.target.copy(newPlanetPos);
          this.controls.update();
        }
      }
    }

    this.checkHover();
  }
}
