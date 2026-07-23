import * as THREE from 'three';
import gsap from 'gsap';

export class TechAvatar {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = "VenkatAvatarGroup";

    // Palette matching 1774207987450.png
    this.skinMat = new THREE.MeshStandardMaterial({
      color: 0xe5aa85,
      roughness: 0.65,
      metalness: 0.05
    });

    this.hairMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.9,
      metalness: 0.1
    });

    this.jacketMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // Olive/grey bomber jacket
      roughness: 0.6,
      metalness: 0.15
    });

    this.tshirtMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark navy/black t-shirt
      roughness: 0.8,
      metalness: 0.05
    });

    this.pantsMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Slate grey cargo pants
      roughness: 0.7,
      metalness: 0.1
    });

    this.bootsMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.5,
      metalness: 0.2
    });

    this.eyeMat = new THREE.MeshBasicMaterial({ color: 0x09090b });
    this.mouthMat = new THREE.MeshBasicMaterial({ color: 0x881337 });

    this.buildBody();
    this.setupWavingAnimation();
  }

  buildBody() {
    // 1. Head & Hair
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.65, 0);

    const headGeom = new THREE.SphereGeometry(0.24, 24, 24);
    headGeom.scale(1, 1.15, 1);
    const head = new THREE.Mesh(headGeom, this.skinMat);
    headGroup.add(head);

    // Short Black Hair (Stylized hair helmet/tufts)
    const hairGeom = new THREE.SphereGeometry(0.255, 24, 24, 0, Math.PI * 2, 0, Math.PI / 1.7);
    const hairBase = new THREE.Mesh(hairGeom, this.hairMat);
    hairBase.position.set(0, 0.04, -0.02);
    hairBase.rotation.x = -0.2;
    headGroup.add(hairBase);

    // Front Hair Sweep / Fringe
    const fringeGeom = new THREE.ConeGeometry(0.12, 0.22, 12);
    fringeGeom.rotateX(1.2);
    fringeGeom.rotateZ(-0.4);
    const fringe = new THREE.Mesh(fringeGeom, this.hairMat);
    fringe.position.set(-0.06, 0.22, 0.18);
    headGroup.add(fringe);

    // Eyes
    const eyeGeom = new THREE.SphereGeometry(0.028, 12, 12);
    const eyeLeft = new THREE.Mesh(eyeGeom, this.eyeMat);
    eyeLeft.position.set(-0.085, 0.03, 0.21);
    headGroup.add(eyeLeft);

    const eyeRight = new THREE.Mesh(eyeGeom, this.eyeMat);
    eyeRight.position.set(0.085, 0.03, 0.21);
    headGroup.add(eyeRight);

    // Eyebrows
    const browGeom = new THREE.BoxGeometry(0.06, 0.012, 0.01);
    const browL = new THREE.Mesh(browGeom, this.hairMat);
    browL.position.set(-0.085, 0.08, 0.22);
    browL.rotation.z = -0.1;
    headGroup.add(browL);

    const browR = new THREE.Mesh(browGeom, this.hairMat);
    browR.position.set(0.085, 0.08, 0.22);
    browR.rotation.z = 0.1;
    headGroup.add(browR);

    // Smile
    const mouthGeom = new THREE.TorusGeometry(0.04, 0.008, 8, 16, Math.PI);
    const mouth = new THREE.Mesh(mouthGeom, this.mouthMat);
    mouth.position.set(0, -0.08, 0.21);
    mouth.rotation.x = Math.PI;
    headGroup.add(mouth);

    this.group.add(headGroup);

    // 2. Neck & Torso
    const neckGeom = new THREE.CylinderGeometry(0.08, 0.09, 0.12, 16);
    const neck = new THREE.Mesh(neckGeom, this.skinMat);
    neck.position.set(0, 1.38, 0);
    this.group.add(neck);

    // T-Shirt Inner Chest
    const tshirtGeom = new THREE.CylinderGeometry(0.24, 0.2, 0.65, 16);
    const tshirt = new THREE.Mesh(tshirtGeom, this.tshirtMat);
    tshirt.position.set(0, 0.98, 0);
    this.group.add(tshirt);

    // Zipped Bomber Jacket (Outer shell)
    const jacketGeom = new THREE.CylinderGeometry(0.27, 0.23, 0.66, 16, 1, false, 0.2, Math.PI * 1.8);
    const jacket = new THREE.Mesh(jacketGeom, this.jacketMat);
    jacket.position.set(0, 0.98, 0);
    this.group.add(jacket);

    // Jacket Collar
    const collarGeom = new THREE.TorusGeometry(0.22, 0.04, 12, 16);
    const collar = new THREE.Mesh(collarGeom, this.jacketMat);
    collar.position.set(0, 1.32, 0);
    collar.rotation.x = Math.PI / 2;
    this.group.add(collar);

    // 3. Left Arm (Relaxed at side)
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.32, 1.25, 0);

    const bicepL = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.38, 12), this.jacketMat);
    bicepL.position.y = -0.19;
    leftArmGroup.add(bicepL);

    const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.35, 12), this.skinMat);
    forearmL.position.set(0, -0.5, 0.02);
    forearmL.rotation.x = -0.1;
    leftArmGroup.add(forearmL);

    this.group.add(leftArmGroup);

    // 4. Right Arm (Waving Arm matching 1774207987450.png!)
    this.rightShoulderPivot = new THREE.Group();
    this.rightShoulderPivot.position.set(0.32, 1.25, 0);

    // Upper arm raised high & angled out
    const bicepR = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.38, 12), this.jacketMat);
    bicepR.position.set(0.12, 0.14, 0);
    bicepR.rotation.z = -Math.PI / 2.8;
    this.rightShoulderPivot.add(bicepR);

    // Elbow & Forearm Pivot
    this.rightForearmPivot = new THREE.Group();
    this.rightForearmPivot.position.set(0.28, 0.28, 0);

    const forearmR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.36, 12), this.skinMat);
    forearmR.position.set(0.02, 0.18, 0.02);
    forearmR.rotation.z = 0.15;
    this.rightForearmPivot.add(forearmR);

    // Open Waving Hand with Fingers
    const handGroup = new THREE.Group();
    handGroup.position.set(0.04, 0.38, 0.02);

    const palmGeom = new THREE.BoxGeometry(0.11, 0.12, 0.03);
    const palm = new THREE.Mesh(palmGeom, this.skinMat);
    handGroup.add(palm);

    // 4 Open Fingers
    for (let f = 0; f < 4; f++) {
      const fingerGeom = new THREE.CylinderGeometry(0.012, 0.01, 0.08, 8);
      const finger = new THREE.Mesh(fingerGeom, this.skinMat);
      finger.position.set(-0.038 + f * 0.025, 0.09, 0);
      handGroup.add(finger);
    }
    // Thumb
    const thumbGeom = new THREE.CylinderGeometry(0.013, 0.011, 0.07, 8);
    const thumb = new THREE.Mesh(thumbGeom, this.skinMat);
    thumb.position.set(-0.06, 0.02, 0);
    thumb.rotation.z = Math.PI / 3;
    handGroup.add(thumb);

    this.rightForearmPivot.add(handGroup);
    this.rightShoulderPivot.add(this.rightForearmPivot);
    this.group.add(this.rightShoulderPivot);

    // 5. Legs & Boots
    const legLeftGroup = new THREE.Group();
    legLeftGroup.position.set(-0.14, 0.65, 0);
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.65, 12), this.pantsMat);
    legL.position.y = -0.325;
    legLeftGroup.add(legL);
    const bootL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.2), this.bootsMat);
    bootL.position.set(0, -0.68, 0.04);
    legLeftGroup.add(bootL);
    this.group.add(legLeftGroup);

    const legRightGroup = new THREE.Group();
    legRightGroup.position.set(0.14, 0.65, 0);
    const legR = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.65, 12), this.pantsMat);
    legR.position.y = -0.325;
    legRightGroup.add(legR);
    const bootR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.2), this.bootsMat);
    bootR.position.set(0, -0.68, 0.04);
    legRightGroup.add(bootR);
    this.group.add(legRightGroup);

    // Scale to appropriate proportions
    this.group.scale.set(1.4, 1.4, 1.4);
  }

  setupWavingAnimation() {
    // Wave hand & forearm back and forth continuously
    gsap.to(this.rightForearmPivot.rotation, {
      z: 0.35,
      duration: 0.45,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Subtle idle body breathing sway
    gsap.to(this.group.position, {
      y: '+=0.04',
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  update(time) {
    // Micro updates if needed
  }
}
