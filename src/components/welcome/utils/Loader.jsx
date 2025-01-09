import { Html } from '@react-three/drei';

export default function Loader() {
  return (
    <>
      <Html wrapperClass="loader-wrapper" className="loader-container">
        <div className="loader"></div>
        <div className="loader-text text-beige text-7xl mt-8 sm:text-8xl sm:m-0"></div>
      </Html>
    </>
  );
}
