import * as THREE from 'three';

/**
 * Custom GLSL Shader for Sci-Fi Hologram Screen
 * Features animated scanlines, Fresnel rim glow, energy flicker, and dynamic transparency.
 */
export function createHologramShaderMaterial(texture) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uTexture: { value: texture },
      uOpacity: { value: 0.0 },
      uColor: { value: new THREE.Color(0x38bdf8) },
      uHoverTarget: { value: 0 } // 0: none, 1: Target A (Projects), 2: Target B (About Me)
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform sampler2D uTexture;
      uniform float uOpacity;
      uniform vec3 uColor;
      uniform float uHoverTarget;

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec4 texColor = texture2D(uTexture, vUv);

        // Moving horizontal scanlines
        float scanline = 0.85 + 0.15 * sin(vUv.y * 140.0 - uTime * 7.0);

        // Fresnel edge glow halo
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.2) * 0.45;

        // Subtle energy flicker
        float flicker = 0.96 + 0.04 * sin(uTime * 28.0);

        // Color boost & tint
        vec3 finalColor = texColor.rgb + (uColor * (fresnel + 0.1));

        // Hover target highlight pulse
        if (uHoverTarget == 1.0 && vUv.x < 0.5) {
          finalColor += vec3(0.1, 0.25, 0.4) * (0.8 + 0.2 * sin(uTime * 10.0));
        } else if (uHoverTarget == 2.0 && vUv.x >= 0.5) {
          finalColor += vec3(0.1, 0.25, 0.4) * (0.8 + 0.2 * sin(uTime * 10.0));
        }

        float alpha = texColor.a * uOpacity * scanline * flicker;
        // Ensure edge fresnel contributes subtle ambient glow even on low tex opacity
        alpha = clamp(alpha + (fresnel * 0.15 * uOpacity), 0.0, 1.0);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
}

/**
 * Custom GLSL Shader for Volumetric Holographic Emitter Light Cone
 */
export function createProjectorBeamMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: 0.0 },
      uColor: { value: new THREE.Color(0x38bdf8) }
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uOpacity;
      uniform vec3 uColor;

      varying vec2 vUv;

      void main() {
        // Vertical beam intensity gradient (bright at bottom emitter, fading towards screen top)
        float beamGradient = pow(1.0 - vUv.y, 1.5);
        
        // Moving light beam energy waves
        float waves = 0.7 + 0.3 * sin(vUv.y * 20.0 - uTime * 4.0);

        vec3 color = uColor * 1.5;
        float alpha = beamGradient * waves * uOpacity * 0.25;

        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
}
