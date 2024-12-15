import * as THREE from 'three';
import { shaderMaterial, useGLTF, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import coffeeSmokeVertexShader from '../shaders/coffeeSmoke/vertex.glsl';
import coffeeSmokeFragmentShader from '../shaders/coffeeSmoke/fragment.glsl';
import { useEffect, useRef } from "react";

const CoffeeSmokeMaterial = shaderMaterial(
    {
        uTime: 0,
        uPerlinTexture: '',
    },
    coffeeSmokeVertexShader,
    coffeeSmokeFragmentShader,
);

extend({ CoffeeSmokeMaterial });

export default function Coffee() {
  const coffeeCup = useGLTF('./models/coffee.glb');
  const perlinTexture = useTexture('./images/perlin.png');
  // Make the perlin texture repeat itself.
  perlinTexture.wrapS = THREE.RepeatWrapping;
  perlinTexture.wrapT = THREE.RepeatWrapping;

  const coffeeSmokeMaterial = useRef();

  useEffect(() => {
      coffeeSmokeMaterial.current.uPerlinTexture = perlinTexture;
  });

  useFrame((state, delta) => {
      coffeeSmokeMaterial.current.uTime += delta;
  });
  
  return <>
    {/* Smoke */}
    <mesh scale={ [ 0.7, 6, 0.7 ] } position={ [ -2.5, 3.7, 0 ] }>
        <planeGeometry args={ [ 1, 1, 16, 64 ] } />
        <coffeeSmokeMaterial
            ref={ coffeeSmokeMaterial }
            transparent={ true }
            side={ THREE.DoubleSide }
            // Prevent the smoke to occlude itself.
            depthWrite={ false } />
    </mesh>
    {/* Cup */}
    <primitive
      object={ coffeeCup.scene }
      scale={ 0.4 }
      position={ [ -2.5, 0, 0 ] }
      rotation={[0, -Math.PI, 0]} />
  </>
};
