import { useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function Plant({ scale }) {
  // const { nodes, materials } = useGLTF('./models/plant.glb');
  const plant = useGLTF('./models/plant.glb');

  useEffect(() => {
    plant.scene.traverse((node) => {
      if (node.isMesh) {
        // Cast and receive shadows for the vase of the plant only.
        if (node.name === 'PlantBanjoFigVase001') {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      }
    });
  });

  return (
    <>
      <primitive object={plant.scene} scale={scale} />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.PlantBanjoFig001.geometry}
        material={materials.PlantBanjoFig001_4K}
        scale={scale}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PlantBanjoFigVase001.geometry}
        material={materials.PlantBanjoFigVase001_4K}
        scale={scale}
      /> */}
    </>
  );
}

Plant.propTypes = {
  scale: PropTypes.number.isRequired
};
