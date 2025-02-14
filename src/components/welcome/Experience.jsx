import * as THREE from 'three';
// import { useControls } from 'leva';
import { Environment, Html, OrbitControls } from '@react-three/drei';
import { RigidBody, Physics, CuboidCollider } from '@react-three/rapier';
import { useNavigate } from 'react-router';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import Macbook from './desk/Macbook';
import Coffee from './desk/Coffee';
import Plant from './desk/Plant';
import Title from './desk/Title';
import Desk from './desk/Desk';
import Walls from './walls/Walls';

const isMobileOrTablet = (() => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      // eslint-disable-next-line no-useless-escape
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check || window.innerWidth <= 768;
})();

export default function Experience() {
  const woodColor = '#E1B180';
  const wallColor = '#362B1F';
  const textColor = '#FFFFFF';
  const environmentRotationY = 17;
  const directionalLightX = 5;

  // DEBUG
  // const { woodColor, wallColor, textColor, environmentRotationY, directionalLightX } = useControls({
  //   woodColor: '#E1B180',
  //   wallColor: '#362B1F',
  //   textColor: '#FFFFFF',
  //   environmentRotationY: {
  //     value: 17,
  //     min: 1,
  //     max: 120,
  //     step: 0.01
  //   },
  //   directionalLightX: {
  //     value: 5,
  //     min: 0,
  //     max: 50,
  //     step: 0.01
  //   }
  // });

  const [showEnterScreenButton, setShowEnterScreenButton] = useState(false);
  const [enterScreenStepNumber, setEnterScreenStepNumber] = useState(0);

  const navigate = useNavigate();

  const enterScreenButtonClasses = `enter-website-button rounded border border-dark-brown bg-dark-brown text-beige cursor-pointer shadow-lg hover:border-beige ${showEnterScreenButton && 'visible'}`;

  function enterScreen() {
    if (isMobileOrTablet) {
      // Redirect user to home page.
      navigate('/home');
    } else if (enterScreenStepNumber === 0) {
      setEnterScreenStepNumber(1);
    }
  }

  // Handle the collision of the Macbook or the name text with the desk in order to show the 'Enter' button.
  function handleMacbookCollision() {
    if (isMobileOrTablet) {
      setShowEnterScreenButton(true);
    }
  }

  function handleNameCollision() {
    if (!isMobileOrTablet) {
      setShowEnterScreenButton(true);
    }
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
        state.camera.updateProjectionMatrix();

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

      <directionalLight
        castShadow
        position={[directionalLightX, 2, 2]}
        intensity={2}
        shadow-normalBias={0.04}
      />

      {/* OrbitControls with user interaction disabled */}
      <OrbitControls makeDefault enableRotate={false} enablePan={false} enableZoom={false} />

      <Physics debug={false} gravity={[0, -9.08, 0]}>
        {/* TODO Miguel : replace the Macbook by a smartphone in mobile mode */}
        <RigidBody
          mass={20}
          restitution={0.2}
          linearDamping={0.3}
          angularDamping={0.3}
          colliders={false}
          position={isMobileOrTablet ? [1.3, 8, -2] : [-0.3, 8, -1]}
          rotation={isMobileOrTablet ? [0, -Math.PI / 6, 0] : [0, 0, 0]}
          onCollisionEnter={handleMacbookCollision}>
          <Macbook />
          <CuboidCollider args={[1.6, 0.5, 0.5]} position={[0, 0.95, 0]} />
        </RigidBody>

        {!isMobileOrTablet && (
          <RigidBody position={[-0.3, 20, -1]}>
            <Coffee />
          </RigidBody>
        )}

        {/* TODO Miguel : fix the plant bug on loading */}
	{/* {!isMobileOrTablet && (
          <RigidBody colliders={false} position={[2.8, 30, -3.5]}>
            <Plant scale={3} />
            <CuboidCollider args={[1.5, 1.5, 1.5]} position={[0, 1.5, 0]} />
          </RigidBody>
        )} */}

        {/* TODO Miguel: position-y = 45 */}
        {!isMobileOrTablet && (
          <RigidBody
            colliders={false}
            position={[3.3, 30, 0]}
            onCollisionEnter={handleNameCollision}>
            <Title color={textColor} />
            <CuboidCollider args={[0.25, 0.5, 0.5]} position={[0, -1.2, 0]} />
          </RigidBody>
        )}

        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <Desk color={woodColor} />
        </RigidBody>
      </Physics>

      <Walls color={wallColor} />

      <Html position={isMobileOrTablet ? [-0.68, -1, 0] : [4, -2.5, 0]} scale={[2, 1, 1]}>
        <button className={enterScreenButtonClasses} onClick={enterScreen}>
          Enter
        </button>
      </Html>
    </>
  );
}
