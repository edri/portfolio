import { Canvas } from '@react-three/fiber';
import Smoke from '../../common/Smoke';

export default function BackgroundSmokeCanvas() {
  return (
    <>
      <Canvas
        className="r3f-background-smoke"
        shadows
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4.5]
        }}>
        <Smoke position={[-1, 0, 0]} />
        <Smoke position={[1, -1, 0]} rotation={[0, -Math.PI / 2, 0]} />
      </Canvas>
    </>
  );
}
