import * as THREE from 'three';

// Lens flare star texture generator
export function createStarTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, 64, 64);

  // Radial gradient for sharp core and soft halo
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0.0, "rgba(255, 255, 255, 1.0)");
  grad.addColorStop(0.15, "rgba(255, 255, 255, 1.0)");
  grad.addColorStop(0.35, "rgba(200, 240, 255, 1.0)");
  grad.addColorStop(0.7, "rgba(100, 160, 255, 0.5)");
  grad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  // Radiating lens-flare spikes
  let flareGradH = ctx.createLinearGradient(0, 32, 64, 32);
  flareGradH.addColorStop(0.0, "rgba(255, 255, 255, 0)");
  flareGradH.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
  flareGradH.addColorStop(1.0, "rgba(255, 255, 255, 0)");
  ctx.strokeStyle = flareGradH;
  ctx.lineWidth = 1.0;
  ctx.beginPath();
  ctx.moveTo(8, 32);
  ctx.lineTo(56, 32);
  ctx.stroke();

  let flareGradV = ctx.createLinearGradient(32, 0, 32, 64);
  flareGradV.addColorStop(0.0, "rgba(255, 255, 255, 0)");
  flareGradV.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
  flareGradV.addColorStop(1.0, "rgba(255, 255, 255, 0)");
  ctx.strokeStyle = flareGradV;
  ctx.lineWidth = 1.0;
  ctx.beginPath();
  ctx.moveTo(32, 8);
  ctx.lineTo(32, 56);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Multi-stop Organic Nebula Texture Generator
export function createNebulaTexture(color1, color2) {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 2048, 2048);

  const grad = ctx.createRadialGradient(1024, 1024, 40, 1024, 1024, 960);
  grad.addColorStop(0.0, color1);
  grad.addColorStop(0.35, color2);
  grad.addColorStop(0.7, 'rgba(0,0,0,0.02)');
  grad.addColorStop(1.0, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 2048, 2048);

  ctx.globalCompositeOperation = 'screen';
  for (let i = 0; i < 24; i++) {
    const x = 300 + Math.random() * 1448;
    const y = 300 + Math.random() * 1448;
    const r = 160 + Math.random() * 440;
    const g = ctx.createRadialGradient(x, y, 8, x, y, r);
    g.addColorStop(0, 'rgba(75, 40, 130, 0.08)');
    g.addColorStop(0.5, 'rgba(50, 20, 90, 0.04)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// GPU Twinkle & Drift Shader for dynamic star movement
const TwinkleStarShader = {
  vertex: `
    attribute float aPhase;
    attribute float aSpeed;
    uniform float uTime;
    uniform float uSize;
    varying float vBrightness;
    
    void main() {
      vec3 pos = position;
      pos.x += sin(uTime * 0.4 + aPhase) * 3.0;
      pos.y += cos(uTime * 0.015 + aPhase * 1.3) * 0.4;
      pos.z += sin(uTime * 0.01 + aPhase * 0.7) * 0.3;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      float t = uTime * aSpeed + aPhase;
      vBrightness = 0.05 + 0.95 * pow(0.5 + 0.5 * sin(t), 3.0);
      
      gl_PointSize = uSize * (350.0 / -mvPosition.z) * (0.7 + 0.3 * vBrightness);
    }
  `,
  fragment: `
    uniform sampler2D uTexture;
    uniform vec3 uColor;
    uniform float uOpacity;
    varying float vBrightness;
    
    void main() {
      vec4 texColor = texture2D(uTexture, gl_PointCoord);
      if (texColor.a < 0.05) discard;
      gl_FragColor = vec4(uColor * vBrightness, texColor.a * uOpacity * vBrightness);
    }
  `
};

export class SpaceCosmosBackground {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = "SpaceCosmosGroup";

    this.buildStarfield();
    this.buildNebulaClouds();

    this.scene.add(this.group);
  }

  buildStarfield() {
    const cx = 37.5;
    const cy = 0.0;
    const cz = 0.0;

    this.randomStarCount = 3000;
    const posRandom = new Float32Array(this.randomStarCount * 3);
    const phaseRandom = new Float32Array(this.randomStarCount);
    const speedRandom = new Float32Array(this.randomStarCount);

    for (let i = 0; i < this.randomStarCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 380 + Math.random() * 320;

      posRandom[i * 3] = cx + r * Math.sin(phi) * Math.cos(theta);
      posRandom[i * 3 + 1] = cy + r * Math.sin(phi) * Math.sin(theta);
      posRandom[i * 3 + 2] = cz + r * Math.cos(phi);

      phaseRandom[i] = Math.random() * Math.PI * 2;
      speedRandom[i] = 0.12 + Math.random() * 0.38;
    }

    const randomGeom = new THREE.BufferGeometry();
    randomGeom.setAttribute("position", new THREE.BufferAttribute(posRandom, 3));
    randomGeom.setAttribute("aPhase", new THREE.BufferAttribute(phaseRandom, 1));
    randomGeom.setAttribute("aSpeed", new THREE.BufferAttribute(speedRandom, 1));

    this.starMat = new THREE.ShaderMaterial({
      vertexShader: TwinkleStarShader.vertex,
      fragmentShader: TwinkleStarShader.fragment,
      uniforms: {
        uTime: { value: 0.0 },
        uSize: { value: 1.5 },
        uTexture: { value: createStarTexture() },
        uColor: { value: new THREE.Color(0xffffff) },
        uOpacity: { value: 0.95 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.stars = new THREE.Points(randomGeom, this.starMat);
    this.group.add(this.stars);

    this.buildRandomStarClusters(cx, cy, cz);
  }

  buildRandomStarClusters(cx, cy, cz) {
    this.clusterStarTotal = 3000;
    const numClusters = Math.floor(Math.random() * 4) + 6;
    const starsPerCluster = Math.floor(this.clusterStarTotal / numClusters);

    const posClusters = new Float32Array(this.clusterStarTotal * 3);
    const phaseClusters = new Float32Array(this.clusterStarTotal);
    const speedClusters = new Float32Array(this.clusterStarTotal);

    let idx = 0;

    for (let c = 0; c < numClusters; c++) {
      const cu = Math.random();
      const cv = Math.random();
      const cTheta = cu * 2.0 * Math.PI;
      const cPhi = Math.acos(2.0 * cv - 1.0);
      const cDist = 380 + Math.random() * 260;

      const clusterX = cx + cDist * Math.sin(cPhi) * Math.cos(cTheta);
      const clusterY = cy + cDist * Math.sin(cPhi) * Math.sin(cTheta);
      const clusterZ = cz + cDist * Math.cos(cPhi);

      const clusterSpread = 90.0 + Math.random() * 110.0;
      const countThisCluster = (c === numClusters - 1) ? (this.clusterStarTotal - idx) : starsPerCluster;

      for (let i = 0; i < countThisCluster; i++) {
        const radius = Math.pow(Math.random(), 1.4) * clusterSpread;
        const theta = Math.random() * Math.PI * 2.0;
        const phi = Math.acos(2.0 * Math.random() - 1.0);

        posClusters[idx * 3] = clusterX + radius * Math.sin(phi) * Math.cos(theta);
        posClusters[idx * 3 + 1] = clusterY + radius * Math.sin(phi) * Math.sin(theta);
        posClusters[idx * 3 + 2] = clusterZ + radius * Math.cos(phi);

        phaseClusters[idx] = Math.random() * Math.PI * 2;
        speedClusters[idx] = 0.10 + Math.random() * 0.35;

        idx++;
      }
    }

    const clusterGeom = new THREE.BufferGeometry();
    clusterGeom.setAttribute("position", new THREE.BufferAttribute(posClusters, 3));
    clusterGeom.setAttribute("aPhase", new THREE.BufferAttribute(phaseClusters, 1));
    clusterGeom.setAttribute("aSpeed", new THREE.BufferAttribute(speedClusters, 1));

    this.clusterMat = new THREE.ShaderMaterial({
      vertexShader: TwinkleStarShader.vertex,
      fragmentShader: TwinkleStarShader.fragment,
      uniforms: {
        uTime: { value: 0.0 },
        uSize: { value: 1.5 },
        uTexture: { value: createStarTexture() },
        uColor: { value: new THREE.Color(0xe0f2fe) },
        uOpacity: { value: 1.0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.clusterStars = new THREE.Points(clusterGeom, this.clusterMat);
    this.group.add(this.clusterStars);
  }

  buildNebulaClouds() {
    this.nebulaOpacity = 0.3;

    this.nebMat1 = new THREE.MeshBasicMaterial({
      map: createNebulaTexture('rgba(20, 100, 240, 0.32)', 'rgba(5, 12, 40, 0)'),
      transparent: true,
      opacity: this.nebulaOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    this.nebMat2 = new THREE.MeshBasicMaterial({
      map: createNebulaTexture('rgba(140, 40, 180, 0.28)', 'rgba(12, 3, 24, 0)'),
      transparent: true,
      opacity: this.nebulaOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    const nebGeo = new THREE.PlaneGeometry(900, 500);
    this.nebulaCount = 6;
    this.nebulaMeshes = [];
    this.nebulaSettings = [];

    const positions = [
      { x: 37.5, y: 80, z: 450, mat: this.nebMat1 },
      { x: -350, y: 140, z: 300, mat: this.nebMat2 },
      { x: 400, y: -120, z: 250, mat: this.nebMat1 },
      { x: 0, y: -200, z: -350, mat: this.nebMat2 },
      { x: -250, y: -100, z: 400, mat: this.nebMat1 },
      { x: 300, y: 200, z: -250, mat: this.nebMat2 }
    ];

    positions.forEach((p) => {
      const mesh = new THREE.Mesh(nebGeo, p.mat);
      mesh.position.set(p.x, p.y, p.z);
      mesh.rotation.y = (Math.random() - 0.5) * 0.5;
      this.group.add(mesh);

      this.nebulaMeshes.push(mesh);
      this.nebulaSettings.push({
        rotSpeed: 0.004 + Math.random() * 0.008,
        rotDir: Math.random() < 0.5 ? 1 : -1,
        yBase: p.y,
        xBase: p.x,
        driftFreqX: 0.2 + Math.random() * 0.2,
        driftAmpX: 15 + Math.random() * 15,
        driftFreqY: 0.15 + Math.random() * 0.15,
        driftAmpY: 8 + Math.random() * 8
      });
    });
  }

  update(time) {
    if (this.starMat && this.starMat.uniforms.uTime) {
      this.starMat.uniforms.uTime.value = time;
    }
    if (this.clusterMat && this.clusterMat.uniforms.uTime) {
      this.clusterMat.uniforms.uTime.value = time;
    }

    if (this.stars) {
      this.stars.rotation.y = time * 0.003;
      this.stars.rotation.x = Math.sin(time * 0.002) * 0.007;
    }
    if (this.clusterStars) {
      this.clusterStars.rotation.y = time * 0.00003;
      this.clusterStars.rotation.z = Math.cos(time * 0.00007) * 0.00003;
    }

    if (this.nebulaMeshes) {
      this.nebulaMeshes.forEach((mesh, i) => {
        const s = this.nebulaSettings[i];
        mesh.rotation.z += s.rotSpeed * s.rotDir * 0.08;
        mesh.position.y = s.yBase + Math.sin(time * s.driftFreqY) * s.driftAmpY;
        mesh.position.x = s.xBase + Math.cos(time * s.driftFreqX) * s.driftAmpX;
      });
    }
  }

  fadeOut(duration = 2.0, tl = null, startTime = 0) {
    if (tl) {
      if (this.starMat && this.starMat.uniforms.uOpacity) {
        tl.to(this.starMat.uniforms.uOpacity, { value: 0.0, duration: duration, ease: 'power2.inOut' }, startTime);
      }
      if (this.clusterMat && this.clusterMat.uniforms.uOpacity) {
        tl.to(this.clusterMat.uniforms.uOpacity, { value: 0.0, duration: duration, ease: 'power2.inOut' }, startTime);
      }
      if (this.nebMat1) {
        tl.to(this.nebMat1, { opacity: 0.0, duration: duration, ease: 'power2.inOut' }, startTime);
      }
      if (this.nebMat2) {
        tl.to(this.nebMat2, { opacity: 0.0, duration: duration, ease: 'power2.inOut' }, startTime);
      }
    }
  }
}
