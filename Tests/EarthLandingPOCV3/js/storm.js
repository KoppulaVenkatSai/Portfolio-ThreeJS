import * as THREE from "three";
import gsap from "gsap";
import { CONFIG } from "./config.js";
import { ENGINE_STATE } from "./state.js";

// Cloud shader for flat planes scrolling vertically
const CloudShader = {
  vertex: `
    varying vec2 vUv;
    varying vec3 vWorldPos;
    void main() {
      vUv = uv;
      vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragment: `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vWorldPos;
    
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
      // Create organic cloud density
      vec2 uv = vWorldPos.xz * 0.01 + vec2(uTime * 0.12, uTime * 0.05);
      float d = noise(uv * 1.5) * 0.6 + noise(uv * 3.0) * 0.4;
      
      // vignette fade
      float vignette = smoothstep(0.5, 0.2, length(vUv - vec2(0.5)));
      
      vec3 cloudColor = vec3(0.08, 0.09, 0.12);
      gl_FragColor = vec4(cloudColor, d * vignette * 0.85);
    }
  `
};

export class StormSystem {
  constructor(scene, rocket) {
    this.scene = scene;
    this.rocket = rocket;
    this.clouds = new THREE.Group();
    this.scene.add(this.clouds);
    this.clouds.visible = false;
    
    // 1. Build Cloud Planes
    this.cloudMat = new THREE.ShaderMaterial({
      vertexShader: CloudShader.vertex,
      fragmentShader: CloudShader.fragment,
      uniforms: { uTime: { value: 0.0 } },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    
    for (let i = 0; i < 30; i++) {
      const geom = new THREE.PlaneGeometry(500, 500);
      const mesh = new THREE.Mesh(geom, this.cloudMat);
      mesh.position.set(
        THREE.MathUtils.randFloatSpread(800),
        THREE.MathUtils.randFloatSpread(200),
        THREE.MathUtils.randFloatSpread(800)
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;
      this.clouds.add(mesh);
    }
    
    // 2. Build Rain Line Segments System (streaks)
    this.rainCount = 3000;
    this.rainGeom = new THREE.BufferGeometry();
    const rainPositions = [];
    this.rainVelocities = [];
    
    for (let i = 0; i < this.rainCount; i++) {
      const x = THREE.MathUtils.randFloatSpread(160);
      const y = THREE.MathUtils.randFloatSpread(100);
      const z = THREE.MathUtils.randFloatSpread(160);
      const len = 2.0 + Math.random() * 3.0; // rain streak length
      
      // Start point
      rainPositions.push(x, y, z);
      // End point
      rainPositions.push(x, y - len, z);
      
      const speed = 140.0 + Math.random() * 70.0;
      this.rainVelocities.push(speed, speed);
    }
    
    this.rainGeom.setAttribute("position", new THREE.Float32BufferAttribute(rainPositions, 3));
    this.rainPositionsAttr = this.rainGeom.getAttribute("position");
    
    this.rainMat = new THREE.LineBasicMaterial({
      color: 0x7daed8,
      transparent: true,
      opacity: 0.0,
      depthWrite: false
    });
    
    this.rainLines = new THREE.LineSegments(this.rainGeom, this.rainMat);
    this.scene.add(this.rainLines);
    
    // 3. Build Procedural Lightning Bolt Lines
    this.lightningGeom = new THREE.BufferGeometry();
    this.lightningMat = new THREE.LineBasicMaterial({
      color: 0x88ffff,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      linewidth: 2
    });
    this.lightningSegments = new THREE.LineSegments(this.lightningGeom, this.lightningMat);
    this.scene.add(this.lightningSegments);
    
    // 4. Real light cast from lightning
    this.lightningLight = new THREE.DirectionalLight(0xaadfff, 0);
    this.lightningLight.castShadow = true;
    this.lightningLight.shadow.mapSize.width = 1024;
    this.lightningLight.shadow.mapSize.height = 1024;
    this.lightningLight.shadow.bias = -0.0005;
    this.scene.add(this.lightningLight);
  }
  
  generateLightningPaths(start, end, segments, displace) {
    const points = [];
    const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    
    midPoint.x += THREE.MathUtils.randFloatSpread(displace);
    midPoint.y += THREE.MathUtils.randFloatSpread(displace);
    midPoint.z += THREE.MathUtils.randFloatSpread(displace);
    
    if (segments <= 1) {
      points.push(start.clone(), end.clone());
    } else {
      points.push(...this.generateLightningPaths(start, midPoint, segments / 2, displace * 0.5));
      points.push(...this.generateLightningPaths(midPoint, end, segments / 2, displace * 0.5));
    }
    return points;
  }
  
  triggerStrike(rocket) {
    if (!rocket) return;
    
    const rx = rocket.position.x;
    const ry = rocket.position.y;
    const rz = rocket.position.z;
    
    const start = new THREE.Vector3(
      rx + THREE.MathUtils.randFloatSpread(100),
      ry + 120,
      rz + THREE.MathUtils.randFloatSpread(100) - 20
    );
    const end = new THREE.Vector3(
      rx + THREE.MathUtils.randFloatSpread(60),
      ry - 80,
      rz + THREE.MathUtils.randFloatSpread(60)
    );
    
    const pathPoints = this.generateLightningPaths(start, end, 16, 40);
    
    const totalCount = pathPoints.length;
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * (totalCount - 2));
      const bStart = pathPoints[idx];
      const bEnd = new THREE.Vector3(
        bStart.x + THREE.MathUtils.randFloatSpread(50),
        bStart.y - 40 - Math.random() * 20,
        bStart.z + THREE.MathUtils.randFloatSpread(50)
      );
      pathPoints.push(...this.generateLightningPaths(bStart, bEnd, 8, 18));
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
    
    this.lightningGeom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    this.lightningGeom.attributes.position.needsUpdate = true;
    
    const chosenColor = CONFIG.colors.lightningColors[Math.floor(Math.random() * CONFIG.colors.lightningColors.length)];
    const color = new THREE.Color(chosenColor);
    
    this.lightningMat.color.copy(color);
    this.lightningLight.color.copy(color);
    this.lightningLight.position.copy(start);
    this.lightningLight.target = rocket;
    
    const overlay = document.getElementById("storm-overlay");
    const flashTl = gsap.timeline();
    flashTl.to(this.lightningMat, { opacity: 0.95, duration: 0.05 });
    flashTl.to(this.lightningLight, { intensity: 15.0, duration: 0.05 }, 0);
    if (overlay) {
      flashTl.to(overlay, { opacity: 0.3, duration: 0.05, yoyo: true, repeat: 1 }, 0);
    }
    
    flashTl.to(this.lightningMat, { opacity: 0.0, duration: 0.06 });
    flashTl.to(this.lightningLight, { intensity: 0.0, duration: 0.06 }, 0.05);
    
    flashTl.to(this.lightningMat, { opacity: 0.75, duration: 0.04 }, 0.12);
    flashTl.to(this.lightningLight, { intensity: 8.0, duration: 0.04 }, 0.12);
    if (overlay) {
      flashTl.to(overlay, { opacity: 0.15, duration: 0.04, yoyo: true, repeat: 1 }, 0.12);
    }
    
    flashTl.to(this.lightningMat, { opacity: 0.0, duration: 0.12 }, 0.16);
    flashTl.to(this.lightningLight, { intensity: 0.0, duration: 0.12 }, 0.16);
  }
  
  triggerCameraLightning(camera) {
    if (!camera) return;
    
    // Pick start & end points in camera's local viewport space to ensure they are visible
    // Start at top of viewport, end at bottom, slightly in front
    const startLocal = new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(30), // Y-axis in world is local heading, so Z/X are screen plane
      THREE.MathUtils.randFloatSpread(30),
      -15 - Math.random() * 15
    );
    
    const endLocal = new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(30),
      THREE.MathUtils.randFloatSpread(30),
      -15 - Math.random() * 15
    );
    
    const start = startLocal.applyMatrix4(camera.matrixWorld);
    const end = endLocal.applyMatrix4(camera.matrixWorld);
    
    const pathPoints = this.generateLightningPaths(start, end, 16, 10);
    
    // Add simple branches for complexity
    const totalCount = pathPoints.length;
    for (let i = 0; i < 2; i++) {
      const idx = Math.floor(Math.random() * (totalCount - 2));
      const bStart = pathPoints[idx];
      const bEnd = new THREE.Vector3(
        bStart.x + THREE.MathUtils.randFloatSpread(10),
        bStart.y - 8 - Math.random() * 8,
        bStart.z + THREE.MathUtils.randFloatSpread(10)
      );
      pathPoints.push(...this.generateLightningPaths(bStart, bEnd, 8, 4));
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
    
    this.lightningGeom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    this.lightningGeom.attributes.position.needsUpdate = true;
    
    const chosenColor = CONFIG.colors.lightningColors[Math.floor(Math.random() * CONFIG.colors.lightningColors.length)];
    const color = new THREE.Color(chosenColor);
    
    this.lightningMat.color.copy(color);
    this.lightningLight.color.copy(color);
    this.lightningLight.position.copy(start);
    
    const overlay = document.getElementById("storm-overlay");
    const flashTl = gsap.timeline();
    flashTl.to(this.lightningMat, { opacity: 0.95, duration: 0.05 });
    flashTl.to(this.lightningLight, { intensity: 15.0, duration: 0.05 }, 0);
    if (overlay) {
      flashTl.to(overlay, { opacity: 0.45, duration: 0.05, yoyo: true, repeat: 1 }, 0);
    }
    
    flashTl.to(this.lightningMat, { opacity: 0.0, duration: 0.06 });
    flashTl.to(this.lightningLight, { intensity: 0.0, duration: 0.06 }, 0.05);
    
    flashTl.to(this.lightningMat, { opacity: 0.75, duration: 0.04 }, 0.12);
    flashTl.to(this.lightningLight, { intensity: 8.0, duration: 0.04 }, 0.12);
    if (overlay) {
      flashTl.to(overlay, { opacity: 0.22, duration: 0.04, yoyo: true, repeat: 1 }, 0.12);
    }
    
    flashTl.to(this.lightningMat, { opacity: 0.0, duration: 0.12 }, 0.16);
    flashTl.to(this.lightningLight, { intensity: 0.0, duration: 0.12 }, 0.16);
  }
  
  update(elapsed, delta, rocket, camera) {
    this.cloudMat.uniforms.uTime.value = elapsed;
    
    const sc = ENGINE_STATE.currentScene;
    this.clouds.visible = (sc === "STORM");
    
    // Temporarily disabled lightning crackles during whiteout
    // if (ENGINE_STATE.whiteoutOpacity > 0.1 && Math.random() < 0.25) {
    //   this.triggerCameraLightning(camera);
    // }
    
    if (sc === "STORM" || sc === "LANDING" || sc === "MANUAL") {
      this.rainMat.opacity = THREE.MathUtils.lerp(this.rainMat.opacity, 0.60, 0.05);
      
      const arr = this.rainPositionsAttr.array;
      const referenceY = rocket ? rocket.position.y : 0;
      
      for (let i = 0; i < this.rainCount; i++) {
        const idx1 = i * 6;
        const idx2 = i * 6 + 3;
        
        const speed = this.rainVelocities[i * 2];
        const dy = speed * delta;
        
        arr[idx1 + 1] -= dy;
        arr[idx2 + 1] -= dy;
        
        if (arr[idx1 + 1] < referenceY - 50.0) {
          const x = THREE.MathUtils.randFloatSpread(160);
          const y = referenceY + 50.0;
          const z = THREE.MathUtils.randFloatSpread(160);
          const len = 2.0 + Math.random() * 3.0;
          
          arr[idx1] = x;
          arr[idx1 + 1] = y;
          arr[idx1 + 2] = z;
          
          arr[idx2] = x;
          arr[idx2 + 1] = y - len;
          arr[idx2 + 2] = z;
        }
      }
      this.rainPositionsAttr.needsUpdate = true;
      
      // Move clouds down past camera to simulate continuous descent
      this.clouds.position.y += delta * 120.0;
      this.clouds.children.forEach(mesh => {
        const worldY = mesh.position.y + this.clouds.position.y;
        const refY = rocket ? rocket.position.y : 0;
        if (worldY > refY + 100.0) {
          mesh.position.y -= 200.0;
          mesh.position.x = THREE.MathUtils.randFloatSpread(800);
          mesh.position.z = THREE.MathUtils.randFloatSpread(800);
        }
      });
      
      // Programmatic progressive lightning triggers in storm scene
      if (sc === "STORM" && Math.random() < 0.02) {
        this.triggerStrike(rocket);
      }
    } else {
      this.rainMat.opacity = THREE.MathUtils.lerp(this.rainMat.opacity, 0.0, 0.1);
      this.lightningLight.intensity = 0;
      this.lightningMat.opacity = 0;
    }
  }
}
