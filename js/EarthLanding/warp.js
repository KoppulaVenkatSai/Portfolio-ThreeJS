import * as THREE from "three";
import { ENGINE_STATE } from "./state.js";

// Shader code for capsule-based moving stars (Point billboards) and eye-of-the-storm warp tunnel
const WarpShaders = {
  stars: {
    vertex: `
      uniform float uWarpProgress;
      uniform float uWarpOffset;
      uniform float uBatchProgress;
      uniform vec3 uCameraPos;
      uniform float uTime;
      uniform float uTwinkleSpeed;
      uniform float uTwinkleRatio;
      uniform float uTwinkleDepth;
      uniform float uSizeMultiplier;
      uniform float uCentroidSpace;
      attribute float aSpeed;
      attribute float aAngle;
      attribute float aSize;
      attribute float aTwinklePhase;
      attribute float aTwinkleSpeed;
      attribute float aTwinkleMask;
      attribute float aBatch;
      attribute float aBatchDelay;
      varying vec3 vColor;
      varying float vOpacity;
      varying float vAngle;
      varying float vSpeed;
      varying float vWarpProgress;
      varying float vTwinkle;
      varying float vBatchFade;
      
      void main() {
        vSpeed = aSpeed;
        vWarpProgress = uWarpProgress;
        
        // Progressive batch-wise emergence as rocket begins moving
        // Initial resting stars (Batch 0) are already visible before the rocket starts moving
        float bStart = aBatch + aBatchDelay;
        float bFade = (aBatch < 0.01) ? 1.0 : smoothstep(bStart, bStart + 0.14, uBatchProgress);
        vBatchFade = bFade;
        
        // Calculate the base Z position, animated by the accumulated warp offset
        float zBase = position.z + (aSpeed * uWarpOffset);
        
        // Wrap Z base to keep stars in the tunnel [-500, 500]
        zBase = mod(zBase + 500.0, 1000.0) - 500.0;
        
        float spiral = aAngle; // straight trails, no rotation
        
        float r = length(position.xy);
        
        // Dynamic radial expansion and centroid inner clearance distance from the center axis
        float distFactor = clamp((zBase + 500.0) / 1000.0, 0.0, 1.0);
        float outwardSpread = mix(0.35, 2.2, distFactor) * (1.0 + uWarpProgress * 0.75);
        r = r * outwardSpread + uCentroidSpace * mix(0.4, 1.2, distFactor);
        
        // Spread stars wider when idle/slow
        r = mix(r * 1.5, r, clamp(uWarpProgress / 0.25, 0.0, 1.0));
        
        vec3 pos = vec3(
          r * cos(spiral),
          r * sin(spiral),
          zBase
        );
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Calculate the screen-space angle of the star's trajectory from the screen center
        vAngle = atan(gl_Position.y, gl_Position.x);
        
        // Natural starfield colors (mix of white, pale yellow, and pale blue)
        vec3 colorWhite = vec3(1.0, 1.0, 1.0);
        vec3 colorBlue = vec3(0.78, 0.90, 1.0);
        vec3 colorGold = vec3(1.0, 0.96, 0.84);
        
        float colorHash = fract(aSpeed * 43.123);
        vec3 starColor = mix(colorWhite, mix(colorBlue, colorGold, step(0.5, colorHash)), 0.35);
        vColor = mix(starColor, vec3(0.65, 0.88, 1.0), uWarpProgress * 0.4);
        
        // Fade out near the bounds of the tunnel
        vOpacity = smoothstep(-500.0, -350.0, zBase) * smoothstep(500.0, 350.0, zBase);
        
        // Dynamic GPU Twinkle calculation
        float twTime = uTime * uTwinkleSpeed * aTwinkleSpeed + aTwinklePhase;
        float twSine = sin(twTime);
        float twVal = pow(0.5 + 0.5 * twSine, 2.8);
        
        float isTwinkling = step(1.0 - uTwinkleRatio, aTwinkleMask);
        float twinkleFactor = mix(1.0, 1.0 - uTwinkleDepth * (1.0 - twVal), isTwinkling);
        
        // Smoothly fade out twinkle into solid streaks as warp speed ignites
        twinkleFactor = mix(twinkleFactor, 1.0, clamp(uWarpProgress * 4.0, 0.0, 1.0));
        vTwinkle = twinkleFactor;
        
        // Slight subtle point size shimmering when twinkling
        float sizeTwinkle = mix(1.0, 0.82 + 0.36 * twVal, isTwinkling * (1.0 - clamp(uWarpProgress * 4.0, 0.0, 1.0)));
        gl_PointSize = aSize * uSizeMultiplier * sizeTwinkle * (1.0 + uWarpProgress * aSpeed * 1.2);
      }
    `,
    fragment: `
      uniform float uStarsOpacity;
      varying vec3 vColor;
      varying float vOpacity;
      varying float vAngle;
      varying float vSpeed;
      varying float vWarpProgress;
      varying float vTwinkle;
      varying float vBatchFade;
      
      void main() {
        // Rotate gl_PointCoord around (0.5, 0.5) by vAngle
        vec2 p = gl_PointCoord - vec2(0.5);
        float cosA = cos(vAngle);
        float sinA = sin(vAngle);
        vec2 rp = vec2(p.x * cosA - p.y * sinA, p.x * sinA + p.y * cosA);
        
        // Progressive stretch: start as round points (halfLength=0) and stretch into long capsules
        float halfLength = (0.05 + vSpeed * 0.55) * vWarpProgress;
        float thickness = mix(0.12, 0.008, vWarpProgress); // Start thicker/rounder, get thin/sharp at warp speed
        
        // Distance to the line segment from (-halfLength, 0) to (halfLength, 0)
        float dist = length(vec2(rp.x - clamp(rp.x, -halfLength, halfLength), rp.y));
        
        // Volumetric glow and core falloff
        float core = smoothstep(thickness, 0.0, dist);
        float glow = exp(-dist * 55.0) * 0.60;
        float intensity = (core * 0.60 + glow * 0.40) * vOpacity * uStarsOpacity * vTwinkle * vBatchFade;
        
        if (intensity < 0.01) discard;
        
        gl_FragColor = vec4(vColor, intensity);
      }
    `
  },
  
  tunnel: {
    vertex: `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uWarpProgress;
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        
        vPosition = pos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragment: `
      uniform float uTime;
      uniform float uWarpProgress;
      uniform float uStarsOpacity;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      // Simplex 2D noise implementation
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx) ;
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute(
                     i.y + vec3(0.0, i1.y, 1.0 ))
                   + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 a0 = x - floor(x + 0.5);
        vec3 g0 = a0*x0.x  + h*x0.y;
        vec3 g1 = a0*x12.x + h*x12.y;
        vec3 g2 = a0*x12.z + h*x12.w;
        vec3 r = 13.0 * (m*g0 + m*g1 + m*g2);
        return r.x;
      }
      
      void main() {
        float angle = vUv.x * 6.28318;
        
        // Straight coordinates down the tunnel, scrolling forward
        vec2 uv = vec2(angle, vUv.y * 1.0 + uTime * 5.0);
        
        // Multi-layered storm clouds noise
        float n1 = snoise(uv * 1.2);
        float n2 = snoise(uv * 3.5 - vec2(0.0, uTime * 2.0));
        float stormCloud = smoothstep(0.2, 0.85, n1 * 0.65 + n2 * 0.35);
        
        // Smoothly fade out the tunnel opacity towards the far end to blend into deep space
        float tunnelFade = smoothstep(0.85, 0.35, vUv.y);
        float opacity = stormCloud * 0.6 * tunnelFade * uWarpProgress * uStarsOpacity;
        
        // Deep space storm colors: dark violet to muted cobalt blue (toned down to highlight stars)
        vec3 colorBg = vec3(0.01, 0.005, 0.02);
        vec3 colorStormEdge = vec3(0.04, 0.01, 0.10);
        vec3 colorStormCore = vec3(0.01, 0.15, 0.32);
        vec3 colorDataHighlight = vec3(0.4, 0.70, 0.95) * 0.45; 
        
        vec3 finalCol = mix(colorBg, colorStormEdge, n1 * 0.5 + 0.5);
        finalCol = mix(finalCol, colorStormCore, stormCloud);
        
        // Data packet streaks highlights (slower packet flow)
        float packet = smoothstep(0.78, 0.94, snoise(vec2(angle * 8.0, vUv.y * 4.0 - uTime * 12.0)));
        finalCol = mix(finalCol, colorDataHighlight, packet * uWarpProgress * 0.9);
        
        gl_FragColor = vec4(finalCol, opacity);
      }
    `
  }
};

export class WarpSystem {
  constructor(scene) {
    this.scene = scene;
    
    // 1. Core outer warp streaks starfield (Max capacity 3000)
    this.maxOuterStarCount = 3000;
    this.starGeom = new THREE.BufferGeometry();
    
    const numBatches = 5;
    const pos = [];
    const speeds = [];
    const angles = [];
    const sizes = [];
    const twPhases = [];
    const twSpeeds = [];
    const twMasks = [];
    const batches = [];
    const batchDelays = [];
    
    for (let i = 0; i < this.maxOuterStarCount; i++) {
      // Cylinder distribution mapping (outer region)
      const theta = Math.random() * Math.PI * 2;
      const r = 10.0 + Math.random() * 50.0;
      pos.push(r * Math.cos(theta), r * Math.sin(theta), Math.random() * 1000.0 - 500.0);
      speeds.push(0.6 + Math.random() * 1.4);
      angles.push(theta);
      sizes.push(16.0 + Math.random() * 24.0);
      twPhases.push(Math.random() * Math.PI * 2.0);
      twSpeeds.push(0.6 + Math.random() * 1.2);
      twMasks.push(Math.random());
      
      const bIdx = i % numBatches;
      batches.push((bIdx / 5.0) * 0.80);
      batchDelays.push(Math.random() * 0.04);
    }
    
    this.starGeom.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    this.starGeom.setAttribute("aSpeed", new THREE.Float32BufferAttribute(speeds, 1));
    this.starGeom.setAttribute("aAngle", new THREE.Float32BufferAttribute(angles, 1));
    this.starGeom.setAttribute("aSize", new THREE.Float32BufferAttribute(sizes, 1));
    this.starGeom.setAttribute("aTwinklePhase", new THREE.Float32BufferAttribute(twPhases, 1));
    this.starGeom.setAttribute("aTwinkleSpeed", new THREE.Float32BufferAttribute(twSpeeds, 1));
    this.starGeom.setAttribute("aTwinkleMask", new THREE.Float32BufferAttribute(twMasks, 1));
    this.starGeom.setAttribute("aBatch", new THREE.Float32BufferAttribute(batches, 1));
    this.starGeom.setAttribute("aBatchDelay", new THREE.Float32BufferAttribute(batchDelays, 1));
    
    this.warpOffset = 0.0;
    this.currentTotalStars = 2000;
    this.twinkleSpeed = 2.5;
    this.twinkleRatio = 0.70;
    this.twinkleDepth = 0.85;
    this.sizeMultiplier = 1.0;
    this.centroidSpace = 17.0;
    this.warpSpeed = 220.0;

    this.starMat = new THREE.ShaderMaterial({
      vertexShader: WarpShaders.stars.vertex,
      fragmentShader: WarpShaders.stars.fragment,
      uniforms: {
        uWarpProgress: { value: 0.0 },
        uWarpOffset: { value: 0.0 },
        uBatchProgress: { value: 0.0 },
        uCameraPos: { value: new THREE.Vector3() },
        uStarsOpacity: { value: 1.0 },
        uTime: { value: 0.0 },
        uTwinkleSpeed: { value: this.twinkleSpeed },
        uTwinkleRatio: { value: this.twinkleRatio },
        uTwinkleDepth: { value: this.twinkleDepth },
        uSizeMultiplier: { value: this.sizeMultiplier },
        uCentroidSpace: { value: this.centroidSpace }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    this.stars = new THREE.Points(this.starGeom, this.starMat);
    this.scene.add(this.stars);
    
    // 2. High-density central starfield (Max capacity 7000)
    this.maxCenterStarCount = 7000;
    this.centerGeom = new THREE.BufferGeometry();
    
    const cPos = [];
    const cSpeeds = [];
    const cAngles = [];
    const cSizes = [];
    const cTwPhases = [];
    const cTwSpeeds = [];
    const cTwMasks = [];
    const cBatches = [];
    const cBatchDelays = [];
    
    for (let i = 0; i < this.maxCenterStarCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 2.5 + Math.pow(Math.random(), 0.85) * 22.0;
      cPos.push(r * Math.cos(theta), r * Math.sin(theta), Math.random() * 1000.0 - 500.0);
      cSpeeds.push(0.3 + Math.random() * 0.7);
      cAngles.push(theta);
      cSizes.push(2.5 + Math.random() * 5.5);
      cTwPhases.push(Math.random() * Math.PI * 2.0);
      cTwSpeeds.push(0.5 + Math.random() * 1.5);
      cTwMasks.push(Math.random());
      
      const bIdx = i % numBatches;
      cBatches.push((bIdx / 5.0) * 0.80);
      cBatchDelays.push(Math.random() * 0.04);
    }
    
    this.centerGeom.setAttribute("position", new THREE.Float32BufferAttribute(cPos, 3));
    this.centerGeom.setAttribute("aSpeed", new THREE.Float32BufferAttribute(cSpeeds, 1));
    this.centerGeom.setAttribute("aAngle", new THREE.Float32BufferAttribute(cAngles, 1));
    this.centerGeom.setAttribute("aSize", new THREE.Float32BufferAttribute(cSizes, 1));
    this.centerGeom.setAttribute("aTwinklePhase", new THREE.Float32BufferAttribute(cTwPhases, 1));
    this.centerGeom.setAttribute("aTwinkleSpeed", new THREE.Float32BufferAttribute(cTwSpeeds, 1));
    this.centerGeom.setAttribute("aTwinkleMask", new THREE.Float32BufferAttribute(cTwMasks, 1));
    this.centerGeom.setAttribute("aBatch", new THREE.Float32BufferAttribute(cBatches, 1));
    this.centerGeom.setAttribute("aBatchDelay", new THREE.Float32BufferAttribute(cBatchDelays, 1));
    
    this.centerMat = new THREE.ShaderMaterial({
      vertexShader: WarpShaders.stars.vertex,
      fragmentShader: WarpShaders.stars.fragment,
      uniforms: {
        uWarpProgress: { value: 0.0 },
        uWarpOffset: { value: 0.0 },
        uBatchProgress: { value: 0.0 },
        uCameraPos: { value: new THREE.Vector3() },
        uStarsOpacity: { value: 1.0 },
        uTime: { value: 0.0 },
        uTwinkleSpeed: { value: this.twinkleSpeed },
        uTwinkleRatio: { value: this.twinkleRatio },
        uTwinkleDepth: { value: this.twinkleDepth },
        uSizeMultiplier: { value: this.sizeMultiplier },
        uCentroidSpace: { value: this.centroidSpace }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    this.centerStars = new THREE.Points(this.centerGeom, this.centerMat);
    this.scene.add(this.centerStars);
    
    // Set initial draw ranges based on default 2000 stars
    this.currentTotalStars = 2000;
    this.setStarCount(this.currentTotalStars);
    
    // 3. Warp Cylinder
    this.cylinderGeom = new THREE.CylinderGeometry(20, 20, 300, 48, 48, true);
    this.cylinderGeom.rotateX(Math.PI / 2);
    this.cylinderGeom.translate(0, 0, 150);
    
    this.cylinderMat = new THREE.ShaderMaterial({
      vertexShader: WarpShaders.tunnel.vertex,
      fragmentShader: WarpShaders.tunnel.fragment,
      uniforms: {
        uTime: { value: 0.0 },
        uWarpProgress: { value: 0.0 },
        uStarsOpacity: { value: 1.0 }
      },
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide
    });
    
    this.tunnel = new THREE.Mesh(this.cylinderGeom, this.cylinderMat);
    this.tunnel.position.set(0, 0, 50);
    this.scene.add(this.tunnel);
  }

  setStarCount(totalCount) {
    this.currentTotalStars = Math.max(100, Math.min(10000, totalCount));
    const outerCount = Math.min(this.maxOuterStarCount, Math.round(this.currentTotalStars * 0.40));
    const centerCount = Math.min(this.maxCenterStarCount, this.currentTotalStars - outerCount);

    this.starGeom.setDrawRange(0, outerCount);
    this.centerGeom.setDrawRange(0, centerCount);
  }

  setTwinkleSpeed(speed) {
    this.twinkleSpeed = Math.max(0.0, speed);
    this.starMat.uniforms.uTwinkleSpeed.value = this.twinkleSpeed;
    this.centerMat.uniforms.uTwinkleSpeed.value = this.twinkleSpeed;
  }

  setTwinkleRatio(ratio) {
    this.twinkleRatio = Math.max(0.0, Math.min(1.0, ratio));
    this.starMat.uniforms.uTwinkleRatio.value = this.twinkleRatio;
    this.centerMat.uniforms.uTwinkleRatio.value = this.twinkleRatio;
  }

  setTwinkleDepth(depth) {
    this.twinkleDepth = Math.max(0.0, Math.min(1.0, depth));
    this.starMat.uniforms.uTwinkleDepth.value = this.twinkleDepth;
    this.centerMat.uniforms.uTwinkleDepth.value = this.twinkleDepth;
  }

  setSizeMultiplier(multiplier) {
    this.sizeMultiplier = Math.max(0.1, multiplier);
    this.starMat.uniforms.uSizeMultiplier.value = this.sizeMultiplier;
    this.centerMat.uniforms.uSizeMultiplier.value = this.sizeMultiplier;
  }

  setCentroidSpace(val) {
    this.centroidSpace = Math.max(0.0, val);
    this.starMat.uniforms.uCentroidSpace.value = this.centroidSpace;
    this.centerMat.uniforms.uCentroidSpace.value = this.centroidSpace;
  }

  setWarpSpeed(val) {
    this.warpSpeed = Math.max(0.0, val);
  }
  
  update(elapsed, camera, delta) {
    const sc = ENGINE_STATE.currentScene;
    const showStars = (sc === "WARP" || sc === "INITIAL" || ENGINE_STATE.starsOpacity > 0.01);
    this.stars.visible = showStars;
    this.centerStars.visible = showStars;
    this.tunnel.visible = showStars;
    
    if (sc === "INITIAL" || ENGINE_STATE.warpProgress <= 0.0001) {
      if (sc === "INITIAL") this.warpOffset = 0.0;
    } else if (delta) {
      // Progressively accelerate speed from 200 to 300 as warpProgress increases from 0.0 to 1.0
      const progressiveSpeed = THREE.MathUtils.lerp(200.0, 300.0, ENGINE_STATE.warpProgress) * (this.warpSpeed / 250.0);
      const speedFactor = 0.015 + ENGINE_STATE.warpProgress * 0.985;
      this.warpOffset += speedFactor * delta * progressiveSpeed;
    }
    
    if (camera) {
      // Centroid of warp particles and cylinder is centered on camera's position (both X/Y and Z)
      this.starMat.uniforms.uCameraPos.value.copy(camera.position);
      this.centerMat.uniforms.uCameraPos.value.copy(camera.position);
      
      this.stars.position.copy(camera.position);
      this.stars.quaternion.copy(camera.quaternion); // Face exactly where the camera points
      
      this.centerStars.position.copy(camera.position);
      this.centerStars.quaternion.copy(camera.quaternion);
      
      this.tunnel.position.copy(camera.position);
      this.tunnel.quaternion.copy(camera.quaternion); // Face exactly where the camera points
    }
    
    const batchP = (ENGINE_STATE.starBatchProgress !== undefined) ? ENGINE_STATE.starBatchProgress : ENGINE_STATE.warpProgress;

    this.starMat.uniforms.uWarpProgress.value = ENGINE_STATE.warpProgress;
    this.starMat.uniforms.uWarpOffset.value = this.warpOffset;
    this.starMat.uniforms.uBatchProgress.value = batchP;
    this.starMat.uniforms.uStarsOpacity.value = ENGINE_STATE.starsOpacity;
    this.starMat.uniforms.uTime.value = elapsed;
    
    this.centerMat.uniforms.uWarpProgress.value = ENGINE_STATE.warpProgress;
    this.centerMat.uniforms.uWarpOffset.value = this.warpOffset;
    this.centerMat.uniforms.uBatchProgress.value = batchP;
    this.centerMat.uniforms.uStarsOpacity.value = ENGINE_STATE.starsOpacity;
    this.centerMat.uniforms.uTime.value = elapsed;
    
    this.cylinderMat.uniforms.uWarpProgress.value = ENGINE_STATE.warpProgress;
    this.cylinderMat.uniforms.uTime.value = elapsed;
    this.cylinderMat.uniforms.uStarsOpacity.value = ENGINE_STATE.starsOpacity;
  }
}
