import { useGLTF } from '@react-three/drei';
import Smoke from '../../common/Smoke';

export default function Coffee() {
  // TODO Miguel : remplacer modèle mug
  const { nodes, materials } = useGLTF('./models/coffee.glb');

  return (
    <>
      {/* Smoke */}
      <Smoke
        scale={[0.7, 6, 0.7]}
        position={[-2.5, 3, 0]}
        rotation={[0, -Math.PI, 0]}
        hasWind={true}
      />
      {/* Cup */}
      <mesh
        castShadow
        geometry={nodes.baked.geometry}
        material={materials.baked}
        scale={0.4}
        position={[-2.5, 0, 0]}
        rotation={[0, -Math.PI, 0]}
      />
    </>
  );
}
