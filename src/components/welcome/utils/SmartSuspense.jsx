import { Suspense, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// TODO Miguel : commentaires
// https://github.com/facebook/react/issues/17351
// https://codesandbox.io/p/sandbox/react-suspense-delayed-loader-forked-it-works-pz0xwc?file=%2Fsrc%2Findex.js%3A20%2C1-22%2C3
const FunkyLoader = () => {
  throw new Promise(() => {});
};

const Delayed = ({ onDelayEnd, children }) => {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    onDelayEnd();
    setShowLoader(true);
  }, [onDelayEnd]);
  return showLoader ? children : null;
};

Delayed.propTypes = {
  onDelayEnd: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default function SmartSuspense({ children, fallback, fallbackMinDurationMs }) {
  const [fakeLoading, setFakeLoading] = useState(false);
  const startFakeLoading = useCallback(() => {
    setFakeLoading(true);
    const timeoutId = setTimeout(() => {
      setFakeLoading(false);
    }, fallbackMinDurationMs);
    return () => clearTimeout(timeoutId);
  }, [fallbackMinDurationMs]);

  return (
    <Suspense fallback={<Delayed onDelayEnd={startFakeLoading}>{fallback}</Delayed>}>
      {fakeLoading && <FunkyLoader />}
      {children}
    </Suspense>
  );
}

SmartSuspense.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.object.isRequired,
  fallbackMinDurationMs: PropTypes.number.isRequired
};
