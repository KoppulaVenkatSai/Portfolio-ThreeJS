import * as THREE from 'three';

const _tempVecA = new THREE.Vector3();
const _tempVecB = new THREE.Vector3();

export class RocketAlignmentHelper {
  constructor(scene, camera, earthLandingManager, defaultEnabled = false) {
    this.scene = scene;
    this.camera = camera;
    this.earthLandingManager = earthLandingManager;
    this.isEnabled = defaultEnabled;
    this.alignmentRayGroup = null;
    this.rocketTipLocalY = 9.85;

    this.reticleOverlay = document.getElementById('alignment-reticle-overlay');
    this.toggleBtn = document.getElementById('toggle-align-guide-btn');
    this.tipCoordsElem = document.getElementById('telemetry-tip-coords');
    this.deltaElem = document.getElementById('telemetry-delta');
    this.badgeElem = document.getElementById('telemetry-status-badge');

    this.init3DRay();
    this.bindEvents();
    this.setEnabled(this.isEnabled);
  }

  init3DRay() {
    if (this.alignmentRayGroup) return;

    this.alignmentRayGroup = new THREE.Group();
    this.alignmentRayGroup.name = 'RocketAlignmentRayGroup';

    // 1. Tip marker sphere (Glowing Neon Pink / Magenta)
    const tipSphereGeom = new THREE.SphereGeometry(0.14, 16, 16);
    const tipSphereMat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.95
    });
    const tipSphere = new THREE.Mesh(tipSphereGeom, tipSphereMat);
    tipSphere.name = 'TipSphere';
    this.alignmentRayGroup.add(tipSphere);

    // 2. Main Laser Beam Line (Bright Cyan Line shooting out 150 units into deep space)
    const lineGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 150, 0)
    ]);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      linewidth: 3,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    const laserLine = new THREE.Line(lineGeom, lineMat);
    this.alignmentRayGroup.add(laserLine);

    // 3. Glowing Volumetric Core Cylinder
    const cylGeom = new THREE.CylinderGeometry(0.04, 0.04, 150, 8);
    cylGeom.translate(0, 75, 0);
    const cylMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });
    const cylMesh = new THREE.Mesh(cylGeom, cylMat);
    this.alignmentRayGroup.add(cylMesh);

    // 4. Secondary Glowing Outer Beam (Magenta glow)
    const outerCylGeom = new THREE.CylinderGeometry(0.12, 0.12, 150, 8);
    outerCylGeom.translate(0, 75, 0);
    const outerCylMat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const outerCylMesh = new THREE.Mesh(outerCylGeom, outerCylMat);
    this.alignmentRayGroup.add(outerCylMesh);

    this.alignmentRayGroup.visible = this.isEnabled;
    this.scene.add(this.alignmentRayGroup);
  }

  bindEvents() {
    this.toggleBtn?.addEventListener('click', () => {
      this.toggle();
    });
  }

  updateRocketTipBounds() {
    if (this.earthLandingManager && this.earthLandingManager.rocketModel) {
      const model = this.earthLandingManager.rocketModel;
      const localBox = new THREE.Box3();
      model.traverse((child) => {
        if (child.isMesh && child.geometry) {
          if (!child.geometry.boundingBox) child.geometry.computeBoundingBox();
          const b = child.geometry.boundingBox.clone();
          b.applyMatrix4(child.matrix);
          localBox.union(b);
        }
      });
      if (isFinite(localBox.max.y) && localBox.max.y > 0) {
        this.rocketTipLocalY = localBox.max.y;
      }
    }
  }

  setEnabled(active) {
    this.isEnabled = !!active;
    if (this.alignmentRayGroup) {
      this.alignmentRayGroup.visible = this.isEnabled;
    }
    if (this.reticleOverlay) {
      if (this.isEnabled) {
        this.reticleOverlay.classList.remove('alignment-reticle-hidden');
      } else {
        this.reticleOverlay.classList.add('alignment-reticle-hidden');
      }
    }
    if (this.toggleBtn) {
      this.toggleBtn.innerText = this.isEnabled ? '🎯 ALIGNMENT GUIDES: ON' : '🎯 ALIGNMENT GUIDES: OFF';
      this.toggleBtn.style.borderColor = this.isEnabled ? '#c084fc' : 'rgba(148, 163, 184, 0.3)';
    }
  }

  toggle(forceState) {
    const nextState = forceState !== undefined ? forceState : !this.isEnabled;
    this.setEnabled(nextState);
    return this.isEnabled;
  }

  update() {
    if (!this.isEnabled) return;
    if (!this.earthLandingManager || !this.earthLandingManager.rocketModel || !this.alignmentRayGroup) return;

    const r = this.earthLandingManager.rocketModel;
    r.updateMatrixWorld(true);

    const localTip = _tempVecA.set(0, this.rocketTipLocalY, 0);
    const worldTip = _tempVecB.copy(localTip).applyMatrix4(r.matrixWorld);

    this.alignmentRayGroup.position.copy(worldTip);
    this.alignmentRayGroup.quaternion.copy(r.quaternion);

    // Project world tip to Normalized Device Coordinates (-1 to +1)
    const ndc = worldTip.clone().project(this.camera);
    const distToCenter = Math.sqrt(ndc.x * ndc.x + ndc.y * ndc.y);

    if (this.tipCoordsElem) {
      this.tipCoordsElem.innerText = `${ndc.x >= 0 ? '+' : ''}${ndc.x.toFixed(3)}, ${ndc.y >= 0 ? '+' : ''}${ndc.y.toFixed(3)}`;
    }
    if (this.deltaElem) {
      this.deltaElem.innerText = distToCenter.toFixed(3);
    }
    if (this.badgeElem) {
      if (distToCenter < 0.04) {
        this.badgeElem.className = 'badge-aligned';
        this.badgeElem.innerText = '🎯 ALIGNED WITH CENTER!';
      } else {
        this.badgeElem.className = 'badge-aligning';
        this.badgeElem.innerText = 'ALIGNING...';
      }
    }
  }
}
