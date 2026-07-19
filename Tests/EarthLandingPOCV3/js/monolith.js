import * as THREE from "three";
import { createNoiseTexture } from "./landing.js";

export function createMonitorTexture(faceType) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 2304; // 1:2.25 aspect ratio matching 20x45 physical screen geometry
  const ctx = canvas.getContext("2d");
  
  // Fill background with a dark blue-black gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 2304);
  bgGrad.addColorStop(0, "#020306");
  bgGrad.addColorStop(0.5, "#010204");
  bgGrad.addColorStop(1, "#020306");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 2304);
  
  // Draw digital grid overlay
  ctx.strokeStyle = "rgba(0, 240, 255, 0.04)";
  ctx.lineWidth = 1.5;
  const gridSpacing = 64;
  for (let x = 0; x < 1024; x += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 2304);
    ctx.stroke();
  }
  for (let y = 0; y < 2304; y += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }
  
  // Draw Circuit borders & frame
  ctx.save();
  ctx.shadowBlur = 12;
  ctx.lineWidth = 4.0;
  ctx.strokeStyle = "rgba(0, 240, 255, 0.85)";
  ctx.shadowColor = "#00f0ff";
  
  // Left border line
  ctx.beginPath();
  ctx.moveTo(40, 60);
  ctx.lineTo(40, 2244);
  ctx.stroke();
  
  // Right border line
  ctx.beginPath();
  ctx.moveTo(984, 60);
  ctx.lineTo(984, 2244);
  ctx.stroke();
  
  // Circuit nodes left
  ctx.beginPath();
  ctx.moveTo(40, 500);
  ctx.lineTo(110, 570);
  ctx.lineTo(110, 700);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(110, 700, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#00f0ff";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(40, 1500);
  ctx.lineTo(120, 1570);
  ctx.lineTo(120, 1700);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(120, 1700, 10, 0, Math.PI * 2);
  ctx.fill();

  // Circuit nodes right
  ctx.strokeStyle = "rgba(255, 215, 0, 0.85)";
  ctx.shadowColor = "#ffd700";
  ctx.beginPath();
  ctx.moveTo(984, 900);
  ctx.lineTo(904, 970);
  ctx.lineTo(904, 1100);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(904, 1100, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#ffd700";
  ctx.fill();

  ctx.strokeStyle = "rgba(0, 240, 255, 0.85)";
  ctx.shadowColor = "#00f0ff";
  ctx.beginPath();
  ctx.moveTo(984, 1800);
  ctx.lineTo(894, 1870);
  ctx.lineTo(894, 1980);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(894, 1980, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#00f0ff";
  ctx.fill();
  
  // Telemetry headers at top
  ctx.shadowBlur = 0;
  ctx.fillStyle = "rgba(255, 215, 0, 0.85)";
  ctx.font = 'bold 28px "Share Tech Mono", monospace';
  ctx.textAlign = "left";
  ctx.fillText("COORD-X // 00.325.A", 60, 110);
  ctx.fillText("SYS_LOCK // V3.2", 60, 150);
  ctx.textAlign = "right";
  ctx.fillText("84% SYSTEM", 964, 110);
  ctx.fillText("105X700 // COREGRA", 964, 150);
  ctx.restore();

  if (faceType === "face1") {
    // FACE 1: VENKAT KOPPULA Personal Identity
    ctx.shadowBlur = 25;
    ctx.shadowColor = "#00f0ff";
    ctx.fillStyle = "#00f0ff";
    ctx.font = 'bold 92px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("VENKAT", 512, 320);
    ctx.fillText("KOPPULA", 512, 430);

    ctx.strokeStyle = "rgba(0, 240, 255, 0.6)";
    ctx.lineWidth = 5.0;
    ctx.beginPath();
    ctx.moveTo(180, 510);
    ctx.lineTo(844, 510);
    ctx.stroke();

    // EMAIL Section
    const emailY = 820;
    ctx.shadowBlur = 15;
    ctx.strokeStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.lineWidth = 5.0;
    // Envelope Icon
    ctx.strokeRect(452, emailY - 180, 120, 80);
    ctx.beginPath();
    ctx.moveTo(452, emailY - 180);
    ctx.lineTo(512, emailY - 130);
    ctx.lineTo(572, emailY - 180);
    ctx.stroke();

    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.font = 'bold 44px "Share Tech Mono", monospace';
    ctx.fillText("EMAIL:", 512, emailY - 50);

    ctx.fillStyle = "#ffffff";
    ctx.shadowBlur = 0;
    ctx.font = 'bold 34px "Share Tech Mono", monospace';
    ctx.fillText("venky.koppula2003@gmail.com", 512, emailY + 20);

    // CONTACT Section
    const contactY = 1350;
    ctx.shadowBlur = 15;
    ctx.strokeStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.lineWidth = 5.0;
    // Smartphone Icon
    ctx.strokeRect(462, contactY - 190, 100, 140);
    ctx.strokeRect(474, contactY - 170, 76, 95);
    ctx.beginPath();
    ctx.arc(512, contactY - 65, 7, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.font = 'bold 44px "Share Tech Mono", monospace';
    ctx.fillText("CONTACT:", 512, contactY + 10);

    ctx.fillStyle = "#ffffff";
    ctx.shadowBlur = 0;
    ctx.font = 'bold 36px "Share Tech Mono", monospace';
    ctx.fillText("+91 XXXXX XXXXX", 512, contactY + 70);

    // ADDRESS Section
    const addressY = 1850;
    ctx.shadowBlur = 15;
    ctx.strokeStyle = "#ff7043";
    ctx.shadowColor = "#ff7043";
    ctx.lineWidth = 5.0;
    // Location Pin Icon
    ctx.beginPath();
    ctx.moveTo(512, addressY - 80);
    ctx.bezierCurveTo(462, addressY - 160, 462, addressY - 240, 512, addressY - 240);
    ctx.bezierCurveTo(562, addressY - 240, 562, addressY - 160, 512, addressY - 80);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(512, addressY - 170, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#ff7043";
    ctx.fill();

    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.font = 'bold 44px "Share Tech Mono", monospace';
    ctx.fillText("ADDRESS:", 512, addressY - 10);

    ctx.fillStyle = "#ffffff";
    ctx.shadowBlur = 0;
    ctx.font = 'bold 36px "Share Tech Mono", monospace';
    ctx.fillText("Hyderabad, India", 512, addressY + 50);

    // SOCIAL LINKS (LinkedIn + GitHub Side by Side)
    const socialY = 2150;
    // LinkedIn Icon
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00f0ff";
    ctx.strokeStyle = "#00f0ff";
    ctx.lineWidth = 5.0;
    ctx.strokeRect(330, socialY - 60, 100, 100);
    ctx.fillStyle = "#00f0ff";
    ctx.font = 'bold 64px sans-serif';
    ctx.fillText("in", 380, socialY + 10);

    // GitHub Octocat Icon
    ctx.beginPath();
    ctx.arc(650, socialY - 10, 50, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#00f0ff";
    ctx.beginPath();
    ctx.arc(650, socialY - 2, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(632, socialY - 20);
    ctx.lineTo(623, socialY - 40);
    ctx.lineTo(644, socialY - 24);
    ctx.lineTo(656, socialY - 24);
    ctx.lineTo(677, socialY - 40);
    ctx.lineTo(668, socialY - 20);
    ctx.fill();

  } else if (faceType === "face2") {
    // FACE 2: THE JOURNEY Timeline
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#00f0ff";
    ctx.fillStyle = "#00f0ff";
    ctx.font = 'bold 84px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("THE JOURNEY", 512, 280);

    ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(180, 420);
    ctx.lineTo(180, 1750);
    ctx.stroke();

    const milestones = [
      { y: 520, title: "SCHOOL ERA", dates: "2012 - 2020", icon: "cap" },
      { y: 880, title: "COLLEGE ERA", subtitle: "(CBIT/UDH)", dates: "2020 - 2024", icon: "book" },
      { y: 1240, title: "INDUSTRY ASCENT", subtitle: "(HBL/HEXAGON)", dates: "2024 - 2025", icon: "factory" },
      { y: 1600, title: "AI/ML PIVOT", dates: "2025 - PRESENT", icon: "pivot" }
    ];

    milestones.forEach((m) => {
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#ffd700";
      ctx.fillStyle = "#ffd700";
      ctx.beginPath();
      ctx.arc(180, m.y, 22, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 215, 0, 0.8)";
      ctx.lineWidth = 4.0;
      ctx.beginPath();
      ctx.moveTo(180, m.y);
      ctx.lineTo(240, m.y);
      ctx.stroke();

      ctx.textAlign = "left";
      ctx.shadowColor = "#00f0ff";
      ctx.fillStyle = "#00f0ff";
      ctx.font = 'bold 42px "Share Tech Mono", monospace';
      ctx.fillText(m.title, 270, m.y - 15);

      if (m.subtitle) {
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 0;
        ctx.font = 'bold 30px "Share Tech Mono", monospace';
        ctx.fillText(m.subtitle, 270, m.y + 25);
        ctx.fillStyle = "#ffd700";
        ctx.fillText(m.dates, 270, m.y + 65);
      } else {
        ctx.fillStyle = "#ffd700";
        ctx.shadowBlur = 0;
        ctx.font = 'bold 30px "Share Tech Mono", monospace';
        ctx.fillText(m.dates, 270, m.y + 30);
      }
    });

    // Blueprint Schematic Box at Bottom
    const bpY = 1820;
    ctx.strokeStyle = "rgba(0, 240, 255, 0.5)";
    ctx.lineWidth = 3.0;
    ctx.strokeRect(90, bpY, 844, 220);

    ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
    for (let x = 140; x < 900; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, bpY);
      ctx.lineTo(x, bpY + 220);
      ctx.stroke();
    }
    for (let y = bpY + 30; y < bpY + 220; y += 40) {
      ctx.beginPath();
      ctx.moveTo(90, y);
      ctx.lineTo(934, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "rgba(0, 240, 255, 0.8)";
    ctx.beginPath();
    ctx.arc(512, bpY + 110, 65, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(512, bpY + 110, 35, 0, Math.PI * 2);
    ctx.stroke();

    // Neural Net graph at bottom
    const nnY = 2100;
    const nodes = [
      [ {x: 320, y: nnY + 40}, {x: 320, y: nnY + 110} ],
      [ {x: 512, y: nnY + 10}, {x: 512, y: nnY + 80}, {x: 512, y: nnY + 150} ],
      [ {x: 704, y: nnY + 40}, {x: 704, y: nnY + 110} ]
    ];

    ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
    ctx.lineWidth = 2.5;
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
        ctx.shadowBlur = 10;
        ctx.shadowColor = cIdx === 2 ? "#ffd700" : "#00f0ff";
        ctx.fillStyle = cIdx === 2 ? "#ffd700" : "#00f0ff";
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 12, 0, Math.PI * 2);
        ctx.fill();
      });
    });

  } else if (faceType === "face3") {
    // FACE 3: THE SYSTEMS CORE
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#00f0ff";
    ctx.fillStyle = "#00f0ff";
    ctx.font = 'bold 84px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("THE SYSTEMS CORE", 512, 280);

    // Left Column: TECH STACK
    const tsY = 500;
    ctx.shadowColor = "#ffd700";
    ctx.fillStyle = "#ffd700";
    ctx.font = 'bold 40px "Share Tech Mono", monospace';
    ctx.fillText("TECH STACK", 300, tsY);

    // Python Logo (X = 220, Y = tsY + 160)
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00f0ff";
    ctx.fillStyle = "#00f0ff";
    ctx.beginPath();
    ctx.roundRect(140, tsY + 100, 95, 95, [20, 20, 0, 20]);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(185, tsY + 50, 95, 95, [20, 20, 20, 0]);
    ctx.fill();
    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.beginPath();
    ctx.roundRect(190, tsY + 150, 95, 95, [0, 20, 20, 20]);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(145, tsY + 205, 95, 95, [20, 0, 20, 20]);
    ctx.fill();

    // Rust Logo (X = 400, Y = tsY + 160)
    ctx.strokeStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(390, tsY + 150, 70, 0, Math.PI * 2);
    ctx.stroke();
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      ctx.beginPath();
      ctx.moveTo(390 + 70 * Math.cos(a), tsY + 150 + 70 * Math.sin(a));
      ctx.lineTo(390 + 85 * Math.cos(a), tsY + 150 + 85 * Math.sin(a));
      ctx.stroke();
    }
    ctx.fillStyle = "#ffd700";
    ctx.font = 'bold 70px sans-serif';
    ctx.fillText("R", 390, tsY + 175);

    // Interactive Network Graph
    const netY = 1000;
    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.font = 'bold 36px "Share Tech Mono", monospace';
    ctx.fillText("INTERACTIVE NETWORK", 300, netY);

    const netNodes = [
      [ {x: 140, y: netY + 80}, {x: 140, y: netY + 180}, {x: 140, y: netY + 280} ],
      [ {x: 300, y: netY + 30}, {x: 300, y: netY + 130}, {x: 300, y: netY + 230}, {x: 300, y: netY + 330} ],
      [ {x: 460, y: netY + 80}, {x: 460, y: netY + 180}, {x: 460, y: netY + 280} ]
    ];
    ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
    ctx.lineWidth = 2.5;
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
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#00f0ff";
        ctx.fillStyle = "#00f0ff";
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 14, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    // Right Column: INDUSTRIAL EXPERTISE
    const indY = 500;
    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.font = 'bold 40px "Share Tech Mono", monospace';
    ctx.fillText("INDUSTRIAL EXPERTISE", 720, indY);

    ctx.fillStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.font = 'bold 30px "Share Tech Mono", monospace';
    ctx.fillText("OIL REFINERIES", 720, indY + 60);

    const refY = indY + 90;
    ctx.strokeStyle = "rgba(0, 240, 255, 0.5)";
    ctx.lineWidth = 3.0;
    ctx.strokeRect(540, refY, 360, 320);

    ctx.strokeStyle = "rgba(0, 240, 255, 0.8)";
    ctx.strokeRect(570, refY + 80, 80, 200);
    ctx.strokeRect(680, refY + 40, 70, 240);
    ctx.beginPath();
    ctx.arc(820, refY + 180, 50, Math.PI, 0);
    ctx.stroke();
    ctx.strokeRect(770, refY + 180, 100, 100);

    ctx.fillStyle = "#00f0ff";
    ctx.shadowColor = "#00f0ff";
    ctx.font = 'bold 30px "Share Tech Mono", monospace';
    ctx.fillText("GAS TURBINES", 720, indY + 470);

    const gtY = indY + 500;
    ctx.strokeStyle = "rgba(0, 240, 255, 0.5)";
    ctx.strokeRect(540, gtY, 360, 340);

    ctx.strokeStyle = "rgba(0, 240, 255, 0.8)";
    ctx.beginPath();
    ctx.moveTo(560, gtY + 170);
    ctx.lineTo(880, gtY + 170);
    ctx.stroke();
    for (let x = 580; x < 860; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, gtY + 100);
      ctx.lineTo(x + 20, gtY + 240);
      ctx.stroke();
    }

  } else if (faceType === "face4") {
    // FACE 4: SYSTEM STATUS Telemetry Radar & Logs
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#00f0ff";
    ctx.fillStyle = "#00f0ff";
    ctx.font = 'bold 84px "Outfit", "Share Tech Mono", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("SYSTEM STATUS", 512, 280);

    const radY = 680;
    ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(512, radY, 200, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(512, radY, 120, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(512 - 220, radY);
    ctx.lineTo(512 + 220, radY);
    ctx.moveTo(512, radY - 220);
    ctx.lineTo(512, radY + 220);
    ctx.stroke();

    ctx.strokeStyle = "rgba(0, 240, 255, 0.9)";
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(512, radY);
    ctx.lineTo(512 + 200 * Math.cos(-Math.PI / 4), radY + 200 * Math.sin(-Math.PI / 4));
    ctx.stroke();

    const paramY = 1050;
    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.font = 'bold 40px "Share Tech Mono", monospace';
    ctx.fillText("CORE PARAMETERS", 512, paramY);

    ctx.strokeStyle = "rgba(0, 240, 255, 0.6)";
    ctx.lineWidth = 3.0;
    ctx.strokeRect(90, paramY + 60, 70, 360);
    ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
    ctx.fillRect(97, paramY + 140, 56, 270);

    ctx.textAlign = "left";
    ctx.fillStyle = "#ffffff";
    ctx.shadowBlur = 0;
    ctx.font = 'bold 36px "Share Tech Mono", monospace';
    ctx.fillText("TEMP: 342.5 K // STABLE", 200, paramY + 100);
    ctx.fillText("PRESSURE: 1.02 ATM", 200, paramY + 180);
    ctx.fillText("THRUST LEVEL: 89.2%", 200, paramY + 260);
    ctx.fillText("IGN_LOCK: SECURED", 200, paramY + 340);

    const logY = 1600;
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffd700";
    ctx.shadowColor = "#ffd700";
    ctx.font = 'bold 44px "Share Tech Mono", monospace';
    ctx.fillText("TELEMETRY LOGS", 512, logY);

    const logLines = [
      "> CONNECTING TO ROCKET... OK",
      "> SYSTEMS BALANCED",
      "> GRAVITY DESCENT COORD STABLE",
      "> LANDING SEQUENCE COMPLETED",
      "> READY FOR CORE SYNC.",
      "> ALL SYSTEMS STATUS: ACTIVE"
    ];

    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(0, 240, 255, 0.95)";
    ctx.shadowColor = "#00f0ff";
    ctx.shadowBlur = 8;
    ctx.font = 'bold 32px "Share Tech Mono", monospace';
    logLines.forEach((line, idx) => {
      ctx.fillText(line, 100, logY + 80 + idx * 75);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

export class MonolithManager {
  constructor(scene) {
    this.scene = scene;
    
    // Initialize textures & materials
    this.frontScreenTex = createMonitorTexture("face1");
    this.rightScreenTex = createMonitorTexture("face2");
    this.backScreenTex = createMonitorTexture("face3");
    this.leftScreenTex = createMonitorTexture("face4");
    
    this.frontScreenMat = new THREE.MeshBasicMaterial({
      map: this.frontScreenTex,
      side: THREE.DoubleSide
    });
    
    this.backScreenMat = new THREE.MeshBasicMaterial({
      map: this.backScreenTex,
      side: THREE.DoubleSide
    });
    
    this.rightScreenMat = new THREE.MeshBasicMaterial({
      map: this.rightScreenTex,
      side: THREE.DoubleSide
    });
    
    this.leftScreenMat = new THREE.MeshBasicMaterial({
      map: this.leftScreenTex,
      side: THREE.DoubleSide
    });
    
    this.monolithMat = new THREE.MeshStandardMaterial({
      color: 0x05080c,
      roughness: 0.3,
      metalness: 0.8
    });
    
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
          node.position.set(0, 24, -32.95);
          node.scale.set(20.0, 45.0, 1.0);
          node.rotation.y = 0; // Face camera un-mirrored
        } else if (node.name.includes("Cube.007") || node.name.includes("Cube007")) {
          // Local Z = -57.05 (back face facing away)
          node.geometry = new THREE.PlaneGeometry(1, 1);
          node.material = this.backScreenMat;
          node.position.set(0, 24, -57.05);
          node.scale.set(20.0, 45.0, 1.0);
          node.rotation.y = Math.PI;
        } else if (node.name.includes("LandingPad") || node.name.includes("PadGlowRing") || node.name.includes("PadCenterMetal")) {
          node.material = this.padMat;
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
      this.rightScreenMesh.position.set(12.05, 24, -45.0);
      this.rightScreenMesh.rotation.set(0, Math.PI / 2, 0); // Face +X (Right)
      this.rightScreenMesh.scale.set(20.0, 45.0, 1.0);
      monolithScene.add(this.rightScreenMesh);

      // Clone for Left screen (Face 4: System Status)
      this.leftScreenMesh = frontScreenMesh.clone();
      this.leftScreenMesh.name = "Cube006_left";
      this.leftScreenMesh.material = this.leftScreenMat;
      this.leftScreenMesh.position.set(-12.05, 24, -45.0);
      this.leftScreenMesh.rotation.set(0, -Math.PI / 2, 0); // Face -X (Left)
      this.leftScreenMesh.scale.set(20.0, 45.0, 1.0);
      monolithScene.add(this.leftScreenMesh);
    }
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
