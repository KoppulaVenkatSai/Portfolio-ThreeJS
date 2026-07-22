import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createSpaceStationModel } from './spaceStationModel.js';

// Setup Renderer & Container
const container = document.getElementById('canvas-container');
const loadingEl = document.getElementById('loading');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x04060a);
scene.fog = new THREE.FogExp2(0x04060a, 0.001);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Starfield Background
function createStarfield() {
    const starsGeo = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 800;
        positions[i + 1] = (Math.random() - 0.5) * 800;
        positions[i + 2] = (Math.random() - 0.5) * 800;

        const shade = 0.7 + Math.random() * 0.3;
        colors[i] = shade * 0.8;
        colors[i + 1] = shade * 0.9;
        colors[i + 2] = shade;
    }

    starsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starsMat = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });

    return new THREE.Points(starsGeo, starsMat);
}
scene.add(createStarfield());

// Lighting Setup
const ambientLight = new THREE.AmbientLight(0x1a2636, 1.2);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xfff5e6, 2.5);
sunLight.position.set(120, 100, 140);
scene.add(sunLight);

const rimLight = new THREE.DirectionalLight(0x0088ff, 1.8);
rimLight.position.set(-140, -60, -100);
scene.add(rimLight);

const softBottomLight = new THREE.DirectionalLight(0x446688, 0.8);
softBottomLight.position.set(0, -120, 40);
scene.add(softBottomLight);

// Add Space Station Model
const stationModel = createSpaceStationModel();
scene.add(stationModel);

// Target center point for camera framing
const modelCenter = new THREE.Vector3(32, -8, 0);

// Preset Camera Positions (matching user reference images)
const viewPresets = {
    perspective: { pos: new THREE.Vector3(70, 50, 120), target: modelCenter },
    front: { pos: new THREE.Vector3(32, -8, 150), target: modelCenter },
    top: { pos: new THREE.Vector3(32, 160, 0.1), target: modelCenter },
    bottom: { pos: new THREE.Vector3(32, -160, 0.1), target: modelCenter }
};

function setCameraPreset(presetKey) {
    const preset = viewPresets[presetKey];
    if (!preset) return;

    camera.position.copy(preset.pos);
    controls.target.copy(preset.target);
    controls.update();
}

// Default initial view
setCameraPreset('perspective');

// Hide loading screen
if (loadingEl) {
    loadingEl.style.opacity = '0';
    setTimeout(() => (loadingEl.style.display = 'none'), 500);
}

// Controls & Rotation State
let autoRotate = false;
let isWireframe = false;

document.getElementById('btn-perspective').addEventListener('click', () => setCameraPreset('perspective'));
document.getElementById('btn-front').addEventListener('click', () => setCameraPreset('front'));
document.getElementById('btn-top').addEventListener('click', () => setCameraPreset('top'));
document.getElementById('btn-bottom').addEventListener('click', () => setCameraPreset('bottom'));

document.getElementById('btn-rotate').addEventListener('click', () => {
    autoRotate = !autoRotate;
});

document.getElementById('btn-wireframe').addEventListener('click', () => {
    isWireframe = !isWireframe;
    stationModel.traverse((child) => {
        if (child.isMesh && child.material) {
            if (Array.isArray(child.material)) {
                child.material.forEach((m) => (m.wireframe = isWireframe));
            } else {
                child.material.wireframe = isWireframe;
            }
        }
    });
});

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    if (autoRotate) {
        stationModel.rotation.y += delta * 0.15;
    }

    controls.update();
    renderer.render(scene, camera);
}

animate();
