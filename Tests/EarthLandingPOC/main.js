import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Asset URLs relative to the Tests/EarthLandingPOC directory
const rocketModelUrl = new URL("./assets/NewRocket.glb", import.meta.url);
const monolithSceneUrl = new URL("./assets/MonolithScene.glb", import.meta.url);

// Main DOM Elements
const loadingOverlay = document.getElementById("loading-overlay");
const progressBar = document.getElementById("progress-bar");
const loaderStatus = document.getElementById("loader-status");
const descentBtn = document.getElementById("descent-btn");
const stormOverlay = document.getElementById("storm-overlay");
const telemetryText = document.getElementById("telemetry");

// Setup Three.js WebGL Scene
const container = document.getElementById("canvas-container");
const canvas = document.querySelector(".canvas");

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a0a1a, 0.0);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 3000);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: false,
  powerPreference: "high-performance"
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;

// Groups for coordinate/environment isolation
const spaceGroup = new THREE.Group();
const oceanGroup = new THREE.Group();
scene.add(spaceGroup);
scene.add(oceanGroup);

oceanGroup.visible = false;

// Global uniform variables
const shaderUniforms = {
  time: { value: 0 },
  plasmaIntensity: { value: 0 },
  warpProgress: { value: 0.0 },
  monolithPulse: { value: 1.0 },
  oceanLightPos: { value: new THREE.Vector3(0, 35, -150) }, // Positioned directly behind the Monolith
  thrusterLightPos: { value: new THREE.Vector3(0, 42, -45) },
  thrusterIntensity: { value: 0.0 },
  lightningIntensity: { value: 0.0 },
  lightningColor: { value: new THREE.Color(0x88ffff) },
  lightningPos: { value: new THREE.Vector3(0, 0, 0) },
  cameraHeight: { value: 120.0 } // Used for dynamic exosphere density scaling
};

let cameraMode = "warp";
let warpCylinder = null;
let warpCylinderMaterial = null;
const cameraRig = {
  targetPos: new THREE.Vector3(1.8, 46, 202.2),
  targetLook: new THREE.Vector3(-0.5, 58, 199.5),
  shakeIntensity: 0.0,
  lerpSpeed: 0.03
};
const actualLookAtTarget = new THREE.Vector3(-0.5, 58, 199.5);

// ==========================================
// PROCEDURAL ENVIRONMENT TEXTURES
// ==========================================

// Generate procedural twilight/sunset environment reflection map
function createProceduralSkyTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  
  // Dark stormy sky gradient (dark slate grey, charcoal, and dark blue-grey)
  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0.0, "#020305");   // top: pitch black storm sky
  grad.addColorStop(0.50, "#080b11"); // upper: dark charcoal storm
  grad.addColorStop(0.85, "#101622"); // lower: deep storm blue-grey
  grad.addColorStop(1.0, "#06080c");   // bottom: dark slate grey ocean sky
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 512);
  
  // Paint faint stormy cloud layers
  for (let i = 0; i < 12; i++) {
    const cx = Math.random() * 1024;
    const cy = 100 + Math.random() * 250;
    const r = 150 + Math.random() * 200;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, "rgba(25, 30, 42, 0.15)");
    g.addColorStop(0.5, "rgba(12, 15, 20, 0.08)");
    g.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }
  
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
}

// Generate environment reflection map for Liquid Chrome
function createProceduralEnvMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  
  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, "#010204");
  grad.addColorStop(0.45, "#04060b");
  grad.addColorStop(0.70, "#080c14");
  grad.addColorStop(0.88, "#101622");
  grad.addColorStop(1.0, "#010103");
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);
  
  ctx.fillStyle = "#ffffff";
  for (let i = 0; i < 40; i++) {
    let x = Math.random() * 512;
    let y = Math.random() * 100;
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 0.9 + 0.3, 0, Math.PI * 2);
    ctx.fill();
  }
  
  const tex = new THREE.CanvasTexture(canvas);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  return tex;
}

// Generate dynamic fire/plasma noise texture for re-entry hull reflections
function createFireNoiseTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  
  // Create gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0.0, "#ff0000");
  grad.addColorStop(0.5, "#ff7700");
  grad.addColorStop(1.0, "#ffdd00");
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 256);
  
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// ==========================================
// SHADERS SPECIFICATIONS (GPU NOISE INTERNALLY)
// ==========================================
const Shaders = {
  earth: {
    vertex: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vPosition;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragment: `
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vPosition;
      varying vec2 vUv;
      
      // Simplex-like 3D Noise generator for rich continental details
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      
      float snoise(vec3 v){
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;
        
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
        
        i = mod(i, 289.0 );
        vec4 p = permute( permute( permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0) )
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0) )
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0) );
                 
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        
        vec4 j = p - 49.0 * floor(p * ns.z);
        
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }
      
      float fbm(vec3 p) {
        float val = 0.0;
        float amp = 0.5;
        vec3 temp = p;
        for (int i = 0; i < 5; i++) {
          val += amp * snoise(temp);
          temp *= 2.04;
          amp *= 0.48;
        }
        return val;
      }
      
      void main() {
        float angle = time * 0.008;
        float cosA = cos(angle);
        float sinA = sin(angle);
        vec3 rotatedPos = vPosition;
        rotatedPos.xz = mat2(cosA, -sinA, sinA, cosA) * rotatedPos.xz;
        
        // Multi-layered fractal noise map
        vec3 pCoord = rotatedPos * 0.023 + vec3(12.0);
        float val = fbm(pCoord);
        
        // Detailed heightmap interpretation
        float lat = vPosition.y / 120.0;
        bool isIce = (abs(lat) > 0.76) || (abs(lat) > 0.65 && val > 0.15);
        
        vec3 terrainColor;
        float specularStrength = 0.0;
        
        if (isIce) {
          terrainColor = vec3(0.95, 0.96, 0.99); // Crisp polar icecaps
          specularStrength = 0.2;
        } else if (val > 0.03) {
          // Land details
          float veg = snoise(pCoord * 6.0 + vec3(3.5));
          vec3 forest = vec3(0.06, 0.26, 0.10);
          vec3 desert = vec3(0.72, 0.62, 0.45);
          vec3 mountain = vec3(0.32, 0.28, 0.25);
          
          vec3 baseLand = mix(desert, forest, smoothstep(-0.2, 0.4, veg));
          terrainColor = mix(baseLand, mountain, smoothstep(0.18, 0.5, val));
          specularStrength = 0.02; // Matte land
        } else {
          // Ocean depth mapping
          float depth = smoothstep(-0.6, 0.03, val);
          vec3 deepOcean = vec3(0.01, 0.04, 0.14);
          vec3 shallowOcean = vec3(0.04, 0.22, 0.44);
          terrainColor = mix(deepOcean, shallowOcean, depth);
          specularStrength = 0.85; // High specular reflection on water
        }
        
        // Rayleigh Scattering Atmosphere influence on limb
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float rim = 1.0 - max(dot(normal, viewDir), 0.0);
        float atmosphereGlow = pow(rim, 4.5);
        vec3 atmColor = vec3(0.12, 0.65, 0.95) * 1.5;
        
        // Sun lighting
        vec3 sunDir = normalize(vec3(-300.0, 200.0, 300.0) - vPosition);
        float diff = max(dot(normal, sunDir), 0.02);
        
        // Specular glint
        vec3 halfDir = normalize(sunDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 32.0) * specularStrength;
        vec3 specularColor = vec3(0.95, 0.90, 0.82) * spec * 2.0;
        
        vec3 finalColor = terrainColor * diff + specularColor;
        finalColor = mix(finalColor, atmColor, atmosphereGlow * 0.7);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  },
  
  earthClouds: {
    vertex: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragment: `
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vPosition;
      
      // Simplex Noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
      
      float fbm(vec3 p) {
        float val = 0.0;
        float amp = 0.5;
        vec3 temp = p;
        for (int i = 0; i < 4; i++) {
          val += amp * snoise(temp);
          temp *= 2.1;
          amp *= 0.5;
        }
        return val;
      }
      
      void main() {
        float angle = time * 0.012;
        float cosA = cos(angle);
        float sinA = sin(angle);
        vec3 rotatedPos = vPosition;
        rotatedPos.xz = mat2(cosA, -sinA, sinA, cosA) * rotatedPos.xz;
        
        vec3 p = rotatedPos * 0.035 + vec3(time * 0.005, 0.0, time * 0.003);
        float val = fbm(p);
        float density = smoothstep(0.08, 0.55, val);
        
        float lat = vPosition.y / 120.0;
        density *= (1.0 - pow(abs(lat), 5.0)); // Fade out at extreme poles
        
        vec3 lightDir = normalize(vec3(-300.0, 200.0, 300.0) - vPosition);
        float diff = max(dot(normalize(vNormal), lightDir), 0.0);
        
        gl_FragColor = vec4(vec3(1.0), density * 0.82 * (0.55 + 0.45 * diff));
      }
    `
  },
  
  plasma: {
    vertex: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragment: `
      uniform float time;
      uniform float plasmaIntensity;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }
      
      void main() {
        vec2 tempUv = vUv;
        tempUv.y -= time * 3.5;
        
        float n = noise(tempUv * 8.0) * 0.5 + noise(tempUv * 16.0) * 0.35 + noise(tempUv * 32.0) * 0.15;
        
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        
        vec3 fireColor = mix(vec3(1.0, 0.18, 0.0), vec3(1.0, 0.82, 0.05), n);
        float alpha = fresnel * plasmaIntensity * (0.05 + 0.95 * n) * 0.4; // Dialed back re-entry flame intensity
        
        gl_FragColor = vec4(fireColor * 1.5, alpha);
      }
    `
  },
  
  atmosphere: {
    vertex: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragment: `
      uniform float cameraHeight;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        // Physically based Rayleigh scattering approximation
        float rim = max(0.0, dot(normal, viewDir));
        float intensity = pow(0.78 - rim, 3.2);
        
        // Multi-color transition (Aurora sky blue to sunset violet/orange at terminator)
        vec3 spaceSunPos = normalize(vec3(-300.0, 200.0, 300.0));
        float sunsetFactor = dot(normal, spaceSunPos);
        
        vec3 outerColor = vec3(0.08, 0.52, 0.98); // Indigo/cyan exosphere
        vec3 sunsetGlow = vec3(0.95, 0.38, 0.12); // Sunset orange haze
        
        vec3 glowColor = mix(sunsetGlow, outerColor, smoothstep(-0.3, 0.35, sunsetFactor));
        
        // Dynamic density based on altitude descent
        float heightScale = smoothstep(60.0, 140.0, cameraHeight);
        float density = mix(1.8, 0.7, heightScale);
        
        gl_FragColor = vec4(glowColor * density * intensity, intensity * (0.2 + 0.8 * heightScale));
      }
    `
  },
  
  // PHOTOREALISTIC DENSE CLOUD SHADER (Beer's Law & Henyey-Greenstein Scattering)
  volumetricCloudSheet: {
    vertex: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragment: `
      uniform float time;
      uniform float opacity;
      uniform float lightningIntensity;
      uniform vec3 lightningColor;
      uniform vec3 lightningPos;
      
      varying vec3 vWorldPosition;
      
      // 3D Value Noise for volumetric density
      float hash3D(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p.xyz, p.yzx + vec3(19.19));
        return fract(p.x * p.y * p.z);
      }
      
      float noise3D(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        vec3 u = f*f*(3.0-2.0*f);
        return mix(
          mix(mix(hash3D(i + vec3(0.0,0.0,0.0)), hash3D(i + vec3(1.0,0.0,0.0)), u.x),
              mix(hash3D(i + vec3(0.0,1.0,0.0)), hash3D(i + vec3(1.0,1.0,0.0)), u.x), u.y),
          mix(mix(hash3D(i + vec3(0.0,0.0,1.0)), hash3D(i + vec3(1.0,0.0,1.0)), u.x),
              mix(hash3D(i + vec3(0.0,1.0,1.0)), hash3D(i + vec3(1.0,1.0,1.0)), u.x), u.y),
          u.z
        );
      }
      
      float fbm3D(vec3 p) {
        float val = 0.0;
        float amp = 0.5;
        vec3 temp = p;
        for (int i = 0; i < 4; i++) {
          val += amp * noise3D(temp);
          temp *= 2.05;
          amp *= 0.5;
        }
        return val;
      }
      
      // 3D Cellular/Worley Noise for bubbling foam-like chunks
      vec3 cellHash3D(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p.xyz, p.yzx + vec3(19.19));
        return fract(sin(p.xyz * 43758.5453) * 0.5 + 0.5);
      }
      
      float cellular3D(vec3 p) {
        vec3 ip = floor(p);
        vec3 fp = fract(p);
        float minDist = 1.0;
        for (int z = -1; z <= 1; z++) {
          for (int y = -1; y <= 1; y++) {
            for (int x = -1; x <= 1; x++) {
              vec3 cell = vec3(float(x), float(y), float(z));
              vec3 cellPos = cell + cellHash3D(ip + cell);
              float d = distance(fp, cellPos);
              minDist = min(minDist, d);
            }
          }
        }
        return minDist;
      }
      
      // Ray-box intersection to isolate cloud volume bounds
      bool rayBoxIntersect(vec3 ro, vec3 rd, vec3 boxMin, vec3 boxMax, out float t0, out float t1) {
        vec3 invR = 1.0 / (rd + 1e-6);
        vec3 tbot = invR * (boxMin - ro);
        vec3 ttop = invR * (boxMax - ro);
        vec3 tmin = min(tbot, ttop);
        vec3 tmax = max(tbot, ttop);
        float near = max(max(tmin.x, tmin.y), tmin.z);
        float far = min(min(tmax.x, tmax.y), tmax.z);
        t0 = near;
        t1 = far;
        return near < far && far > 0.0;
      }
      
      float sampleDensity(vec3 pos) {
        vec3 cellPosCoord = pos * 0.022 + vec3(time * 0.012, 0.0, time * 0.006);
        float cNoise = 1.0 - cellular3D(cellPosCoord);
        float baseFBM = fbm3D(pos * 0.038 + vec3(time * 0.015, time * 0.003, time * 0.007));
        return cNoise * 0.80 + baseFBM * 0.20;
      }
      
      void main() {
        vec3 ro = cameraPosition;
        vec3 rd = normalize(vWorldPosition - cameraPosition);
        
        vec3 boxMin = vec3(-240.0, -220.0, -240.0);
        vec3 boxMax = vec3(240.0, -40.0, 240.0);
        
        float t0, t1;
        if (!rayBoxIntersect(ro, rd, boxMin, boxMax, t0, t1)) {
          discard;
        }
        
        float startT = max(0.0, t0);
        float endT = t1;
        float pathLength = endT - startT;
        pathLength = min(pathLength, 250.0);
        
        int numSteps = 45;
        float stepSize = pathLength / float(numSteps);
        float dither = hash3D(ro + rd * startT) * 0.3;
        
        bool hit = false;
        vec3 hitPos = vec3(0.0);
        vec3 hitNormal = vec3(0.0);
        
        for (int i = 0; i < 45; i++) {
          float t = startT + (float(i) + dither) * stepSize;
          if (t > endT) break;
          vec3 pos = ro + rd * t;
          float d = sampleDensity(pos);
          
          float edgeFeather = smoothstep(-220.0, -180.0, pos.y) * smoothstep(-40.0, -75.0, pos.y);
          d *= edgeFeather;
          
          if (d > 0.58) {
            hit = true;
            hitPos = pos;
            
            // Calculate normal via central difference
            vec3 eps = vec3(0.8, 0.0, 0.0);
            hitNormal = normalize(vec3(
              sampleDensity(pos + eps.xyy) - sampleDensity(pos - eps.xyy),
              sampleDensity(pos + eps.yxy) - sampleDensity(pos - eps.yxy),
              sampleDensity(pos + eps.yyx) - sampleDensity(pos - eps.yyx)
            ));
            break;
          }
        }
        
        if (!hit) {
          discard;
        }
        
        // Solid Lambertian shading for 3D bubble look
        vec3 sunDir = normalize(vec3(-0.4, 0.6, 0.7));
        float diff = max(dot(hitNormal, sunDir), 0.0);
        float rim = pow(1.0 - max(dot(hitNormal, -rd), 0.0), 3.5);
        
        vec3 cloudBaseCol = vec3(0.12, 0.14, 0.20);
        vec3 cloudHighlightCol = vec3(0.85, 0.88, 0.95);
        
        vec3 finalColor = mix(cloudBaseCol, cloudHighlightCol, diff);
        finalColor += rim * vec3(0.35, 0.55, 0.8) * 0.45;
        
        // Add dynamic lightning scattering inside bubble surfaces
        if (lightningIntensity > 0.01) {
          float lDist = distance(hitPos, lightningPos);
          float lAtten = exp(-0.012 * lDist);
          finalColor += lightningColor * lightningIntensity * lAtten * 4.0;
        }
        
        gl_FragColor = vec4(finalColor, opacity);
      }
    `
  },
  
  ocean: {
    vertex: `
      uniform float time;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      vec3 getGerstnerWave(vec3 pos, float waveLength, float amplitude, float speed, vec2 direction, float steepness) {
        float k = 2.0 * 3.14159265 / waveLength;
        float c = sqrt(9.8 / k);
        vec2 d = normalize(direction);
        float f = k * (dot(d, pos.xz) - c * time * speed);
        
        return vec3(
          d.x * (steepness * amplitude) * cos(f),
          amplitude * sin(f),
          d.y * (steepness * amplitude) * cos(f)
        );
      }
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        // 4 gerstner waves for turbulent storm sea profile
        vec3 w1 = getGerstnerWave(position, 140.0, 4.2, 0.7, vec2(1.0, 0.1), 0.28);
        vec3 w2 = getGerstnerWave(position, 70.0, 2.0, 1.2, vec2(0.3, 0.9), 0.24);
        vec3 w3 = getGerstnerWave(position, 30.0, 0.85, 2.0, vec2(-0.4, 0.9), 0.2);
        vec3 w4 = getGerstnerWave(position, 12.0, 0.35, 2.8, vec2(0.9, -0.5), 0.16);
        pos += w1 + w2 + w3 + w4;
        
        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;
        
        vec3 eps = vec3(0.2, 0.0, 0.0);
        vec3 pX = position + eps;
        pX += getGerstnerWave(pX, 140.0, 4.2, 0.7, vec2(1.0, 0.1), 0.28) +
              getGerstnerWave(pX, 70.0, 2.0, 1.2, vec2(0.3, 0.9), 0.24) +
              getGerstnerWave(pX, 30.0, 0.85, 2.0, vec2(-0.4, 0.9), 0.2) +
              getGerstnerWave(pX, 12.0, 0.35, 2.8, vec2(0.9, -0.5), 0.16);
              
        vec3 pZ = position + eps.zyx;
        pZ += getGerstnerWave(pZ, 140.0, 4.2, 0.7, vec2(1.0, 0.1), 0.28) +
              getGerstnerWave(pZ, 70.0, 2.0, 1.2, vec2(0.3, 0.9), 0.24) +
              getGerstnerWave(pZ, 30.0, 0.85, 2.0, vec2(-0.4, 0.9), 0.2) +
              getGerstnerWave(pZ, 12.0, 0.35, 2.8, vec2(0.9, -0.5), 0.16);
              
        vec3 tangent = normalize(pX - pos);
        vec3 bitangent = normalize(pZ - pos);
        vWorldNormal = normalize((modelMatrix * vec4(cross(bitangent, tangent), 0.0)).xyz);
        
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragment: `
      uniform float time;
      uniform vec3 oceanLightPos;
      uniform vec3 twilightColor;
      uniform vec3 darkWaterColor;
      uniform sampler2D skyEnvMap;
      
      uniform vec3 thrusterLightPos;
      uniform float thrusterIntensity;
      
      uniform float lightningIntensity;
      uniform vec3 lightningColor;
      uniform vec3 lightningPos;
      
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      float gpuNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Scrolled normal detail maps for high-frequency water turbulence
        vec2 uv1 = vUv * 500.0 + vec2(time * 0.09, time * 0.04);
        vec2 uv2 = vUv * 1000.0 - vec2(time * 0.06, time * 0.09);
        vec2 uv3 = vUv * 2000.0 + vec2(time * 0.13, -time * 0.16);
        
        float eps = 0.04;
        float hL1 = gpuNoise(uv1 - vec2(eps, 0.0));
        float hR1 = gpuNoise(uv1 + vec2(eps, 0.0));
        float hD1 = gpuNoise(uv1 - vec2(0.0, eps));
        float hU1 = gpuNoise(uv1 + vec2(0.0, eps));
        
        float hL2 = gpuNoise(uv2 - vec2(eps, 0.0));
        float hR2 = gpuNoise(uv2 + vec2(eps, 0.0));
        float hD2 = gpuNoise(uv2 - vec2(0.0, eps));
        float hU2 = gpuNoise(uv2 + vec2(0.0, eps));
        
        float hL3 = gpuNoise(uv3 - vec2(eps, 0.0));
        float hR3 = gpuNoise(uv3 + vec2(eps, 0.0));
        float hD3 = gpuNoise(uv3 - vec2(0.0, eps));
        float hU3 = gpuNoise(uv3 + vec2(0.0, eps));
        
        vec3 perturb = vec3(
          (hL1 - hR1) + (hL2 - hR2) * 0.5 + (hL3 - hR3) * 0.25, 
          (hD1 - hU1) + (hD2 - hU2) * 0.5 + (hD3 - hU3) * 0.25, 
          0.0
        ) * 0.25;
        vec3 blendNormal = normalize(normal + perturb);
        
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 lightDir = normalize(oceanLightPos - vWorldPosition);
        
        float diff = max(dot(blendNormal, lightDir), 0.0);
        
        // Double specular reflections (broad twilight paths + glittering ripples)
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec1 = pow(max(dot(blendNormal, halfDir), 0.0), 32.0);
        float spec2 = pow(max(dot(blendNormal, halfDir), 0.0), 380.0); // Extremely sharp glistening glints
        float spec = spec1 * 0.4 + spec2 * 0.95;
        
        // Dynamic Thruster Wash Lighting and reflection on sea
        vec3 thrusterLightDir = normalize(thrusterLightPos - vWorldPosition);
        float thrusterDist = length(thrusterLightPos - vWorldPosition);
        float thrusterAttenuation = 1.0 / (1.0 + 0.04 * thrusterDist + 0.001 * thrusterDist * thrusterDist);
        float thrusterDiff = max(dot(blendNormal, thrusterLightDir), 0.0);
        
        vec3 thrusterHalfDir = normalize(thrusterLightDir + viewDir);
        float thrusterSpec = pow(max(dot(blendNormal, thrusterHalfDir), 0.0), 50.0);
        vec3 thrusterColor = vec3(1.0, 0.48, 0.08) * thrusterIntensity * thrusterAttenuation;
        
        // Lightning flash reflection (volumetric diffuse reflection)
        vec3 lightningLightDir = normalize(lightningPos - vWorldPosition);
        float lightningDist = distance(lightningPos, vWorldPosition);
        float lightningAtten = 1.0 / (1.0 + 0.005 * lightningDist);
        float lightningDiff = max(dot(blendNormal, lightningLightDir), 0.0);
        vec3 lightningHalfDir = normalize(lightningLightDir + viewDir);
        float lightningSpec = pow(max(dot(blendNormal, lightningHalfDir), 0.0), 90.0);
        vec3 lightningReflectColor = lightningColor * lightningIntensity * lightningAtten * (lightningDiff * 0.55 + lightningSpec * 2.5);
        
        float fresnel = pow(1.0 - max(dot(blendNormal, viewDir), 0.0), 5.0);
        
        // Environment mapping
        vec3 reflectDir = reflect(-viewDir, blendNormal);
        float phi = acos(clamp(reflectDir.y, -1.0, 1.0));
        float theta = atan(reflectDir.z, reflectDir.x) + 3.14159265;
        vec2 envUv = vec2(theta / (2.0 * 3.14159265), phi / 3.14159265);
        vec3 skyReflectColor = texture2D(skyEnvMap, envUv).rgb;
        
        vec3 waterBase = mix(darkWaterColor, skyReflectColor, 0.15 + 0.4 * fresnel);
        waterBase += twilightColor * diff * 0.15;
        
        vec3 finalColor = waterBase + vec3(1.0, 0.65, 0.45) * spec * 2.0;
        
        // Add dynamic thruster wash reflection
        finalColor += thrusterColor * (thrusterDiff * 0.4 + thrusterSpec * 3.0);
        
        // Add lightning flash reflection
        finalColor += lightningReflectColor;
        
        // Enhanced foam on wave crests based on wave slope/steepness (Arkham Knight style)
        float steepness = 1.0 - normal.y;
        float foamNoise = gpuNoise(vUv * 800.0 + vec2(time * 0.25));
        // Foam forms on steep crests at higher elevations
        float foamPattern = smoothstep(0.28, 0.65, steepness * 0.75 + foamNoise * 0.25) * smoothstep(1.2, 3.8, vWorldPosition.y);
        finalColor = mix(finalColor, vec3(0.96, 0.98, 1.0), foamPattern * 0.85);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  },
  warp: {
    vertex: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragment: `
      uniform float time;
      uniform float opacity;
      varying vec2 vUv;
      
      float hash2D(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      float noise2D(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash2D(i + vec2(0.0,0.0)), hash2D(i + vec2(1.0,0.0)), u.x),
                   mix(hash2D(i + vec2(0.0,1.0)), hash2D(i + vec2(1.0,1.0)), u.x), u.y);
      }
      
      void main() {
        float angle = vUv.x * 6.283185;
        float zLength = vUv.y * 8.0;
        float scroll = time * 20.0;
        
        vec2 coord = vec2(angle * 2.5 + sin(zLength - scroll * 0.1) * 1.5, zLength - scroll);
        float n1 = noise2D(coord * 0.4);
        float n2 = noise2D(coord * 1.1 + vec2(time * 1.5, -time * 4.0));
        float streaks = smoothstep(0.42, 0.88, n1 * 0.65 + n2 * 0.35);
        
        vec3 colorViolet = vec3(0.32, 0.04, 0.72);
        vec3 colorBlue = vec3(0.04, 0.22, 0.90);
        vec3 colorCyan = vec3(0.0, 0.90, 1.0);
        
        vec3 finalColor = mix(colorViolet, colorBlue, sin(angle + time) * 0.5 + 0.5);
        finalColor = mix(finalColor, colorCyan, streaks);
        finalColor += streaks * vec3(0.4, 0.75, 1.0) * 1.8;
        
        float fade = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);
        gl_FragColor = vec4(finalColor, fade * opacity);
      }
    `
  },
  warpStars: {
    vertex: `
      uniform float uWarpProgress;
      uniform float uTime;
      attribute float aEndpoint;
      attribute float aStartOffset;
      varying float vEndpoint;
      varying vec3 vColor;
      
      void main() {
        vEndpoint = aEndpoint;
        
        // Star starting position relative to the camera space
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        
        // Calculate radial direction in view space (pointing towards screen center 0,0)
        vec2 radial = normalize(mvPosition.xy);
        
        // Determine individual star's warp stretch progress
        float starProgress = max(0.0, uWarpProgress - aStartOffset) / (1.0 - aStartOffset + 1e-5);
        
        // Stretch length
        float stretchLength = pow(starProgress, 2.5) * 55.0; // max length 55 units in view space
        
        // Displace along radial direction (stretching inward)
        mvPosition.xy -= radial * (aEndpoint * stretchLength);
        
        // Spiral/twist around the screen center in view space (logarithmic vortex)
        float dist = length(mvPosition.xy);
        float spiral = 2.5 * starProgress * exp(-0.004 * dist);
        float cosS = cos(spiral);
        float sinS = sin(spiral);
        mvPosition.xy = mat2(cosS, -sinS, sinS, cosS) * mvPosition.xy;
        
        // Color shifts from white to electric cyan/blue as star accelerates
        vColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.0, 0.82, 1.0), starProgress);
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragment: `
      varying float vEndpoint;
      varying vec3 vColor;
      void main() {
        // Fade out towards the tail of the streak
        float fade = mix(0.15, 1.0, vEndpoint);
        gl_FragColor = vec4(vColor, fade);
      }
    `
  }
};

// ==========================================
// 1. SCENE A SETUP: SPACE & PROCEDURAL EARTH
// ==========================================

const spaceAmbient = new THREE.AmbientLight(0x0e0f1e, 0.8);
spaceGroup.add(spaceAmbient);

const spaceSunLight = new THREE.DirectionalLight(0xfff5e6, 3.2);
spaceSunLight.position.set(-300, 200, 300);
spaceGroup.add(spaceSunLight);

// Dynamic Warp Starfield System (stretches and twists procedurally)
const starCount = 450;
const starGeometry = new THREE.BufferGeometry();

// To draw stretched starlines, each star is represented by a line segment (2 vertices).
// Vertex 0: start point (Endpoint parameter = 0)
// Vertex 1: end point (Endpoint parameter = 1)
const starPositions = new Float32Array(starCount * 2 * 3);
const starEndpoints = new Float32Array(starCount * 2);
const starStartOffsets = new Float32Array(starCount * 2);

for (let i = 0; i < starCount; i++) {
  // Generate random positions in a sphere ahead of the camera view
  const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
  const phi = THREE.MathUtils.randFloat(0.15, Math.PI - 0.15);
  const dist = THREE.MathUtils.randFloat(180, 550);
  
  const x = dist * Math.sin(phi) * Math.cos(theta);
  const y = 50 + dist * Math.sin(phi) * Math.sin(theta);
  const z = 200 - dist * Math.cos(phi); // centered around rocket's Z position (200)
  
  // Vertex 0: Start of line
  starPositions[i * 6] = x;
  starPositions[i * 6 + 1] = y;
  starPositions[i * 6 + 2] = z;
  starEndpoints[i * 2] = 0.0;
  
  // Vertex 1: End of line (initially at the same position, stretches via vertex shader)
  starPositions[i * 6 + 3] = x;
  starPositions[i * 6 + 4] = y;
  starPositions[i * 6 + 5] = z;
  starEndpoints[i * 2 + 1] = 1.0;
  
  // Stagger star acceleration timings so stars warp progressively
  const offset = Math.random() * 0.35; // start offset between 0 and 0.35
  starStartOffsets[i * 2] = offset;
  starStartOffsets[i * 2 + 1] = offset;
}

starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
starGeometry.setAttribute("aEndpoint", new THREE.BufferAttribute(starEndpoints, 1));
starGeometry.setAttribute("aStartOffset", new THREE.BufferAttribute(starStartOffsets, 1));

const starMaterial = new THREE.ShaderMaterial({
  vertexShader: Shaders.warpStars.vertex,
  fragmentShader: Shaders.warpStars.fragment,
  uniforms: {
    uWarpProgress: shaderUniforms.warpProgress,
    uTime: shaderUniforms.time
  },
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const starfield = new THREE.LineSegments(starGeometry, starMaterial);
spaceGroup.add(starfield);

// High-Fidelity Procedural Earth System
const earthRadius = 120;
const earthGroup = new THREE.Group();
earthGroup.position.set(0, -100, -180); // Positioned directly in front/below camera view
spaceGroup.add(earthGroup);

// Background Nebula Sphere
const nebulaMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec3 vWorldPosition;
    
    float hash(vec3 p) {
      p = fract(p * fract(p * vec3(443.8975, 397.2973, 491.1871))); // Avoid precision issues
      p += dot(p.xyz, p.yzx + vec3(19.19));
      return fract(p.x * p.y * p.z);
    }
    float noise3D(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      vec3 u = f*f*(3.0-2.0*f);
      return mix(
        mix(mix(hash(i + vec3(0.0,0.0,0.0)), hash(i + vec3(1.0,0.0,0.0)), u.x),
            mix(hash(i + vec3(0.0,1.0,0.0)), hash(i + vec3(1.0,1.0,0.0)), u.x), u.y),
        mix(mix(hash(i + vec3(0.0,0.0,1.0)), hash(i + vec3(1.0,0.0,1.0)), u.x),
            mix(hash(i + vec3(0.0,1.0,1.0)), hash(i + vec3(1.0,1.0,1.0)), u.x), u.y),
        u.z
      );
    }
    float fbm(vec3 p) {
      float val = 0.0;
      float amp = 0.5;
      float freq = 1.0;
      for (int i = 0; i < 4; i++) {
        val += amp * noise3D(p * freq);
        freq *= 2.0;
        amp *= 0.5;
      }
      return val;
    }
    void main() {
      vec3 dir = normalize(vWorldPosition);
      vec3 p = dir * 2.8 + vec3(time * 0.008, time * 0.004, 0.0);
      float n = fbm(p);
      vec3 col1 = vec3(0.004, 0.001, 0.012);
      vec3 col2 = vec3(0.07, 0.015, 0.12);
      vec3 finalCol = mix(col1, col2, smoothstep(0.35, 0.72, n));
      gl_FragColor = vec4(finalCol, 1.0);
    }
  `,
  uniforms: {
    time: shaderUniforms.time
  },
  side: THREE.BackSide,
  depthWrite: false
});
const nebulaSphere = new THREE.Mesh(new THREE.SphereGeometry(1400, 32, 32), nebulaMaterial);
spaceGroup.add(nebulaSphere);

// Earth Surface Mesh
loaderStatus.innerText = "Initializing Earth shader system...";
const earthMaterial = new THREE.ShaderMaterial({
  vertexShader: Shaders.earth.vertex,
  fragmentShader: Shaders.earth.fragment,
  uniforms: {
    time: shaderUniforms.time
  }
});
const earthSphere = new THREE.Mesh(new THREE.SphereGeometry(earthRadius, 64, 64), earthMaterial);
earthSphere.rotation.set(0.1, -0.4, 0.1);
earthGroup.add(earthSphere);

// Earth cloud layers
const cloudMaterial = new THREE.ShaderMaterial({
  vertexShader: Shaders.earthClouds.vertex,
  fragmentShader: Shaders.earthClouds.fragment,
  uniforms: {
    time: shaderUniforms.time
  },
  transparent: true,
  depthWrite: false
});
const cloudSphere = new THREE.Mesh(new THREE.SphereGeometry(earthRadius * 1.012, 64, 64), cloudMaterial);
earthGroup.add(cloudSphere);

// Earth exosphere glowing atmosphere
const atmosphereMaterial = new THREE.ShaderMaterial({
  vertexShader: Shaders.atmosphere.vertex,
  fragmentShader: Shaders.atmosphere.fragment,
  uniforms: {
    cameraHeight: shaderUniforms.cameraHeight
  },
  blending: THREE.AdditiveBlending,
  side: THREE.BackSide,
  transparent: true
});
const atmosphereSphere = new THREE.Mesh(new THREE.SphereGeometry(earthRadius * 1.035, 64, 64), atmosphereMaterial);
earthGroup.add(atmosphereSphere);

// Volumetric cloud bounding box for raymarching
const volumetricClouds = new THREE.Group();
spaceGroup.add(volumetricClouds);

const cloudSheetMaterial = new THREE.ShaderMaterial({
  vertexShader: Shaders.volumetricCloudSheet.vertex,
  fragmentShader: Shaders.volumetricCloudSheet.fragment,
  uniforms: {
    time: shaderUniforms.time,
    opacity: { value: 0.0 },
    lightningIntensity: shaderUniforms.lightningIntensity,
    lightningColor: shaderUniforms.lightningColor,
    lightningPos: shaderUniforms.lightningPos
  },
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide
});

// A single large bounding box spanning the cloud layer height (-40 to -220)
const cloudBoxGeom = new THREE.BoxGeometry(480, 180, 480);
const cloudBoxMesh = new THREE.Mesh(cloudBoxGeom, cloudSheetMaterial);
// Center the box at y = -130
cloudBoxMesh.position.set(0, -130, 0);
volumetricClouds.add(cloudBoxMesh);

// Add physical 3D cartoon bubble clouds to the space descent path
for (let i = 0; i < 25; i++) {
  const cloud = createCartoonBubbleCloud(0xbbbcce);
  cloud.position.set(
    THREE.MathUtils.randFloatSpread(350),
    -60 - THREE.MathUtils.randFloat(0, 140), // Spans the cloud deck altitude
    THREE.MathUtils.randFloatSpread(350)
  );
  const s = THREE.MathUtils.randFloat(0.5, 1.3);
  cloud.scale.set(s, s, s);
  volumetricClouds.add(cloud);
}

// Warp Cylinder setup
warpCylinderMaterial = new THREE.ShaderMaterial({
  vertexShader: Shaders.warp.vertex,
  fragmentShader: Shaders.warp.fragment,
  uniforms: {
    time: shaderUniforms.time,
    opacity: { value: 1.0 }
  },
  transparent: true,
  depthWrite: false,
  side: THREE.BackSide
});
warpCylinder = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 400, 32, 1, true), warpCylinderMaterial);
warpCylinder.rotation.x = Math.PI / 2; // Point cylinder along Z-axis (motion direction)
warpCylinder.position.set(0, 50, 200);
warpCylinder.visible = false;
warpCylinderMaterial.uniforms.opacity.value = 0.0;
spaceGroup.add(warpCylinder);

// 3D Branching Lightning Bolt Generator
const lightningGeometry = new THREE.BufferGeometry();
const lightningMaterial = new THREE.LineBasicMaterial({
  color: 0x88ffff,
  transparent: true,
  opacity: 0.0,
  blending: THREE.AdditiveBlending
});
const lightningSegments = new THREE.LineSegments(lightningGeometry, lightningMaterial);
spaceGroup.add(lightningSegments);

const lightningLight = new THREE.DirectionalLight(0x55ffff, 0);
lightningLight.position.set(0, 100, 0);
spaceGroup.add(lightningLight);

function generateLightningPaths(start, end, segments, displace) {
  const points = [];
  const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  
  midPoint.x += THREE.MathUtils.randFloatSpread(displace);
  midPoint.y += THREE.MathUtils.randFloatSpread(displace);
  midPoint.z += THREE.MathUtils.randFloatSpread(displace);
  
  if (segments <= 1) {
    points.push(start.clone(), end.clone());
  } else {
    points.push(...generateLightningPaths(start, midPoint, segments / 2, displace * 0.5));
    points.push(...generateLightningPaths(midPoint, end, segments / 2, displace * 0.5));
  }
  return points;
}

function triggerLightningStrike() {
  if (!rocketModel) return;
  
  const rx = rocketModel.position.x;
  const ry = rocketModel.position.y;
  const rz = rocketModel.position.z;
  
  const start = new THREE.Vector3(
    rx + THREE.MathUtils.randFloatSpread(80),
    ry + 90,
    rz + THREE.MathUtils.randFloatSpread(80) - 40
  );
  const end = new THREE.Vector3(
    rx + THREE.MathUtils.randFloatSpread(50),
    ry - 60,
    rz + THREE.MathUtils.randFloatSpread(50)
  );
  
  // Update uniforms with lightning 3D position
  shaderUniforms.lightningPos.value.copy(start);
  
  const pathPoints = generateLightningPaths(start, end, 16, 35);
  
  // Create branches
  const totalCorePoints = pathPoints.length;
  for (let i = 0; i < 4; i++) {
    const branchStartIdx = Math.floor(Math.random() * (totalCorePoints - 2));
    const bStart = pathPoints[branchStartIdx];
    const bEnd = new THREE.Vector3(
      bStart.x + THREE.MathUtils.randFloatSpread(60),
      bStart.y - 30 - Math.random() * 20,
      bStart.z + THREE.MathUtils.randFloatSpread(60)
    );
    pathPoints.push(...generateLightningPaths(bStart, bEnd, 8, 15));
  }
  
  const positions = [];
  for (let i = 0; i < pathPoints.length; i += 2) {
    if (pathPoints[i] && pathPoints[i+1]) {
      positions.push(
        pathPoints[i].x, pathPoints[i].y, pathPoints[i].z,
        pathPoints[i+1].x, pathPoints[i+1].y, pathPoints[i+1].z
      );
    }
  }
  
  lightningGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
  lightningGeometry.attributes.position.needsUpdate = true;
  
  // Randomize lightning colors between cyan and purple
  const lightColors = [0x88ffff, 0xd088ff];
  const chosenColor = new THREE.Color(lightColors[Math.floor(Math.random() * lightColors.length)]);
  shaderUniforms.lightningColor.value.copy(chosenColor);
  lightningMaterial.color.copy(chosenColor);
  lightningLight.color.copy(chosenColor);
  
  // Flash sequence
  const flashTl = gsap.timeline();
  flashTl.to(lightningMaterial, { opacity: 1.0, duration: 0.05 });
  flashTl.to(lightningLight, { intensity: 10.0, duration: 0.05 }, 0);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 1.0, duration: 0.05 }, 0);
  
  flashTl.to(lightningMaterial, { opacity: 0.0, duration: 0.06 });
  flashTl.to(lightningLight, { intensity: 0.0, duration: 0.06 }, 0.05);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 0.0, duration: 0.06 }, 0.05);
  
  flashTl.to(lightningMaterial, { opacity: 0.8, duration: 0.04 }, 0.12);
  flashTl.to(lightningLight, { intensity: 6.0, duration: 0.04 }, 0.12);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 0.6, duration: 0.04 }, 0.12);
  
  flashTl.to(lightningMaterial, { opacity: 0.0, duration: 0.10 }, 0.16);
  flashTl.to(lightningLight, { intensity: 0.0, duration: 0.10 }, 0.16);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 0.0, duration: 0.10 }, 0.16);
}

// ==========================================
// 2. SCENE B SETUP: OCEAN & LANDING SCENE
// ==========================================

const oceanAmbient = new THREE.AmbientLight(0x0a1020, 1.4);
oceanGroup.add(oceanAmbient);

// Sunlight source behind subject to frame silhouette and reflection trail
const twilightLight = new THREE.DirectionalLight(0xff5522, 2.8);
twilightLight.position.copy(shaderUniforms.oceanLightPos.value);
twilightLight.castShadow = true;
twilightLight.shadow.mapSize.width = 2048;
twilightLight.shadow.mapSize.height = 2048;
twilightLight.shadow.bias = -0.0004;
oceanGroup.add(twilightLight);

// Fill Light from camera angle
const fillLight = new THREE.DirectionalLight(0x4466aa, 1.2);
fillLight.position.set(0, 50, 60);
oceanGroup.add(fillLight);

// Generate procedural sky textures
const skyTexture = createProceduralSkyTexture();
const skyEnvMap = skyTexture.clone();
skyEnvMap.mapping = THREE.EquirectangularReflectionMapping;

const skyDomeGeom = new THREE.SphereGeometry(1000, 32, 15);
const skyDomeMat = new THREE.MeshBasicMaterial({
  side: THREE.BackSide,
  map: skyTexture
});
const skyDome = new THREE.Mesh(skyDomeGeom, skyDomeMat);
oceanGroup.add(skyDome);

// Procedural wave ocean using advanced reflection/ripple shaders
const oceanGeom = new THREE.PlaneGeometry(1600, 1600, 200, 200);
const oceanMat = new THREE.ShaderMaterial({
  vertexShader: Shaders.ocean.vertex,
  fragmentShader: Shaders.ocean.fragment,
  uniforms: {
    time: shaderUniforms.time,
    oceanLightPos: shaderUniforms.oceanLightPos,
    twilightColor: { value: new THREE.Color(0x0a101d) },
    darkWaterColor: { value: new THREE.Color(0x010204) },
    skyEnvMap: { value: skyEnvMap },
    thrusterLightPos: shaderUniforms.thrusterLightPos,
    thrusterIntensity: shaderUniforms.thrusterIntensity,
    lightningIntensity: shaderUniforms.lightningIntensity,
    lightningColor: shaderUniforms.lightningColor,
    lightningPos: shaderUniforms.lightningPos
  },
  side: THREE.DoubleSide
});
const ocean = new THREE.Mesh(oceanGeom, oceanMat);
ocean.rotation.x = -Math.PI / 2;
oceanGroup.add(ocean);

// Landing point PointLight (orange thruster glow on water)
const landingThrusterLight = new THREE.PointLight(0xff5500, 0, 100);
oceanGroup.add(landingThrusterLight);


// Helper to generate a 3D cartoonish bubble cloud cluster
function createCartoonBubbleCloud(colorHex = 0xddddee) {
  const cloudGroup = new THREE.Group();
  
  // MeshStandardMaterial with high roughness and flat shading for stylized cartoon look
  const cloudMat = new THREE.MeshStandardMaterial({
    color: colorHex,
    roughness: 0.92,
    metalness: 0.05,
    flatShading: true
  });
  
  // Center main bubble
  const mainBubble = new THREE.Mesh(new THREE.SphereGeometry(22, 5, 4), cloudMat);
  cloudGroup.add(mainBubble);
  
  // Surrounding overlapping bubbles to form classic cartoon cloud shape
  const bubbleOffsets = [
    { x: -16, y: -3, z: 0, r: 15 },
    { x: 16, y: -3, z: 0, r: 15 },
    { x: -8, y: 10, z: -3, r: 14 },
    { x: 8, y: 8, z: 3, r: 16 },
    { x: 0, y: -8, z: 10, r: 13 },
    { x: 0, y: -4, z: -10, r: 13 }
  ];
  
  bubbleOffsets.forEach(info => {
    const bubble = new THREE.Mesh(new THREE.SphereGeometry(info.r, 5, 4), cloudMat);
    bubble.position.set(info.x, info.y, info.z);
    cloudGroup.add(bubble);
  });
  
  return cloudGroup;
}

// Ethereal drifting clouds in the twilight sky (low-altitude storm clouds)
const skyClouds = new THREE.Group();
oceanGroup.add(skyClouds);

const skyCloudMat = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 cloudColor;
    varying vec2 vUv;
    
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
    }
    
    void main() {
      float centerD = length(vUv - vec2(0.5));
      float mask = smoothstep(0.5, 0.15, centerD);
      vec2 nUv = vUv * 3.0 + vec2(time * 0.015, time * 0.005);
      float n = noise(nUv) * 0.6 + noise(nUv * 2.0) * 0.4;
      gl_FragColor = vec4(cloudColor, mask * 0.28 * n);
    }
  `,
  uniforms: {
    time: shaderUniforms.time,
    cloudColor: { value: new THREE.Color(0xd27080) } // twilight tinted cloud
  },
  transparent: true,
  depthWrite: false
});

for (let i = 0; i < 20; i++) {
  const cloud = createCartoonBubbleCloud(0xa2a5b2); // Storm tinted bubble cloud
  cloud.position.set(
    THREE.MathUtils.randFloatSpread(800),
    70 + THREE.MathUtils.randFloatSpread(40),
    -200 - THREE.MathUtils.randFloat(0, 500)
  );
  // Random scale for variety
  const s = THREE.MathUtils.randFloat(0.6, 1.4);
  cloud.scale.set(s, s, s);
  skyClouds.add(cloud);
}

// Low-altitude drifting storm fog particles
const stormFogGroup = new THREE.Group();
oceanGroup.add(stormFogGroup);

const stormFogMat = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    void main() {
      vUv = uv;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
    }
    
    void main() {
      float centerD = length(vUv - vec2(0.5));
      float mask = smoothstep(0.5, 0.22, centerD);
      vec2 nUv = vWorldPosition.xz * 0.015 + vec2(time * 0.08, time * 0.03);
      float n = noise(nUv) * 0.55 + noise(nUv * 2.2) * 0.45;
      
      vec3 fogCol = vec3(0.08, 0.09, 0.13); // dark oceanic storm mist
      gl_FragColor = vec4(fogCol, mask * 0.38 * n);
    }
  `,
  uniforms: {
    time: shaderUniforms.time
  },
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide
});

for (let i = 0; i < 40; i++) {
  const geom = new THREE.PlaneGeometry(350, 350);
  const mesh = new THREE.Mesh(geom, stormFogMat);
  mesh.position.set(
    THREE.MathUtils.randFloatSpread(1000),
    2 + THREE.MathUtils.randFloatSpread(4),
    THREE.MathUtils.randFloatSpread(1000)
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.rotation.z = Math.random() * Math.PI * 2;
  stormFogGroup.add(mesh);
}

// Slanted Rain Particle System
const rainCount = 4000;
const rainGeometry = new THREE.BufferGeometry();
const rainPositions = new Float32Array(rainCount * 3);
const rainSpeeds = [];

for (let i = 0; i < rainCount; i++) {
  rainPositions[i * 3] = THREE.MathUtils.randFloatSpread(600);
  rainPositions[i * 3 + 1] = THREE.MathUtils.randFloat(0, 160);
  rainPositions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(600);
  
  rainSpeeds.push({
    x: -0.8 - Math.random() * 0.4, // wind force
    y: -4.5 - Math.random() * 2.5,
    z: -0.2 - Math.random() * 0.2
  });
}

rainGeometry.setAttribute("position", new THREE.BufferAttribute(rainPositions, 3));
const rainMaterial = new THREE.PointsMaterial({
  color: 0x8899aa,
  size: 0.6,
  transparent: true,
  opacity: 0.45,
  depthWrite: false
});
// Rain particles removed per user request

// ==========================================
// 3. LOAD HIGH-FIDELITY GLTF MODELS
// ==========================================

const envReflectionMap = createProceduralEnvMap();
scene.environment = envReflectionMap;

const manager = new THREE.LoadingManager();
const loader = new GLTFLoader(manager);

let rocketModel = null;
let monolithScene = null;
let plasmaShield = null;
let thrusterFlame = null;
let volumetricLightCone = null;

const fireNoiseTexture = createFireNoiseTexture();

// Traverse loaded rocket to apply liquid chrome properties
function configureChromeModel(model) {
  model.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((mat) => {
          mat.metalness = 1.0;
          mat.roughness = 0.02; // More reflective liquid chrome
          mat.envMap = envReflectionMap;
          mat.envMapIntensity = 2.5;
          mat.needsUpdate = true;
          
          // Setup dynamic fire/plasma re-entry emissive reflections
          mat.emissiveMap = fireNoiseTexture;
          mat.emissive = new THREE.Color(0xffaa44);
          mat.emissiveIntensity = 0.0;
        });
      }
    }
  });
}

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
  const pct = Math.floor((itemsLoaded / itemsTotal) * 100);
  progressBar.style.width = pct + "%";
  loaderStatus.innerText = `Loading High-Fidelity Assets: ${pct}% (${itemsLoaded}/${itemsTotal})`;
};

manager.onLoad = function () {
  loaderStatus.innerText = "System initialization complete.";
  gsap.to(loadingOverlay, {
    opacity: 0,
    duration: 1.0,
    onComplete: () => {
      loadingOverlay.style.display = "none";
      descentBtn.style.display = "block";
      gsap.fromTo(descentBtn, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5 });
    }
  });
};

manager.onError = function (url) {
  console.error("Asset Loader failed on: " + url);
  loaderStatus.innerHTML = "<span style='color: #ff3333;'>Error loading asset files. Retrying...</span>";
};

// Load New Chrome Rocket
loader.load(rocketModelUrl.href, (gltf) => {
  rocketModel = gltf.scene;
  configureChromeModel(rocketModel);
  
  rocketModel.scale.set(0.65, 0.65, 0.65);
  scene.add(rocketModel);
  
  // Start position in Warp (Scene X)
  rocketModel.position.set(0, 50, 200);
  rocketModel.rotation.set(-Math.PI / 2, 0, 0); // pointing along Z-axis (towards Earth)
  
  // Custom Plasma Shockwave Shield
  const shieldGeom = new THREE.ConeGeometry(3.5, 14, 32, 1, true);
  shieldGeom.translate(0, 2, 0);
  
  const shieldMat = new THREE.ShaderMaterial({
    vertexShader: Shaders.plasma.vertex,
    fragmentShader: Shaders.plasma.fragment,
    uniforms: {
      time: shaderUniforms.time,
      plasmaIntensity: shaderUniforms.plasmaIntensity
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  
  plasmaShield = new THREE.Mesh(shieldGeom, shieldMat);
  plasmaShield.rotation.x = Math.PI; // point cone forward
  plasmaShield.position.set(0, 3.2, 0);
  
  // rocketModel.add(plasmaShield); // Removed shield clutter per user request

  // Volumetric Thruster Exhaust Flame (Shock-Diamond Shader)
  const thrusterFlameGeom = new THREE.ConeGeometry(1.2, 9.0, 16, 1, true);
  thrusterFlameGeom.translate(0, -4.5, 0);
  
  const thrusterFlameMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float thrusterIntensity;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }
      
      void main() {
        vec2 tempUv = vUv;
        tempUv.y += time * 5.2;
        
        float n = noise(tempUv * 7.5) * 0.65 + noise(tempUv * 15.0) * 0.35;
        
        float radialFactor = smoothstep(1.0, 0.05, vUv.x);
        float lengthFactor = smoothstep(1.0, 0.15, vUv.y);
        
        // Shock Diamonds: compression nodes along flame length
        float shockWave = sin(vUv.y * 32.0 - time * 28.0) * 0.5 + 0.5;
        float shockIntensity = smoothstep(0.4, 0.8, shockWave) * (1.0 - vUv.y);
        
        vec3 coreColor = vec3(1.0, 0.65, 0.12);
        vec3 outerColor = vec3(0.9, 0.18, 0.01);
        vec3 shockColor = vec3(0.95, 0.95, 1.0); // Bright white/blue diamonds
        
        vec3 col = mix(outerColor, coreColor, n * lengthFactor);
        col = mix(col, shockColor, shockIntensity * 0.72);
        
        float alpha = radialFactor * lengthFactor * (0.22 + 0.78 * n) * (thrusterIntensity / 12.0);
        
        gl_FragColor = vec4(col * 3.5, alpha);
      }
    `,
    uniforms: {
      time: shaderUniforms.time,
      thrusterIntensity: shaderUniforms.thrusterIntensity
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  
  thrusterFlame = new THREE.Mesh(thrusterFlameGeom, thrusterFlameMaterial);
  thrusterFlame.position.set(0, -1.8, 0);
  thrusterFlame.scale.set(1.0, 0.001, 1.0);
  thrusterFlame.visible = false;
  rocketModel.add(thrusterFlame);
  
  // Volumetric Thruster Light Cone (Casts light through dense sea-mist)
  const coneGeom = new THREE.ConeGeometry(8.0, 48.0, 32, 1, true);
  coneGeom.translate(0, -24.0, 0);
  
  const coneMat = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      void main() {
        vUv = uv;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float thrusterIntensity;
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
                   mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
      }
      
      void main() {
        float radialFactor = smoothstep(1.0, 0.0, vUv.x);
        float lengthFactor = smoothstep(1.0, 0.1, vUv.y);
        
        vec2 nUv = vWorldPosition.xz * 0.03 + vec2(time * 0.05);
        float n = noise(nUv) * 0.6 + noise(nUv * 2.0) * 0.4;
        
        vec3 lightCol = vec3(1.0, 0.55, 0.15); // Warm retro lighting
        float intensity = radialFactor * lengthFactor * (thrusterIntensity / 12.0) * (0.28 + 0.72 * n) * 0.25;
        
        gl_FragColor = vec4(lightCol * 2.0, intensity);
      }
    `,
    uniforms: {
      time: shaderUniforms.time,
      thrusterIntensity: shaderUniforms.thrusterIntensity
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  
  volumetricLightCone = new THREE.Mesh(coneGeom, coneMat);
  volumetricLightCone.position.set(0, -1.8, 0);
  volumetricLightCone.visible = false;
  rocketModel.add(volumetricLightCone);
});

// Load Monolith Scene
loader.load(monolithSceneUrl.href, (gltf) => {
  monolithScene = gltf.scene;
  monolithScene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((mat) => {
          mat.envMap = skyEnvMap;
          mat.envMapIntensity = 1.8;
          // Configure Obsidian properties
          if (node.name.includes("Monolith")) {
            mat.roughness = 0.04;
            mat.metalness = 0.98;
            mat.color.setHex(0x010102);
          }
        });
      }
    }
  });
  
  monolithScene.scale.set(0.6, 0.6, 0.6);
  monolithScene.position.set(0, 2.5, -45); // Hovering/floating pad, slightly lifted
  oceanGroup.add(monolithScene);

  // Cyan hover light underneath the platform reflecting off the water surface
  const hoverLight = new THREE.PointLight(0x00ffff, 8.0, 60);
  hoverLight.position.set(0, 0.2, -45);
  oceanGroup.add(hoverLight);
});

// Steam rising from water under landing ship (spawns under rocket)
const steamParticlesCount = 100;
const steamGeometry = new THREE.BufferGeometry();
const steamPositions = new Float32Array(steamParticlesCount * 3);
const steamSpeeds = [];

for (let i = 0; i < steamParticlesCount; i++) {
  steamPositions[i * 3] = THREE.MathUtils.randFloatSpread(30);
  steamPositions[i * 3 + 1] = -50.0; // Hidden initially
  steamPositions[i * 3 + 2] = -45 + THREE.MathUtils.randFloatSpread(30);
  
  steamSpeeds.push({
    x: THREE.MathUtils.randFloatSpread(0.12),
    y: 0.15 + Math.random() * 0.2,
    z: THREE.MathUtils.randFloatSpread(0.12)
  });
}

steamGeometry.setAttribute("position", new THREE.BufferAttribute(steamPositions, 3));
const steamMaterial = new THREE.PointsMaterial({
  color: 0xdddddd,
  size: 3.5,
  transparent: true,
  opacity: 0.0, // Managed dynamically
  depthWrite: false
});
const steamParticles = new THREE.Points(steamGeometry, steamMaterial);
oceanGroup.add(steamParticles);

// Initial Camera positioning in open space (warp camera coordinates - looking forward along Z-axis)
camera.position.set(-1.45, 50.8, 203.5);
actualLookAtTarget.set(0.5, 49.8, 188.0);
cameraRig.targetPos.set(-1.45, 50.8, 203.5);
cameraRig.targetLook.set(0.5, 49.8, 188.0);
cameraMode = "warp"; // Ensure we start strictly in warp camera mode
camera.lookAt(actualLookAtTarget);

// ==========================================
// 4. ANIMATION SEQUENCE TIMELINE (GSAP)
// ==========================================

function executeDescentSequence() {
  gsap.to(descentBtn, { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => descentBtn.style.display = "none" });
  
  const timeline = gsap.timeline();
  
  // --- SCENE X: THE WARP (0.0s - 10.0s) ---
  cameraMode = "warp";
  telemetryText.innerText = "ORBIT RANGE: 342 KM // COORD: ALPHA_STAGE";
  
  // Frame X-001 (0.0s): Static space, rocket cold & still.
  shaderUniforms.warpProgress.value = 0.0;
  cameraRig.shakeIntensity = 0.0;
  if (warpCylinder) {
    warpCylinder.visible = false;
    warpCylinderMaterial.uniforms.opacity.value = 0.0;
  }
  
  // Frame X-010 (0.33s): One star begins stretching.
  timeline.to(shaderUniforms.warpProgress, { value: 0.05, duration: 0.33, ease: "power1.in" }, 0.0);
  
  // Frame X-020 (0.67s): Several stars stretch.
  timeline.to(shaderUniforms.warpProgress, { value: 0.10, duration: 0.34, ease: "power1.in" }, 0.33);
  
  // Frame X-035 (1.17s): Space begins bending.
  timeline.to(shaderUniforms.warpProgress, { value: 0.20, duration: 0.50, ease: "power1.in" }, 0.67);
  
  // Frame X-050 (1.67s): Vortex appears small & far.
  timeline.to(shaderUniforms.warpProgress, { value: 0.35, duration: 0.50, ease: "power1.in" }, 1.17);
  
  // Frame X-070 (2.33s): Vortex grows. Camera vibration spools up (low-amplitude).
  timeline.to(shaderUniforms.warpProgress, { value: 0.55, duration: 0.66, ease: "power1.in" }, 1.67);
  timeline.to(cameraRig, { shakeIntensity: 0.15, duration: 0.66, ease: "power1.in" }, 1.67);
  
  // Frame X-090 (3.0s): Vortex expands. Camera vibration increases.
  timeline.to(shaderUniforms.warpProgress, { value: 0.75, duration: 0.67, ease: "power1.in" }, 2.33);
  timeline.to(cameraRig, { shakeIntensity: 0.35, duration: 0.67, ease: "power1.in" }, 2.33);
  
  // Frame X-120 (4.0s): Entering tunnel edge. Stars become streaks. Warp cylinder fades in.
  timeline.add(() => {
    if (warpCylinder) {
      warpCylinder.visible = true;
    }
  }, 3.0);
  timeline.to(warpCylinderMaterial.uniforms.opacity, { value: 0.5, duration: 1.0, ease: "power1.in" }, 3.0);
  timeline.to(shaderUniforms.warpProgress, { value: 0.85, duration: 1.0, ease: "power1.in" }, 3.0);
  timeline.to(cameraRig, { shakeIntensity: 0.65, duration: 1.0, ease: "power1.in" }, 3.0);
  
  // Frame X-150 (5.0s): Tunnel surrounds reality. Opacity to max. Rocket hull liquid chrome emissive glow.
  timeline.to(warpCylinderMaterial.uniforms.opacity, { value: 1.0, duration: 1.0, ease: "power1.out" }, 4.0);
  timeline.to(shaderUniforms.warpProgress, { value: 1.0, duration: 1.0, ease: "power1.out" }, 4.0);
  timeline.to(cameraRig, { shakeIntensity: 1.0, duration: 1.0, ease: "power1.out" }, 4.0);
  
  // Animate rocket emissive reflection to simulate liquid chrome warp energy
  rocketModel.traverse((node) => {
    if (node.isMesh && node.material) {
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((mat) => {
        if (mat.emissive) {
          timeline.to(mat.emissive, { r: 0.1, g: 0.52, b: 0.98, duration: 1.0, ease: "power1.out" }, 4.0);
          timeline.to(mat, { emissiveIntensity: 1.8, duration: 1.0, ease: "power1.out" }, 4.0);
        }
      });
    }
  });
  
  // Frame X-200 (6.67s): Maximum warp.
  // Frame X-240 (8.0s): Streaks become organized lanes.
  // Frame X-280 (9.33s): Tunnel becomes architectural.
  // Frame X-300 (10.0s): Instant snap-back freeze/black out.
  timeline.add(() => {
    // Snap everything to black instantly
    cameraMode = "blackout";
    telemetryText.innerText = "";
    if (warpCylinder) warpCylinder.visible = false;
    starfield.visible = false;
    shaderUniforms.warpProgress.value = 0.0;
    cameraRig.shakeIntensity = 0.0;
    
    // Clear rocket emissive
    rocketModel.traverse((node) => {
      if (node.isMesh && node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((mat) => {
          if (mat.emissive) {
            mat.emissive.setHex(0x000000);
            mat.emissiveIntensity = 0.0;
          }
        });
      }
    });
    
    // Clear exosphere glow and position planet
    rocketModel.position.set(0, 30, 80);
    rocketModel.rotation.set(-Math.PI / 4, 0, 0); // nose pointing down-forward
  }, 10.0);
  
  // --- BEAT 1: THE SNAP-BACK (10.0s - 12.0s) ---
  // B1-001 (10.0s): Total blackness, eerie silence, duration 0.3s
  
  // B1-010 (10.33s): Thin blue curve (Earth exosphere) appears far away.
  timeline.add(() => {
    cameraMode = "orbit";
    starfield.visible = true; // stars visible again
    telemetryText.innerText = "WARP TUNNEL DE-ACTIVATED // EXOSPHERE HORIZON DETECTED";
    
    cameraRig.targetPos.set(0, 38, 120);
    cameraRig.targetLook.set(0, 20, 60);
  }, 10.33);
  
  // B1-020 (10.67s) to B1-060 (12.0s): Curve grows rapidly, planet horizon dominates.
  timeline.to(rocketModel.position, {
    x: 0,
    y: -75,
    z: -80,
    duration: 1.67,
    ease: "power2.in"
  }, 10.33);
  
  // --- BEAT 2: ATMOSPHERIC ENTRY (12.0s - 16.0s) ---
  // B2-001 (12.0s): Faint purple haze around the nose cone.
  timeline.add(() => {
    cameraMode = "reentry";
    telemetryText.innerText = "ATMOSPHERIC COMPRESSION THRESHOLD // CORE PITCH ADJUSTMENT";
  }, 12.0);
  
  timeline.to(shaderUniforms.plasmaIntensity, {
    value: 0.25,
    duration: 0.67,
    ease: "power1.out"
  }, 12.0);
  
  // B2-020 (12.67s): warm reflections transition on chrome hull (blue to orange).
  rocketModel.traverse((node) => {
    if (node.isMesh && node.material) {
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((mat) => {
        if (mat.emissive) {
          timeline.to(mat.emissive, { r: 0.85, g: 0.35, b: 0.05, duration: 1.33, ease: "power1.in" }, 12.67);
          timeline.to(mat, { emissiveIntensity: 1.2, duration: 1.33, ease: "power1.in" }, 12.67);
        }
      });
    }
  });
  
  // B2-040 (13.33s): plasma skin forms (glowing cocoon).
  timeline.to(shaderUniforms.plasmaIntensity, {
    value: 0.65,
    duration: 0.67,
    ease: "power1.in"
  }, 12.67);
  
  // B2-060 (14.0s): plasma unstable, heat distortion ripples, camera shake starts.
  timeline.to(cameraRig, {
    shakeIntensity: 0.85,
    duration: 2.0,
    ease: "power2.inOut"
  }, 14.0);
  
  // Slowly adjust rocket pitch rotation to vertical upright for landing
  timeline.to(rocketModel.rotation, {
    x: 0,
    duration: 3.5,
    ease: "power2.inOut"
  }, 12.5);
  
  // Fade in scene fog smoothly (transitions from exosphere to storm)
  const tempBgColor = new THREE.Color(0x020208);
  timeline.to(tempBgColor, {
    r: 0.023,
    g: 0.031,
    b: 0.047, // deep storm blue-grey
    duration: 4.0,
    onUpdate: () => {
      renderer.setClearColor(tempBgColor);
      scene.fog.color.copy(tempBgColor);
    },
    ease: "power1.in"
  }, 12.0);
  
  timeline.to(scene.fog, {
    density: 0.048,
    duration: 4.0,
    ease: "power1.in"
  }, 12.0);
  
  timeline.to(cloudSheetMaterial.uniforms.opacity, {
    value: 1.0,
    duration: 3.0,
    ease: "power1.in"
  }, 13.0);
  
  // B2-090 (15.0s): individual flame tongues become visible.
  timeline.to(shaderUniforms.plasmaIntensity, {
    value: 1.0,
    duration: 1.0,
    ease: "power1.in"
  }, 15.0);
  
  // B2-120 (16.0s): inferno dominates.
  
  // --- BEAT 3: THE CLOUD PIERCER (16.0s - 22.0s) ---
  // B3-001 (16.0s): strikes cloud, visibility collapses instantly.
  timeline.add(() => {
    telemetryText.innerText = "DEEP VOLUMETRIC STORM CLOUD DECK PLUNGE";
  }, 16.0);
  
  timeline.to(stormOverlay, {
    backgroundColor: "rgba(35, 38, 45, 1.0)",
    duration: 0.5,
    ease: "power2.in"
  }, 16.0);
  
  timeline.to(scene.fog, {
    density: 0.095,
    duration: 1.5,
    ease: "power1.in"
  }, 16.0);
  
  // B3-040 (17.33s): lightning flash reveals rocket silhouette.
  timeline.add(() => { triggerLightningStrike(); }, 17.33);
  timeline.to(stormOverlay, {
    backgroundColor: "rgba(180, 225, 255, 1.0)",
    duration: 0.05,
    repeat: 4,
    yoyo: true,
    ease: "none"
  }, 17.38);
  
  // B3-080 (18.67s): lightning flash cockpit glimpse.
  timeline.add(() => { triggerLightningStrike(); }, 18.67);
  
  // B3-100 (19.33s): lightning reveals cloud towers.
  timeline.add(() => { triggerLightningStrike(); }, 19.5);
  
  // B3-140 (20.67s): storm core, max shake.
  timeline.to(cameraRig, {
    shakeIntensity: 1.45,
    duration: 2.0,
    ease: "power1.inOut"
  }, 19.33);
  
  // B3-180 (22.0s): escape begins.
  
  // ============================================
  // CRITICAL SWAP FRAME AT peak fog (22.0s)
  // ============================================
  timeline.add(() => {
    console.log("EXECUTE LANDING COORDINATE SWAP");
    cameraMode = "landing";
    telemetryText.innerText = "PROPULSION IGNITION // HOVER LEVEL PLATFORM SEARCH // ALT: 1.5 KM";
    
    spaceGroup.visible = false;
    oceanGroup.visible = true;
    
    scene.fog.color.setHex(0x06080c); // Stormy slate grey fog
    renderer.setClearColor(0x06080c);
    
    shaderUniforms.plasmaIntensity.value = 0.0;
    rocketModel.traverse((node) => {
      if (node.isMesh && node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((mat) => {
          if (mat.emissive) {
            mat.emissive.setHex(0x000000);
            mat.emissiveIntensity = 0.0;
          }
        });
      }
    });
    
    // Position rocket for landing
    rocketModel.position.set(0, 42, -45);
    rocketModel.rotation.set(0, 0, 0);
    
    camera.position.set(0, 32, -15);
    actualLookAtTarget.set(0, 15, -45);
    cameraRig.targetPos.set(0, 32, -15);
    cameraRig.targetLook.set(0, 15, -45);
    cameraRig.shakeIntensity = 0.0;
    
    if (thrusterFlame) thrusterFlame.visible = true;
    if (volumetricLightCone) volumetricLightCone.visible = true;
    
    landingThrusterLight.position.set(0, 40, -45);
    landingThrusterLight.intensity = 10.0;
  }, 22.0);
  
  // --- BEAT 4: THE MONOLITH REVEAL (22.0s - 30.8s) ---
  // B4-001 (22.0s): Cloud layer tears open. First glimpse of ocean.
  timeline.to(stormOverlay, {
    backgroundColor: "rgba(35, 38, 45, 0.0)",
    duration: 1.5,
    ease: "power2.out"
  }, 22.0);
  
  // B4-020 (22.67s): Exit storm. Silence.
  timeline.to(scene.fog, {
    density: 0.0055,
    duration: 3.5,
    ease: "power2.out"
  }, 22.0);
  
  // B4-040 (23.33s) to B4-140 (26.67s): approach hover and descend
  timeline.to(rocketModel.position, {
    y: 2.925, // raised platform touchdown Y
    duration: 6.8,
    ease: "power2.out"
  }, 23.0);
  
  timeline.to(landingThrusterLight.position, {
    y: 2.8,
    duration: 6.8,
    ease: "power2.out"
  }, 23.0);
  
  // Ignite retro thrusters
  timeline.to(landingThrusterLight, {
    intensity: 22.0,
    duration: 2.0,
    ease: "power1.in"
  }, 23.5);
  timeline.to(shaderUniforms.thrusterIntensity, {
    value: 12.0,
    duration: 2.0,
    ease: "power1.in"
  }, 23.5);
  
  // B4-220 (29.33s): Descent slows down, engine shutdown starts
  timeline.to(landingThrusterLight, {
    intensity: 0.0,
    duration: 2.33,
    ease: "power2.out"
  }, 27.5);
  timeline.to(shaderUniforms.thrusterIntensity, {
    value: 0.0,
    duration: 2.33,
    ease: "power2.out"
  }, 27.5);
  
  // Monolith pulse veins
  timeline.to(shaderUniforms.monolithPulse, {
    value: 4.5,
    duration: 2.0,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut"
  }, 26.5);
  
  // B4-260 (30.8s): Touchdown & OrbitControls handoff
  timeline.add(() => {
    telemetryText.innerText = "TOUCHDOWN CONFIRMED // SYSTEM SECURED ON HOVER PLATFORM";
    if (volumetricLightCone) volumetricLightCone.visible = false;
    
    // Impact camera shake
    cameraRig.shakeIntensity = 1.4;
    gsap.to(cameraRig, {
      shakeIntensity: 0.0,
      duration: 1.6,
      ease: "power2.out"
    });
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.03;
    controls.target.set(0, 8.5, -45);
    window.activeControls = controls;
  }, 30.8);
}

descentBtn.addEventListener("click", executeDescentSequence);

// ==========================================
// 5. RENDER LOOP & WINDOW EVENT LISTENERS
// ==========================================

const clock = new THREE.Clock();

function tick() {
  const elapsedTime = clock.getElapsedTime();
  const delta = clock.getDelta();
  
  // Update shader clock
  shaderUniforms.time.value = elapsedTime;
  shaderUniforms.cameraHeight.value = camera.position.y;

  // Sync thruster light position with rocket model and update exhaust flame
  if (rocketModel) {
    shaderUniforms.thrusterLightPos.value.copy(rocketModel.position);
    
    if (thrusterFlame) {
      const targetScale = shaderUniforms.thrusterIntensity.value / 12.0;
      thrusterFlame.scale.set(1.0, targetScale, 1.0);
      thrusterFlame.visible = targetScale > 0.02;
    }
    
    if (volumetricLightCone) {
      const targetScale = shaderUniforms.thrusterIntensity.value / 12.0;
      volumetricLightCone.scale.set(1.0, targetScale, 1.0);
      volumetricLightCone.visible = targetScale > 0.02;
    }
  }
  
  // Rotate cloud layer sphere slowly over earth
  if (cloudSphere) {
    cloudSphere.rotation.y = elapsedTime * 0.009;
    cloudSphere.rotation.x = elapsedTime * 0.003;
  }
  
  // Cloud translation handled directly inside the raymarching shader noise scroll

  // Position the lightning DirectionalLight
  if (lightningLight && rocketModel) {
    lightningLight.position.set(rocketModel.position.x, rocketModel.position.y + 100, rocketModel.position.z);
  }

  // Drifting 3D bubble clouds
  if (skyClouds && skyClouds.children) {
    skyClouds.children.forEach((cloud, index) => {
      cloud.rotation.y += 0.002;
      cloud.position.x += Math.sin(elapsedTime * 0.03 + index) * 0.08;
      cloud.position.z += 0.08;
      if (cloud.position.z > 100) {
        cloud.position.z = -700;
        cloud.position.x = THREE.MathUtils.randFloatSpread(800);
      }
    });
  }

  // Rain updates removed per user request

  // Manage Steam Particles behavior on landing approach
  if (steamParticles && oceanGroup.visible && rocketModel) {
    const posAttr = steamGeometry.getAttribute("position");
    const rocketY = rocketModel.position.y;
    
    // Show steam when rocket gets low
    if (rocketY < 18.0 && shaderUniforms.thrusterIntensity.value > 0.5) {
      steamMaterial.opacity = THREE.MathUtils.lerp(steamMaterial.opacity, 0.55, 0.08);
      for (let i = 0; i < steamParticlesCount; i++) {
        let x = posAttr.getX(i);
        let y = posAttr.getY(i);
        let z = posAttr.getZ(i);
        
        const spd = steamSpeeds[i];
        x += spd.x;
        y += spd.y;
        z += spd.z;
        
        // Rise and dissipate
        if (y > 10.0 || y < 0) {
          x = THREE.MathUtils.randFloatSpread(40);
          y = 0.1;
          z = -45 + THREE.MathUtils.randFloatSpread(40);
        }
        
        posAttr.setXYZ(i, x, y, z);
      }
      posAttr.needsUpdate = true;
    } else {
      steamMaterial.opacity = THREE.MathUtils.lerp(steamMaterial.opacity, 0.0, 0.1);
    }
  }
  
  // Update fire texture scroll
  if (fireNoiseTexture) {
    fireNoiseTexture.offset.y -= 1.6 * delta;
  }

  // Update Monolith glow materials dynamically
  if (monolithScene) {
    monolithScene.traverse((node) => {
      if (node.isMesh && node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((mat) => {
          if (mat.name && mat.name.includes("Glow")) {
            mat.emissiveIntensity = shaderUniforms.monolithPulse.value;
          }
        });
      }
    });
  }
  
  if (window.activeControls) {
    window.activeControls.update();
  } else {
    if (rocketModel) {
      if (cameraMode === "warp") {
        // Hull-attached warping camera (mounted on side-rear hull looking forward into the eye of the storm)
        cameraRig.targetPos.set(
          rocketModel.position.x - 1.45,
          rocketModel.position.y + 0.8,
          rocketModel.position.z + 3.5
        );
        cameraRig.targetLook.set(
          rocketModel.position.x + 0.5,
          rocketModel.position.y - 0.2,
          rocketModel.position.z - 12.0
        );
      } else if (cameraMode === "orbit") {
        // Chase cam during orbit (close behind hull, looking down-forward)
        cameraRig.targetPos.set(
          rocketModel.position.x,
          rocketModel.position.y + 4.5,
          rocketModel.position.z + 9.0
        );
        cameraRig.targetLook.set(
          rocketModel.position.x,
          rocketModel.position.y - 8.0,
          rocketModel.position.z - 12.0
        );
      } else if (cameraMode === "reentry") {
        // Mounted on the hull looking forward-down through reentry plasma
        cameraRig.targetPos.set(
          rocketModel.position.x + 1.5,
          rocketModel.position.y + 3.0,
          rocketModel.position.z + 2.5
        );
        cameraRig.targetLook.set(
          rocketModel.position.x - 1.0,
          rocketModel.position.y - 12.0,
          rocketModel.position.z - 8.0
        );
      } else if (cameraMode === "landing") {
        // Chase cam looking down-forward at the hovering platform
        cameraRig.targetPos.set(
          rocketModel.position.x,
          rocketModel.position.y + 9.0,
          rocketModel.position.z + 12.0
        );
        cameraRig.targetLook.set(
          rocketModel.position.x,
          rocketModel.position.y - 3.0,
          rocketModel.position.z
        );
      }
    }
    
    // Smoothly lerp towards rig targets
    camera.position.lerp(cameraRig.targetPos, cameraRig.lerpSpeed);
    actualLookAtTarget.lerp(cameraRig.targetLook, cameraRig.lerpSpeed);
    
    // Add non-cumulative camera shake
    const activeShake = (cameraMode === "reentry" ? 0.08 * shaderUniforms.plasmaIntensity.value : 0) + cameraRig.shakeIntensity * 0.12;
    if (activeShake > 0) {
      camera.position.x += (Math.random() - 0.5) * activeShake;
      camera.position.y += (Math.random() - 0.5) * activeShake;
      camera.position.z += (Math.random() - 0.5) * activeShake;
    }
    
    camera.lookAt(actualLookAtTarget);
  }

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

tick();
