import { Environment, OrbitControls, PresentationControls } from '@react-three/drei';
import { RigidBody, Physics, CuboidCollider } from '@react-three/rapier';
import Macbook from './desk/Macbook';
import Coffee from './desk/Coffee';
import Plant from './desk/Plant';
import Name from './desk/Name';
import Desk from './desk/Desk';

export default function Experience() {
    return <>
        {/* TODO Miguel : mur dans les angles du bureau ?  */}
        <color args={ [ '#241a1a' ] } attach="background" />

        <Environment preset="apartment" />

        <directionalLight castShadow position={[4, 2, 0]} intensity={3} />

        {/* TODO Miguel : remove OrbitControls */}
        {/* <OrbitControls makeDefault /> */}

        <PresentationControls
            global
            polar={ [ -0.4, 0.2 ] }
            azimuth={ [ -0.5, 0.25 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            
            <Physics debug={false} gravity={[0, -9.08, 0]}>
                <RigidBody
                    mass={20}
                    restitution={0.2}
                    linearDamping={0.3}
                    angularDamping={0.3}
                    colliders={false}
                    position={[-0.3, 8, -1]}>
                    <Macbook />
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
                    <Name />
                    <CuboidCollider args={ [ 0.25, 0.5, 0.5 ] } position={[0, -1.2, 0]} />
                </RigidBody>

                <RigidBody
                    type="fixed"
                    restitution={ 0 }
                    friction={ 0.7 } >
                    <Desk />
                </RigidBody>
            </Physics>

        </PresentationControls>
    </>
}