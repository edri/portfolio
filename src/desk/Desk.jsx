import * as THREE from 'three';
import { useTexture } from "@react-three/drei";

export default function Desk() {
  // TODO Miguel : webp textures
  const woodColorTexture = useTexture('./textures/wood/color.jpg');
  const woodAmbientOcclusionTexture = useTexture('./textures/wood/ambientOcclusion.jpg');
  const woodMetalnessTexture = useTexture("/textures/wood/metalness.jpg");
  const woodRoughnessTexture = useTexture("/textures/wood/roughness.jpg");
  const woodNormalTexture = useTexture("/textures/wood/normal.png");
  const woodDisplacementTexture = useTexture("/textures/wood/displacement.webp");

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

  // TODO Miguel : show shadows on the desk (issue with meshStandardMaterial?)
  return <>
    <mesh receiveShadow position-y={ - 1.25 } rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        {/* <meshStandardMaterial color="#8B4513" /> */}
        <meshStandardMaterial
          color="#e1b180"
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
};
