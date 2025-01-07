import { Canvas } from '@react-three/fiber';
import Experience from '../components/welcome/Experience';
import SmartSuspense from '../components/welcome/utils/SmartSuspense';
import Loader from '../components/welcome/utils/Loader';

// TODO Miguel : responsiveness
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
        <SmartSuspense fallback={<Loader />} fallbackMinDurationMs={4000}>
          <Experience />
        </SmartSuspense>
      </Canvas>
    </>
  );
}
