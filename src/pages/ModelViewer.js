import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import sunModel from '../images/sunD.glb'


const Model = () => {
  const { scene } = useGLTF(sunModel);

  return <primitive object={scene} />;
};

const ModalViewer = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ModalViewer;

// import sunModel from '../images/Sun_1_1391000.glb'
// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// // import { OrbitControls } from '@react-three/drei';
// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/orbitControls.js';
// // import { GLTFLoader } from 'three/examples/jsm/Addons.js';
// import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// const scene = new THREE.scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// let object;

// let controls;

// let objToRender = 'eye';

// const loader = new GLTFLoader();

// loader.load(sunModel, 
//   function (gltf) {
//     object = gltf.scene;
//     scene.add(object);
//   },

//   function (xhr) {
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   }, 

//   function (error) {
//     console.error(error);
//   }
// );

// const renderer = new THREE.WebGLRenderer({alpha: true});
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.getElementById('container3D').appendChild(renderer.domElement);

// camera.position.z = objToRender === 'dino' ? 25 : 500;

// const topLight = new THREE.DirectionalLight(0xffffff, 1);
// topLight.position.set(500, 500, 500);
// topLight.castShadow = true;
// scene.add(topLight);

// const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5: 1);
// scene.add(ambientLight);

// function animate() {
//   requestAnimationFrame(animate);

//   if (object && objToRender === "eye") {
//     object.rotation.y = -3 + mouseX / window.innerWidth * 3;
//     object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
//   }
//   renderer.render(scene, camera);
// }

// window.addEventListener("resize", function(){
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// animate();