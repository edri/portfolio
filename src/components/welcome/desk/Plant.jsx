import { useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';

export default function Plant({ scale }) {
  const { nodes, materials } = useGLTF('./models/plant.glb');

  return (
    <>
      <mesh
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
      />
    </>
  );
}

Plant.propTypes = {
  scale: PropTypes.number.isRequired
};
