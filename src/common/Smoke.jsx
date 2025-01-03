import * as THREE from 'three';
import { shaderMaterial, useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import smokeVertexShader from '../shaders/smoke/vertex.glsl';
import smokeFragmentShader from '../shaders/smoke/fragment.glsl';

const SmokeMaterial = shaderMaterial(
  {
    uTime: 0,
    uPerlinTexture: '',
    uWind: false
  },
  smokeVertexShader,
  smokeFragmentShader
);

extend({ SmokeMaterial });

export default function Smoke({
  position,
  rotation = [0, 0, 0],
  scale = [1, 6, 1],
  hasWind = false
}) {
  const perlinTexture = useTexture('./images/perlin.png');
  // Make the perlin texture repeat itself.
  perlinTexture.wrapS = THREE.RepeatWrapping;
  perlinTexture.wrapT = THREE.RepeatWrapping;

  const smokeMaterial = useRef();

  useEffect(() => {
    smokeMaterial.current.uPerlinTexture = perlinTexture;
    smokeMaterial.current.uWind = hasWind;
  });

  useFrame((state, delta) => {
    smokeMaterial.current.uTime += delta;
  });

  return (
    <>
      <mesh scale={scale} position={position} rotation={rotation}>
        <planeGeometry args={[1, 1, 16, 64]} />
        <smokeMaterial
          ref={smokeMaterial}
          transparent={true}
          side={THREE.DoubleSide}
          // Prevent the smoke to occlude itself.
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

Smoke.propTypes = {
  position: PropTypes.array.isRequired,
  rotation: PropTypes.array,
  scale: PropTypes.array,
  hasWind: PropTypes.bool
};
