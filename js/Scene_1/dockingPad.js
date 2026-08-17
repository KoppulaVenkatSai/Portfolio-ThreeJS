import * as THREE from 'three';

/**
 * RocketDockingPad
 * High-poly, detail-rich procedural docking platform ring and coaxial connecting boom.
 * Perfectly aligned between the Station Cabin (X=42.0, Y=-7.5, Z=10.0) and Rocket Launchpad (X=42.0, Y=-7.5, Z=30.0).
 */
export class RocketDockingPad {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = "RocketDockingPadMasterGroup";

    // Separated sub-groups for granular lifecycle management
    this.padRingGroup = new THREE.Group();
    this.padRingGroup.name = "DockingPadRingGroup";

    this.connectingBoomGroup = new THREE.Group();
    this.connectingBoomGroup.name = "DockingConnectingBoomGroup";

    this.group.add(this.connectingBoomGroup);
    this.group.add(this.padRingGroup);

    this.initMaterials();
    this.buildConnectingBoom();
    this.buildPadRing();
  }

  initMaterials() {
    // Matching station materials
    this.darkHullMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.35,
      metalness: 0.85,
      envMapIntensity: 1.0
    });

    this.lightHullMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.30,
      metalness: 0.80,
      envMapIntensity: 1.0
    });

    this.gantryAccentMat = new THREE.MeshStandardMaterial({
      color: 0x0f2b5c,
      roughness: 0.25,
      metalness: 0.90,
      envMapIntensity: 1.2
    });

    this.conduitCopperMat = new THREE.MeshStandardMaterial({
      color: 0x2e230a,
      roughness: 0.28,
      metalness: 0.88,
      envMapIntensity: 1.2
    });

    this.goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0x2e230a,
      roughness: 0.22,
      metalness: 0.94,
      envMapIntensity: 1.3
    });

    this.beaconGlowMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x38bdf8,
      emissiveIntensity: 2.5,
      roughness: 0.1,
      metalness: 0.3
    });

    this.boltSilverMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.95
    });
  }

  buildConnectingBoom() {
    // Boom spans from Cabin wall at Z=10.0 to Rocket Pad rim at Z=22.8 along X=42.0, Y=-7.5
    const startZ = 10.0;
    const endZ = 22.8;
    const length = endZ - startZ;
    const centerZ = (startZ + endZ) / 2; // 16.4

    // 1. Primary Structural Cylinder (64 segments)
    const mainBeamGeom = new THREE.CylinderGeometry(1.25, 1.25, length, 64, 1, false);
    const mainBeam = new THREE.Mesh(mainBeamGeom, this.darkHullMat);
    mainBeam.rotation.x = Math.PI / 2;
    mainBeam.position.set(42.0, -7.5, centerZ);
    mainBeam.castShadow = true;
    mainBeam.receiveShadow = true;
    this.connectingBoomGroup.add(mainBeam);

    // 2. Cabin Interface Collar (Reinforced Flange at Z=10.5)
    const cabinFlangeGeom = new THREE.CylinderGeometry(1.85, 1.85, 1.4, 64, 1, false);
    const cabinFlange = new THREE.Mesh(cabinFlangeGeom, this.gantryAccentMat);
    cabinFlange.rotation.x = Math.PI / 2;
    cabinFlange.position.set(42.0, -7.5, startZ + 0.7);
    cabinFlange.castShadow = true;
    cabinFlange.receiveShadow = true;
    this.connectingBoomGroup.add(cabinFlange);

    // 3. Pad Interface Knuckle (Joint at Z=22.2)
    const padJointGeom = new THREE.CylinderGeometry(1.75, 1.75, 1.4, 64, 1, false);
    const padJoint = new THREE.Mesh(padJointGeom, this.gantryAccentMat);
    padJoint.rotation.x = Math.PI / 2;
    padJoint.position.set(42.0, -7.5, endZ - 0.7);
    padJoint.castShadow = true;
    padJoint.receiveShadow = true;
    this.connectingBoomGroup.add(padJoint);

    // 4. Intermediate Reinforcement Sleeves (Structural hull alloy)
    [0.35, 0.65].forEach((ratio) => {
      const sleeveZ = startZ + length * ratio;
      const sleeveGeom = new THREE.CylinderGeometry(1.48, 1.48, 0.9, 64, 1, false);
      const sleeve = new THREE.Mesh(sleeveGeom, this.lightHullMat);
      sleeve.rotation.x = Math.PI / 2;
      sleeve.position.set(42.0, -7.5, sleeveZ);
      sleeve.castShadow = true;
      sleeve.receiveShadow = true;
      this.connectingBoomGroup.add(sleeve);
    });

    // 5. Dual Hydraulic Conduit Lines (Copper & Silver pipes along sides)
    const pipeLength = length + 0.4;
    [-1.42, 1.42].forEach((offsetX, i) => {
      const pipeGeom = new THREE.CylinderGeometry(0.14, 0.14, pipeLength, 32);
      const pipeMat = (i === 0) ? this.conduitCopperMat : this.lightHullMat;
      const pipe = new THREE.Mesh(pipeGeom, pipeMat);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(42.0 + offsetX, -7.5, centerZ);
      pipe.castShadow = true;
      this.connectingBoomGroup.add(pipe);

      // Pipe mounting brackets
      [0.2, 0.5, 0.8].forEach((r) => {
        const bZ = startZ + length * r;
        const bracketGeom = new THREE.BoxGeometry(0.35, 0.25, 0.35);
        const bracket = new THREE.Mesh(bracketGeom, this.darkHullMat);
        bracket.position.set(42.0 + offsetX * 0.9, -7.5, bZ);
        this.connectingBoomGroup.add(bracket);
      });
    });
  }

  buildPadRing() {
    const padCenter = new THREE.Vector3(42.0, -7.5, 30.0);

    // 1. Heavy Outer Circular Ring Platform (96 radial segments)
    // Outer radius 7.6, inner exhaust cutout radius 3.5, thickness 1.2
    const outerRingGeom = new THREE.CylinderGeometry(7.6, 7.8, 1.2, 96, 1, false);
    const outerRing = new THREE.Mesh(outerRingGeom, this.darkHullMat);
    outerRing.position.copy(padCenter);
    outerRing.castShadow = true;
    outerRing.receiveShadow = true;
    this.padRingGroup.add(outerRing);

    // 2. Beveled Top Rim Trim (Outer ring: Metallic Gold)
    const topTrimGeom = new THREE.TorusGeometry(7.4, 0.18, 24, 96);
    const topTrim = new THREE.Mesh(topTrimGeom, this.goldTrimMat);
    topTrim.rotation.x = Math.PI / 2;
    topTrim.position.set(padCenter.x, padCenter.y + 0.6, padCenter.z);
    topTrim.castShadow = true;
    this.padRingGroup.add(topTrim);

    // 3. Central Engine Exhaust Deflector Collar (Recessed inner ring)
    const innerCollarGeom = new THREE.CylinderGeometry(3.6, 3.8, 1.4, 96, 1, false);
    const innerCollar = new THREE.Mesh(innerCollarGeom, this.gantryAccentMat);
    innerCollar.position.set(padCenter.x, padCenter.y - 0.05, padCenter.z);
    innerCollar.castShadow = true;
    innerCollar.receiveShadow = true;
    this.padRingGroup.add(innerCollar);

    // Inner exhaust throat rim (Inner concentric ring: Alternate metallic copper)
    const innerRimGeom = new THREE.TorusGeometry(3.6, 0.14, 24, 96);
    const innerRim = new THREE.Mesh(innerRimGeom, this.conduitCopperMat);
    innerRim.rotation.x = Math.PI / 2;
    innerRim.position.set(padCenter.x, padCenter.y + 0.65, padCenter.z);
    this.padRingGroup.add(innerRim);

    // 4. 8 Heavy Structural Radial Spokes (Connecting inner collar to outer ring)
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      const spokeLength = 3.6;
      const spokeGeom = new THREE.BoxGeometry(0.45, 0.65, spokeLength);
      const spoke = new THREE.Mesh(spokeGeom, this.lightHullMat);

      const midDist = (3.7 + 7.3) / 2;
      const sx = padCenter.x + Math.sin(angle) * midDist;
      const sz = padCenter.z + Math.cos(angle) * midDist;

      spoke.position.set(sx, padCenter.y + 0.1, sz);
      spoke.rotation.y = angle;
      spoke.castShadow = true;
      spoke.receiveShadow = true;
      this.padRingGroup.add(spoke);
    }

    // 5. 4 Hydraulic Docking Lock Clamps (at 0°, 90°, 180°, 270°)
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI * 2) / 4 + Math.PI / 4;
      const clampDist = 4.8;
      const cx = padCenter.x + Math.sin(angle) * clampDist;
      const cz = padCenter.z + Math.cos(angle) * clampDist;

      const clampBaseGeom = new THREE.BoxGeometry(1.2, 0.75, 1.4);
      const clampBase = new THREE.Mesh(clampBaseGeom, this.darkHullMat);
      clampBase.position.set(cx, padCenter.y + 0.65, cz);
      clampBase.rotation.y = angle;
      clampBase.castShadow = true;
      this.padRingGroup.add(clampBase);

      const clampShoeGeom = new THREE.CylinderGeometry(0.35, 0.45, 0.5, 32);
      const clampShoe = new THREE.Mesh(clampShoeGeom, this.gantryAccentMat);
      clampShoe.position.set(cx, padCenter.y + 1.15, cz);
      clampShoe.castShadow = true;
      this.padRingGroup.add(clampShoe);
    }

    // 6. 4 Glowing Cyan Navigation Beacon Lenses (Perimeter guide lights)
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI * 2) / 4;
      const beaconDist = 7.1;
      const bx = padCenter.x + Math.sin(angle) * beaconDist;
      const bz = padCenter.z + Math.cos(angle) * beaconDist;

      const beaconGeom = new THREE.CylinderGeometry(0.22, 0.28, 0.25, 32);
      const beacon = new THREE.Mesh(beaconGeom, this.beaconGlowMat);
      beacon.position.set(bx, padCenter.y + 0.68, bz);
      this.padRingGroup.add(beacon);
    }

    // 7. Circular Perimeter Bolt Array (32 high-poly bolts)
    for (let i = 0; i < 32; i++) {
      const angle = (i * Math.PI * 2) / 32;
      const boltDist = 6.9;
      const bx = padCenter.x + Math.sin(angle) * boltDist;
      const bz = padCenter.z + Math.cos(angle) * boltDist;

      const boltGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16);
      const bolt = new THREE.Mesh(boltGeom, this.boltSilverMat);
      bolt.position.set(bx, padCenter.y + 0.62, bz);
      this.padRingGroup.add(bolt);
    }
  }
}
