import { useEffect, useRef } from "react";
import {Canvas, useThree, useFrame} from '@react-three/fiber';
import { OrbitControls, SpotLight, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import sunModel from "../images/sunmodel.glb"

function GLTFModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF(sunModel);
  const { camera, gl } = useThree();
  const mixer = useRef();

  useEffect(() => {
    ref.current.add(scene);

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set('green');
      }
    });

    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    scene.position.x += (scene.position.x - center.x);
    scene.position.y += (scene.position.y - center.y);
    scene.position.z += (scene.position.z - center.z);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));

    camera.position.z = center.z + cameraZ + 0.1;
    camera.position.y = center.y + cameraZ / 2;
    camera.lookAt(center);
    gl.setSize(window.innerWidth, window.innerHeight);

    mixer.current = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }, [camera, gl, scene, animations]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <group ref={ref} />;
}

function ThreeDModel() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight 
        position={[5, 17, 7.5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      <SpotLight 
        position={[15, 6, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <GLTFModel />
      <OrbitControls 
        minDistance={1100}
        maxDistance={1400}
        enableZoom={true}
      />
    </Canvas>
  )
}

export default ThreeDModel;