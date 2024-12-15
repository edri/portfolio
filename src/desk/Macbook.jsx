import { Html, useGLTF } from "@react-three/drei";

export default function Macbook() {
  const computer = useGLTF('./models/macbook.gltf');
  
  return <>
    {/* Screen light */}
    <rectAreaLight
        width={ 2.5 }
        height={ 1.65 }
        intensity={ 65 }
        color={ '#ffffff' }
        rotation={ [ -0.1, Math.PI, 0 ] }
        position={ [ 0, 0.55, -1.15 ] } />

    <primitive object={ computer.scene }>
        <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={ 1.17 }
            position={ [ 0, 1.56, -1.4 ] }
            rotation-x={ -0.256 } >
            <iframe src="https://github.com/edri" />
        </Html>
    </primitive>
  </>
};
