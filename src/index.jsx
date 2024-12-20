import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense } from 'react';
import Loader from './utils/Loader.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <Canvas
            className="r3f"
            shadows
            flat
            camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4.5]
            }} >
            <Suspense fallback={<Loader />}>
                <Experience />
            </Suspense>
        </Canvas>

        {/* TODO Miguel */}
        {/* <button class="enter-website-button" onClick={test}>
            ENTER
        </button> */}
    </>
)