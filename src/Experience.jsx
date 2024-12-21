import * as THREE from 'three';
import { useControls } from 'leva'
import { Environment, OrbitControls } from '@react-three/drei';
import { RigidBody, Physics, CuboidCollider } from '@react-three/rapier';
import Macbook from './desk/Macbook';
import Coffee from './desk/Coffee';
import Plant from './desk/Plant';
import Name from './desk/Name';
import Desk from './desk/Desk';
import Walls from './walls/Walls';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useState } from 'react';

export default function Experience() {
    const {
        woodColor,
        wallColor,
        textColor,
        environmentRotationY,
        directionalLightX,
        x, y, z, zoom
    } = useControls({
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
        },
        x: {
            value: -3,
            min: -10,
            max: 10,
            step: 0.01
        },
        y: {
            value: 1.5,
            min: -10,
            max: 10,
            step: 0.01
        },
        z: {
            value: 4.5,
            min: -10,
            max: 10,
            step: 0.01
        },
        zoom: {
            value: 1,
            min: 0,
            max: 50,
            step: 0.01
        },
    });

    const camera = useThree((state) => state.camera);

    const [enterScreenStepNumber, setEnterScreenStepNumber] = useState(0);

    function enterScreen() {
        setEnterScreenStepNumber(1);
    }

    // TODO Miguel : delete
    useMemo(() => {
        if (camera) {
            camera.position.set(x, y, z);
            camera.zoom = zoom;
            camera.updateProjectionMatrix();
        }
    }, [x, y, z, zoom]);

    useFrame((state, delta) => {
        switch (enterScreenStepNumber) {
            case 1:
                // Face the screen
                const finalCameraPosition = new THREE.Vector3(0.5, 0.3, 4.5);
                state.camera.position.lerp(finalCameraPosition, delta * 2.5);

                if (state.camera.position.x < 0.55 && state.camera.position.y < 0.35 && state.camera.position.z > 4.45) {
                    // TODO Miguel : supprimer ?
                    // camera.position.set(0.5, 0.3, 5);
                    // camera.updateProjectionMatrix();
                    setEnterScreenStepNumber(2);
                }
                
                break;
            case 2:
                // Enter the screen
                state.camera.zoom += delta * 2;
                camera.updateProjectionMatrix();

                if (state.camera.zoom > 3.5) {
                    setEnterScreenStepNumber(3);
                }
                
                break;
        }
    });

    return <>
        <Environment
            preset="apartment"
            environmentRotation={[0, Math.PI / environmentRotationY, 0]}
        />

        <directionalLight
            castShadow
            position={[0, 2, 2]}
            intensity={2}
            shadow-normalBias={0.04} />
        <directionalLight
            castShadow
            position={[directionalLightX, 2, 2]}
            intensity={2}
            shadow-normalBias={0.04} />

        {/* TODO Miguel : remove OrbitControls */}
        <OrbitControls makeDefault />
            
        <Physics debug={false} gravity={[0, -9.08, 0]}>
            <RigidBody
                mass={20}
                restitution={0.2}
                linearDamping={0.3}
                angularDamping={0.3}
                colliders={false}
                position={[-0.3, 8, -1]} >
                {/* TODO Miguel : remove onClick */}
                <Macbook onClick={enterScreen} />
                <CuboidCollider args={ [ 1.6, 0.5, 0.5 ] } position={[0, 0.95, 0]} />
            </RigidBody>

            <RigidBody position={[-0.3, 20, -1]}>
                <Coffee />
            </RigidBody>

            <RigidBody colliders={false} position={[2.8, 30, -3.5]}>
                <Plant scale={3} />
                <CuboidCollider args={ [ 1.5, 1.5, 1.5 ] } position={[0, 1.5, 0]} />
            </RigidBody>

            <RigidBody colliders={false} position={[3.3, 45, 0]}>
                <Name color={ textColor } />
                <CuboidCollider args={ [ 0.25, 0.5, 0.5 ] } position={[0, -1.2, 0]} />
            </RigidBody>

            <RigidBody
                type="fixed"
                restitution={ 0 }
                friction={ 0.7 } >
                <Desk color={ woodColor } />
            </RigidBody>
        </Physics>

        <Walls color={ wallColor } />
    </>
}