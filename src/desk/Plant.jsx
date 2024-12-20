import { useGLTF } from "@react-three/drei";

export default function Macbook({ scale }) {
  // TODO Miguel : loader en global ?
  const { nodes, materials } = useGLTF('./models/plant.glb');
  
  return <>
    <mesh
      castShadow
      receiveShadow
        geometry={nodes.PlantBanjoFig001.geometry}
        material={materials.PlantBanjoFig001_4K}
        scale={ scale } />
    <mesh
      castShadow
      receiveShadow
        geometry={nodes.PlantBanjoFigVase001.geometry}
        material={materials.PlantBanjoFigVase001_4K}
        scale={ scale } />
  </>
};
