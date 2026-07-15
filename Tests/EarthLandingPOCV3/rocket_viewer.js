import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.getElementById("viewer-canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020205);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 5, 12);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI; // Allow full rotation including looking from below
controls.minDistance = 2;
controls.maxDistance = 30;

// Lighting system
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
dirLight1.position.set(5, 10, 7);
scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0x00f0ff, 0.6);
dirLight2.position.set(-5, -5, -7);
scene.add(dirLight2);

// Add a subtle grid and axes helper
const gridHelper = new THREE.GridHelper(20, 20, 0x00f0ff, 0x444444);
gridHelper.position.y = -3;
scene.add(gridHelper);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Load the rocket
const loader = new GLTFLoader();
const modelUrl = new URL("./assets/NewRocket.glb", import.meta.url).href;

let rocket = null;

loader.load(
  modelUrl,
  (gltf) => {
    rocket = gltf.scene;
    
    // Center model geometry
    const box = new THREE.Box3().setFromObject(rocket);
    const center = new THREE.Vector3();
    box.getCenter(center);
    rocket.position.sub(center);
    
    // Scale or position model so it is nicely framed
    scene.add(rocket);
    
    // Calculate stats and populate component list
    let polys = 0;
    let mats = new Set();
    const listEl = document.getElementById("components-list");
    listEl.innerHTML = "";
    
    rocket.traverse((child) => {
      if (child.isMesh) {
        polys += child.geometry.index ? child.geometry.index.count / 3 : child.geometry.attributes.position.count / 3;
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => mats.add(m.name || m.uuid));
          } else {
            mats.add(child.material.name || child.material.uuid);
          }
          // Make sure materials look highly metallic and shiny
          child.material.roughness = 0.15;
          child.material.metalness = 0.95;
        }
        
        // Add component with visibility checkbox
        const name = child.name || `Unnamed Mesh (${child.uuid.substring(0, 8)})`;
        const item = document.createElement("div");
        item.className = "component-item";
        
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = child.visible;
        
        checkbox.addEventListener("change", () => {
          child.visible = checkbox.checked;
        });
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + name));
        item.appendChild(label);
        listEl.appendChild(item);
      }
    });
    
    document.getElementById("poly-count").innerText = Math.round(polys).toLocaleString();
    document.getElementById("mat-count").innerText = mats.size;
    
    // Set orbit controls target to center of rocket
    controls.target.set(0, 0, 0);
  },
  undefined,
  (error) => {
    console.error("An error occurred loading the GLTF rocket:", error);
  }
);

// Toggle grid helper
const toggleGridBtn = document.getElementById("toggle-grid");
let gridVisible = true;
toggleGridBtn.addEventListener("click", () => {
  gridVisible = !gridVisible;
  gridHelper.visible = gridVisible;
  axesHelper.visible = gridVisible;
});

// Resize handler
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  
  if (rocket) {
    // Manual controls only: automatic rotation disabled as requested
  }
  
  renderer.render(scene, camera);
}
animate();
