import { Float, Text } from '@react-three/drei';
import PropTypes from 'prop-types';

export default function Name({ color }) {
  return (
    <>
      <Float rotationIntensity={0.4}>
        <Text
          color={color}
          font="./fonts/bangers-v20-latin-regular.woff"
          fontSize={0.25}
          rotation-y={-1.25}
          position-y={0.8}
          maxWidth={2}
          textAlign="center">
          Welcome to my
        </Text>
        <Text
          color={color}
          font="./fonts/bangers-v20-latin-regular.woff"
          fontSize={0.8}
          rotation-y={-1.25}
          position-y={0.15}
          maxWidth={4}
          textAlign="center">
          PORTFOLIO
        </Text>
      </Float>
    </>
  );
}

Name.propTypes = {
  color: PropTypes.string.isRequired
};
