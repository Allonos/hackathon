import { useEffect, useRef, useState } from "react";
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

    // Compute bounding box and center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    // Center the model
    scene.position.sub(center); // Move model to origin
    scene.scale.set(1.5, 1.5, 1.5); // Adjust scale as needed

    // Adjust camera position based on bounding box
    const maxDim = Math.max(size.x, size.y, size.z) * 1.5;
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));

    // Set camera position
    camera.position.set(0, 0, cameraZ * 3); // Position the camera
    camera.lookAt(center); // Look at the center of the model

    // Ensure proper near and far planes
    camera.near = 0.01; 
    camera.far = 10000; 
    camera.updateProjectionMatrix(); // Important to update after changing near/far

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
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    const newWidth = Math.min(window.innerWidth / 3, 1000);
    setCanvasSize({ width: newWidth, height: newWidth });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: `${canvasSize.width}px`,
        height: `${canvasSize.height}px`,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 5] }}
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
    </div>
  );
}

export default ThreeDModel;