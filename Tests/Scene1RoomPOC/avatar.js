import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

/**
 * TechAvatar Class
 * Loads and manages the Draco-compressed 3D Character Model ("Venky-Avatar-optimized.glb").
 */
export class TechAvatar {
  constructor(modelPath = '/Tests/AvatarPOC/Assets/Venky-Avatar-optimized.glb', onLoad = null) {
    this.group = new THREE.Group();
    this.group.name = "VenkatAvatarGroup";
    this.model = null;
    this.mixer = null;
    this.modelLoaded = false;

    this.loadModel(modelPath, onLoad);
  }

  loadModel(modelPath, onLoad) {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(
      modelPath,
      (gltf) => {
        this.model = gltf.scene;
        this.model.name = "VenkyAvatarModel";

        // Traverse all nodes in the avatar model
        this.model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            const matName = Array.isArray(child.material) 
              ? child.material.map(m => m.name).join(', ') 
              : (child.material?.name || 'unnamed');
            console.log(`[TechAvatar Mesh] mesh="${child.name}", material="${matName}"`);
          }
        });

        this.group.add(this.model);
        this.modelLoaded = true;
        console.log('[TechAvatar] Loaded Draco-compressed GLB model from:', modelPath);

        if (onLoad) onLoad(this.model, gltf);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          console.log(`[TechAvatar] Loading model: ${percent}%`);
        }
      },
      (error) => {
        console.error('[TechAvatar] Error loading Draco GLB model:', error);
      }
    );
  }

  /**
   * Change face / skin material color by hex color (e.g. 0xffdbac, "#ffdbac")
   */
  setSkinColor(colorVal) {
    if (!this.model) return;
    this.model.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((mat) => {
          const mName = (mat.name || '').toLowerCase();
          const nodeName = (child.name || '').toLowerCase();
          if (mName.includes('skin') || mName.includes('head') || mName.includes('face') || nodeName.includes('head') || nodeName.includes('face') || nodeName.includes('skin')) {
            mat.color.set(colorVal);
          }
        });
      }
    });
  }

  /**
   * Change color of a specific mesh or material by name
   */
  setMaterialColor(targetName, colorVal) {
    if (!this.model) return;
    const targetLower = targetName.toLowerCase();
    this.model.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((mat) => {
          const mName = (mat.name || '').toLowerCase();
          const nodeName = (child.name || '').toLowerCase();
          if (mName.includes(targetLower) || nodeName.includes(targetLower)) {
            mat.color.set(colorVal);
          }
        });
      }
    });
  }

  update(delta) {
    if (this.mixer && delta) {
      this.mixer.update(delta);
    }
  }
}
