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
renderer.toneMappingExposure = 1.25;

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
  monolithPulse: { value: 1.0 },
  oceanLightPos: { value: new THREE.Vector3(0, 35, -150) }, // Positioned directly behind the Monolith
  thrusterLightPos: { value: new THREE.Vector3(0, 42, -45) },
  thrusterIntensity: { value: 0.0 },
  lightningIntensity: { value: 0.0 },
  lightningColor: { value: new THREE.Color(0x88ffff) }
};

let cameraMode = "orbit";
const cameraRig = {
  targetPos: new THREE.Vector3(0, 38, 120),
  targetLook: new THREE.Vector3(0, 20, 60),
  shakeIntensity: 0.0,
  lerpSpeed: 0.03
};
const actualLookAtTarget = new THREE.Vector3(0, 20, 60);


// ==========================================
// FAST PERFORMANCE NOISE & PROCEDURAL TEXTURES
// ==========================================

// Highly optimized 2D value noise for instant generation
function hash2D(x, y) {
  let h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123;
  return h - Math.floor(h);
}

function noise2D(x, y) {
  let ix = Math.floor(x);
  let iy = Math.floor(y);
  let fx = x - ix;
  let fy = y - iy;
  
  let ux = fx * fx * (3.0 - 2.0 * fx);
  let uy = fy * fy * (3.0 - 2.0 * fy);
  
  return mix(
    mix(hash2D(ix, iy), hash2D(ix + 1, iy), ux),
    mix(hash2D(ix, iy + 1), hash2D(ix + 1, iy + 1), ux),
    uy
  );
}

function fbm2D(x, y, octaves = 3) {
  let val = 0.0;
  let amp = 0.5;
  let freq = 1.0;
  for (let i = 0; i < octaves; i++) {
    val += amp * noise2D(x * freq, y * freq);
    freq *= 2.0;
    amp *= 0.5;
  }
  return val;
}

function mix(a, b, t) {
  return a * (1.0 - t) + b * t;
}

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0.0, Math.min(1.0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3.0 - 2.0 * t);
}


// Optimized Earth Texture: Resolution reduced to 256x128 (loads in < 2ms!)
function createProceduralEarthTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  const imgData = ctx.createImageData(256, 128);
  const data = imgData.data;

  for (let y = 0; y < 128; y++) {
    let phi = (y / 128) * Math.PI;
    let ny = Math.cos(phi);
    
    for (let x = 0; x < 256; x++) {
      let theta = (x / 256) * Math.PI * 2;
      let nx = Math.sin(phi) * Math.cos(theta);
      let nz = Math.sin(phi) * Math.sin(theta);
      
      // Map noise spherically
      let val = fbm2D(nx * 3.0 + 10.0, ny * 3.0 + nz * 3.0, 3);
      let idx = (y * 256 + x) * 4;
      
      let isIce = (y < 12 || y > 116 || (y < 20 && val > 0.46) || (y > 108 && val > 0.46));
      
      if (isIce) {
        data[idx] = 245;
        data[idx + 1] = 248;
        data[idx + 2] = 255;
      } else if (val > 0.44) {
        let veg = fbm2D(nx * 6.0, ny * 6.0 + nz * 6.0, 2);
        if (veg > 0.48) {
          data[idx] = 25 + Math.floor(veg * 20);
          data[idx + 1] = 95 + Math.floor(veg * 30);
          data[idx + 2] = 30 + Math.floor(veg * 15);
        } else {
          data[idx] = 145 + Math.floor(veg * 40);
          data[idx + 1] = 120 + Math.floor(veg * 30);
          data[idx + 2] = 85 + Math.floor(veg * 20);
        }
      } else {
        let depth = val / 0.44;
        data[idx] = 4 + Math.floor(depth * 10);
        data[idx + 1] = 18 + Math.floor(depth * 45);
        data[idx + 2] = 55 + Math.floor(depth * 115);
      }
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Optimized Cloud Texture: 256x128
function createProceduralCloudTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  const imgData = ctx.createImageData(256, 128);
  const data = imgData.data;

  for (let y = 0; y < 128; y++) {
    let phi = (y / 128) * Math.PI;
    let ny = Math.cos(phi);
    
    for (let x = 0; x < 256; x++) {
      let theta = (x / 256) * Math.PI * 2;
      let nx = Math.sin(phi) * Math.cos(theta);
      let nz = Math.sin(phi) * Math.sin(theta);
      
      let val = fbm2D(nx * 4.0 + 50.0, ny * 4.0 + nz * 4.0, 3);
      let idx = (y * 256 + x) * 4;
      
      let density = smoothstep(0.40, 0.65, val);
      
      data[idx] = 255;
      data[idx + 1] = 255;
      data[idx + 2] = 255;
      data[idx + 3] = Math.floor(density * 220);
    }
  }
  ctx.putImageData(imgData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
}

// Generate procedural twilight/sunset environment reflection map
function createProceduralSkyTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  
  // Sunset Twilight sky gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0.0, "#010105");   // top: deep space black
  grad.addColorStop(0.35, "#0a071a"); // upper: dark violet
  grad.addColorStop(0.60, "#3e0d29"); // middle: magenta nebula
  grad.addColorStop(0.74, "#8a2422"); // lower: deep crimson
  grad.addColorStop(0.85, "#df602a"); // horizon: warm sunset orange
  grad.addColorStop(0.92, "#fca448"); // sunset yellow glow
  grad.addColorStop(1.0, "#08060c");   // bottom: dark sea reflection base
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);
  
  // Paint some soft reddish nebulae clouds
  for (let i = 0; i < 6; i++) {
    const cx = Math.random() * 512;
    const cy = 100 + Math.random() * 80;
    const r = 60 + Math.random() * 90;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, "rgba(240, 75, 140, 0.14)");
    g.addColorStop(0.5, "rgba(110, 25, 190, 0.06)");
    g.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
  }
  
  const tex = new THREE.CanvasTexture(canvas);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  return tex;
}

// Generate a simple environment reflection map (Liquid Chrome mirror effect)
function createProceduralEnvMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  
  const grad = ctx.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, "#060612");
  grad.addColorStop(0.4, "#180d28");
  grad.addColorStop(0.65, "#601c2c");
  grad.addColorStop(0.78, "#c24c28");
  grad.addColorStop(0.85, "#f0b060");
  grad.addColorStop(1.0, "#08060c");
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 128);
  
  ctx.fillStyle = "#ffffff";
  for (let i = 0; i < 30; i++) {
    let x = Math.random() * 256;
    let y = Math.random() * 64;
    ctx.beginPath();
    ctx.arc(x, y, Math.random() * 0.7 + 0.3, 0, Math.PI * 2);
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
  const imgData = ctx.createImageData(128, 256);
  const data = imgData.data;
  
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 128; x++) {
      let nx = x / 128;
      let ny = y / 256;
      let val = fbm2D(nx * 4.0, ny * 3.0, 3);
      let idx = (y * 128 + x) * 4;
      
      let intensity = smoothstep(0.32, 0.72, val);
      data[idx] = Math.floor(intensity * 255);       // Red
      data[idx + 1] = Math.floor(intensity * 135);   // Green
      data[idx + 2] = Math.floor(intensity * 12);    // Blue
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
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
      
      float hash(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p.xyz, p.yzx + 19.19);
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
        float angle = time * 0.015;
        float cosA = cos(angle);
        float sinA = sin(angle);
        vec3 rotatedPos = vPosition;
        rotatedPos.xz = mat2(cosA, -sinA, sinA, cosA) * rotatedPos.xz;
        
        vec3 p = rotatedPos * 0.045;
        float val = fbm(p * 2.8 + vec3(10.0));
        
        float lat = vPosition.y / 120.0;
        bool isIce = (abs(lat) > 0.82) || (abs(lat) > 0.72 && val > 0.45);
        
        vec3 col;
        if (isIce) {
          col = vec3(0.96, 0.97, 1.0);
        } else if (val > 0.44) {
          float veg = noise3D(p * 15.0);
          vec3 landCol = mix(vec3(0.48, 0.42, 0.3), vec3(0.1, 0.35, 0.12), smoothstep(0.38, 0.62, veg));
          col = landCol;
        } else {
          float depth = val / 0.44;
          col = mix(vec3(0.02, 0.06, 0.18), vec3(0.05, 0.22, 0.5), depth);
        }
        
        vec3 lightDir = normalize(vec3(-300.0, 200.0, 300.0) - vPosition);
        float diff = max(dot(normalize(vNormal), lightDir), 0.05);
        
        gl_FragColor = vec4(col * diff, 1.0);
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
      
      float hash(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p.xyz, p.yzx + 19.19);
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
        float angle = time * 0.025;
        float cosA = cos(angle);
        float sinA = sin(angle);
        vec3 rotatedPos = vPosition;
        rotatedPos.xz = mat2(cosA, -sinA, sinA, cosA) * rotatedPos.xz;
        
        vec3 p = rotatedPos * 0.05 + vec3(time * 0.005, 0.0, time * 0.002);
        float val = fbm(p * 3.5 + vec3(50.0));
        float density = smoothstep(0.42, 0.68, val);
        
        float lat = vPosition.y / 120.0;
        density *= (1.0 - pow(abs(lat), 6.0));
        
        vec3 col = vec3(1.0, 1.0, 1.0);
        vec3 lightDir = normalize(vec3(-300.0, 200.0, 300.0) - vPosition);
        float diff = max(dot(normalize(vNormal), lightDir), 0.1);
        
        gl_FragColor = vec4(col * (0.6 + 0.4 * diff), density * 0.85);
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
        float alpha = fresnel * plasmaIntensity * (0.15 + 0.85 * n);
        
        gl_FragColor = vec4(fireColor * 2.0, alpha);
      }
    `
  },
  
  atmosphere: {
    vertex: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragment: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        float intensity = pow(0.62 - dot(normal, viewDir), 2.2);
        vec3 glowColor = mix(vec3(0.0, 0.8, 1.0), vec3(0.5, 0.1, 0.9), intensity);
        
        gl_FragColor = vec4(glowColor * 1.8 * intensity, intensity);
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
        
        vec3 w1 = getGerstnerWave(position, 150.0, 3.8, 0.6, vec2(1.0, 0.15), 0.25);
        vec3 w2 = getGerstnerWave(position, 75.0, 1.8, 1.1, vec2(0.4, 0.9), 0.22);
        vec3 w3 = getGerstnerWave(position, 35.0, 0.75, 1.8, vec2(-0.3, 0.95), 0.18);
        vec3 w4 = getGerstnerWave(position, 15.0, 0.3, 2.5, vec2(0.8, -0.6), 0.15);
        pos += w1 + w2 + w3 + w4;
        
        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;
        
        vec3 eps = vec3(0.3, 0.0, 0.0);
        vec3 pX = position + eps;
        pX += getGerstnerWave(pX, 150.0, 3.8, 0.6, vec2(1.0, 0.15), 0.25) +
              getGerstnerWave(pX, 75.0, 1.8, 1.1, vec2(0.4, 0.9), 0.22) +
              getGerstnerWave(pX, 35.0, 0.75, 1.8, vec2(-0.3, 0.95), 0.18) +
              getGerstnerWave(pX, 15.0, 0.3, 2.5, vec2(0.8, -0.6), 0.15);
              
        vec3 pZ = position + eps.zyx;
        pZ += getGerstnerWave(pZ, 150.0, 3.8, 0.6, vec2(1.0, 0.15), 0.25) +
              getGerstnerWave(pZ, 75.0, 1.8, 1.1, vec2(0.4, 0.9), 0.22) +
              getGerstnerWave(pZ, 35.0, 0.75, 1.8, vec2(-0.3, 0.95), 0.18) +
              getGerstnerWave(pZ, 15.0, 0.3, 2.5, vec2(0.8, -0.6), 0.15);
              
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
        
        // High-frequency turbulent ripples using 3 scrolled noise octaves
        vec2 uv1 = vUv * 450.0 + vec2(time * 0.08, time * 0.04);
        vec2 uv2 = vUv * 900.0 - vec2(time * 0.05, time * 0.08);
        vec2 uv3 = vUv * 1800.0 + vec2(time * 0.12, -time * 0.14);
        
        float eps = 0.05;
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
        ) * 0.22;
        vec3 blendNormal = normalize(normal + perturb);
        
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 lightDir = normalize(oceanLightPos - vWorldPosition);
        
        float diff = max(dot(blendNormal, lightDir), 0.0);
        
        // Double-specular sunset trail (broad glow + sharp glittering highlights)
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec1 = pow(max(dot(blendNormal, halfDir), 0.0), 16.0);
        float spec2 = pow(max(dot(blendNormal, halfDir), 0.0), 160.0);
        float spec = spec1 * 0.55 + spec2 * 0.75;
        
        // Dynamic Thruster Wash Reflection
        vec3 thrusterLightDir = normalize(thrusterLightPos - vWorldPosition);
        float thrusterDist = length(thrusterLightPos - vWorldPosition);
        float thrusterAttenuation = 1.0 / (1.0 + 0.03 * thrusterDist + 0.001 * thrusterDist * thrusterDist);
        float thrusterDiff = max(dot(blendNormal, thrusterLightDir), 0.0);
        
        vec3 thrusterHalfDir = normalize(thrusterLightDir + viewDir);
        float thrusterSpec = pow(max(dot(blendNormal, thrusterHalfDir), 0.0), 40.0);
        vec3 thrusterReflectColor = vec3(1.0, 0.45, 0.1) * thrusterIntensity * thrusterAttenuation;
        
        // Lightning flash reflection
        vec3 lightningLightDir = normalize(vec3(0.0, 150.0, -45.0) - vWorldPosition);
        float lightningDiff = max(dot(blendNormal, lightningLightDir), 0.0);
        vec3 lightningHalfDir = normalize(lightningLightDir + viewDir);
        float lightningSpec = pow(max(dot(blendNormal, lightningHalfDir), 0.0), 80.0);
        vec3 lightningReflectColor = lightningColor * lightningIntensity * (lightningDiff * 0.4 + lightningSpec * 2.0);
        
        float fresnel = pow(1.0 - max(dot(blendNormal, viewDir), 0.0), 5.0);
        
        // Equirectangular Sky environment reflection mapping
        vec3 reflectDir = reflect(-viewDir, blendNormal);
        float phi = acos(clamp(reflectDir.y, -1.0, 1.0));
        float theta = atan(reflectDir.z, reflectDir.x) + 3.14159265;
        vec2 envUv = vec2(theta / (2.0 * 3.14159265), phi / 3.14159265);
        vec3 skyReflectColor = texture2D(skyEnvMap, envUv).rgb;
        
        vec3 waterBase = mix(darkWaterColor, skyReflectColor, 0.12 + 0.38 * fresnel);
        waterBase += twilightColor * diff * 0.12;
        
        vec3 finalColor = waterBase + vec3(1.0, 0.62, 0.42) * spec * 1.8;
        
        // Add dynamic thruster wash reflection
        finalColor += thrusterReflectColor * (thrusterDiff * 0.35 + thrusterSpec * 2.8);
        
        // Add lightning flash reflection
        finalColor += lightningReflectColor;
        
        // Wave foam on crests
        float foam = smoothstep(1.5, 3.8, vWorldPosition.y);
        finalColor = mix(finalColor, vec3(0.88, 0.92, 0.98), foam * 0.45);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  }
};


// ==========================================
// 1. SCENE A SETUP: SPACE & PROCEDURAL EARTH
// ==========================================

const spaceAmbient = new THREE.AmbientLight(0x0e0f1e, 0.7);
spaceGroup.add(spaceAmbient);

const spaceSunLight = new THREE.DirectionalLight(0xfff5e6, 2.8);
spaceSunLight.position.set(-300, 200, 300);
spaceGroup.add(spaceSunLight);

// Stars points
const starGeometry = new THREE.BufferGeometry();
const starCount = 7000;
const starPositions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i += 3) {
  const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
  const phi = THREE.MathUtils.randFloat(0, Math.PI);
  const dist = THREE.MathUtils.randFloat(700, 1000);
  starPositions[i] = dist * Math.sin(phi) * Math.cos(theta);
  starPositions[i + 1] = dist * Math.sin(phi) * Math.sin(theta);
  starPositions[i + 2] = dist * Math.cos(phi);
}
starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 1.1,
  transparent: true,
  opacity: 0.85
});
const starfield = new THREE.Points(starGeometry, starMaterial);
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
      p = fract(p * vec3(443.8975, 397.2973, 491.1871));
      p += dot(p.xyz, p.yzx + 19.19);
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
      vec3 col1 = vec3(0.005, 0.002, 0.015);
      vec3 col2 = vec3(0.08, 0.02, 0.14);
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

// Earth surface textures
loaderStatus.innerText = "Initializing Earth shader system...";
const cloudTexture = createProceduralCloudTexture();
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
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      float intensity = pow(0.65 - max(dot(normal, viewDir), 0.0), 2.5);
      vec3 glowColor = mix(vec3(0.0, 0.72, 1.0), vec3(0.35, 0.08, 0.95), intensity);
      gl_FragColor = vec4(glowColor * 2.2 * intensity, intensity);
    }
  `,
  blending: THREE.AdditiveBlending,
  side: THREE.BackSide,
  transparent: true
});
const atmosphereSphere = new THREE.Mesh(new THREE.SphereGeometry(earthRadius * 1.035, 64, 64), atmosphereMaterial);
earthGroup.add(atmosphereSphere);



// Volumetric cloud crossing sheets stacked above atmosphere
const volumetricClouds = new THREE.Group();
spaceGroup.add(volumetricClouds);

const cloudSheetMaterial = new THREE.ShaderMaterial({
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
    uniform float opacity;
    uniform float lightningIntensity;
    uniform vec3 lightningColor;
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
      float dist = length(vUv - vec2(0.5));
      float edgeAlpha = smoothstep(0.5, 0.2, dist);
      
      vec2 uvNoise = vUv * 4.0 + vec2(time * 0.05, time * 0.02);
      float n = noise(uvNoise) * 0.6 + noise(uvNoise * 2.0) * 0.4;
      
      vec3 cloudBaseColor = vec3(0.08, 0.09, 0.11);
      
      // Scatter light inside clouds during lightning strikes
      vec3 finalColor = mix(cloudBaseColor, lightningColor * 1.5, lightningIntensity * n * 0.85);
      
      float finalAlpha = opacity * edgeAlpha * (0.15 + 0.85 * n);
      
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `,
  uniforms: {
    time: shaderUniforms.time,
    opacity: { value: 0.0 },
    lightningIntensity: shaderUniforms.lightningIntensity,
    lightningColor: shaderUniforms.lightningColor
  },
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide
});

for (let i = 0; i < 80; i++) {
  const geom = new THREE.PlaneGeometry(200, 200);
  const mesh = new THREE.Mesh(geom, cloudSheetMaterial);
  mesh.position.set(
    THREE.MathUtils.randFloatSpread(250),
    -60 - (i * 2.5),
    THREE.MathUtils.randFloatSpread(250)
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.rotation.z = THREE.MathUtils.randFloat(0, Math.PI * 2);
  const scale = THREE.MathUtils.randFloat(0.8, 1.8);
  mesh.scale.set(scale, scale, scale);
  volumetricClouds.add(mesh);
}

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

const lightningLight = new THREE.DirectionalLight(0x44ffff, 0);
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
    rx + THREE.MathUtils.randFloatSpread(60),
    ry + 80,
    rz + THREE.MathUtils.randFloatSpread(60) - 40
  );
  const end = new THREE.Vector3(
    rx + THREE.MathUtils.randFloatSpread(40),
    ry - 50,
    rz + THREE.MathUtils.randFloatSpread(40)
  );
  
  const pathPoints = generateLightningPaths(start, end, 16, 30);
  
  // Create branches
  const totalCorePoints = pathPoints.length;
  for (let i = 0; i < 3; i++) {
    const branchStartIdx = Math.floor(Math.random() * (totalCorePoints - 2));
    const bStart = pathPoints[branchStartIdx];
    const bEnd = new THREE.Vector3(
      bStart.x + THREE.MathUtils.randFloatSpread(50),
      bStart.y - 25 - Math.random() * 15,
      bStart.z + THREE.MathUtils.randFloatSpread(50)
    );
    pathPoints.push(...generateLightningPaths(bStart, bEnd, 8, 12));
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
  
  // Flash sequence
  const flashTl = gsap.timeline();
  flashTl.to(lightningMaterial, { opacity: 1.0, duration: 0.05 });
  flashTl.to(lightningLight, { intensity: 8.0, duration: 0.05 }, 0);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 1.0, duration: 0.05 }, 0);
  
  flashTl.to(lightningMaterial, { opacity: 0.0, duration: 0.06 });
  flashTl.to(lightningLight, { intensity: 0.0, duration: 0.06 }, 0.05);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 0.0, duration: 0.06 }, 0.05);
  
  flashTl.to(lightningMaterial, { opacity: 0.8, duration: 0.04 }, 0.12);
  flashTl.to(lightningLight, { intensity: 5.0, duration: 0.04 }, 0.12);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 0.6, duration: 0.04 }, 0.12);
  
  flashTl.to(lightningMaterial, { opacity: 0.0, duration: 0.10 }, 0.16);
  flashTl.to(lightningLight, { intensity: 0.0, duration: 0.10 }, 0.16);
  flashTl.to(shaderUniforms.lightningIntensity, { value: 0.0, duration: 0.10 }, 0.16);
}



// ==========================================
// 2. SCENE B SETUP: OCEAN & LANDING SCENE
// ==========================================

const oceanAmbient = new THREE.AmbientLight(0x0e1428, 1.3);
oceanGroup.add(oceanAmbient);

// Sunlight source behind subject to frame silhouette and reflection trail
const twilightLight = new THREE.DirectionalLight(0xff5533, 2.5);
twilightLight.position.copy(shaderUniforms.oceanLightPos.value);
twilightLight.castShadow = true;
twilightLight.shadow.mapSize.width = 2048;
twilightLight.shadow.mapSize.height = 2048;
twilightLight.shadow.bias = -0.0004;
oceanGroup.add(twilightLight);

// Fill Light from camera angle to avoid pitch black shadows on subject fronts
const fillLight = new THREE.DirectionalLight(0x4466aa, 1.0);
fillLight.position.set(0, 50, 60);
oceanGroup.add(fillLight);

// Generate procedural textures for the sky dome
const skyTexture = createProceduralSkyTexture();

const skyDomeGeom = new THREE.SphereGeometry(1000, 32, 15);
const skyDomeMat = new THREE.MeshBasicMaterial({
  side: THREE.BackSide,
  map: skyTexture // Map our gorgeous twilight sky gradient to sky dome!
});
const skyDome = new THREE.Mesh(skyDomeGeom, skyDomeMat);
oceanGroup.add(skyDome);

// Procedural wave ocean using advanced reflection/ripple shaders
const oceanGeom = new THREE.PlaneGeometry(1600, 1600, 180, 180);
const oceanMat = new THREE.ShaderMaterial({
  vertexShader: Shaders.ocean.vertex,
  fragmentShader: Shaders.ocean.fragment,
  uniforms: {
    time: shaderUniforms.time,
    oceanLightPos: shaderUniforms.oceanLightPos,
    twilightColor: { value: new THREE.Color(0xff5533) },
    darkWaterColor: { value: new THREE.Color(0x000c14) },
    skyEnvMap: { value: skyTexture },
    thrusterLightPos: shaderUniforms.thrusterLightPos,
    thrusterIntensity: shaderUniforms.thrusterIntensity,
    lightningIntensity: shaderUniforms.lightningIntensity,
    lightningColor: shaderUniforms.lightningColor
  },
  side: THREE.DoubleSide
});
const ocean = new THREE.Mesh(oceanGeom, oceanMat);
ocean.rotation.x = -Math.PI / 2;
oceanGroup.add(ocean);

// Landing point PointLight (orange thruster glow on water)
const landingThrusterLight = new THREE.PointLight(0xff6600, 0, 95);
oceanGroup.add(landingThrusterLight);

// Ethereal drifting clouds in the twilight sky
const skyClouds = new THREE.Group();
oceanGroup.add(skyClouds);
const skyCloudMat = new THREE.MeshBasicMaterial({
  alphaMap: cloudTexture,
  transparent: true,
  opacity: 0.15,
  color: 0xda7e8c, // pinkish-purple tint from sunset
  depthWrite: false
});
for (let i = 0; i < 10; i++) {
  const geom = new THREE.PlaneGeometry(400, 200);
  const mesh = new THREE.Mesh(geom, skyCloudMat);
  mesh.position.set(
    THREE.MathUtils.randFloatSpread(800),
    120 + THREE.MathUtils.randFloatSpread(40),
    -300 - THREE.MathUtils.randFloat(0, 300)
  );
  mesh.rotation.x = Math.PI / 2.5; // slight tilt towards camera
  skyClouds.add(mesh);
}


// ==========================================
// 3. LOAD HIGH-FIDELITY GLTF MODELS
// ==========================================

const envReflectionMap = createProceduralEnvMap();
scene.environment = envReflectionMap; // Chrome reflects space gradient!

const manager = new THREE.LoadingManager();
const loader = new GLTFLoader(manager);

let rocketModel = null;
let monolithScene = null;
let plasmaShield = null;
let thrusterFlame = null;

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
          mat.roughness = 0.04;
          mat.envMap = envReflectionMap;
          mat.envMapIntensity = 2.0;
          mat.needsUpdate = true;
          
          // Setup dynamic fire/plasma re-entry emissive reflections
          mat.emissiveMap = fireNoiseTexture;
          mat.emissive = new THREE.Color(0xffbb66);
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
  
  // Start position in orbit
  rocketModel.position.set(0, 30, 80);
  rocketModel.rotation.set(-Math.PI / 5, 0, 0); // pointing down towards Earth
  
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
  
  rocketModel.add(plasmaShield);

  // Volumetric Thruster Exhaust Flame
  const thrusterFlameGeom = new THREE.ConeGeometry(1.2, 8.0, 16, 1, true);
  thrusterFlameGeom.translate(0, -4.0, 0);
  
  const thrusterFlameMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float thrusterIntensity;
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
        vec2 tempUv = vUv;
        tempUv.y += time * 4.0;
        
        float n = noise(tempUv * 6.0) * 0.6 + noise(tempUv * 12.0) * 0.4;
        
        float radialFactor = smoothstep(1.0, 0.0, vUv.x);
        float lengthFactor = smoothstep(1.0, 0.2, vUv.y);
        
        vec3 coreColor = vec3(1.0, 0.55, 0.05);
        vec3 outerColor = vec3(0.9, 0.15, 0.01);
        
        vec3 col = mix(outerColor, coreColor, n * lengthFactor);
        
        float alpha = radialFactor * lengthFactor * (0.2 + 0.8 * n) * (thrusterIntensity / 12.0);
        
        gl_FragColor = vec4(col * 2.5, alpha);
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
});

// Load Monolith Scene (Platform + Obsidian Tower)
loader.load(monolithSceneUrl.href, (gltf) => {
  monolithScene = gltf.scene;
  monolithScene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach((mat) => {
          mat.envMap = skyTexture; // Reflect twilight sky gradient!
          mat.envMapIntensity = 1.5;
          // Configure Obsidian properties
          if (node.name.includes("Monolith")) {
            mat.roughness = 0.08;
            mat.metalness = 0.95;
            mat.color.setHex(0x010103);
          }
        });
      }
    }
  });
  // Position and scale to 0.6 to frame it perfectly within the camera lens
  monolithScene.scale.set(0.6, 0.6, 0.6);
  monolithScene.position.set(0, 0.05, -45); // Float pad at water level, offset Z to -45
  oceanGroup.add(monolithScene);
});

// Initial Camera positioning in open space
camera.position.set(0, 38, 120);
actualLookAtTarget.set(0, 20, 60);
cameraRig.targetPos.set(0, 38, 120);
cameraRig.targetLook.set(0, 20, 60);
camera.lookAt(actualLookAtTarget);


// ==========================================
// 4. ANIMATION SEQUENCE TIMELINE (GSAP)
// ==========================================

function executeDescentSequence() {
  gsap.to(descentBtn, { opacity: 0, scale: 0.8, duration: 0.3, onComplete: () => descentBtn.style.display = "none" });
  
  const timeline = gsap.timeline();
  
  // --- PHASE 1: SPACE ORBIT DESCENDING (0.0s - 5.5s) ---
  cameraMode = "orbit";
  telemetryText.innerText = "SEQUENCE ACTIVE // INITIATING RETRO-BURN DE-ORBIT";
  
  timeline.to(cameraRig.targetPos, {
    x: 0,
    y: 35,
    z: 110,
    duration: 5.5,
    ease: "power2.inOut"
  }, 0);
  
  timeline.to(rocketModel.position, {
    x: 0,
    y: -75,
    z: -80,
    duration: 6.5,
    ease: "power1.in"
  }, 0);

  
  // --- PHASE 2: FRICTION ENTRY BURN (4.5s - 8.5s) ---
  timeline.add(() => {
    cameraMode = "reentry";
    telemetryText.innerText = "ATMOSPHERIC COMPRESSION THRESHOLD // HULL TEMP: 1650°C";
  }, 4.5);
  
  // Activate plasma shockwave shield
  timeline.to(shaderUniforms.plasmaIntensity, {
    value: 1.0,
    duration: 2.0,
    ease: "power1.out"
  }, 4.5);
  
  // Heat up rocket chrome metal (glow emissive red/orange)
  rocketModel.traverse((node) => {
    if (node.isMesh && node.material) {
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      materials.forEach((mat) => {
        if (mat.emissive) {
          timeline.to(mat.emissive, {
            r: 1.0,
            g: 0.22,
            b: 0.02,
            duration: 2.5,
            ease: "power1.in"
          }, 4.5);
          timeline.to(mat, {
            emissiveIntensity: 2.8,
            duration: 2.5,
            ease: "power1.in"
          }, 4.5);
        }
      });
    }
  });
  
  // Exosphere background glow transitions from space black to hot plasma orange
  const tempBgColor = new THREE.Color(0x0a0a1a);
  timeline.to(tempBgColor, {
    r: 0.9,
    g: 0.28,
    b: 0.05,
    duration: 3.0,
    onUpdate: () => {
      renderer.setClearColor(tempBgColor);
      scene.fog.color.copy(tempBgColor);
    },
    ease: "power1.in"
  }, 4.5);
  
  // Ramp up fog density inside atmosphere exosphere
  timeline.to(scene.fog, {
    density: 0.045,
    duration: 3.0,
    ease: "power1.in"
  }, 4.5);
  
  // Sheets of clouds fade in
  timeline.to(cloudSheetMaterial.uniforms.opacity, {
    value: 0.98,
    duration: 2.5,
    ease: "power1.in"
  }, 4.5);
  
  // Camera structural shake
  timeline.to(cameraRig, {
    shakeIntensity: 1.2,
    duration: 3.0,
    ease: "power1.inOut"
  }, 4.5);
  
  // --- PHASE 3: CLOUD DECK PLUNGE & INTER-SCENE SWAP (7.0s - 10.5s) ---
  timeline.add(() => {
    telemetryText.innerText = "DEEP CLOUD TRANSITION // VOLUMETRIC STORM DUST";
  }, 7.0);
  
  // Fade full screen storm gray overlay
  timeline.to(stormOverlay, {
    backgroundColor: "rgba(70, 75, 85, 1.0)",
    duration: 1.0,
    ease: "power2.in"
  }, 7.0);
  
  timeline.to(scene.fog, {
    density: 0.09,
    duration: 1.0,
    ease: "none"
  }, 7.0);
  
  // Lightning flashes
  timeline.add(() => { triggerLightningStrike(); }, 7.2);
  timeline.to(stormOverlay, {
    backgroundColor: "rgba(200, 235, 255, 1.0)",
    duration: 0.05,
    repeat: 4,
    yoyo: true,
    ease: "none"
  }, 7.3);
  timeline.add(() => { triggerLightningStrike(); }, 7.8);
  
  // ============================================
  // CRITICAL SWAP FRAME AT peak fog (8.0s)
  // ============================================
  timeline.add(() => {
    console.log("EXECUTE LANDING COORDINATE SWAP");
    cameraMode = "landing";
    telemetryText.innerText = "HULL TEMP DECAYING // RETRO-PROPULSION IGNITION // ALT: 3 KM";
    
    // 1. Swap Group Renderers
    spaceGroup.visible = false;
    oceanGroup.visible = true;
    
    // 2. Adjust fog properties for twilight ocean horizon
    scene.fog.color.setHex(0x0a0c16);
    renderer.setClearColor(0x0a0c16);
    
    // 3. Remove entry friction materials
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
    
    // 4. Place Rocket exactly above the Landing Platform (located at x=0, z=-45)
    rocketModel.position.set(0, 42, -45);
    rocketModel.rotation.set(0, 0, 0); // straight vertical orientation
    
    // 5. Reset camera to new landing base coords to prevent massive lerps
    camera.position.set(0, 32, -15);
    actualLookAtTarget.set(0, 15, -45);
    cameraRig.targetPos.set(0, 32, -15);
    cameraRig.targetLook.set(0, 15, -45);
    cameraRig.shakeIntensity = 0.0;
    
    // 6. Thruster light
    landingThrusterLight.position.set(0, 40, -45);
    landingThrusterLight.intensity = 8.0;
    
  }, 8.0);
  
  // --- PHASE 4: CLOUD LAYER EXIT & OCEAN PLATFORM REVEAL (8.0s - 10.5s) ---
  
  timeline.to(stormOverlay, {
    backgroundColor: "rgba(70, 75, 85, 0.0)",
    duration: 1.5,
    ease: "power2.out"
  }, 8.0);
  
  // Decelerate fog to reveal twilight horizon
  timeline.to(scene.fog, {
    density: 0.0035,
    duration: 2.5,
    ease: "power2.out"
  }, 8.0);
  
  // --- PHASE 5: FLOATING PAD LANDING & ENGINE SHUTDOWN (8.2s - 16.0s) ---
  
  // Camera pans down following the rocket to frame touchdown
  timeline.to(cameraRig.targetPos, {
    x: 0,
    y: 12,
    z: -20,
    duration: 6.8,
    ease: "power1.out"
  }, 8.2);
  
  // Rocket slows down vertically to land on the platform at y=0.425
  timeline.to(rocketModel.position, {
    y: 0.425,
    duration: 6.8,
    ease: "power2.out"
  }, 8.2);
  
  // Animate thruster wash PointLight
  timeline.to(landingThrusterLight.position, {
    y: 0.3,
    duration: 6.8,
    ease: "power2.out"
  }, 8.2);
  
  timeline.to(landingThrusterLight, {
    intensity: 15.0,
    duration: 2.0,
    ease: "power1.in"
  }, 8.5);
  timeline.to(shaderUniforms.thrusterIntensity, {
    value: 12.0,
    duration: 2.0,
    ease: "power1.in"
  }, 8.5);
  
  timeline.to(landingThrusterLight, {
    intensity: 0.0,
    duration: 1.0,
    ease: "power2.out"
  }, 14.5);
  timeline.to(shaderUniforms.thrusterIntensity, {
    value: 0.0,
    duration: 1.0,
    ease: "power2.out"
  }, 14.5);
  
  // Pulse Monolith glow gold/cyan on ship touchdown
  timeline.to(shaderUniforms.monolithPulse, {
    value: 3.5,
    duration: 1.5,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut"
  }, 14.0);
  
  timeline.add(() => {
    telemetryText.innerText = "TOUCHDOWN CONFIRMED // SYSTEM SECURED ON FLOATING PAD";
    
    // Enable manual orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.03; // prevent camera going below ocean water level
    controls.target.set(0, 6, -45); // Focus around landing platform
    
    window.activeControls = controls;
  }, 16.0);
}

descentBtn.addEventListener("click", executeDescentSequence);


// ==========================================
// 5. RENDER LOOP & WINDOW EVENT LISTENERS
// ==========================================

const clock = new THREE.Clock();

function tick() {
  const elapsedTime = clock.getElapsedTime();
  
  // Update shader clock
  shaderUniforms.time.value = elapsedTime;

  // Sync thruster light position with rocket model and update exhaust flame
  if (rocketModel) {
    shaderUniforms.thrusterLightPos.value.copy(rocketModel.position);
    if (thrusterFlame) {
      const targetScale = shaderUniforms.thrusterIntensity.value / 12.0;
      thrusterFlame.scale.set(1.0, targetScale, 1.0);
      thrusterFlame.visible = targetScale > 0.02;
    }
  }
  
  // Starfield slow rotation
  starfield.rotation.y = elapsedTime * 0.006;
  
  // Rotate cloud layer sphere slowly over earth
  if (cloudSphere) {
    cloudSphere.rotation.y = elapsedTime * 0.012;
    cloudSphere.rotation.x = elapsedTime * 0.004;
  }
  
  // Move volumetric clouds to simulate high-speed descent
  if ((cameraMode === "reentry" || cameraMode === "orbit") && volumetricClouds) {
    volumetricClouds.children.forEach((sheet, index) => {
      sheet.position.y += 2.2; // move clouds upward
      if (sheet.position.y > 60) {
        sheet.position.y = -180; // loop back down
      }
    });
  }

  // Position the cyan lightning DirectionalLight directly above the rocket
  if (lightningLight && rocketModel) {
    lightningLight.position.set(rocketModel.position.x, rocketModel.position.y + 100, rocketModel.position.z);
  }

  // Drifting clouds in the twilight sky
  if (skyClouds && skyClouds.children) {
    skyClouds.children.forEach((cloud, index) => {
      cloud.position.x += Math.sin(elapsedTime * 0.05 + index) * 0.08;
      cloud.position.z += 0.03; // slowly drift forward
      if (cloud.position.z > 100) cloud.position.z = -500; // loop back
    });
  }
  
  // Update dynamic fire/plasma texture scroll
  if (fireNoiseTexture) {
    fireNoiseTexture.offset.y -= 1.8 * clock.getDelta(); // Frame-rate independent scrolling
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
      if (cameraMode === "orbit") {
        cameraRig.targetLook.copy(rocketModel.position);
      } else if (cameraMode === "reentry") {
        cameraRig.targetPos.set(
          rocketModel.position.x + 3.5,
          rocketModel.position.y + 4.0,
          rocketModel.position.z + 10.0
        );
        cameraRig.targetLook.set(
          rocketModel.position.x - 2.0,
          rocketModel.position.y + 7.0,
          rocketModel.position.z - 25.0
        );
      } else if (cameraMode === "landing") {
        cameraRig.targetLook.set(
          rocketModel.position.x,
          rocketModel.position.y + 3.0,
          rocketModel.position.z
        );
      }
    }
    
    // Smoothly lerp towards rig targets
    camera.position.lerp(cameraRig.targetPos, cameraRig.lerpSpeed);
    actualLookAtTarget.lerp(cameraRig.targetLook, cameraRig.lerpSpeed);
    
    // Add non-cumulative camera shake
    const activeShake = (cameraMode === "reentry" ? 0.15 * shaderUniforms.plasmaIntensity.value : 0) + cameraRig.shakeIntensity * 0.15;
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
