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

        // Enable shadow casting & receiving on all meshes
        this.model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Initialize AnimationMixer if clips are present in GLB
        if (gltf.animations && gltf.animations.length > 0) {
          this.mixer = new THREE.AnimationMixer(this.model);
          this.animations = gltf.animations;
          const action = this.mixer.clipAction(gltf.animations[0]);
          action.play();
        }

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

  update(delta) {
    if (this.mixer && delta) {
      this.mixer.update(delta);
    }
  }
}
