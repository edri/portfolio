import { Float, Text } from "@react-three/drei";

export default function Name({ color }) {
    return <>
        <Float rotationIntensity={0.4} >
            <Text
                color={ color }
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={ 0.8 }
                rotation-y={ -1.25 }
                position-y={0.3}
                maxWidth={ 2 }
                textAlign='center'>
                MIGUEL SANTAMARIA
            </Text>
            <Text
                color={ color }
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={ 0.25 }
                rotation-y={-1.25}
                position-y={-0.73}
                maxWidth={ 4 }
                textAlign='center'>
                Web developer
            </Text>
        </Float>
    </>
};
