import * as THREE from 'three';
import gsap from 'gsap';
import { createHologramShaderMaterial, createProjectorBeamMaterial } from './hologramShader.js';

/**
 * HologramScreen Class
 * Creates a futuristic 3D Holographic Selection Screen with dynamic 2D canvas UI,
 * sci-fi vector borders, volumetric projection beam, and GSAP fade transitions.
 */
export class HologramScreen {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = "HologramScreenGroup";

    this.canvasWidth = 1024;
    this.canvasHeight = 512;
    this.hoverTarget = 0; // 0: None, 1: Target A (Projects), 2: Target B (About Me)
    this.opacity = 0.0;
    this.isVisible = false;

    // Create 2D Dynamic HUD Canvas
    this.initCanvas();
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;

    // Create Shader Materials
    this.hologramMat = createHologramShaderMaterial(this.texture);
    this.beamMat = createProjectorBeamMaterial();

    // Create Main Hologram Screen Mesh
    const screenGeom = new THREE.PlaneGeometry(16.0, 8.5);
    this.screenMesh = new THREE.Mesh(screenGeom, this.hologramMat);
    this.screenMesh.name = "HologramScreenPlane";
    this.group.add(this.screenMesh);

    // Create Vector HUD Frame Accents
    this.createFrameAccents();

    // Create Volumetric Emitter Light Cone Beam
    this.createProjectorBeam();

    // Initial render of canvas UI
    this.renderCanvasUI();

    // Re-render canvas UI automatically as soon as custom web fonts ("Bebas Neue") finish loading
    if (document.fonts) {
      document.fonts.ready.then(() => {
        this.renderCanvasUI();
      });
    }
  }

  initCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.ctx = this.canvas.getContext('2d');
  }

  renderCanvasUI() {
    const ctx = this.ctx;
    const w = this.canvasWidth;
    const h = this.canvasHeight;
    const hoverBright = this.hoverBrightness !== undefined ? this.hoverBrightness : 1.0;

    ctx.clearRect(0, 0, w, h);

    // Dark semi-transparent sci-fi background
    ctx.fillStyle = 'rgba(2, 6, 23, 0.55)';
    ctx.fillRect(0, 0, w, h);

    // Outer double cyan border frame
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(18, 18, w - 36, h - 36);

    // Header Title Bar
    ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.fillRect(20, 20, w - 40, 50);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚡ NAVIGATIONAL CONSOLE // CHOOSE DESTINATION ⚡', w / 2, 45);

    // Target A Card (Left - Projects System)
    const isHoverA = this.hoverTarget === 1;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.65)';
    ctx.fillRect(40, 90, 450, 350);

    ctx.strokeStyle = isHoverA ? '#00f0ff' : 'rgba(56, 189, 248, 0.30)';
    ctx.lineWidth = isHoverA ? 3 : 2;
    ctx.strokeRect(40, 90, 450, 350);

    if (isHoverA && hoverBright > 0) {
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = Math.round(25 * hoverBright);
    } else {
      ctx.shadowBlur = 0;
    }

    // Target A Text & Graphics
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 30px "Bebas Neue", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TARGET A: KOPPULA SYSTEM', 265, 130);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px monospace';
    ctx.fillText('[PROJECTS SOLAR SYSTEM]', 265, 160);

    // Solar system icon graphics (Central star + orbit circles)
    ctx.beginPath();
    ctx.arc(265, 250, 24, 0, Math.PI * 2);
    ctx.fillStyle = '#ffea00';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(265, 250, 75, 30, 0, 0, Math.PI * 2);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(325, 238, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(265, 250, 120, 50, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(236, 72, 153, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(170, 275, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#ec4899';
    ctx.fill();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '15px sans-serif';
    ctx.fillText('Multi-colored planet network & data-star', 265, 335);

    // Action button prompt
    ctx.fillStyle = isHoverA ? '#00f0ff' : 'rgba(56, 189, 248, 0.2)';
    ctx.fillRect(80, 370, 370, 45);
    ctx.fillStyle = isHoverA ? '#020617' : '#38bdf8';
    ctx.font = 'bold 18px monospace';
    ctx.fillText(isHoverA ? '▶ LOCK & WARP TO PROJECTS' : '[ENTER SYSTEM]', 265, 392);

    ctx.shadowBlur = 0; // Reset shadow

    // Target B Card (Right - Origin Planet / About Me)
    const isHoverB = this.hoverTarget === 2;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.65)';
    ctx.fillRect(534, 90, 450, 350);

    ctx.strokeStyle = isHoverB ? '#00f0ff' : 'rgba(56, 189, 248, 0.30)';
    ctx.lineWidth = isHoverB ? 3 : 2;
    ctx.strokeRect(534, 90, 450, 350);

    if (isHoverB && hoverBright > 0) {
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = Math.round(25 * hoverBright);
    } else {
      ctx.shadowBlur = 0;
    }

    // Target B Text & Graphics
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 30px "Bebas Neue", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TARGET B: ORIGIN PLANET', 759, 130);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px monospace';
    ctx.fillText('[ABOUT ME HOME BASE]', 759, 160);

    // Earth Planet graphic (Blue globe + atmosphere ring)
    ctx.beginPath();
    ctx.arc(759, 250, 45, 0, Math.PI * 2);
    const globeGrad = ctx.createRadialGradient(740, 230, 10, 759, 250, 45);
    globeGrad.addColorStop(0, '#60a5fa');
    globeGrad.addColorStop(0.7, '#1d4ed8');
    globeGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = globeGrad;
    ctx.fill();

    // Atmosphere halo ring
    ctx.beginPath();
    ctx.arc(759, 250, 52, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Location pin marker icon
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(759, 230, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '15px sans-serif';
    ctx.fillText('High-fidelity Earth & personal dossier', 759, 335);

    // Action button prompt
    ctx.fillStyle = isHoverB ? '#00f0ff' : 'rgba(56, 189, 248, 0.2)';
    ctx.fillRect(574, 370, 370, 45);
    ctx.fillStyle = isHoverB ? '#020617' : '#38bdf8';
    ctx.font = 'bold 18px monospace';
    ctx.fillText(isHoverB ? '▶ LOCK & DE-ORBIT TO EARTH' : '[DE-ORBIT TO EARTH]', 759, 392);

    ctx.shadowBlur = 0; // Reset shadow

    // Footer Bar
    ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.font = '13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SYSTEM STATUS: ONLINE // ENCRYPTION: 256-BIT // HOVER TO INSPECT TARGET', w / 2, 470);

    if (this.texture) {
      this.texture.needsUpdate = true;
    }
  }

  createFrameAccents() {
    // Vector lines on screen corners for sharp sci-fi look
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      linewidth: 2,
      transparent: true,
      opacity: 0.0
    });
    this.lineMat = lineMat;

    const points = [
      // Top Left Corner
      new THREE.Vector3(-8.3, 4.5, 0.01),
      new THREE.Vector3(-7.5, 4.5, 0.01),
      new THREE.Vector3(-8.3, 4.5, 0.01),
      new THREE.Vector3(-8.3, 3.7, 0.01),

      // Top Right Corner
      new THREE.Vector3(8.3, 4.5, 0.01),
      new THREE.Vector3(7.5, 4.5, 0.01),
      new THREE.Vector3(8.3, 4.5, 0.01),
      new THREE.Vector3(8.3, 3.7, 0.01),

      // Bottom Left Corner
      new THREE.Vector3(-8.3, -4.5, 0.01),
      new THREE.Vector3(-7.5, -4.5, 0.01),
      new THREE.Vector3(-8.3, -4.5, 0.01),
      new THREE.Vector3(-8.3, -3.7, 0.01),

      // Bottom Right Corner
      new THREE.Vector3(8.3, -4.5, 0.01),
      new THREE.Vector3(7.5, -4.5, 0.01),
      new THREE.Vector3(8.3, -4.5, 0.01),
      new THREE.Vector3(8.3, -3.7, 0.01)
    ];

    const geom = new THREE.BufferGeometry().setFromPoints(points);
    const frameLines = new THREE.LineSegments(geom, lineMat);
    this.group.add(frameLines);
  }

  createProjectorBeam() {
    // Volumetric cone projecting upwards from station emitter base (below screen) to screen base
    const coneGeom = new THREE.CylinderGeometry(8.0, 0.5, 12.0, 32, 1, true);
    coneGeom.translate(0, -6.0, 0); // Position base at emitter origin
    this.beamMesh = new THREE.Mesh(coneGeom, this.beamMat);
    this.beamMesh.rotation.x = 0.2; // Angle slightly towards camera
    this.group.add(this.beamMesh);
  }

  setBeamTransform(scaleXZ, scaleY, posY, rotX) {
    if (this.beamMesh) {
      this.beamMesh.scale.set(scaleXZ, scaleY, scaleXZ);
      this.beamMesh.position.y = posY;
      this.beamMesh.rotation.x = rotX;
    }
  }

  setBeamProps(opacity, rayDensity, raySpeed) {
    if (this.beamMat) {
      this.beamMat.uniforms.uBeamOpacity.value = opacity;
      this.beamMat.uniforms.uRayDensity.value = rayDensity;
      this.beamMat.uniforms.uRaySpeed.value = raySpeed;
    }
  }

  setHoverTarget(targetId) {
    if (this.hoverTarget !== targetId) {
      this.hoverTarget = targetId;
      this.hologramMat.uniforms.uHoverTarget.value = targetId;
      this.renderCanvasUI();
    }
  }

  setHoverBrightness(val) {
    if (this.hologramMat) {
      this.hologramMat.uniforms.uHoverBrightness.value = val;
    }
  }

  update(elapsedTime) {
    if (this.hologramMat) {
      this.hologramMat.uniforms.uTime.value = elapsedTime;
    }
    if (this.beamMat) {
      this.beamMat.uniforms.uTime.value = elapsedTime;
    }
  }

  fadeIn(duration = 1.2) {
    this.isVisible = true;
    this.group.visible = true;

    gsap.to(this, {
      opacity: 1.0,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (this.hologramMat) this.hologramMat.uniforms.uOpacity.value = this.opacity;
        if (this.beamMat) this.beamMat.uniforms.uOpacity.value = this.opacity;
        if (this.lineMat) this.lineMat.opacity = this.opacity;
      }
    });
  }

  fadeOut(duration = 0.8) {
    gsap.to(this, {
      opacity: 0.0,
      duration: duration,
      ease: 'power2.in',
      onUpdate: () => {
        if (this.hologramMat) this.hologramMat.uniforms.uOpacity.value = this.opacity;
        if (this.beamMat) this.beamMat.uniforms.uOpacity.value = this.opacity;
        if (this.lineMat) this.lineMat.opacity = this.opacity;
      },
      onComplete: () => {
        this.isVisible = false;
        this.group.visible = false;
      }
    });
  }
}
