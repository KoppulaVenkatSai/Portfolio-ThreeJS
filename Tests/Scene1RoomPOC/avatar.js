import * as THREE from 'three';
import gsap from 'gsap';

export class TechAvatar {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = "TechAvatarGroup";

    // Materials
    this.suitMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.3,
      metalness: 0.7,
      envMapIntensity: 1.0
    });

    this.accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.2,
      metalness: 0.8
    });

    this.visorMaterial = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.75
    });

    this.jointMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.5,
      metalness: 0.5
    });

    this.glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6
    });

    this.buildBody();
    this.setupWavingAnimation();
  }

  buildBody() {
    // 1. Torso / Suit Chest
    const torsoGeom = new THREE.CylinderGeometry(0.35, 0.25, 0.8, 16);
    const torso = new THREE.Mesh(torsoGeom, this.suitMaterial);
    torso.position.y = 0.8;
    this.group.add(torso);

    // Chest Emblem / Reactor Core
    const coreGeom = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16);
    coreGeom.rotateX(Math.PI / 2);
    const core = new THREE.Mesh(coreGeom, this.visorMaterial);
    core.position.set(0, 0.95, 0.26);
    this.group.add(core);

    // 2. Helmet & Visor
    const helmetGeom = new THREE.SphereGeometry(0.32, 24, 24);
    const helmet = new THREE.Mesh(helmetGeom, this.suitMaterial);
    helmet.position.y = 1.45;
    this.group.add(helmet);

    // Visor (Front Curved Shield)
    const visorGeom = new THREE.SphereGeometry(0.28, 24, 24, 0, Math.PI, 0, Math.PI / 1.5);
    visorGeom.rotateY(-Math.PI / 2);
    visorGeom.rotateX(-Math.PI / 8);
    const visor = new THREE.Mesh(visorGeom, this.visorMaterial);
    visor.position.set(0, 1.46, 0.08);
    this.group.add(visor);

    // Antenna Emitters
    const antGeom = new THREE.CylinderGeometry(0.02, 0.02, 0.25, 8);
    const antLeft = new THREE.Mesh(antGeom, this.accentMaterial);
    antLeft.position.set(-0.34, 1.6, 0);
    antLeft.rotation.z = Math.PI / 6;
    this.group.add(antLeft);

    const antRight = new THREE.Mesh(antGeom, this.accentMaterial);
    antRight.position.set(0.34, 1.6, 0);
    antRight.rotation.z = -Math.PI / 6;
    this.group.add(antRight);

    // 3. Backpack / Life Support Unit
    const packGeom = new THREE.BoxGeometry(0.5, 0.6, 0.25);
    const pack = new THREE.Mesh(packGeom, this.suitMaterial);
    pack.position.set(0, 0.9, -0.28);
    this.group.add(pack);

    // 4. Left Arm (Idle Resting Side)
    const armLeftGroup = new THREE.Group();
    armLeftGroup.position.set(-0.42, 1.1, 0);

    const shoulderL = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), this.jointMaterial);
    armLeftGroup.add(shoulderL);

    const bicepL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.4, 12), this.suitMaterial);
    bicepL.position.y = -0.2;
    armLeftGroup.add(bicepL);

    const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.35, 12), this.accentMaterial);
    forearmL.position.set(0, -0.5, 0.05);
    forearmL.rotation.x = -Math.PI / 8;
    armLeftGroup.add(forearmL);

    this.group.add(armLeftGroup);

    // 5. Right Arm (Waving Arm with Pivots)
    this.shoulderRightPivot = new THREE.Group();
    this.shoulderRightPivot.position.set(0.42, 1.15, 0);

    const shoulderR = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), this.jointMaterial);
    this.shoulderRightPivot.add(shoulderR);

    // Upper Arm raised up and outwards
    const bicepR = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.38, 12), this.suitMaterial);
    bicepR.position.set(0.15, 0.15, 0);
    bicepR.rotation.z = -Math.PI / 3;
    this.shoulderRightPivot.add(bicepR);

    // Forearm & Hand Pivot
    this.forearmRightPivot = new THREE.Group();
    this.forearmRightPivot.position.set(0.3, 0.3, 0);

    const forearmR = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.35, 12), this.accentMaterial);
    forearmR.position.y = 0.18;
    this.forearmRightPivot.add(forearmR);

    // Hand / Glove
    const handR = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), this.visorMaterial);
    handR.position.y = 0.38;
    this.forearmRightPivot.add(handR);

    this.shoulderRightPivot.add(this.forearmRightPivot);
    this.group.add(this.shoulderRightPivot);

    // 6. Legs
    const legGeom = new THREE.CylinderGeometry(0.1, 0.08, 0.7, 12);

    const legLeft = new THREE.Mesh(legGeom, this.suitMaterial);
    legLeft.position.set(-0.18, 0.35, 0);
    this.group.add(legLeft);

    const legRight = new THREE.Mesh(legGeom, this.suitMaterial);
    legRight.position.set(0.18, 0.35, 0);
    this.group.add(legRight);

    // Scale & Initial Orientation
    this.group.scale.set(1.5, 1.5, 1.5);
  }

  setupWavingAnimation() {
    // Wave forearm back and forth continuously
    gsap.to(this.forearmRightPivot.rotation, {
      z: 0.45,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Subtle torso floating up and down
    gsap.to(this.group.position, {
      y: 0.08,
      duration: 2.0,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Subtle head tilt wave
    gsap.to(this.group.rotation, {
      y: 0.1,
      duration: 3.0,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  update(time) {
    // Pulsing visor intensity
    if (this.visorMaterial) {
      this.visorMaterial.emissiveIntensity = 0.65 + Math.sin(time * 3.0) * 0.2;
    }
  }
}
