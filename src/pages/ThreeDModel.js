import { useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, SpotLight, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import sunModel from "../images/sunmodel.glb";

function GLTFModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF(sunModel);
  const { camera } = useThree();
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

    scene.position.sub(center);
    scene.scale.set(1.5, 1.5, 1.5);

    const maxDim = Math.max(size.x, size.y, size.z) * 1.5;
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));

    camera.position.set(0, 0, cameraZ * 3);
    camera.lookAt(center);

    camera.near = 0.01; 
    camera.far = 10000; 
    camera.updateProjectionMatrix();

    mixer.current = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }, [camera, scene, animations]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <group ref={ref} />;
}

function ThreeDModel() {
  return (
    <Canvas
      style={{
        width: '100%', // Make it responsive
        height: 'auto', // Maintain aspect ratio
        maxWidth: '1000px', // Set max width
        maxHeight: '1000px', // Set max height
        position: 'absolute',
        top: '130px', 
        left: '50%',
        transform: 'translateX(-50%)', // Center horizontally
        zIndex: 1
      }}
    >
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
        minDistance={1300}
        maxDistance={1400}
        enableZoom={true}
      />
    </Canvas>
  );
}

export default ThreeDModel;