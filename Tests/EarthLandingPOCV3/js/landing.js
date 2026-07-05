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
      vec3 waterBase = mix(uDarkWaterColor, skyReflectColor, 0.15 + 0.35 * fresnel);
      waterBase += uMoonColor * (moonDiff * 0.05 + moonSpec + moonWideSpec);
      waterBase += thrusterReflectColor;
      
      // Add wind-blown foam on steep wave crests (restricted to extreme wave peaks)
      float steepness = 1.0 - normal.y;
      float foam = smoothstep(0.35, 0.70, steepness * 0.82 + noise(vUv * 1500.0) * 0.22) * 0.22; // reduced density and opacity
      vec3 foamColor = vec3(0.85, 0.90, 0.98);
      
      vec3 finalColor = mix(waterBase, foamColor, foam);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

export class LandingSystem {
  constructor(scene) {
    this.scene = scene;
    
    // 1. Large Glowing Moon (Centered in background)
    this.moonGroup = new THREE.Group();
    this.scene.add(this.moonGroup);
    
    const moonGeom = new THREE.SphereGeometry(35, 32, 32);
    const moonMat = new THREE.MeshBasicMaterial({
      color: CONFIG.colors.moonColor,
      transparent: true,
      opacity: 0.88
    });
    this.moonMesh = new THREE.Mesh(moonGeom, moonMat);
    this.moonMesh.position.set(0, 150, -450);
    this.moonGroup.add(this.moonMesh);
    
    // Create moon corona glow texture on a canvas
    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 128;
    glowCanvas.height = 128;
    const ctx = glowCanvas.getContext("2d");
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, "rgba(206, 231, 255, 1.0)");
    grad.addColorStop(0.2, "rgba(206, 231, 255, 0.45)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    
    const glowMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: CONFIG.colors.moonColor,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    this.moonGlow = new THREE.Sprite(glowMat);
    this.moonGlow.scale.set(180, 180, 1.0); // large glowing halo
    this.moonGlow.position.copy(this.moonMesh.position);
    this.moonGroup.add(this.moonGlow);
    
    // Moon shadow light
    this.moonLight = new THREE.DirectionalLight(CONFIG.colors.moonColor, 0.6); // Lowered from 1.2 to reduce brightness wash
    this.moonLight.position.copy(this.moonMesh.position);
    this.moonLight.castShadow = true;
    this.moonLight.shadow.mapSize.width = 2048;
    this.moonLight.shadow.mapSize.height = 2048;
    this.moonLight.shadow.bias = -0.0004;
    this.moonGroup.add(this.moonLight);
    
    this.stormAmbient = new THREE.AmbientLight(0xffffff, 0.6); // Raised ambient light for clean blockout visibility
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
        uMoonLightPos: { value: this.moonMesh.position },
        uMoonColor: { value: new THREE.Color(CONFIG.colors.moonColor) },
        uDarkWaterColor: { value: new THREE.Color(CONFIG.colors.oceanDarkWater) },
        uThrusterIntensity: { value: 0.0 },
        uThrusterPos: { value: new THREE.Vector3(0, 0, 0) }
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
    
    this.createCottonCandyClouds();
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
  
  createCottonCandyClouds() {
    this.cloudsGroup = new THREE.Group();
    this.scene.add(this.cloudsGroup);
    
    const colors = [0xffeef5, 0xf5e6ff, 0xe0f2fe, 0xf8fafc];
    
    for (let i = 0; i < 20; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const scale = 1.0 + Math.random() * 1.5;
      const cloud = createCottonCandyCloud(color, scale);
      
      // Scatter in the sky around the descent corridor
      const x = THREE.MathUtils.randFloatSpread(250);
      const y = 15.0 + Math.random() * 45.0; // cloud layer between Y=15 and Y=60
      const z = -150.0 + Math.random() * 200.0;
      
      cloud.position.set(x, y, z);
      cloud.userData = {
        phase: Math.random() * Math.PI * 2,
        speed: 0.05 + Math.random() * 0.1,
        startY: y
      };
      
      this.cloudsGroup.add(cloud);
    }
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
    
    if (this.cloudsGroup) {
      this.cloudsGroup.visible = isStormOrLanding || isOcean;
      
      // Gentle drift for cartoonish clouds
      this.cloudsGroup.children.forEach((cloud) => {
        cloud.position.x += Math.sin(elapsed * 0.1 + cloud.userData.phase) * 0.02;
        cloud.position.y = cloud.userData.startY + Math.cos(elapsed * 0.2 + cloud.userData.phase) * 0.5;
      });
    }
    
    if (rocket) {
      this.oceanMat.uniforms.uThrusterIntensity.value = ENGINE_STATE.thrusterIntensity;
      this.oceanMat.uniforms.uThrusterPos.value.copy(rocket.position);
    }
    
    // Freeze pulsing monolith cyan emissive veins to a static state
    if (isOcean) {
      const pulse = 1.0;
      this.monolithMat.emissiveIntensity = pulse;
      this.ambientHoverLight.intensity = 4.5;
      this.poolMat.opacity = 0.60;
    }
  }
}

function createCottonCandyCloud(colorHex, scale) {
  const cloudGroup = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: colorHex,
    roughness: 0.95,
    metalness: 0.0,
    emissive: colorHex,
    emissiveIntensity: 0.12,
    flatShading: false
  });
  
  const sphereGeom = new THREE.SphereGeometry(1.0, 14, 14);
  const numSpheres = 5 + Math.floor(Math.random() * 4);
  
  for (let i = 0; i < numSpheres; i++) {
    const mesh = new THREE.Mesh(sphereGeom, mat);
    let sScale, offset;
    
    if (i === 0) {
      sScale = new THREE.Vector3(4.0, 2.5, 4.0).multiplyScalar(scale);
      offset = new THREE.Vector3(0, 0, 0);
    } else {
      const r = 2.0 + Math.random() * 2.0;
      sScale = new THREE.Vector3(r, r * 0.8, r).multiplyScalar(scale);
      const angle = Math.random() * Math.PI * 2;
      const dist = 1.5 + Math.random() * 2.0;
      offset = new THREE.Vector3(
        Math.cos(angle) * dist,
        THREE.MathUtils.randFloatSpread(1.0),
        Math.sin(angle) * dist
      );
    }
    
    mesh.scale.copy(sScale);
    mesh.position.copy(offset);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    cloudGroup.add(mesh);
  }
  
  return cloudGroup;
}
