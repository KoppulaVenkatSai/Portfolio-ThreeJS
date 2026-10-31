import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export class CursiveNeonText {
  constructor(onLoaded, loadingManager = null) {
    this.group = new THREE.Group();
    this.group.name = "CursiveNeonTextMasterGroup";

    // Inner floating group so GSAP float animation doesn't override master position Y slider
    this.floatGroup = new THREE.Group();
    this.floatGroup.name = "CursiveNeonTextFloatGroup";
    this.group.add(this.floatGroup);

    this.onLoaded = onLoaded;
    this.loadingManager = loadingManager;

    // HDR Metallic Cyan Chrome Material
    this.textMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 6.0,
      roughness: 0.1,
      metalness: 0.95,
      envMapIntensity: 2.0,
      transparent: true,
      opacity: 1.0
    });

    this.buildText();
  }

  buildText() {
    const loader = new FontLoader(this.loadingManager);
    loader.load('/fonts/GreatVibes_Regular.json', (font) => {
      // Line 1: "Hi, I am"
      const geom1 = new TextGeometry('Hi, I am', {
        font: font,
        size: 0.52,
        height: 0.06,
        curveSegments: 16,
        bevelEnabled: true,
        bevelThickness: 0.018,
        bevelSize: 0.012,
        bevelSegments: 5
      });
      geom1.center();
      const mesh1 = new THREE.Mesh(geom1, this.textMaterial);
      mesh1.position.set(-0.25, 0.42, 0);
      mesh1.rotation.z = 0.03;
      this.floatGroup.add(mesh1);

      // Line 2: "Venkat Koppula"
      const geom2 = new TextGeometry('Venkat Koppula', {
        font: font,
        size: 0.65,
        height: 0.07,
        curveSegments: 16,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.014,
        bevelSegments: 5
      });
      geom2.center();
      const mesh2 = new THREE.Mesh(geom2, this.textMaterial);
      mesh2.position.set(0.1, -0.38, 0);
      mesh2.rotation.z = -0.02;
      this.floatGroup.add(mesh2);

      if (this.onLoaded) this.onLoaded();
    });
  }
}
