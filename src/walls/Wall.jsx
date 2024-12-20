export default function Wall({ texture, color, position, rotation = [0, 0, 0] }) {
  return <>
    <mesh receiveShadow position={ position } rotation={ rotation }>
        <planeGeometry args={[10, 10]} />
        {/* <meshStandardMaterial color="#8B4513" /> */}
        <meshStandardMaterial
          color={color}
          map={texture.color}
          aoMap={texture.ambientOcclusion}
          roughnessMap={texture.roughness}
          metalnessMap={texture.metalness}
          normalMap={texture.normal}
          displacementMap={texture.displacement}
          displacementScale={0.45}
          displacementBias={-0.1}
        />
    </mesh>
  </>
};
