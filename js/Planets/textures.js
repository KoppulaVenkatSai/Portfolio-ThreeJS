import * as THREE from 'three';

export function createGasGiantRockTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  // Base gas dark cyan/blue
  ctx.fillStyle = '#051829';
  ctx.fillRect(0, 0, 512, 512);
  
  // Bands of gas giant winds
  for (let y = 0; y < 512; y += 4) {
    const val = Math.floor(Math.sin(y * 0.1) * 30 + Math.random() * 20);
    ctx.fillStyle = `rgb(${10 + val}, ${30 + val * 2}, ${50 + val * 3})`;
    ctx.fillRect(0, y, 512, 4);
  }
  
  // Noise overlay
  ctx.globalAlpha = 0.08;
  for (let i = 0; i < 15000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const val = Math.random() * 255;
    ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
    ctx.fillRect(x, y, 1, 1);
  }
  ctx.globalAlpha = 1.0;
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createIndustrialRockTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  // Metal panels base
  ctx.fillStyle = '#1e110a';
  ctx.fillRect(0, 0, 512, 512);
  
  // Draw panelling grid lines
  ctx.strokeStyle = '#0e0805';
  ctx.lineWidth = 2;
  for (let i = 0; i < 512; i += 64) {
    ctx.beginPath();
    ctx.moveTo(i, 0); ctx.lineTo(i, 512);
    ctx.moveTo(0, i); ctx.lineTo(512, i);
    ctx.stroke();
  }
  
  // Weathered metal splotches/scratches
  ctx.globalAlpha = 0.35;
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = '#ff5500';
    ctx.beginPath();
    ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 60 + 10, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.globalAlpha = 0.15;
  ctx.fillStyle = '#000000';
  for (let i = 0; i < 12; i++) {
    ctx.fillRect(Math.random() * 512, Math.random() * 512, Math.random() * 120 + 20, Math.random() * 120 + 20);
  }
  ctx.globalAlpha = 1.0;
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createCrystalRockTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  // Crystal violet base
  ctx.fillStyle = '#150624';
  ctx.fillRect(0, 0, 512, 512);
  
  // Faceted crystal grain lines
  ctx.strokeStyle = '#5c10a3';
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.45;
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    let x = Math.random() * 512;
    let y = Math.random() * 512;
    ctx.moveTo(x, y);
    for (let j = 0; j < 4; j++) {
      x += (Math.random() - 0.5) * 80;
      y += (Math.random() - 0.5) * 80;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  
  // Bright crystalline flakes
  ctx.globalAlpha = 0.6;
  ctx.fillStyle = '#ee99ff';
  for (let i = 0; i < 120; i++) {
    ctx.fillRect(Math.random() * 512, Math.random() * 512, Math.random() * 3 + 1, Math.random() * 3 + 1);
  }
  ctx.globalAlpha = 1.0;
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createCyberLatticeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Deep obsidian/emerald background
  ctx.fillStyle = '#021810';
  ctx.fillRect(0, 0, 512, 512);

  // Hexagonal and orthogonal semantic graph lattice lines
  ctx.strokeStyle = '#006638';
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.5;
  for (let i = 0; i < 512; i += 48) {
    ctx.beginPath();
    ctx.moveTo(i, 0); ctx.lineTo(i, 512);
    ctx.moveTo(0, i); ctx.lineTo(512, i);
    ctx.stroke();
  }

  // Diagonal graph connection lines
  ctx.strokeStyle = '#00aa55';
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.35;
  for (let i = 0; i < 28; i++) {
    const x1 = Math.random() * 512;
    const y1 = Math.random() * 512;
    const x2 = x1 + (Math.random() - 0.5) * 160;
    const y2 = y1 + (Math.random() - 0.5) * 160;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Node dots at endpoints
    ctx.fillStyle = '#00ff88';
    ctx.beginPath();
    ctx.arc(x1, y1, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Glowing cyber circuit clusters
  ctx.globalAlpha = 0.45;
  ctx.fillStyle = '#00ffaa';
  for (let i = 0; i < 60; i++) {
    ctx.fillRect(Math.random() * 512, Math.random() * 512, Math.random() * 4 + 1, Math.random() * 4 + 1);
  }
  ctx.globalAlpha = 1.0;

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createAmberRadarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Dark solar bronze/amber base
  ctx.fillStyle = '#1c1002';
  ctx.fillRect(0, 0, 512, 512);

  // Concentric radar sweep rings
  ctx.strokeStyle = '#663b00';
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.55;
  for (let r = 30; r < 280; r += 36) {
    ctx.beginPath();
    ctx.arc(256, 256, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Radar radial azimuth lines
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
    ctx.beginPath();
    ctx.moveTo(256, 256);
    ctx.lineTo(256 + Math.cos(a) * 260, 256 + Math.sin(a) * 260);
    ctx.stroke();
  }

  // Sensor telemetry pips and golden arcs
  ctx.globalAlpha = 0.65;
  ctx.fillStyle = '#ffaa00';
  for (let i = 0; i < 80; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 240;
    ctx.fillRect(256 + Math.cos(angle) * dist, 256 + Math.sin(angle) * dist, Math.random() * 3 + 1, Math.random() * 3 + 1);
  }

  // Subtle telemetry crosshair markers
  ctx.strokeStyle = '#ffd500';
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.7;
  for (let i = 0; i < 6; i++) {
    const cx = Math.random() * 400 + 56;
    const cy = Math.random() * 400 + 56;
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy); ctx.lineTo(cx + 8, cy);
    ctx.moveTo(cx, cy - 8); ctx.lineTo(cx, cy + 8);
    ctx.stroke();
  }
  ctx.globalAlpha = 1.0;

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createNebulaTexture(color1, color2) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 1024, 1024);
  
  const grad = ctx.createRadialGradient(512, 512, 20, 512, 512, 480);
  grad.addColorStop(0.0, color1);
  grad.addColorStop(0.35, color2);
  grad.addColorStop(0.7, 'rgba(0,0,0,0.02)');
  grad.addColorStop(1.0, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1024);
  
  ctx.globalCompositeOperation = 'screen';
  for (let i = 0; i < 14; i++) {
    const x = 150 + Math.random() * 724;
    const y = 150 + Math.random() * 724;
    const r = 80 + Math.random() * 220;
    const g = ctx.createRadialGradient(x, y, 4, x, y, r);
    g.addColorStop(0, 'rgba(75, 40, 130, 0.06)');
    g.addColorStop(0.5, 'rgba(50, 20, 90, 0.03)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  
  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 16;
  return tex;
}

export function createCircleTexture(colorStr) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0.0, colorStr);
  gradient.addColorStop(0.15, colorStr);
  gradient.addColorStop(0.45, 'rgba(' + hexToRgb(colorStr) + ', 0.3)');
  gradient.addColorStop(1.0, 'transparent');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

export function createCharTexture(charStr) {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 64, 64);
  
  ctx.fillStyle = '#ffaa00';
  ctx.font = 'bold 36px "Share Tech Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add a soft glow behind the text
  ctx.shadowColor = '#ff5500';
  ctx.shadowBlur = 8;
  
  // Draw obscure character glyphs
  ctx.fillText(charStr, 32, 32);
  
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export function createBinaryRingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 1024, 64);
  
  ctx.fillStyle = '#00c8ff';
  ctx.font = '20px "Share Tech Mono", monospace';
  ctx.globalAlpha = 0.85;
  
  let text = '';
  for(let i = 0; i < 90; i++) {
    text += Math.random() > 0.5 ? '1 ' : '0 ';
  }
  
  ctx.fillText(text, 10, 38);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  return texture;
}

export function createCurvedTextTexture(text, colorHexStr) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 1024, 512);

  const cx = 512;
  const cy = 410;
  const radius = 280;

  // Draw bold, extra-large, ultra-crisp curved text
  ctx.save();
  ctx.translate(cx, cy);
  ctx.font = '900 68px "Share Tech Mono", "JetBrains Mono", sans-serif, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const anglePerChar = 0.13;
  const totalAngle = (text.length - 1) * anglePerChar;
  const startAngle = -Math.PI / 2 - totalAngle / 2;

  for (let i = 0; i < text.length; i++) {
    const angle = startAngle + i * anglePerChar;
    ctx.save();
    ctx.rotate(angle + Math.PI / 2);
    ctx.translate(0, -radius);
    
    // Heavy dark backdrop outline for high-contrast legibility
    ctx.strokeStyle = '#010308';
    ctx.lineWidth = 12.0;
    ctx.lineJoin = 'round';
    ctx.strokeText(text[i], 0, 0);
    
    // Bright crisp text fill
    ctx.fillStyle = colorHexStr;
    ctx.fillText(text[i], 0, 0);
    ctx.restore();
  }

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
}
