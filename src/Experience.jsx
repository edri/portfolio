import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { RigidBody, Physics, CuboidCollider } from '@react-three/rapier';
import Macbook from './desk/Macbook';
import Coffee from './desk/Coffee';
import Name from './desk/Name';

export default function Experience() {    
    return <>
        <color args={ [ '#241a1a' ] } attach="background" />

        <Environment preset="city" />

        {/* TODO Miguel : remove OrbitControls */}
        <OrbitControls makeDefault />
        
        <Physics debug={false} gravity={[0, - 9.08, 0]}>
            <RigidBody colliders={false} position={[0, 10, -1]}>
                <Macbook />
                <CuboidCollider args={ [ 1.6, 0.5, 0.5 ] } position={[0, 0.95, 0]} />
            </RigidBody>

            <RigidBody position={[0, 20, -1]}>
                <Coffee />
            </RigidBody>

            <RigidBody colliders={false} position={[2.5, 30, 0, 75]}>
                <Name />
                <CuboidCollider args={ [ 0.25, 0.5, 0.5 ] } position={[0, -1.2, 0]} />
            </RigidBody>

            <RigidBody
                type="fixed"
                restitution={ 0 }
                friction={ 0.7 }
            >
                <mesh receiveShadow position-y={ - 1.25 } rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={ [ 20, 20 ] } />
                    <meshStandardMaterial color="#8B4513" />
                </mesh>
            </RigidBody>
        </Physics>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />
    </>
}