import * as THREE from 'three';
import { useTexture } from "@react-three/drei";
import Wall from './Wall';
import { useEffect } from 'react';

export default function Walls({ color }) {
  const wallColorTexture = useTexture('./textures/wall/color.webp');
  const wallAmbientOcclusionTexture = useTexture('./textures/wall/ambientOcclusion.webp');
  const wallMetalnessTexture = useTexture("/textures/wall/metalness.webp");
  const wallRoughnessTexture = useTexture("/textures/wall/roughness.webp");
  const wallNormalTexture = useTexture("/textures/wall/normal.webp");
  const wallDisplacementTexture = useTexture("/textures/wall/displacement.webp");

  useEffect(() => {
      wallColorTexture.colorSpace = THREE.SRGBColorSpace;
      wallColorTexture.center = new THREE.Vector2(0.5, 0.5);
      wallColorTexture.rotation = Math.PI / 2;

      wallAmbientOcclusionTexture.center = new THREE.Vector2(0.5, 0.5);
      wallAmbientOcclusionTexture.rotation = Math.PI / 2;

      wallMetalnessTexture.center = new THREE.Vector2(0.5, 0.5);
      wallMetalnessTexture.rotation = Math.PI / 2;

      wallRoughnessTexture.center = new THREE.Vector2(0.5, 0.5);
      wallRoughnessTexture.rotation = Math.PI / 2;

      wallNormalTexture.center = new THREE.Vector2(0.5, 0.5);
      wallNormalTexture.rotation = Math.PI / 2;

      wallDisplacementTexture.center = new THREE.Vector2(0.5, 0.5);
      wallDisplacementTexture.rotation = Math.PI / 2;
  });

  const texture = {
    color: wallColorTexture,
    ambientOcclusion: wallAmbientOcclusionTexture,
    metalness: wallMetalnessTexture,
    roughness: wallRoughnessTexture,
    normal: wallNormalTexture,
    displacement: wallDisplacementTexture,
  };

  return <>
    <Wall texture={ texture } color={ color } position={ [0, 3.5, -5] } />
    <Wall texture={ texture } color={ color } position={ [5, 3.5, -0.5] } rotation={ [0, -Math.PI / 2, 0] } />
  </>
};
