import * as THREE from 'three';
import PropTypes from 'prop-types';
import { useTexture } from '@react-three/drei';

export default function Desk({ color }) {
  // TODO Miguel : fix artefacts on the wood with the light
  const woodColorTexture = useTexture('/textures/wood/color.webp');
  const woodAmbientOcclusionTexture = useTexture('/textures/wood/ambientOcclusion.webp');
  const woodMetalnessTexture = useTexture('/textures/wood/metalness.webp');
  const woodRoughnessTexture = useTexture('/textures/wood/roughness.webp');
  const woodNormalTexture = useTexture('/textures/wood/normal.webp');
  const woodDisplacementTexture = useTexture('/textures/wood/displacement.webp');

  woodColorTexture.colorSpace = THREE.SRGBColorSpace;
  woodColorTexture.center = new THREE.Vector2(0.5, 0.5);
  woodColorTexture.rotation = Math.PI / 2;

  woodAmbientOcclusionTexture.center = new THREE.Vector2(0.5, 0.5);
  woodAmbientOcclusionTexture.rotation = Math.PI / 2;

  woodMetalnessTexture.center = new THREE.Vector2(0.5, 0.5);
  woodMetalnessTexture.rotation = Math.PI / 2;

  woodRoughnessTexture.center = new THREE.Vector2(0.5, 0.5);
  woodRoughnessTexture.rotation = Math.PI / 2;

  woodNormalTexture.center = new THREE.Vector2(0.5, 0.5);
  woodNormalTexture.rotation = Math.PI / 2;

  woodDisplacementTexture.center = new THREE.Vector2(0.5, 0.5);
  woodDisplacementTexture.rotation = Math.PI / 2;

  return (
    <>
      <mesh receiveShadow position-y={-1.25} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial
          color={color}
          map={woodColorTexture}
          aoMap={woodAmbientOcclusionTexture}
          roughnessMap={woodRoughnessTexture}
          metalnessMap={woodMetalnessTexture}
          normalMap={woodNormalTexture}
          displacementMap={woodDisplacementTexture}
          displacementScale={0.45}
          displacementBias={-0.12}
        />
      </mesh>
    </>
  );
}

Desk.propTypes = {
  color: PropTypes.string.isRequired
};
