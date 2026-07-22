import * as THREE from 'three';

/**
 * Procedural Texture Generator for Space Station Model (img2threejs methodology)
 */

export function createHullPanelTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Base dark metallic hull background
    ctx.fillStyle = '#1c2228';
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle noise / metal grain
    for (let i = 0; i < 40000; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        const val = Math.floor(Math.random() * 25);
        ctx.fillStyle = `rgba(${val + 20}, ${val + 25}, ${val + 30}, 0.15)`;
        ctx.fillRect(x, y, 2, 2);
    }

    // Grid panels
    const cols = 8;
    const rows = 8;
    const cw = 1024 / cols;
    const rh = 1024 / rows;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const x = c * cw;
            const y = r * rh;

            // Panel bevel border
            ctx.strokeStyle = '#0d1013';
            ctx.lineWidth = 4;
            ctx.strokeRect(x + 2, y + 2, cw - 4, rh - 4);

            ctx.strokeStyle = '#323b45';
            ctx.lineWidth = 2;
            ctx.strokeRect(x + 4, y + 4, cw - 8, rh - 8);

            // Inset panel variation
            if ((r + c) % 3 === 0) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
                ctx.fillRect(x + 6, y + 6, cw - 12, rh - 12);
            }

            // Rivets at corners
            const rivetOffsets = [[8, 8], [cw - 8, 8], [8, rh - 8], [cw - 8, rh - 8]];
            ctx.fillStyle = '#4a5563';
            rivetOffsets.forEach(([rx, ry]) => {
                ctx.beginPath();
                ctx.arc(x + rx, y + ry, 2, 0, Math.PI * 2);
                ctx.fill();
            });

            // Random greeble lines / hatches inside some panels
            if ((r * 7 + c * 13) % 4 === 0) {
                ctx.strokeStyle = '#181e24';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x + 12, y + rh / 2);
                ctx.lineTo(x + cw - 12, y + rh / 2);
                ctx.stroke();
            }
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
}

export function createHullBumpTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 512, 512);

    const step = 64;
    for (let x = 0; x < 512; x += step) {
        for (let y = 0; y < 512; y += step) {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 4;
            ctx.strokeRect(x + 1, y + 1, step - 2, step - 2);

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(x + 3, y + 3, step - 6, step - 6);
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
}

export function createRocketTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Metallic silver background
    ctx.fillStyle = '#d0d5dd';
    ctx.fillRect(0, 0, 512, 512);

    // Black roll patterns / stripes (top band and mid band)
    ctx.fillStyle = '#111317';
    ctx.fillRect(0, 60, 512, 40);
    ctx.fillRect(0, 180, 512, 30);

    // Vertical panel lines
    ctx.strokeStyle = '#8a94a6';
    ctx.lineWidth = 2;
    for (let x = 0; x < 512; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 512);
        ctx.stroke();
    }

    // USA text / logo indicator on body
    ctx.fillStyle = '#8b0000';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('USA', 200, 320);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
}

export function createHabitatWindowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Deep blue interior space
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#001a33');
    grad.addColorStop(0.5, '#004488');
    grad.addColorStop(1, '#001122');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);

    // Illuminated window grid & control panels inside
    ctx.strokeStyle = '#00bbff';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#00e1ff';
    ctx.shadowBlur = 10;

    for (let x = 20; x < 492; x += 40) {
        ctx.strokeRect(x, 30, 30, 190);
    }

    // Glowing dots for equipment
    ctx.fillStyle = '#00ffff';
    for (let i = 0; i < 30; i++) {
        const rx = 30 + Math.random() * 450;
        const ry = 40 + Math.random() * 170;
        ctx.beginPath();
        ctx.arc(rx, ry, 3, 0, Math.PI * 2);
        ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}
