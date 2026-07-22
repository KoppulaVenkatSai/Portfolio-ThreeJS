import * as THREE from 'three';
import { CONFIG } from './config.js';
import { 
  createGasGiantRockTexture, 
  createIndustrialRockTexture, 
  createCrystalRockTexture 
} from './textures.js';

export function getRockyNoise(x, y, z) {
  const f1 = Math.sin(x * 1.5) * Math.cos(y * 1.5) * Math.sin(z * 1.5);
  const f2 = Math.sin(x * 4.0) * Math.cos(y * 4.0) * Math.sin(z * 4.0) * 0.35;
  const f3 = Math.sin(x * 10.0) * Math.cos(y * 10.0) * Math.sin(z * 10.0) * 0.12;
  return f1 + f2 + f3;
}

export function deformSphereToRock(geometry, roughnessAmt = 0.16) {
  const position = geometry.attributes.position;
  const tempV = new THREE.Vector3();
  
  // Find max radius in geometry to scale displacement cleanly on outer vertices
  let maxR = 0;
  for (let i = 0; i < position.count; i++) {
    tempV.fromBufferAttribute(position, i);
    const r = tempV.length();
    if (r > maxR) maxR = r;
  }

  for (let i = 0; i < position.count; i++) {
    tempV.fromBufferAttribute(position, i);
    const r = tempV.length();
    const dir = tempV.clone().normalize();
    
    // Taper displacement so inner shell surfaces stay smooth and don't penetrate inner layers
    const radialFactor = maxR > 0 ? Math.pow(r / maxR, 2.0) : 1.0;
    
    const lowFreq = Math.sin(dir.x * 2.0) * Math.cos(dir.y * 2.0) * Math.sin(dir.z * 2.0);
    const highFreq = getRockyNoise(dir.x * 4.5, dir.y * 4.5, dir.z * 4.5) * 0.4;
    
    const displacement = (lowFreq * 0.22 + highFreq * 0.12) * roughnessAmt * 4.5 * radialFactor;
    tempV.addScaledVector(dir, displacement);
    position.setXYZ(i, tempV.x, tempV.y, tempV.z);
  }
  geometry.computeVertexNormals();
}

export function getGeometryCenterNormal(geometry) {
  const position = geometry.attributes.position;
  const tempV = new THREE.Vector3();
  const center = new THREE.Vector3();
  for (let i = 0; i < position.count; i++) {
    tempV.fromBufferAttribute(position, i);
    center.add(tempV);
  }
  center.divideScalar(position.count);
  return center.normalize();
}

export function createThickSphereSegment(radiusInner, radiusOuter, phiStart, phiLength, thetaStart, thetaLength, widthSegments = 16, heightSegments = 16) {
  const geometry = new THREE.BufferGeometry();
  
  const vertices = [];
  const uvs = [];
  const indices = [];

  const W = widthSegments;
  const H = heightSegments;
  const Nc = W + 1;
  const Nr = H + 1;
  const Nv = Nc * Nr;

  // Helper to get coordinates
  function getPoint(u, v, radius) {
    const phi = phiStart + u * phiLength;
    const theta = thetaStart + v * thetaLength;
    const x = - radius * Math.cos(phi) * Math.sin(theta);
    const y = radius * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return { x, y, z };
  }

  // 1. Outer shell vertices (idx 0 to Nv-1)
  for (let r = 0; r <= H; r++) {
    const v = r / H;
    for (let c = 0; c <= W; c++) {
      const u = c / W;
      const pt = getPoint(u, v, radiusOuter);
      vertices.push(pt.x, pt.y, pt.z);
      uvs.push(u, v);
    }
  }

  // 2. Inner shell vertices (idx Nv to 2*Nv-1)
  for (let r = 0; r <= H; r++) {
    const v = r / H;
    for (let c = 0; c <= W; c++) {
      const u = c / W;
      const pt = getPoint(u, v, radiusInner);
      vertices.push(pt.x, pt.y, pt.z);
      uvs.push(u, v);
    }
  }

  // Indices for outer shell (facing outwards)
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      const a = r * Nc + c;
      const b = r * Nc + (c + 1);
      const idxC = (r + 1) * Nc + c;
      const d = (r + 1) * Nc + (c + 1);

      indices.push(a, idxC, b);
      indices.push(b, idxC, d);
    }
  }

  // Indices for inner shell (facing inwards)
  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      const a = r * Nc + c + Nv;
      const b = r * Nc + (c + 1) + Nv;
      const idxC = (r + 1) * Nc + c + Nv;
      const d = (r + 1) * Nc + (c + 1) + Nv;

      indices.push(a, b, idxC);
      indices.push(b, d, idxC);
    }
  }

  // Helper to add a quad of vertices and indices for walls
  function addWallQuad(pt0_out, pt0_in, pt1_out, pt1_in, u0, v0, u1, v1, swapWinding) {
    const startIdx = vertices.length / 3;

    // Push 4 vertices specifically for this wall segment
    vertices.push(pt0_out.x, pt0_out.y, pt0_out.z); // startIdx + 0
    vertices.push(pt0_in.x, pt0_in.y, pt0_in.z);   // startIdx + 1
    vertices.push(pt1_out.x, pt1_out.y, pt1_out.z); // startIdx + 2
    vertices.push(pt1_in.x, pt1_in.y, pt1_in.z);   // startIdx + 3

    uvs.push(u0, v0, u0, v0, u1, v1, u1, v1);

    const v0_idx = startIdx + 0;
    const v2_idx = startIdx + 1;
    const v1_idx = startIdx + 2;
    const v3_idx = startIdx + 3;

    if (swapWinding) {
      indices.push(v0_idx, v1_idx, v2_idx);
      indices.push(v2_idx, v1_idx, v3_idx);
    } else {
      indices.push(v0_idx, v2_idx, v1_idx);
      indices.push(v2_idx, v3_idx, v1_idx);
    }
  }

  // Left wall (c = 0)
  for (let r = 0; r < H; r++) {
    const u = 0;
    const v0 = r / H;
    const v1 = (r + 1) / H;

    const pt0_out = getPoint(u, v0, radiusOuter);
    const pt0_in  = getPoint(u, v0, radiusInner);
    const pt1_out = getPoint(u, v1, radiusOuter);
    const pt1_in  = getPoint(u, v1, radiusInner);

    addWallQuad(pt0_out, pt0_in, pt1_out, pt1_in, u, v0, u, v1, false);
  }

  // Right wall (c = W)
  for (let r = 0; r < H; r++) {
    const u = 1;
    const v0 = r / H;
    const v1 = (r + 1) / H;

    const pt0_out = getPoint(u, v0, radiusOuter);
    const pt0_in  = getPoint(u, v0, radiusInner);
    const pt1_out = getPoint(u, v1, radiusOuter);
    const pt1_in  = getPoint(u, v1, radiusInner);

    addWallQuad(pt0_out, pt0_in, pt1_out, pt1_in, u, v0, u, v1, true);
  }

  // Top wall (r = 0)
  for (let c = 0; c < W; c++) {
    const v = 0;
    const u0 = c / W;
    const u1 = (c + 1) / W;

    const pt0_out = getPoint(u0, v, radiusOuter);
    const pt0_in  = getPoint(u0, v, radiusInner);
    const pt1_out = getPoint(u1, v, radiusOuter);
    const pt1_in  = getPoint(u1, v, radiusInner);

    addWallQuad(pt0_out, pt0_in, pt1_out, pt1_in, u0, v, u1, v, true);
  }

  // Bottom wall (r = H)
  for (let c = 0; c < W; c++) {
    const v = 1;
    const u0 = c / W;
    const u1 = (c + 1) / W;

    const pt0_out = getPoint(u0, v, radiusOuter);
    const pt0_in  = getPoint(u0, v, radiusInner);
    const pt1_out = getPoint(u1, v, radiusOuter);
    const pt1_in  = getPoint(u1, v, radiusInner);

    addWallQuad(pt0_out, pt0_in, pt1_out, pt1_in, u0, v, u1, v, false);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

export function createOrbitRing(scene, radius) {
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.15
  });
  const line = new THREE.LineLoop(geometry, material);
  scene.add(line);
  return line;
}

// ------------------------------------------
// PLANET 1: GAS GIANT (AI / REINFORCEMENT LEARNING)
// ------------------------------------------
export function buildPlanet1(scene) {
  const group = new THREE.Group();
  const config = CONFIG.orbits.p1;
  const gasTexture = createGasGiantRockTexture();
  
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x00aacc,
    map: gasTexture,
    bumpMap: gasTexture,
    bumpScale: 0.15,
    emissive: 0x00d4ff,
    emissiveIntensity: 2.5, 
    roughness: 0.8,
    metalness: 0.1
  });

  const innerMantleMat = new THREE.MeshStandardMaterial({
    color: 0x003366,
    emissive: 0x001133,
    emissiveIntensity: 0.2,
    map: gasTexture,
    bumpMap: gasTexture,
    bumpScale: 0.1,
    roughness: 0.8,
    metalness: 0.2
  });

  const outerMantleMat = new THREE.MeshStandardMaterial({
    color: 0x005588,
    emissive: 0x002244,
    emissiveIntensity: 0.15,
    map: gasTexture,
    bumpMap: gasTexture,
    bumpScale: 0.12,
    roughness: 0.8,
    metalness: 0.2
  });

  const crustMat = new THREE.MeshStandardMaterial({
    color: 0x0088bb,
    emissive: 0x003355,
    emissiveIntensity: 0.1,
    map: gasTexture,
    bumpMap: gasTexture,
    bumpScale: 0.16,
    roughness: 0.75,
    metalness: 0.15
  });

  const coreGeo = new THREE.SphereGeometry(config.size * 0.22, 32, 32);
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreMesh.castShadow = true;
  coreMesh.receiveShadow = true;
  group.add(coreMesh);

  const innerMantlePlates = [];
  const outerMantlePlates = [];
  const crustPlates = [];

  const divsPhi = 6;
  const divsTheta = 2;
  for(let i=0; i<divsPhi; i++) {
    for(let j=0; j<divsTheta; j++) {
      const phiStart = i * (Math.PI * 2 / divsPhi);
      const phiLength = Math.PI * 2 / divsPhi;
      const thetaStart = j * (Math.PI / 2);
      const thetaLength = Math.PI / 2;

      const phiMid = phiStart + phiLength / 2;
      const ySign = (j === 0) ? 1.0 : -1.0;
      const tiltAxis = new THREE.Vector3(Math.sin(phiMid), 0, Math.cos(phiMid));
      const tiltAngle = -ySign * 0.2;

      // --- Layer 2: Inner Mantle (Radius 0.27 to 0.49) ---
      const imHelper = new THREE.Group();
      group.add(imHelper);
      const imGeo = createThickSphereSegment(config.size * 0.27, config.size * 0.49, phiStart, phiLength, thetaStart, thetaLength);
      const normal = getGeometryCenterNormal(imGeo);
      deformSphereToRock(imGeo, 0.06);
      const imMesh = new THREE.Mesh(imGeo, innerMantleMat);
      imMesh.castShadow = true;
      imMesh.receiveShadow = true;
      imHelper.add(imMesh);
      innerMantlePlates.push({ helper: imHelper, normal, tiltAxis, tiltAngle });

      // --- Layer 3: Outer Mantle (Radius 0.52 to 0.73) ---
      const omHelper = new THREE.Group();
      group.add(omHelper);
      const omGeo = createThickSphereSegment(config.size * 0.52, config.size * 0.73, phiStart, phiLength, thetaStart, thetaLength);
      deformSphereToRock(omGeo, 0.08);
      const omMesh = new THREE.Mesh(omGeo, outerMantleMat);
      omMesh.castShadow = true;
      omMesh.receiveShadow = true;
      omHelper.add(omMesh);
      outerMantlePlates.push({ helper: omHelper, normal, tiltAxis, tiltAngle });

      // --- Layer 4: Crust (Radius 0.76 to 1.0) ---
      const cHelper = new THREE.Group();
      group.add(cHelper);
      const cGeo = createThickSphereSegment(config.size * 0.76, config.size * 1.0, phiStart, phiLength, thetaStart, thetaLength);
      deformSphereToRock(cGeo, 0.18);
      const cMesh = new THREE.Mesh(cGeo, crustMat);
      cMesh.castShadow = true;
      cMesh.receiveShadow = true;
      cHelper.add(cMesh);
      crustPlates.push({ helper: cHelper, normal, tiltAxis, tiltAngle });
    }
  }

  scene.add(group);
  
  return {
    group,
    coreMesh,
    innerMantlePlates,
    outerMantlePlates,
    crustPlates,
    glowMaterial: null,
    config,
    type: 'gas',
    id: 'planet1'
  };
}

// ------------------------------------------
// PLANET 2: INDUSTRIAL PLANET
// ------------------------------------------
export function buildPlanet2(scene) {
  const group = new THREE.Group();
  const config = CONFIG.orbits.p2;
  const industrialTexture = createIndustrialRockTexture();
  
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xbb2b00,
    map: industrialTexture,
    bumpMap: industrialTexture,
    bumpScale: 0.15,
    emissive: 0xff5500,
    emissiveIntensity: 2.5,
    roughness: 0.8,
    metalness: 0.1
  });

  const innerMantleMat = new THREE.MeshStandardMaterial({
    color: 0x771100,
    emissive: 0x330000,
    emissiveIntensity: 0.2,
    map: industrialTexture,
    bumpMap: industrialTexture,
    bumpScale: 0.1,
    roughness: 0.8,
    metalness: 0.1
  });

  const outerMantleMat = new THREE.MeshStandardMaterial({
    color: 0xaa3300,
    emissive: 0x551100,
    emissiveIntensity: 0.15,
    map: industrialTexture,
    bumpMap: industrialTexture,
    bumpScale: 0.12,
    roughness: 0.8,
    metalness: 0.1
  });

  const crustMat = new THREE.MeshStandardMaterial({
    color: 0xcc4400,
    emissive: 0x772200,
    emissiveIntensity: 0.1,
    map: industrialTexture,
    bumpMap: industrialTexture,
    bumpScale: 0.18,
    roughness: 0.75,
    metalness: 0.12
  });
  
  const coreGeo = new THREE.SphereGeometry(config.size * 0.22, 32, 32);
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreMesh.castShadow = true;
  coreMesh.receiveShadow = true;
  group.add(coreMesh);

  const innerMantlePlates = [];
  const outerMantlePlates = [];
  const crustPlates = [];

  const divsPhi = 6;
  const divsTheta = 2;
  for(let i=0; i<divsPhi; i++) {
    for(let j=0; j<divsTheta; j++) {
      const phiStart = i * (Math.PI * 2 / divsPhi);
      const phiLength = Math.PI * 2 / divsPhi;
      const thetaStart = j * (Math.PI / 2);
      const thetaLength = Math.PI / 2;

      const phiMid = phiStart + phiLength / 2;
      const ySign = (j === 0) ? 1.0 : -1.0;
      const tiltAxis = new THREE.Vector3(Math.sin(phiMid), 0, Math.cos(phiMid));
      const tiltAngle = -ySign * 0.2;

      // Layer 2: Inner Mantle (Radius 0.27 to 0.49)
      const imHelper = new THREE.Group();
      group.add(imHelper);
      const imGeo = createThickSphereSegment(config.size * 0.27, config.size * 0.49, phiStart, phiLength, thetaStart, thetaLength);
      const normal = getGeometryCenterNormal(imGeo);
      deformSphereToRock(imGeo, 0.08);
      const imMesh = new THREE.Mesh(imGeo, innerMantleMat);
      imMesh.castShadow = true;
      imMesh.receiveShadow = true;
      imHelper.add(imMesh);
      innerMantlePlates.push({ helper: imHelper, normal, tiltAxis, tiltAngle });

      // Layer 3: Outer Mantle (Radius 0.52 to 0.73)
      const omHelper = new THREE.Group();
      group.add(omHelper);
      const omGeo = createThickSphereSegment(config.size * 0.52, config.size * 0.73, phiStart, phiLength, thetaStart, thetaLength);
      deformSphereToRock(omGeo, 0.09);
      const omMesh = new THREE.Mesh(omGeo, outerMantleMat);
      omMesh.castShadow = true;
      omMesh.receiveShadow = true;
      omHelper.add(omMesh);
      outerMantlePlates.push({ helper: omHelper, normal, tiltAxis, tiltAngle });

      // Layer 4: Crust (Radius 0.76 to 1.0)
      const cHelper = new THREE.Group();
      group.add(cHelper);
      const cGeo = createThickSphereSegment(config.size * 0.76, config.size * 1.0, phiStart, phiLength, thetaStart, thetaLength);
      deformSphereToRock(cGeo, 0.22);
      const cMesh = new THREE.Mesh(cGeo, crustMat);
      cMesh.castShadow = true;
      cMesh.receiveShadow = true;
      cHelper.add(cMesh);
      crustPlates.push({ helper: cHelper, normal, tiltAxis, tiltAngle });
    }
  }

  scene.add(group);
  
  return {
    group,
    coreMesh,
    innerMantlePlates,
    outerMantlePlates,
    crustPlates,
    glowMaterial: null,
    config,
    type: 'industrial',
    id: 'planet2'
  };
}

// ------------------------------------------
// PLANET 3: CRYSTAL PLANET
// ------------------------------------------
export function buildPlanet3(scene) {
  const group = new THREE.Group();
  const config = CONFIG.orbits.p3;
  const crystalTexture = createCrystalRockTexture();
  
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x6600cc,
    map: crystalTexture,
    bumpMap: crystalTexture,
    bumpScale: 0.12,
    emissive: 0xb022ff,
    emissiveIntensity: 2.5,
    roughness: 0.8,
    metalness: 0.1
  });

  const innerMantleMat = new THREE.MeshStandardMaterial({
    color: 0x440099,
    emissive: 0x110044,
    emissiveIntensity: 0.2,
    map: crystalTexture,
    bumpMap: crystalTexture,
    bumpScale: 0.1,
    roughness: 0.75,
    metalness: 0.15
  });

  const outerMantleMat = new THREE.MeshStandardMaterial({
    color: 0x6600cc,
    emissive: 0x220066,
    emissiveIntensity: 0.15,
    map: crystalTexture,
    bumpMap: crystalTexture,
    bumpScale: 0.1,
    roughness: 0.75,
    metalness: 0.15
  });

  const shardMat = new THREE.MeshStandardMaterial({
    color: 0x9900ee,
    emissive: 0x550099,
    emissiveIntensity: 0.1,
    map: crystalTexture,
    bumpMap: crystalTexture,
    bumpScale: 0.14,
    roughness: 0.7,
    metalness: 0.2
  });
  
  const coreGeo = new THREE.SphereGeometry(config.size * 0.22, 32, 32);
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreMesh.castShadow = true;
  coreMesh.receiveShadow = true;
  group.add(coreMesh);

  const innerMantlePlates = [];
  const outerMantlePlates = [];
  const crustPlates = [];

  const divsPhi = 6;
  const divsTheta = 2;
  for(let i=0; i<divsPhi; i++) {
    for(let j=0; j<divsTheta; j++) {
      const phiStart = i * (Math.PI * 2 / divsPhi);
      const phiLength = Math.PI * 2 / divsPhi;
      const thetaStart = j * (Math.PI / 2);
      const thetaLength = Math.PI / 2;

      const phiMid = phiStart + phiLength / 2;
      const ySign = (j === 0) ? 1.0 : -1.0;
      const tiltAxis = new THREE.Vector3(Math.sin(phiMid), 0, Math.cos(phiMid));
      const tiltAngle = -ySign * 0.2;

      // Layer 2: Inner Mantle (Radius 0.27 to 0.49)
      const imHelper = new THREE.Group();
      group.add(imHelper);
      const imGeo = createThickSphereSegment(config.size * 0.27, config.size * 0.49, phiStart, phiLength, thetaStart, thetaLength);
      const normal = getGeometryCenterNormal(imGeo);
      deformSphereToRock(imGeo, 0.07);
      const imMesh = new THREE.Mesh(imGeo, innerMantleMat);
      imMesh.castShadow = true;
      imMesh.receiveShadow = true;
      imHelper.add(imMesh);
      innerMantlePlates.push({ helper: imHelper, normal, tiltAxis, tiltAngle });

      // Layer 3: Outer Mantle (Radius 0.52 to 0.73)
      const omHelper = new THREE.Group();
      group.add(omHelper);
      const omGeo = createThickSphereSegment(config.size * 0.52, config.size * 0.73, phiStart, phiLength, thetaStart, thetaLength);
      deformSphereToRock(omGeo, 0.07);
      const omMesh = new THREE.Mesh(omGeo, outerMantleMat);
      omMesh.castShadow = true;
      omMesh.receiveShadow = true;
      omHelper.add(omMesh);
      outerMantlePlates.push({ helper: omHelper, normal, tiltAxis, tiltAngle });

      // Layer 4: Crust (Radius 0.76 to 1.0)
      const cHelper = new THREE.Group();
      group.add(cHelper);
      const cGeo = createThickSphereSegment(config.size * 0.76, config.size * 1.0, phiStart, phiLength, thetaStart, thetaLength);
      deformSphereToRock(cGeo, 0.15);
      const cMesh = new THREE.Mesh(cGeo, shardMat);
      cMesh.castShadow = true;
      cMesh.receiveShadow = true;
      cHelper.add(cMesh);
      crustPlates.push({ helper: cHelper, normal, tiltAxis, tiltAngle });
    }
  }

  scene.add(group);
  
  return {
    group,
    coreMesh,
    innerMantlePlates,
    outerMantlePlates,
    crustPlates,
    glowMaterial: null,
    config,
    type: 'crystal',
    id: 'planet3'
  };
}
