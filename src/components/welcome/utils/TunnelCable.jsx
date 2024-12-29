import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import tunnelCableVertexShader from '../../../shaders/tunnelCable/vertex.glsl';
import tunnelCableFragmentShader from '../../../shaders/tunnelCable/fragment.glsl';

const TunnelCableMaterial = shaderMaterial(
  {
    uTime: 0
  },
  tunnelCableVertexShader,
  tunnelCableFragmentShader
);

extend({ TunnelCableMaterial });

export default function TunnelCable({ setIsLoading }) {
  const tunnelCableMaterial = useRef();

  useEffect(() => {
    setIsLoading(true);
    return () => setIsLoading(false);
  }, [setIsLoading]);

  useFrame((state, delta) => {
    tunnelCableMaterial.current.uTime += delta;
  });

  return (
    <>
      <mesh>
        <planeGeometry args={[0.5, 0.5, 1, 1]} />
        <tunnelCableMaterial ref={tunnelCableMaterial} />
      </mesh>
    </>
  );
}

TunnelCable.propTypes = {
  setIsLoading: PropTypes.func.isRequired
};
