import * as THREE from "three";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";

// Ocean shader with Gerstner wave displacement and specularity
const OceanShader = {
  vertex: `
    uniform float uTime;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    
    // Gerstner Wave equation adapted for XY plane geometry
    vec3 getGerstnerWave(vec3 pos, float waveLength, float amplitude, float speed, vec2 direction, float steepness) {
      float k = 2.0 * 3.14159 / waveLength;
      float c = sqrt(9.8 / k);
      vec2 d = normalize(direction);
      float f = k * (dot(d, pos.xy) - c * uTime * speed);
      
      return vec3(
        d.x * (steepness * amplitude) * cos(f), // displace along local X
        d.y * (steepness * amplitude) * cos(f), // displace along local Y
        amplitude * sin(f)                      // displace along local Z (height)
      );
    }
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Layering waves for stormy, choppy water
      vec3 w1 = getGerstnerWave(position, 120.0, 3.5, 0.8, vec2(1.0, 0.1), 0.25);
      vec3 w2 = getGerstnerWave(position, 60.0, 1.8, 1.3, vec2(0.4, 0.9), 0.20);
      vec3 w3 = getGerstnerWave(position, 25.0, 0.70, 2.2, vec2(-0.5, 0.85), 0.15);
      
      pos += w1 + w2 + w3;
      vec4 worldPos = modelMatrix * vec4(pos, 1.0);
      vWorldPos = worldPos.xyz;
      
      // Calculate normal vectors procedurally
      vec3 epsX = vec3(0.2, 0.0, 0.0);
      vec3 pX = position + epsX;
      pX += getGerstnerWave(pX, 120.0, 3.5, 0.8, vec2(1.0, 0.1), 0.25) +
            getGerstnerWave(pX, 60.0, 1.8, 1.3, vec2(0.4, 0.9), 0.20) +
            getGerstnerWave(pX, 25.0, 0.70, 2.2, vec2(-0.5, 0.85), 0.15);
            
      vec3 epsY = vec3(0.0, 0.2, 0.0);
      vec3 pY = position + epsY;
      pY += getGerstnerWave(pY, 120.0, 3.5, 0.8, vec2(1.0, 0.1), 0.25) +
            getGerstnerWave(pY, 60.0, 1.8, 1.3, vec2(0.4, 0.9), 0.20) +
            getGerstnerWave(pY, 25.0, 0.70, 2.2, vec2(-0.5, 0.85), 0.15);
            
      vec3 tangent = normalize(pX - pos);
      vec3 bitangent = normalize(pY - pos);
      vWorldNormal = normalize((modelMatrix * vec4(cross(tangent, bitangent), 0.0)).xyz);
      
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragment: `
    uniform float uTime;
    uniform vec3 uMoonLightPos;
    uniform vec3 uMoonColor;
    uniform vec3 uDarkWaterColor;
    uniform float uThrusterIntensity;
    uniform vec3 uThrusterPos;
    uniform float uLandingFadeIn;
    uniform float uAmbientIntensity;
    
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
    }
    
    void main() {
      vec3 normal = normalize(vWorldNormal);
      
      // Layered micro-bump mapping for rainy ripple patterns
      vec2 uvRipple = vUv * 8000.0 + vec2(uTime * 10.0, uTime * 6.0);
      float microBump = noise(uvRipple) * 0.15 + noise(uvRipple * 2.0) * 0.08;
      
      vec3 blendNormal = normalize(normal + vec3(microBump, microBump, 0.0));
      
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      
      // Moon Specular Reflections (high contrast, wet look)
      vec3 moonDir = normalize(uMoonLightPos - vWorldPos);
      float moonDiff = max(dot(blendNormal, moonDir), 0.0);
      
      vec3 moonHalfDir = normalize(moonDir + viewDir);
      float moonSpec = pow(max(dot(blendNormal, moonHalfDir), 0.0), 180.0) * 0.95; // narrower & slightly dimmed hot spot
      float moonWideSpec = pow(max(dot(blendNormal, moonHalfDir), 0.0), 24.0) * 0.20; // narrower specular reflection path
      
      // Thruster Flame Light Reflections
      vec3 thrusterDir = normalize(uThrusterPos - vWorldPos);
      float thrusterDist = length(uThrusterPos - vWorldPos);
      float thrusterAtten = 1.0 / (1.0 + 0.02 * thrusterDist + 0.0005 * thrusterDist * thrusterDist);
      float thrusterDiff = max(dot(blendNormal, thrusterDir), 0.0);
      vec3 thrusterHalfDir = normalize(thrusterDir + viewDir);
      float thrusterSpec = pow(max(dot(blendNormal, thrusterHalfDir), 0.0), 96.0) * uThrusterIntensity * 0.08; // narrower thruster spec
      
      vec3 thrusterReflectColor = vec3(1.0, 0.45, 0.08) * thrusterSpec * thrusterAtten;
      
      // Combine lighting into Batman Arkham color palette (dark green/blue/black water)
      vec3 skyReflectColor = vec3(0.015, 0.035, 0.075); // richer dark blue reflect
      
      float fresnel = pow(1.0 - max(dot(blendNormal, viewDir), 0.0), 5.0);
      float scaleFactor = uAmbientIntensity / 0.6;
      vec3 waterBase = mix(uDarkWaterColor * scaleFactor, skyReflectColor * scaleFactor, 0.15 + 0.35 * fresnel);
      waterBase += uMoonColor * (moonDiff * 0.05 + moonSpec + moonWideSpec);
      waterBase += thrusterReflectColor;
      
      // Add wind-blown foam on steep wave crests (restricted to extreme wave peaks)
      float steepness = 1.0 - normal.y;
      float foam = smoothstep(0.35, 0.70, steepness * 0.82 + noise(vUv * 1500.0) * 0.22) * 0.22; // reduced density and opacity
      vec3 foamColor = vec3(0.85, 0.90, 0.98);
      
      vec3 finalColor = mix(waterBase, foamColor, foam);
      
      gl_FragColor = vec4(finalColor * uLandingFadeIn, 1.0);
    }
  `
};

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
  for (let i = 0; i < 20; i++) {
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
  
  // Apply dithering (fine noise) to eliminate gradient color banding as it moves
  const imgData = ctx.getImageData(0, 0, 2048, 2048);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) {
      const noise = (Math.random() - 0.5) * 5.0; // tiny dither offset
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
  }
  ctx.putImageData(imgData, 0, 0);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

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
  grad.addColorStop(0.15, "rgba(255, 255, 255, 1.0)"); // solid hot core
  grad.addColorStop(0.35, "rgba(200, 240, 255, 1.0)"); // inner blue-white glow
  grad.addColorStop(0.7, "rgba(100, 160, 255, 0.5)"); // soft outer aura
  grad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  
  // Radiating lens-flare spikes (horizontal & vertical gradient lines)
  let flareGradH = ctx.createLinearGradient(0, 32, 64, 32);
  flareGradH.addColorStop(0.0, "rgba(255, 255, 255, 0)");
  flareGradH.addColorStop(0.5, "rgba(255, 255, 255, 0.95)"); // hot core spike intersection
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
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

export class LandingSystem {
  constructor(scene) {
    this.scene = scene;
    
    // 1. Large Glowing Moon (Centered in background)
    this.moonGroup = new THREE.Group();
    this.scene.add(this.moonGroup);
    
    // Moon shadow light (retained for shadows and specular highlights on the water)
    this.moonLight = new THREE.DirectionalLight(CONFIG.colors.moonColor, 0.6); // Lowered from 1.2 to reduce brightness wash
    this.moonLight.position.set(0, 150, -450);
    this.moonLight.castShadow = true;
    this.moonLight.shadow.mapSize.width = 2048;
    this.moonLight.shadow.mapSize.height = 2048;
    this.moonLight.shadow.bias = -0.0004;
    this.moonGroup.add(this.moonLight);
    
    // Add Nebula Background (PlanetsPOC style)
    this.nebMat1 = new THREE.MeshBasicMaterial({
      map: createNebulaTexture('rgba(20, 100, 240, 0.28)', 'rgba(5, 12, 40, 0)'),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      fog: false
    });
    
    this.nebMat2 = new THREE.MeshBasicMaterial({
      map: createNebulaTexture('rgba(140, 40, 180, 0.22)', 'rgba(12, 3, 24, 0)'),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      fog: false
    });
    
    const nebGeo = new THREE.PlaneGeometry(1200, 1200);
    
    // Dynamic Nebula Group (User Configurable Count)
    this.nebulaCount = 5; // Change this to set total number of nebulas!
    this.nebulaMeshes = [];
    this.nebulaXOffsets = [];
    this.nebulaSettings = []; // holds random rotation/drift speeds and offsets
    
    const loopWidth = 1400;
    const halfLoop = loopWidth / 2;
    
    for (let i = 0; i < this.nebulaCount; i++) {
      // Alternate materials for color variation
      const mat = (i % 2 === 0) ? this.nebMat1 : this.nebMat2;
      const mesh = new THREE.Mesh(nebGeo, mat);
      
      // Calculate even spacing along the X belt
      const startX = (i / this.nebulaCount) * loopWidth - halfLoop;
      const y = 100 + Math.random() * 180; // random height
      const z = -520 + Math.random() * 30;  // layering layers
      
      mesh.position.set(startX, y, z);
      mesh.rotation.y = (Math.random() - 0.5) * 0.4;
      this.moonGroup.add(mesh);
      
      this.nebulaMeshes.push(mesh);
      this.nebulaXOffsets.push(startX);
      this.nebulaSettings.push({
        rotSpeed: 0.008 + Math.random() * 0.016,
        rotDir: Math.random() < 0.5 ? 1 : -1,
        yBase: y,
        driftFreqX: 0.2 + Math.random() * 0.2,
        driftAmpX: 25 + Math.random() * 20,
        driftFreqY: 0.1 + Math.random() * 0.2,
        driftAmpY: 15 + Math.random() * 15
      });
    }
    
    // Add Stars Background (PlanetsPOC style)
    this.starCount = 400;
    this.starSpeed = 3.0; // Left-to-right drift speed (units per second)
    this.starSize = 1.5;   // Point size (radiation intensity)
    this.lastTime = 0.0;
    
    // Pick 4 random cluster center coordinates in the sky
    const clusterCenters = [];
    for (let c = 0; c < 4; c++) {
      const theta = 0.2 + Math.random() * (Math.PI / 2 - 0.3); // angle from vertical
      const phi = Math.random() * Math.PI; // horizontal angle
      const dist = 420;
      clusterCenters.push({
        x: dist * Math.sin(theta) * Math.cos(phi),
        y: Math.abs(dist * Math.cos(theta)),
        z: -Math.abs(dist * Math.sin(theta) * Math.sin(phi)) - 100.0
      });
    }
    
    const starGeom = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < this.starCount; i++) {
      if (Math.random() < 0.65 && clusterCenters.length > 0) {
        // Cluster star: Gaussian-like spread around a center
        const center = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
        const spread = 50.0;
        const dx = (Math.random() - 0.5 + Math.random() - 0.5) * spread;
        const dy = (Math.random() - 0.5 + Math.random() - 0.5) * spread;
        const dz = (Math.random() - 0.5 + Math.random() - 0.5) * spread;
        starPositions.push(center.x + dx, center.y + dy, center.z + dz);
      } else {
        // Completely random background noise star
        const theta = Math.random() * Math.PI;
        const phi = Math.random() * Math.PI;
        const dist = 380 + Math.random() * 100;
        const x = dist * Math.sin(theta) * Math.cos(phi);
        const y = Math.abs(dist * Math.cos(theta)) + 20.0;
        const z = -Math.abs(dist * Math.sin(theta) * Math.sin(phi)) - 100.0;
        starPositions.push(x, y, z);
      }
    }
    
    starGeom.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
    
    this.starMat = new THREE.PointsMaterial({
      map: createStarTexture(),
      color: 0xffffff,
      size: this.starSize,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending, // extra bright highlights
      depthWrite: false,
      fog: false,
      sizeAttenuation: true
    });
    
    this.stars = new THREE.Points(starGeom, this.starMat);
    this.moonGroup.add(this.stars);
    
    this.stormAmbient = new THREE.AmbientLight(0xffffff, ENGINE_STATE.ambientIntensity); // Raised ambient light for clean blockout visibility
    this.scene.add(this.stormAmbient);
    
    // Storm sky directional light (illuminates the descending rocket)
    this.stormSkyLight = new THREE.DirectionalLight(0x1e293b, 0.7); // Lowered from 1.8 to preserve deep storm shadows
    this.stormSkyLight.position.set(40, 150, 40);
    this.scene.add(this.stormSkyLight);
    
    // 2. Ink-black Ocean Mesh
    this.oceanGeom = new THREE.PlaneGeometry(1500, 1500, 180, 180);
    this.oceanMat = new THREE.ShaderMaterial({
      vertexShader: OceanShader.vertex,
      fragmentShader: OceanShader.fragment,
      uniforms: {
        uTime: { value: 0.0 },
        uMoonLightPos: { value: this.moonLight.position },
        uMoonColor: { value: new THREE.Color(CONFIG.colors.moonColor) },
        uDarkWaterColor: { value: new THREE.Color(CONFIG.colors.oceanDarkWater) },
        uThrusterIntensity: { value: 0.0 },
        uThrusterPos: { value: new THREE.Vector3(0, 0, 0) },
        uLandingFadeIn: { value: 0.0 },
        uAmbientIntensity: { value: 0.6 }
      },
      side: THREE.DoubleSide
    });
    
    this.ocean = new THREE.Mesh(this.oceanGeom, this.oceanMat);
    this.ocean.rotation.x = -Math.PI / 2;
    this.ocean.receiveShadow = true;
    
    // 3. Monolith Glow Shader Material
    this.monolithMat = new THREE.MeshStandardMaterial({
      color: 0x010204,
      roughness: 0.06,
      metalness: 0.98,
      emissive: 0x00ffff,
      emissiveIntensity: 0.0
    });
    
    // Point light underneath the platform
    this.ambientHoverLight = new THREE.PointLight(0x00ffff, 4.5, 45);
    this.ambientHoverLight.position.set(0, 0.5, -45);
    
    // Glowing pool on the water surface under the platform
    const poolCanvas = document.createElement("canvas");
    poolCanvas.width = 128;
    poolCanvas.height = 128;
    const pCtx = poolCanvas.getContext("2d");
    const pGrad = pCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
    pGrad.addColorStop(0, "rgba(0, 240, 255, 1.0)");
    pGrad.addColorStop(0.4, "rgba(0, 240, 255, 0.3)");
    pGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 128, 128);
    const poolTex = new THREE.CanvasTexture(poolCanvas);
    
    this.poolMat = new THREE.MeshBasicMaterial({
      map: poolTex,
      color: 0x00ffff,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.hoverPool = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), this.poolMat);
    this.hoverPool.rotation.x = -Math.PI / 2;
    this.hoverPool.position.set(0, 0.1, -45);
  }
  
  configureMonolith(monolithScene) {
    if (!monolithScene) return;
    
    this.scene.add(this.ambientHoverLight);
    this.scene.add(this.hoverPool);
    
    monolithScene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        
        if (node.name.includes("Monolith")) {
          node.material = this.monolithMat;
        } else if (node.name.includes("LandingPad") || node.name.includes("PadGlowRing") || node.name.includes("PadCenterMetal")) {
          // Keep the landing pad as metallic grey
          if (node.material) {
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            mats.forEach(m => {
              m.roughness = 0.25;
              m.metalness = 0.80;
            });
          }
        } else if (node.material) {
          // All other decorative slabs re-styled as dark rough wet concrete
          const mats = Array.isArray(node.material) ? node.material : [node.material];
          mats.forEach(m => {
            m.roughness = 0.85; // non-reflective wet stone
            m.metalness = 0.05; // non-metallic
            m.color.setHex(0x0a0d14); // dark slate/stone color
          });
        }
      }
    });
  }
  
  activateOcean() {
    this.scene.add(this.ocean);
  }
  

  
  update(elapsed, rocket) {
    this.oceanMat.uniforms.uTime.value = 0.0; // Freeze ocean wave movements
    
    const sc = ENGINE_STATE.currentScene;
    const isOcean = (sc === "LANDING" || sc === "MANUAL");
    const isStormOrLanding = (sc === "STORM" || sc === "LANDING" || sc === "MANUAL");
    
    this.moonGroup.visible = isOcean;
    this.ocean.visible = isOcean;
    this.ambientHoverLight.visible = isOcean;
    this.hoverPool.visible = isOcean;
    
    this.stormAmbient.visible = isStormOrLanding;
    this.stormSkyLight.visible = isStormOrLanding;
    
    if (rocket) {
      this.oceanMat.uniforms.uThrusterIntensity.value = ENGINE_STATE.thrusterIntensity;
      this.oceanMat.uniforms.uThrusterPos.value.copy(rocket.position);
    }
    
    // Pass the landing fade-in progress and ambient intensity to the ocean shader
    this.oceanMat.uniforms.uLandingFadeIn.value = ENGINE_STATE.landingFadeInProgress;
    this.oceanMat.uniforms.uAmbientIntensity.value = ENGINE_STATE.ambientIntensity;
    
    // Smoothly fade in the monolith, platform lights, and scene lights from deep darkness
    if (isOcean) {
      const fadeIn = ENGINE_STATE.landingFadeInProgress;
      
      const pulse = 1.0;
      this.monolithMat.emissiveIntensity = pulse * fadeIn;
      this.ambientHoverLight.intensity = 4.5 * fadeIn;
      this.poolMat.opacity = 0.60 * fadeIn;
      
      this.moonLight.intensity = 0.6 * fadeIn;
      this.stormAmbient.intensity = ENGINE_STATE.ambientIntensity * fadeIn;
      this.stormSkyLight.intensity = 0.7 * fadeIn;
      
      // Fade in background nebula planes and stars
      if (this.nebMat1) this.nebMat1.opacity = fadeIn * 0.50; // Dimmed maximum opacity (was 1.0)
      if (this.nebMat2) this.nebMat2.opacity = fadeIn * 0.40; // Dimmed maximum opacity (was 1.0)
      if (this.starMat) this.starMat.opacity = fadeIn * 0.85;
      
      // Slow, dynamic background nebula drift and rotation (swirling effect)
      const realTime = performance.now() * 0.001;
      const delta = this.lastTime ? (realTime - this.lastTime) : 0.016;
      this.lastTime = realTime;
      
      const nebSpeed = this.starSpeed * 0.5; // Nebula moves at half the speed of the stars
      const loopWidth = 1400;
      const halfLoop = loopWidth / 2;
      
      for (let i = 0; i < this.nebulaCount; i++) {
        // Update X position offset
        this.nebulaXOffsets[i] += nebSpeed * delta;
        
        // Wrap offset
        if (this.nebulaXOffsets[i] > halfLoop) {
          this.nebulaXOffsets[i] = -halfLoop;
        }
        
        const mesh = this.nebulaMeshes[i];
        const set = this.nebulaSettings[i];
        if (mesh && set) {
          // Slow swirl rotation
          mesh.rotation.z = realTime * set.rotSpeed * set.rotDir;
          
          // Drift and float
          mesh.position.x = this.nebulaXOffsets[i] + Math.sin(realTime * set.driftFreqX) * set.driftAmpX;
          mesh.position.y = set.yBase + Math.cos(realTime * set.driftFreqY) * set.driftAmpY;
        }
      }
      
      // Left-to-right star drift with wrap-around
      if (this.stars) {
        const posAttr = this.stars.geometry.getAttribute("position");
        const arr = posAttr.array;
        for (let i = 0; i < this.starCount; i++) {
          const idx = i * 3;
          arr[idx] += this.starSpeed * delta; // move right
          if (arr[idx] > 450) {
            arr[idx] = -450; // wrap to left
          }
        }
        posAttr.needsUpdate = true;
      }
    } else if (sc === "STORM") {
      this.stormAmbient.intensity = ENGINE_STATE.ambientIntensity;
      this.stormSkyLight.intensity = 0.7;
    }
  }
}


