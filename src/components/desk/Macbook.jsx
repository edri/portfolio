import { Html, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

export default function Macbook() {
  const computer = useGLTF('./models/macbook.gltf');

  useEffect(() => {
    computer.scene.traverse((node) => {
      if (node.isMesh) {
        // Cast and receive shadows for the top and the bottom of the Macbook.
        if (
          node.name === 'Circle001' ||
          node.name === 'Circle002' ||
          node.name === 'Circle001_4' ||
          node.name === 'Circle001_6'
        ) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      }
    });
  });

  return (
    <>
      {/* Screen light */}
      {/* TODO Miguel : réduire intesité ? */}
      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={65}
        color={'#ffffff'}
        rotation={[-0.1, Math.PI, 0]}
        position={[0, 0.55, -1.15]}
      />

      <primitive object={computer.scene}>
        <Html
          transform
          wrapperClass="html-screen"
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}
          rotation-x={-0.256}>
          <iframe src="/home" />
        </Html>
      </primitive>
    </>
  );
}
