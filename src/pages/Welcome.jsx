import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Experience from '../components/welcome/Experience';
import TunnelCable from '../components/welcome/utils/TunnelCable';
import SmartSuspense from '../components/welcome/utils/SmartSuspense';

export default function Welcome() {
  const [isSuspenseLoading, setIsSuspenseLoading] = useState(true);

  function setIsLoading(isLoading) {
    setIsSuspenseLoading(isLoading);
  }

  const canvasClasses = `r3f ${isSuspenseLoading && 'zoomed'}`;

  return (
    <>
      <Canvas
        className={canvasClasses}
        shadows
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4.5]
        }}>
        <SmartSuspense
          fallback={<TunnelCable setIsLoading={setIsLoading} />}
          fallbackMinDurationMs={5000}>
          <Experience />
        </SmartSuspense>
      </Canvas>
    </>
  );
}
