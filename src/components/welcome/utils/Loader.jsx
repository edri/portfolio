import { Html } from '@react-three/drei';

export default function Loader() {
  return (
    <>
      <Html wrapperClass="loader-wrapper" className="loader-container">
        <div className="loader"></div>
        <div className="loader-text text-beige text-8xl"></div>
      </Html>
    </>
  );
}
