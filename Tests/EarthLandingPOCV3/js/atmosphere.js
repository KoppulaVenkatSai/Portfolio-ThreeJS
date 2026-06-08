import * as THREE from "three";
import { ENGINE_STATE } from "./state.js";

const PlasmaShaders = {
  burnShell: {
    vertex: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      uniform float uTime;
      uniform float uFriction;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        // Physical heat wave displacement in local space
        float ripple = sin(uTime * 32.0 + position.y * 18.0) * 0.015 * uFriction;
        vec3 displaced = position + normal * (0.06 + ripple);
        vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragment: `
      uniform float uTime;
      uniform float uFriction;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      
      // Simple 2D Pseudo Random Noise
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
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        // Fresnel glow
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        
        // Ripple coordinate mappings
        vec2 uv = vec2(vUv.x, vUv.y - uTime * 6.5);
        float n = noise(uv * 12.0) * 0.6 + noise(uv * 24.0) * 0.4;
        
        // Color transition: faint purple haze -> orange cocoon
        vec3 colorPurple = vec3(0.5, 0.1, 0.9);
        vec3 colorOrange = vec3(1.0, 0.35, 0.0);
        vec3 colorYellow = vec3(1.0, 0.85, 0.15);
        
        vec3 baseColor = mix(colorPurple, colorOrange, smoothstep(0.2, 0.75, uFriction));
        vec3 finalColor = mix(baseColor, colorYellow, n * fresnel);
        
        float alpha = fresnel * uFriction * (0.2 + 0.8 * n) * 0.85;
        
        gl_FragColor = vec4(finalColor * 2.5, alpha);
      }
    `
  }
};

export class AtmosphereSystem {
  constructor(scene) {
    this.scene = scene;
    this.plasmaShells = [];
    
    // Custom plasma shader material
    this.plasmaMat = new THREE.ShaderMaterial({
      vertexShader: PlasmaShaders.burnShell.vertex,
      fragmentShader: PlasmaShaders.burnShell.fragment,
      uniforms: {
        uTime: { value: 0.0 },
        uFriction: { value: 0.0 }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
  }
  
  createShell(rocketModel) {
    if (!rocketModel) return;
    
    const meshes = [];
    rocketModel.traverse((node) => {
      if (node.isMesh) {
        meshes.push(node);
      }
    });
    
    meshes.forEach((mesh) => {
      const shell = new THREE.Mesh(mesh.geometry.clone(), this.plasmaMat);
      mesh.add(shell);
      this.plasmaShells.push(shell);
    });
  }
  
  update(elapsed) {
    this.plasmaMat.uniforms.uTime.value = elapsed;
    this.plasmaMat.uniforms.uFriction.value = ENGINE_STATE.atmosphereFriction;
  }
}
