import { Float, Text } from "@react-three/drei";

export default function Name() {
    return <>
        <Float rotationIntensity={0.4} > 
            <Text
                font="./fonts/bangers-v20-latin-regular.woff"
                fontSize={ 0.8 }
                rotation-y={ - 1.25 }
                maxWidth={ 2 }
                textAlign='center'>
                MIGUEL SANTAMARIA
                {/* TODO Miguel : titre professionnel ? */}
            </Text>
        </Float>
    </>
};
