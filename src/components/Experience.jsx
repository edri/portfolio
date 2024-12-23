import * as THREE from 'three';
import { useControls } from 'leva';
import { Environment, Html, OrbitControls } from '@react-three/drei';
import { RigidBody, Physics, CuboidCollider } from '@react-three/rapier';
import { useNavigate } from 'react-router';
import { useFrame, useThree } from '@react-three/fiber';
import { useState } from 'react';
import Macbook from './desk/Macbook';
import Coffee from './desk/Coffee';
import Plant from './desk/Plant';
import Name from './desk/Name';
import Desk from './desk/Desk';
import Walls from './walls/Walls';

export default function Experience() {
  // TODO Miguel
  // const woodColor = '#E1B180';
  // const wallColor = '#362B1F';
  // const textColor = '#FFFFFF';
  // const environmentRotationY = 17;
  // const directionalLightX = 5;
  // const x = -3;
  // const y = 1.5;
  // const z = 4.5;
  // const zoom = 1;

  const { woodColor, wallColor, textColor, environmentRotationY, directionalLightX } = useControls({
    woodColor: '#E1B180',
    wallColor: '#362B1F',
    textColor: '#FFFFFF',
    environmentRotationY: {
      value: 17,
      min: 1,
      max: 120,
      step: 0.01
    },
    directionalLightX: {
      value: 5,
      min: 0,
      max: 50,
      step: 0.01
    }
  });

  const [showEnterScreenButton, setShowEnterScreenButton] = useState(false);
  const [enterScreenStepNumber, setEnterScreenStepNumber] = useState(0);

  const camera = useThree((state) => state.camera);
  const navigate = useNavigate();

  const enterScreenButtonClasses = `enter-website-button ${showEnterScreenButton && 'visible'}`;

  function enterScreen() {
    if (enterScreenStepNumber === 0) {
      setEnterScreenStepNumber(1);
    }
  }

  // Handle the collision of the name text with the desk in order to show the 'Enter' button.
  function handleNameCollision() {
    setShowEnterScreenButton(true);
  }

  useFrame((state, delta) => {
    switch (enterScreenStepNumber) {
      case 1: {
        // Face the screen
        const finalCameraPosition = new THREE.Vector3(0.5, 0.3, 4.5);
        state.camera.position.lerp(finalCameraPosition, delta * 3);

        if (
          state.camera.position.x < 0.55 &&
          state.camera.position.y < 0.35 &&
          state.camera.position.z > 4.45
        ) {
          setEnterScreenStepNumber(2);
        }

        break;
      }
      case 2:
        // Enter the screen
        state.camera.zoom += delta * 2.8;
        camera.updateProjectionMatrix();

        if (state.camera.zoom > 3.5) {
          setEnterScreenStepNumber(3);
        }

        break;
      case 3:
        // Redirect user to home page.
        navigate('/home');
    }
  });

  return (
    <>
      <Environment
        preset="apartment"
        environmentRotation={[0, Math.PI / environmentRotationY, 0]}
      />

      <directionalLight castShadow position={[0, 2, 2]} intensity={2} shadow-normalBias={0.04} />
      <directionalLight
        castShadow
        position={[directionalLightX, 2, 2]}
        intensity={2}
        shadow-normalBias={0.04}
      />

      {/* TODO Miguel : remove OrbitControls */}
      <OrbitControls makeDefault />

      <Physics debug={false} gravity={[0, -9.08, 0]}>
        <RigidBody
          mass={20}
          restitution={0.2}
          linearDamping={0.3}
          angularDamping={0.3}
          colliders={false}
          position={[-0.3, 8, -1]}>
          <Macbook />
          <CuboidCollider args={[1.6, 0.5, 0.5]} position={[0, 0.95, 0]} />
        </RigidBody>

        <RigidBody position={[-0.3, 20, -1]}>
          <Coffee />
        </RigidBody>

        <RigidBody colliders={false} position={[2.8, 30, -3.5]}>
          <Plant scale={3} />
          <CuboidCollider args={[1.5, 1.5, 1.5]} position={[0, 1.5, 0]} />
        </RigidBody>

        <RigidBody colliders={false} position={[3.3, 45, 0]} onCollisionEnter={handleNameCollision}>
          <Name color={textColor} />
          <CuboidCollider args={[0.25, 0.5, 0.5]} position={[0, -1.2, 0]} />
        </RigidBody>

        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <Desk color={woodColor} />
        </RigidBody>
      </Physics>

      <Walls color={wallColor} />

      <Html position={[4, -2.5, 0]} scale={[2, 1, 1]}>
        <button className={enterScreenButtonClasses} onClick={enterScreen}>
          Enter
        </button>
      </Html>
    </>
  );
}
