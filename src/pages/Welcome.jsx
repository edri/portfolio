import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import Experience from '../components/welcome/Experience';
import TunnelCable from '../components/welcome/utils/TunnelCable';
import SmartSuspense from '../components/welcome/utils/SmartSuspense';

export default function Welcome() {
  const [isSuspenseLoading, setIsSuspenseLoading] = useState(true);

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
          fallback={<TunnelCable setIsLoading={setIsSuspenseLoading} />}
          fallbackMinDurationMs={3000}>
          <Experience />
        </SmartSuspense>
      </Canvas>
      {isSuspenseLoading && (
        <div className="absolute uppercase text-red-500 text-7xl font-roboto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100">
          LOADING...
        </div>
      )}
    </>
  );
}
