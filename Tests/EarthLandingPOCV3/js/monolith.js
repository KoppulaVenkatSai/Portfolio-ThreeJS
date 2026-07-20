import * as THREE from "three";
import { createNoiseTexture } from "./landing.js";

export function createMonitorTexture(faceType) {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 4608; // 4K Ultra HD resolution matching 24.1x45 physical screen geometry
  const ctx = canvas.getContext("2d");
  
  // High-precision sub-pixel anti-aliasing
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  
  // Deep space dark blue-black gradient background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 4608);
  bgGrad.addColorStop(0, "#010307");
  bgGrad.addColorStop(0.3, "#02050c");
  bgGrad.addColorStop(0.7, "#010307");
  bgGrad.addColorStop(1, "#000103");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 2048, 4608);
  
  // Ultra-crisp tech grid background
  ctx.strokeStyle = "rgba(0, 247, 255, 0.08)";
  ctx.lineWidth = 2.0;
  const gridSpacing = 128;
  for (let x = 0; x < 2048; x += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 4608);
    ctx.stroke();
  }
  for (let y = 0; y < 4608; y += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(2048, y);
    ctx.stroke();
  }
  
  // Outer HUD Circuit Frame & Corner Brackets (Zero shadow blur for maximum sharpness)
  ctx.save();
  ctx.shadowBlur = 0;
  ctx.lineWidth = 8.0;
  ctx.strokeStyle = "#00f7ff";
  
  // Left border line
  ctx.beginPath();
  ctx.moveTo(80, 120);
  ctx.lineTo(80, 4488);
  ctx.stroke();
  
  // Right border line
  ctx.beginPath();
  ctx.moveTo(1968, 120);
  ctx.lineTo(1968, 4488);
  ctx.stroke();
  
  // Left Circuit Nodes
  ctx.beginPath();
  ctx.moveTo(80, 1000);
  ctx.lineTo(220, 1140);
  ctx.lineTo(220, 1400);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(220, 1400, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#00f7ff";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(80, 3000);
  ctx.lineTo(240, 3140);
  ctx.lineTo(240, 3400);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(240, 3400, 20, 0, Math.PI * 2);
  ctx.fill();

  // Right Circuit Nodes
  ctx.strokeStyle = "#ffe033";
  ctx.beginPath();
  ctx.moveTo(1968, 1800);
  ctx.lineTo(1808, 1940);
  ctx.lineTo(1808, 2200);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(1808, 2200, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#ffe033";
  ctx.fill();

  ctx.strokeStyle = "#00f7ff";
  ctx.beginPath();
  ctx.moveTo(1968, 3600);
  ctx.lineTo(1788, 3740);
  ctx.lineTo(1788, 3960);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(1788, 3960, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#00f7ff";
  ctx.fill();
  
  // Top Telemetry Header Status Readouts
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#ffe033";
  ctx.font = 'bold 56px "Share Tech Mono", monospace';
  ctx.textAlign = "left";
  ctx.fillText("COORD-X // 00.325.A", 120, 220);
  ctx.fillText("SYS_LOCK // V3.2 HD", 120, 300);
  ctx.textAlign = "right";
  ctx.fillText("100% ULTRA HD", 1928, 220);
  ctx.fillText("2048X4608 // CRISP", 1928, 300);
  ctx.restore();

  if (faceType === "face1") {
    // FACE 1: VENKAT KOPPULA Personal Identity (Bright Metallic Cyan & Gold with Glow)
    ctx.shadowBlur = 24;
    ctx.shadowColor = "#00f7ff";
    ctx.fillStyle = "#00f7ff";
    ctx.font = 'bold 176px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("VENKAT", 1024, 640);
    ctx.fillText("KOPPULA", 1024, 860);

    ctx.strokeStyle = "#00f7ff";
    ctx.lineWidth = 10.0;
    ctx.beginPath();
    ctx.moveTo(360, 1020);
    ctx.lineTo(1688, 1020);
    ctx.stroke();

    // EMAIL Section
    const emailY = 1640;
    ctx.strokeStyle = "#00f7ff";
    ctx.lineWidth = 10.0;
    // Envelope Icon
    ctx.strokeRect(904, emailY - 360, 240, 160);
    ctx.beginPath();
    ctx.moveTo(904, emailY - 360);
    ctx.lineTo(1024, emailY - 260);
    ctx.lineTo(1144, emailY - 360);
    ctx.stroke();

    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 88px "Share Tech Mono", monospace';
    ctx.fillText("EMAIL:", 1024, emailY - 100);

    ctx.fillStyle = "#ffffff";
    ctx.font = 'bold 68px "Share Tech Mono", monospace';
    ctx.fillText("venky.koppula2003@gmail.com", 1024, emailY + 40);

    // CONTACT Section
    const contactY = 2700;
    ctx.strokeStyle = "#00f7ff";
    ctx.lineWidth = 10.0;
    // Smartphone Icon
    ctx.strokeRect(924, contactY - 380, 200, 280);
    ctx.strokeRect(948, contactY - 340, 152, 190);
    ctx.beginPath();
    ctx.arc(1024, contactY - 130, 14, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 88px "Share Tech Mono", monospace';
    ctx.fillText("CONTACT:", 1024, contactY + 20);

    ctx.fillStyle = "#ffffff";
    ctx.font = 'bold 72px "Share Tech Mono", monospace';
    ctx.fillText("+91 XXXXX XXXXX", 1024, contactY + 140);

    // ADDRESS Section
    const addressY = 3700;
    ctx.strokeStyle = "#ff7043";
    ctx.lineWidth = 10.0;
    // Location Pin Icon
    ctx.beginPath();
    ctx.moveTo(1024, addressY - 160);
    ctx.bezierCurveTo(924, addressY - 320, 924, addressY - 480, 1024, addressY - 480);
    ctx.bezierCurveTo(1124, addressY - 480, 1124, addressY - 320, 1024, addressY - 160);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(1024, addressY - 340, 30, 0, Math.PI * 2);
    ctx.fillStyle = "#ff7043";
    ctx.fill();

    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 88px "Share Tech Mono", monospace';
    ctx.fillText("ADDRESS:", 1024, addressY - 20);

    ctx.fillStyle = "#ffffff";
    ctx.font = 'bold 72px "Share Tech Mono", monospace';
    ctx.fillText("Hyderabad, India", 1024, addressY + 100);

    // SOCIAL LINKS (LinkedIn + GitHub Side by Side)
    const socialY = 4300;
    // LinkedIn Icon
    ctx.strokeStyle = "#00f7ff";
    ctx.lineWidth = 10.0;
    ctx.strokeRect(660, socialY - 120, 200, 200);
    ctx.fillStyle = "#00f7ff";
    ctx.font = 'bold 128px sans-serif';
    ctx.fillText("in", 760, socialY + 20);

    // GitHub Octocat Icon
    ctx.beginPath();
    ctx.arc(1300, socialY - 20, 100, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#00f7ff";
    ctx.beginPath();
    ctx.arc(1300, socialY - 4, 48, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(1264, socialY - 40);
    ctx.lineTo(1246, socialY - 80);
    ctx.lineTo(1288, socialY - 48);
    ctx.lineTo(1312, socialY - 48);
    ctx.lineTo(1354, socialY - 80);
    ctx.lineTo(1336, socialY - 40);
    ctx.fill();

  } else if (faceType === "face2") {
    // FACE 2: THE JOURNEY Timeline
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#00f7ff";
    ctx.font = 'bold 168px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("THE JOURNEY", 1024, 560);

    ctx.strokeStyle = "rgba(0, 247, 255, 0.7)";
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(360, 840);
    ctx.lineTo(360, 3500);
    ctx.stroke();

    const milestones = [
      { y: 1040, title: "SCHOOL ERA", dates: "2012 - 2020" },
      { y: 1760, title: "COLLEGE ERA", subtitle: "(CBIT/UDH)", dates: "2020 - 2024" },
      { y: 2480, title: "INDUSTRY ASCENT", subtitle: "(HBL/HEXAGON)", dates: "2024 - 2025" },
      { y: 3200, title: "AI/ML PIVOT", dates: "2025 - PRESENT" }
    ];

    milestones.forEach((m) => {
      ctx.fillStyle = "#ffe033";
      ctx.beginPath();
      ctx.arc(360, m.y, 44, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#ffe033";
      ctx.lineWidth = 8.0;
      ctx.beginPath();
      ctx.moveTo(360, m.y);
      ctx.lineTo(480, m.y);
      ctx.stroke();

      ctx.textAlign = "left";
      ctx.fillStyle = "#00f7ff";
      ctx.font = 'bold 84px "Share Tech Mono", monospace';
      ctx.fillText(m.title, 540, m.y - 30);

      if (m.subtitle) {
        ctx.fillStyle = "#ffffff";
        ctx.font = 'bold 60px "Share Tech Mono", monospace';
        ctx.fillText(m.subtitle, 540, m.y + 50);
        ctx.fillStyle = "#ffe033";
        ctx.fillText(m.dates, 540, m.y + 130);
      } else {
        ctx.fillStyle = "#ffe033";
        ctx.font = 'bold 60px "Share Tech Mono", monospace';
        ctx.fillText(m.dates, 540, m.y + 60);
      }
    });

    // Blueprint Schematic Box at Bottom
    const bpY = 3640;
    ctx.strokeStyle = "#00f7ff";
    ctx.lineWidth = 6.0;
    ctx.strokeRect(180, bpY, 1688, 440);

    ctx.strokeStyle = "rgba(0, 247, 255, 0.3)";
    for (let x = 280; x < 1800; x += 120) {
      ctx.beginPath();
      ctx.moveTo(x, bpY);
      ctx.lineTo(x, bpY + 440);
      ctx.stroke();
    }
    for (let y = bpY + 60; y < bpY + 440; y += 80) {
      ctx.beginPath();
      ctx.moveTo(180, y);
      ctx.lineTo(1868, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "#00f7ff";
    ctx.beginPath();
    ctx.arc(1024, bpY + 220, 130, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(1024, bpY + 220, 70, 0, Math.PI * 2);
    ctx.stroke();

    // Neural Net graph at bottom
    const nnY = 4200;
    const nodes = [
      [ {x: 640, y: nnY + 80}, {x: 640, y: nnY + 220} ],
      [ {x: 1024, y: nnY + 20}, {x: 1024, y: nnY + 160}, {x: 1024, y: nnY + 300} ],
      [ {x: 1408, y: nnY + 80}, {x: 1408, y: nnY + 220} ]
    ];

    ctx.strokeStyle = "rgba(0, 247, 255, 0.5)";
    ctx.lineWidth = 5.0;
    for (let c = 0; c < nodes.length - 1; c++) {
      for (let i = 0; i < nodes[c].length; i++) {
        for (let j = 0; j < nodes[c+1].length; j++) {
          ctx.beginPath();
          ctx.moveTo(nodes[c][i].x, nodes[c][i].y);
          ctx.lineTo(nodes[c+1][j].x, nodes[c+1][j].y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((col, cIdx) => {
      col.forEach((nd) => {
        ctx.fillStyle = cIdx === 2 ? "#ffe033" : "#00f7ff";
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 24, 0, Math.PI * 2);
        ctx.fill();
      });
    });

  } else if (faceType === "face3") {
    // FACE 3: THE SYSTEMS CORE
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#00f7ff";
    ctx.font = 'bold 168px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("THE SYSTEMS CORE", 1024, 560);

    // Left Column: TECH STACK
    const tsY = 1000;
    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 80px "Share Tech Mono", monospace';
    ctx.fillText("TECH STACK", 600, tsY);

    // Python Logo (X = 440, Y = tsY + 320)
    ctx.fillStyle = "#00f7ff";
    ctx.beginPath();
    ctx.roundRect(280, tsY + 200, 190, 190, [40, 40, 0, 40]);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(370, tsY + 100, 190, 190, [40, 40, 40, 0]);
    ctx.fill();
    ctx.fillStyle = "#ffe033";
    ctx.beginPath();
    ctx.roundRect(380, tsY + 300, 190, 190, [0, 40, 40, 40]);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(290, tsY + 410, 190, 190, [40, 0, 40, 40]);
    ctx.fill();

    // Rust Logo
    ctx.strokeStyle = "#ffe033";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(780, tsY + 300, 140, 0, Math.PI * 2);
    ctx.stroke();
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      ctx.beginPath();
      ctx.moveTo(780 + 140 * Math.cos(a), tsY + 300 + 140 * Math.sin(a));
      ctx.lineTo(780 + 170 * Math.cos(a), tsY + 300 + 170 * Math.sin(a));
      ctx.stroke();
    }
    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 140px sans-serif';
    ctx.fillText("R", 780, tsY + 350);

    // Interactive Network Graph
    const netY = 2000;
    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 72px "Share Tech Mono", monospace';
    ctx.fillText("INTERACTIVE NETWORK", 600, netY);

    const netNodes = [
      [ {x: 280, y: netY + 160}, {x: 280, y: netY + 360}, {x: 280, y: netY + 560} ],
      [ {x: 600, y: netY + 60}, {x: 600, y: netY + 260}, {x: 600, y: netY + 460}, {x: 600, y: netY + 660} ],
      [ {x: 920, y: netY + 160}, {x: 920, y: netY + 360}, {x: 920, y: netY + 560} ]
    ];
    ctx.strokeStyle = "rgba(0, 247, 255, 0.5)";
    ctx.lineWidth = 5.0;
    for (let c = 0; c < netNodes.length - 1; c++) {
      for (let i = 0; i < netNodes[c].length; i++) {
        for (let j = 0; j < netNodes[c+1].length; j++) {
          ctx.beginPath();
          ctx.moveTo(netNodes[c][i].x, netNodes[c][i].y);
          ctx.lineTo(netNodes[c+1][j].x, netNodes[c+1][j].y);
          ctx.stroke();
        }
      }
    }
    netNodes.forEach((col) => {
      col.forEach((nd) => {
        ctx.fillStyle = "#00f7ff";
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 28, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    // Right Column: INDUSTRIAL EXPERTISE
    const indY = 1000;
    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 80px "Share Tech Mono", monospace';
    ctx.fillText("INDUSTRIAL EXPERTISE", 1440, indY);

    ctx.fillStyle = "#00f7ff";
    ctx.font = 'bold 60px "Share Tech Mono", monospace';
    ctx.fillText("OIL REFINERIES", 1440, indY + 120);

    const refY = indY + 180;
    ctx.strokeStyle = "#00f7ff";
    ctx.lineWidth = 6;
    ctx.strokeRect(1200, refY, 480, 500);

    ctx.fillStyle = "rgba(0, 247, 255, 0.35)";
    ctx.fillRect(1250, refY + 100, 120, 360);
    ctx.fillRect(1450, refY + 160, 160, 300);

    ctx.fillStyle = "#00f7ff";
    ctx.fillText("GAS TURBINES", 1440, indY + 800);
    const gtY = indY + 860;
    ctx.strokeRect(1200, gtY, 480, 500);
    ctx.beginPath();
    ctx.ellipse(1440, gtY + 250, 180, 120, 0, 0, Math.PI * 2);
    ctx.stroke();

  } else if (faceType === "face4") {
    // FACE 4: SYSTEM STATUS Telemetry Radar & Logs
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#00f7ff";
    ctx.font = 'bold 168px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("SYSTEM STATUS", 1024, 560);

    const paramY = 1400;
    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 80px "Share Tech Mono", monospace';
    ctx.fillText("PARAMETERS", 1024, paramY);

    ctx.textAlign = "left";
    ctx.fillStyle = "#ffffff";
    ctx.font = '56px "Share Tech Mono", monospace';
    ctx.fillText("TEMP: 342.5 K", 300, paramY + 160);
    ctx.fillText("PRESSURE: 1.02 ATM", 300, paramY + 280);
    ctx.fillText("THRUST: 89.2%", 300, paramY + 400);
    ctx.fillText("LOCK: SECURED", 300, paramY + 520);

    const logY = 2800;
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffe033";
    ctx.font = 'bold 80px "Share Tech Mono", monospace';
    ctx.fillText("TELEMETRY LOGS", 1024, logY);

    const logLines = [
      "> CONNECTING TO CORE SENSORS...",
      "> TELEMETRY STREAM: OPTIMAL",
      "> FLIGHT SYSTEMS BALANCED",
      "> ATMOSPHERIC ENTRY STABLE",
      "> MONOLITH HUD ACTIVE",
      "> READY FOR CORE SYNC.",
      "> ALL SYSTEMS STATUS: ACTIVE"
    ];

    ctx.textAlign = "left";
    ctx.fillStyle = "#00f7ff";
    ctx.font = 'bold 64px "Share Tech Mono", monospace';
    logLines.forEach((line, idx) => {
      ctx.fillText(line, 200, logY + 160 + idx * 150);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  return texture;
}

export class MonolithManager {
  constructor(scene) {
    this.scene = scene;
    
    // Initialize 4K HD textures & materials with 16x Anisotropic filtering
    this.frontScreenTex = createMonitorTexture("face1");
    this.rightScreenTex = createMonitorTexture("face2");
    this.backScreenTex = createMonitorTexture("face3");
    this.leftScreenTex = createMonitorTexture("face4");
    
    const configureHDTexture = (tex) => {
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.anisotropy = 16;
      tex.needsUpdate = true;
    };

    configureHDTexture(this.frontScreenTex);
    configureHDTexture(this.rightScreenTex);
    configureHDTexture(this.backScreenTex);
    configureHDTexture(this.leftScreenTex);

    // Ultra-Realistic metallic monolith body material
    this.monolithNoiseTexture = createNoiseTexture(512, 512, '#1a2332', '#070b12');
    this.monolithNoiseTexture.repeat.set(6, 18);
    this.monolithMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      map: this.monolithNoiseTexture,
      bumpMap: this.monolithNoiseTexture,
      bumpScale: 0.04,
      roughness: 0.18,
      metalness: 0.95
    });

    const createScreenMaterial = (tex) => {
      return new THREE.MeshStandardMaterial({
        map: tex,
        emissiveMap: tex,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 1.0,
        metalness: 0.85,
        roughness: 0.12,
        bumpMap: this.monolithNoiseTexture,
        bumpScale: 0.02,
        side: THREE.DoubleSide
      });
    };

    this.frontScreenMat = createScreenMaterial(this.frontScreenTex);
    this.backScreenMat = createScreenMaterial(this.backScreenTex);
    this.rightScreenMat = createScreenMaterial(this.rightScreenTex);
    this.leftScreenMat = createScreenMaterial(this.leftScreenTex);
    
    this.slabTexture = createNoiseTexture(256, 256, '#181d28', '#0b0d13');
    this.slabMat = new THREE.MeshStandardMaterial({
      map: this.slabTexture,
      bumpMap: this.slabTexture,
      bumpScale: 0.08,
      roughness: 0.85,
      metalness: 0.15
    });
    
    this.padTexture = createNoiseTexture(256, 256, '#3a4454', '#202632');
    this.padMat = new THREE.MeshStandardMaterial({
      map: this.padTexture,
      bumpMap: this.padTexture,
      bumpScale: 0.05,
      roughness: 0.65,
      metalness: 0.35
    });
  }
  
  configureMonolith(monolithScene) {
    let frontScreenMesh = null;
    
    monolithScene.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        
        if (node.name.includes("Monolith")) {
          node.material = this.monolithMat;
          // Scale body to match wide, solid, blocky cubical monolith tower (width 24, height 50, depth 24)
          node.scale.set(4.0, 0.71, 4.0);
        } else if (node.name.includes("Cube.006") || node.name.includes("Cube006")) {
          // Local Z = -32.95 (directly in front of camera at Z = -36.13 looking towards -74.29!)
          frontScreenMesh = node;
          node.geometry = new THREE.PlaneGeometry(1, 1);
          node.material = this.frontScreenMat;
          node.position.set(0, 22.5, -32.95);
          node.scale.set(24.1, 45.0, 1.0);
          node.rotation.y = 0; // Face camera un-mirrored
        } else if (node.name.includes("Cube.007") || node.name.includes("Cube007")) {
          // Local Z = -57.05 (back face facing away)
          node.geometry = new THREE.PlaneGeometry(1, 1);
          node.material = this.backScreenMat;
          node.position.set(0, 22.5, -57.05);
          node.scale.set(24.1, 45.0, 1.0);
          node.rotation.y = Math.PI;
        } else if (node.name.includes("LandingPad") || node.name.includes("PadGlowRing") || node.name.includes("PadCenterMetal")) {
          node.material = this.padMat;
        } else if (node.name.includes("Cube") || node.name.includes("Slab") || node.name.includes("Plate") || node.name.includes("Ring")) {
          // Hide middle horizontal slab/plate/ring meshes inside monolith structure
          node.visible = false;
        } else if (node.material) {
          node.material = this.slabMat;
        }
      }
    });
    
    if (frontScreenMesh) {
      // Clone for Right screen (Face 2: The Journey)
      this.rightScreenMesh = frontScreenMesh.clone();
      this.rightScreenMesh.name = "Cube006_right";
      this.rightScreenMesh.material = this.rightScreenMat;
      this.rightScreenMesh.position.set(12.05, 22.5, -45.0);
      this.rightScreenMesh.rotation.set(0, Math.PI / 2, 0); // Face +X (Right)
      this.rightScreenMesh.scale.set(24.1, 45.0, 1.0);
      monolithScene.add(this.rightScreenMesh);

      // Clone for Left screen (Face 4: System Status)
      this.leftScreenMesh = frontScreenMesh.clone();
      this.leftScreenMesh.name = "Cube006_left";
      this.leftScreenMesh.material = this.leftScreenMat;
      this.leftScreenMesh.position.set(-12.05, 22.5, -45.0);
      this.leftScreenMesh.rotation.set(0, -Math.PI / 2, 0); // Face -X (Left)
      this.leftScreenMesh.scale.set(24.1, 45.0, 1.0);
      monolithScene.add(this.leftScreenMesh);
    }

    if (!this.monolithTopCap) {
      // Top cap plane covering the top opening at Y = 45.0
      const capGeom = new THREE.PlaneGeometry(24.1, 24.1);
      this.monolithTopCap = new THREE.Mesh(capGeom, this.monolithMat);
      this.monolithTopCap.name = "MonolithTopCap";
      this.monolithTopCap.position.set(0, 45.0, -45.0);
      this.monolithTopCap.rotation.x = -Math.PI / 2; // Horizontal facing UP
      this.monolithTopCap.castShadow = true;
      this.monolithTopCap.receiveShadow = true;
      monolithScene.add(this.monolithTopCap);
    }
  }
  
  updateTextGlow(glowFactor) {
    this.textGlowFactor = glowFactor;
    const combinedIntensity = (this.textBrightnessFactor !== undefined ? this.textBrightnessFactor : 1.0) * (this.textGlowFactor !== undefined ? this.textGlowFactor : 1.0);
    this.updateEmissiveIntensity(combinedIntensity);
  }

  updateTextBrightness(brightnessFactor) {
    this.textBrightnessFactor = brightnessFactor;
    const combinedIntensity = (this.textBrightnessFactor !== undefined ? this.textBrightnessFactor : 1.0) * (this.textGlowFactor !== undefined ? this.textGlowFactor : 1.0);
    this.updateEmissiveIntensity(combinedIntensity);
  }

  updateEmissiveIntensity(intensity) {
    if (this.frontScreenMat && this.frontScreenMat.emissiveIntensity !== undefined) {
      this.frontScreenMat.emissiveIntensity = intensity;
      this.backScreenMat.emissiveIntensity = intensity;
      this.rightScreenMat.emissiveIntensity = intensity;
      this.leftScreenMat.emissiveIntensity = intensity;
    }
  }
}
