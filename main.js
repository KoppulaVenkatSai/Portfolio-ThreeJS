import "./style.css";
import * as THREE from "three";
import gsap from 'gsap';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {CSS2DRenderer, CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";

const rocketModelUrl = new URL("./assets/FinalRocket.glb", import.meta.url);
const earthModelUrl = new URL("./assets/FinalEarthModel.glb", import.meta.url);
const locationMarkerModelUrl = new URL("./assets/LocationMarker.glb", import.meta.url);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".canvas"),
  antialias: true
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const axesHelper = new THREE.AxesHelper(1000);
// scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(1000, 100);
// scene.add(gridHelper);

// const planeGeometry = new THREE.PlaneGeometry(500, 500, 300, 300);
// const planeMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
// const plane = new THREE.Mesh( planeGeometry, planeMaterial );
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;
// scene.add(plane);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(9.5, 3.38, 1);
// controls.enableDamping = true;

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.top = 100;
directionalLight.shadow.camera.bottom = -100;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(directionalLightHelper);
scene.add(new THREE.AmbientLight(0xffffff, 1));

const modelDirectionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
scene.add(modelDirectionalLight);
const modelDirectionalLightTarget = new THREE.Object3D();
modelDirectionalLightTarget.position.set(9.5, 3.38, 1);
scene.add(modelDirectionalLightTarget);
modelDirectionalLight.target = modelDirectionalLightTarget;
modelDirectionalLight.position.set(8, 4, 10);
const modelDirectionalLightHelper = new THREE.DirectionalLightHelper(modelDirectionalLight, 2);
// scene.add(modelDirectionalLightHelper);


// const coneGeometry = new THREE.ConeGeometry(5, 30, 100);
// const coneMaterial = new THREE.MeshStandardMaterial({ color: 0x99990 });
// const cone = new THREE.Mesh(coneGeometry, coneMaterial);
// cone.position.y = 15;
// cone.castShadow = true;
// scene.add(cone);

const rocketModelGroup = new THREE.Group();
const assetLoader = new GLTFLoader();
assetLoader.load(rocketModelUrl.href, function(gltf){
  const rocketModel = gltf.scene;
  rocketModelGroup.add(rocketModel);
  gltf.scene.traverse( function( node ) {
    if ( node.isMesh ) {
      node.castShadow = true; 
    }
  });
});
rocketModelGroup.position.set(10, 0, 0);
rocketModelGroup.rotation.y = -Math.PI / 9;
scene.add(rocketModelGroup);

const earthModelGroup = new THREE.Group();
const earthAssetLoader = new GLTFLoader();
earthAssetLoader.load(earthModelUrl.href, function(gltf){
  const earthModel = gltf.scene;
  earthModelGroup.add(earthModel);
  gltf.scene.traverse( function( node ) {
    if ( node.isMesh ) {
      node.castShadow = true; 
    }
  });
});
earthModelGroup.position.set(300, 10, -10);
earthModelGroup.rotation.set(Math.PI/8, -Math.PI/3.5, 0);
earthModelGroup.scale.set(0.005, 0.005, 0.005);
scene.add(earthModelGroup);

const locationMarkerModelGroup = new THREE.Group();
const locationMarkerAssetLoader = new GLTFLoader();
locationMarkerAssetLoader.load(locationMarkerModelUrl.href, function(gltf){
  const locationMarkerModel = gltf.scene;
  locationMarkerModelGroup.add(locationMarkerModel);
  gltf.scene.traverse( function( node ) {
    if ( node.isMesh ) {
      node.castShadow = true; 
    }
  });
});
locationMarkerModelGroup.position.set(308.5, 10.7, 8);
locationMarkerModelGroup.rotation.y = Math.PI / 4.4;
locationMarkerModelGroup.scale.set(5, 5, 5);
scene.add(locationMarkerModelGroup);

// camera.position.set(10, 15, 5);
// camera.rotation.set(0, Math.PI, 0);
// rocketModelGroup.position.set(10, 9.5, 5.5);
// rocketModelGroup.rotation.set(-Math.PI/1.3, 0, Math.PI);

const textLoader = new FontLoader();
const choosePathTextGrp = new THREE.Group();
const projectsTextGrp = new THREE.Group();
const aboutTextGrp = new THREE.Group();

textLoader.load( './fonts/EB_Garamond.json', function ( font ) {
	const geometry = new TextGeometry( 'CHOOSE', { font: font, size: 3, height: 1, curveSegments: 12, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.5, } );
  const textChooseMesh = new THREE.Mesh(geometry, [ new THREE.MeshPhongMaterial({color: 0xfffff}), new THREE.MeshPhongMaterial({color: 0x333333}), ]);
  textChooseMesh.castShadow = true;
  choosePathTextGrp.add(textChooseMesh);
  textChooseMesh.position.set(19, 16, 40);
  textChooseMesh.rotation.y = Math.PI;
});

textLoader.load( './fonts/EB_Garamond.json', function ( font ) {
	const geometry = new TextGeometry( 'PATHWAY', { font: font, size: 3, height: 1, curveSegments: 12, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.5, });
  const textPathMesh = new THREE.Mesh(geometry, [ new THREE.MeshPhongMaterial({color: 0xfffff}), new THREE.MeshPhongMaterial({color: 0x333333}), ]);
  textPathMesh.castShadow = true;
  choosePathTextGrp.add(textPathMesh);
  textPathMesh.position.set(20.5, 12, 40);
  textPathMesh.rotation.y = Math.PI;
});

scene.add(choosePathTextGrp);

const choosePathCircleGeometry = new THREE.CircleGeometry( 12, 50 );
const choosePathCircleMaterial = new THREE.MeshStandardMaterial( { color: 0xffff00, side:THREE.DoubleSide } );
const choosePathCircle = new THREE.Mesh( choosePathCircleGeometry, choosePathCircleMaterial);
choosePathCircle.position.set(10, 14, 41.5);
choosePathCircle.receiveShadow = true;
scene.add(choosePathCircle);

textLoader.load( './fonts/EB_Garamond.json', function ( font ) {
	const geometry = new TextGeometry( 'PROJECTS', { font: font, size: 2, height: 0.3, curveSegments: 12, });
  const textProjectsMesh = new THREE.Mesh(geometry, [ new THREE.MeshPhongMaterial({color: 0xfffff}), new THREE.MeshPhongMaterial({color: 0x333333}), ]);
    projectsTextGrp.add(textProjectsMesh);
    textProjectsMesh.rotation.y = Math.PI + Math.PI/10;
  });
scene.add(projectsTextGrp);

textLoader.load( './fonts/EB_Garamond.json', function ( font ) {
	var geometry = new TextGeometry( 'ABOUT ME', { font: font, size: 2, height: 0.3, curveSegments: 12, });
  const textAboutMesh = new THREE.Mesh(geometry, [ new THREE.MeshPhongMaterial({color: 0xfffff}), new THREE.MeshPhongMaterial({color: 0x333333}), ]);
    aboutTextGrp.add(textAboutMesh);
    textAboutMesh.rotation.y = Math.PI - Math.PI/10;
});
scene.add(aboutTextGrp);

projectsTextGrp.position.set(20, 14, 40);
aboutTextGrp.position.set(20, 14, 40);
// projectsTextGrp.position.set(50, 14, 40);
// aboutTextGrp.position.set(-10, 14, 40);
projectsTextGrp.scale.set(0, 0, 0);
aboutTextGrp.scale.set(0, 0, 0);


const t1 = gsap.timeline();
const t2 = gsap.timeline();
const t3 = gsap.timeline();
const t4 = gsap.timeline();

const btn = document.createElement('button');
btn.innerHTML = "Click";
btn.id = "click-btn";
document.body.append(btn);
// btn.style.display = "none";

const selectPathHoverDiv = document.createElement('div');
selectPathHoverDiv.id = "select-path-hover-div";
document.body.append(selectPathHoverDiv);
// selectPathHoverDiv.style.display = "none";

const pathDirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(pathDirectionalLight);
const pathDirectionalLightTarget = new THREE.Object3D();
pathDirectionalLightTarget.position.set(10, 14, 42);
scene.add(pathDirectionalLightTarget);
pathDirectionalLight.target = pathDirectionalLightTarget;
pathDirectionalLight.position.set(13, 18, 10);
pathDirectionalLight.castShadow = true;
pathDirectionalLight.shadow.camera.top = 100;
pathDirectionalLight.shadow.camera.left = -100;
pathDirectionalLight.shadow.camera.right = 100;
pathDirectionalLight.shadow.camera.bottom = -100;
pathDirectionalLight.shadow.mapSize.width = 1024;
pathDirectionalLight.shadow.mapSize.height = 1024;
const pathDirectionalLightHelper = new THREE.DirectionalLightHelper(pathDirectionalLight, 0.5);
// scene.add(pathDirectionalLightHelper);

const projectsHoverDiv = document.createElement('div');
projectsHoverDiv.id = "projects-hover-div";
document.body.append(projectsHoverDiv);
projectsHoverDiv.style.display = "none";

const aboutHoverDiv = document.createElement('div');
aboutHoverDiv.id = "about-hover-div";
document.body.append(aboutHoverDiv);
aboutHoverDiv.style.display = "none";

btn.addEventListener("click", ()=>{
  btn.style.display = "none";
  t1.to(camera.position, { x: 10, y: 2.8, z: 4.5, duration: 2 })
  .to(rocketModelGroup.position, { y: 15, x: 0, duration: 2, 'ease': 'none' })
  .to(rocketModelGroup.position, { y: 150, x: -150, z: -50, duration: 3, 'ease': 'none' })
  .to(rocketModelGroup.position, { x: 10, y: 4.5,  z: 2, duration: 0.1 })
  .to(rocketModelGroup.position, { x: 10, y: 9.5, z: 5.5, duration: 1, });
  t2.to(rocketModelGroup.rotation, { duration:2, })
  .to(rocketModelGroup.rotation, { z: 0.5, duration:4, })
  .to(rocketModelGroup.rotation, { x: -2.416609733524616388, y: 0, z: Math.PI, duration: 0.3 });
  t3.to(camera.position, { duration: 2})
  .to(camera.position, { x: 10, y: 15,  z: 5, duration: 5 });
  t4.to(camera.rotation, { duration: 2})
  .to(camera.rotation, {y: Math.PI / 3,duration: 3,ease: 'none'})
  .to(camera.rotation, {y: Math.PI,duration: 3});
  selectPathHoverDiv.style.display = "inline";
})

selectPathHoverDiv.addEventListener("click", ()=>{
  selectPathHoverDiv.style.display = "none";
  gsap.to(projectsTextGrp.position, { x: 50, y: 14, z: 40, duration: 0.3 })
  gsap.to(aboutTextGrp.position, { x: -10, y: 14, z: 40, duration: 0.3 })
  gsap.to(projectsTextGrp.scale, { x: 1, y:1, z:1, duration: 0.3 })
  gsap.to(aboutTextGrp.scale, { x: 1, y:1, z:1, duration: 0.3 })
  projectsHoverDiv.style.display = "inline";
  aboutHoverDiv.style.display = "inline";
})

// const textHoverColor = new THREE.Color("rgb(0, 0, 255)");
// const textDefaultColor = new THREE.Color("rgb(255, 255, 255)");

const pathDirectionalLightHover = new THREE.DirectionalLight(0x0000ff, 0);
scene.add(pathDirectionalLightHover);
pathDirectionalLightHover.position.set(2, -5, 30);
const pathDirectionalLightTargetHover = new THREE.Object3D();
pathDirectionalLightTargetHover.position.set(5, 15, 42);
scene.add(pathDirectionalLightTargetHover);
pathDirectionalLightHover.target = pathDirectionalLightTargetHover;
pathDirectionalLightHover.castShadow = true;
pathDirectionalLightHover.shadow.camera.top = 100;
pathDirectionalLightHover.shadow.camera.left = -100;
pathDirectionalLightHover.shadow.camera.right = 100;
pathDirectionalLightHover.shadow.camera.bottom = -100;
pathDirectionalLightHover.shadow.mapSize.width = 1024;
pathDirectionalLightHover.shadow.mapSize.height = 1024;
const pathDirectionalLightHoverHelper = new THREE.DirectionalLightHelper(pathDirectionalLightHover, 0.5);
// scene.add(pathDirectionalLightHoverHelper);

selectPathHoverDiv.addEventListener("mouseenter", ()=>{
  gsap.to(pathDirectionalLight, { intensity: 0.8, duration:0.2 })
  gsap.to(pathDirectionalLightHover, { intensity: 3, duration:0.2 })
})
selectPathHoverDiv.addEventListener("mouseleave", ()=>{
  gsap.to(pathDirectionalLight, { intensity: 1, duration:0.2 })
  gsap.to(pathDirectionalLightHover, { intensity: 0.5, duration:0.2 })
})

const projectsDirectionalLightHover = new THREE.DirectionalLight(0x0000ff, 0);
scene.add(projectsDirectionalLightHover);
projectsDirectionalLightHover.position.set(45, 13, 38);
const projectsDirectionalLightTargetHover = new THREE.Object3D();
projectsDirectionalLightTargetHover.position.set(50, 15, 42);
scene.add(projectsDirectionalLightTargetHover);
projectsDirectionalLightHover.target = projectsDirectionalLightTargetHover;
projectsDirectionalLightHover.castShadow = true;
projectsDirectionalLightHover.shadow.camera.top = 100;
projectsDirectionalLightHover.shadow.camera.left = -100;
projectsDirectionalLightHover.shadow.camera.right = 100;
projectsDirectionalLightHover.shadow.camera.bottom = -100;
projectsDirectionalLightHover.shadow.mapSize.width = 1024;
projectsDirectionalLightHover.shadow.mapSize.height = 1024;
const projectsDirectionalLightHoverHelper = new THREE.DirectionalLightHelper(projectsDirectionalLightHover, 0.5);
// scene.add(projectsDirectionalLightHoverHelper);

projectsHoverDiv.addEventListener("mouseenter", ()=>{
  gsap.to(projectsDirectionalLightHover, { intensity: 5, duration:0.2, })
  gsap.to(projectsTextGrp.scale, { x: 1.1, y:1.1, z:1.1, duration: 0.2 })
})
  projectsHoverDiv.addEventListener("mouseleave", ()=>{
  gsap.to(projectsDirectionalLightHover, { intensity: 0, duration:0.2 })
  gsap.to(projectsTextGrp.scale, { x: 1, y:1, z:1, duration: 0.2 })
})

const aboutDirectionalLightHover = new THREE.DirectionalLight(0x0000ff, 0);
scene.add(aboutDirectionalLightHover);
aboutDirectionalLightHover.position.set(-5, 13, 30);
const aboutDirectionalLightTargetHover = new THREE.Object3D();
aboutDirectionalLightTargetHover.position.set(-15, 14, 38);
scene.add(aboutDirectionalLightTargetHover);
aboutDirectionalLightHover.target = aboutDirectionalLightTargetHover;
aboutDirectionalLightHover.castShadow = true;
aboutDirectionalLightHover.shadow.camera.top = 100;
aboutDirectionalLightHover.shadow.camera.left = -100;
aboutDirectionalLightHover.shadow.camera.right = 100;
aboutDirectionalLightHover.shadow.camera.bottom = -100;
aboutDirectionalLightHover.shadow.mapSize.width = 1024;
aboutDirectionalLightHover.shadow.mapSize.height = 1024;
const aboutDirectionalLightHoverHelper = new THREE.DirectionalLightHelper(aboutDirectionalLightHover, 0.5);
// scene.add(aboutDirectionalLightHoverHelper);

aboutHoverDiv.addEventListener("mouseenter", ()=>{
  gsap.to(aboutDirectionalLightHover, { intensity: 5, duration:0.2, })
  gsap.to(aboutTextGrp.scale, { x: 1.1, y:1.1, z:1.1, duration: 0.2 })
})
  aboutHoverDiv.addEventListener("mouseleave", ()=>{
  gsap.to(aboutDirectionalLightHover, { intensity: 0, duration:0.2 })
  gsap.to(aboutTextGrp.scale, { x: 1, y:1, z:1, duration: 0.2 })
})

// Projects Space Animation

const projectPageTimeline1 = gsap.timeline();
const projectPageTimeline2 = gsap.timeline();
const projectPageRocketTimeline1 = gsap.timeline();
const projectPageRocketTimeline2 = gsap.timeline();
// camera.rotation.set(-Math.PI / 4, Math.PI + Math.PI / 4 , 0);

projectsHoverDiv.addEventListener("click", ()=>{
    projectPageRocketTimeline1.to(rocketModelGroup.position, { duration: 1, ease: "none" })
    .to(rocketModelGroup.position, { x: 100, y: 200, z: 100, duration: 1, ease: "none" })
    .to(rocketModelGroup.position, { x: -300, y: 10, z: -10, duration: 0.6, ease: "none" })
    projectPageRocketTimeline2.to(rocketModelGroup.rotation, { duration: 1.1, ease: "none" })
    .to(rocketModelGroup.rotation, { z: 2.8, duration: 0.3, ease: "none" })
    projectPageTimeline1.to(camera.position, { x: 10, y: 15, z: 0, duration: 1, ease: "none" })
    .to(camera.position, { x: 10, y: 15, z: 0, duration: 0.6, ease: "none" })
    .to(camera.position, { x: 400, y: 300, z: 100, duration: 0.5, ease: "none" })
    .to(camera.position, { x: -300, y: 10, z: 100, duration: 2, ease: "none" })
    .to(camera.position, { x: -300, y: 10, z: 0, duration: 2, ease: "none" })
    projectPageTimeline2.to(camera.rotation, { x: Math.PI / 7, duration: 1, ease: "none" })
    .to(camera.rotation, { x: -Math.PI / 4, y: Math.PI + Math.PI / 7, duration: 0.2,  ease: "none" })
    .to(camera.rotation, { /* x: -Math.PI / 4,*/ x: -2 * Math.PI, y: Math.PI + Math.PI / 7, duration: 0.5,  ease: "none" })
    .to(camera.rotation, { x: 0, y: Math.PI - Math.PI / 2, z: 0, duration: 0,  ease: "none" })
    .to(camera.rotation, { x: 0, y: Math.PI - Math.PI / 2, z: 5*Math.PI, duration: 2,  ease: "none" })
    .to(camera.rotation, { x: 0, y: 0, z: Math.PI, duration: 0, ease: "none" })
    .to(camera.rotation, { x: 0, y: 0, z: 2*Math.PI, duration: 1, })
    projectsHoverDiv.style.display = "none";
    aboutHoverDiv.style.display = "none";
})

// About Space Animation

const aboutPageTimeline1 = gsap.timeline();
const aboutPageTimeline2 = gsap.timeline();
const aboutPageRocketTimeline1 = gsap.timeline();
const aboutPageRocketTimeline2 = gsap.timeline();
const aboutPageEarthTimeline = gsap.timeline();
const aboutPageLocationMarkerTimeline = gsap.timeline();

// rocketModelGroup.position.set(10, 9.5, 15.5);
// rocketModelGroup.rotation.set(-2.53073, Math.PI, Math.PI - Math.PI/10);
// camera.position.set(10, 15, 5);
// camera.rotation.set(0, Math.PI, 0);

aboutHoverDiv.addEventListener("click", ()=>{
  aboutPageRocketTimeline1.to(rocketModelGroup.position, { duration: 1, ease: "none" })
  .to(rocketModelGroup.position, { z: 100, duration: 0.5, ease: "none" })
  .to(rocketModelGroup.position, { x: 100, y: -100, z: 100, duration: 2.8, ease: "none" })
  .to(rocketModelGroup.position, { x: 326, y: -10, z: 40, duration: 0.1, ease: "none" })
  .to(rocketModelGroup.position, { x: 326, y: 5, z: 18, duration: 0.5, ease: "none" })
  aboutPageRocketTimeline2.to(rocketModelGroup.rotation, { duration: 1.1, ease: "none" })
  .to(rocketModelGroup.rotation, { x: -2.53073, y: 0, z: 3.5, duration: 0.2, ease: "none" })
  .to(rocketModelGroup.rotation, { x: -2.53073, y: 0, z: 3.5, duration: 2.5, ease: "none" })
  .to(rocketModelGroup.rotation, { x: -Math.PI/4, y: -Math.PI/5, z: 0, duration: 0.1, ease: "none" })
  aboutPageTimeline1.to(camera.position, { x: 10, y: 15, z: 0, duration: 1, ease: "none" })
  .to(camera.position, { x: 10, y: 15, z: 40, duration: 0.6, ease: "none" })
  .to(camera.position, { x: 260, y: 10, z: 200, duration: 2, ease: "none" })
  .to(camera.position, { x: 320, y: 10, z: 20, duration: 1, ease: "none" })
  aboutPageTimeline2.to(camera.rotation, { duration: 1, ease: "none" })
  .to(camera.rotation , {duration: 0.5, ease: "none"})
  .to(camera.rotation , { y: 2*Math.PI, duration: 3, ease: "none"})
  aboutPageEarthTimeline.to(earthModelGroup.rotation, {duration: 1.5})
  .to(earthModelGroup.rotation, {x: Math.PI/8, y: -5*Math.PI, z: 0, duration: 0.1})
  .to(earthModelGroup.rotation, {duration: 1.9})
  .to(earthModelGroup.rotation, {x: Math.PI/8, y: -Math.PI/3.5, z: 0, duration: 1.5})
  aboutPageLocationMarkerTimeline.to(locationMarkerModelGroup.position, {y: 100, duration: 0.2})
  .to(locationMarkerModelGroup.position, {duration: 4.2})
  .to(locationMarkerModelGroup.position, {x: 308.5, y: 10.7, z: 8, duration: 0.6})
  projectsHoverDiv.style.display = "none";
  aboutHoverDiv.style.display = "none";
})

// const raycaster = new THREE.Raycaster();
// const pointer = new THREE.Vector2();
// function onPointerMove( event ) {
// 	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
//   console.log(pointer.x, pointer.y);
// }

selectPathHoverDiv.style.display = "none";
projectsHoverDiv.style.display = "none";
aboutHoverDiv.style.display = "none";

// earthModelGroup.rotation.set(Math.PI/8, -Math.PI/3.5, 0);
// camera.position.set(320, 10, 20);
// camera.rotation.set(0, 0, 0);
// rocketModelGroup.position.set(326, 5, 18);
// rocketModelGroup.rotation.set(-Math.PI/4, -Math.PI/5, 0);

const earthModelDirectionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
earthModelDirectionalLight.position.set(300, 10, 10);
scene.add(earthModelDirectionalLight);
const earthModelDirectionalLightTarget = new THREE.Object3D();
earthModelDirectionalLightTarget.position.set(300, 10, 0);
scene.add(earthModelDirectionalLightTarget);
earthModelDirectionalLight.target = earthModelDirectionalLightTarget;
const earthModelDirectionalLightHelper = new THREE.DirectionalLightHelper(earthModelDirectionalLight, 2);
// scene.add(earthModelDirectionalLightHelper);


function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(5000).fill().forEach(addStar);

// const orbitControls = new OrbitControls(camera, renderer.domElement);
// scene.add(orbitControls);

const cameraFocusLight = new THREE.PointLight(0xffffff, 1, 100);

function animate() {
  // cameraFocusLight.position.set(camera.position.x, camera.position.y,  camera.position.z);
  camera.rotation.set(camera.rotation.x, camera.rotation.y,  camera.rotation.z);

  // raycaster.setFromCamera( pointer, camera );
	// const intersects = raycaster.intersectObjects( scene.children );
	// for ( let i = 0; i < intersects.length; i ++ ) {
  //   // console.log(intersects[i]);
	// 	if (intersects[i].object.position.x == 10 && intersects[i].object.position.y == 14 && intersects[i].object.position.z == 41.5){
  //     aboutTextGrp.scale.set(1, 1, 1);
  //     console.log("Hi");
  //   }
	// }
  // camPosition = camera.position;
  // if (camPosition.x == 10 && camPosition.y == 15 && camPosition.z == 5){
  // }
  // console.log(camPosition);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // controls.update();
}

animate();
// window.addEventListener( 'click', onPointerMove );

