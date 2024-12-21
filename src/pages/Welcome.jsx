import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/utils/Loader';
import Experience from '../components/Experience';

export default function Welcome() {
  return (
    <>
      <Canvas
        className="r3f"
        shadows
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4.5]
        }}>
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
