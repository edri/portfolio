import { Suspense, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FunkyLoader = () => {
  throw new Promise(() => {});
};

// Acts like a React's Suspense component with with a minimum duration for the fallback.
// Inspired by https://github.com/facebook/react/issues/17351
export default function SmartSuspense({ children, fallback, fallbackMinDurationMs }) {
  const [fakeLoading, setFakeLoading] = useState(false);

  const startFakeLoading = useCallback(() => {
    setFakeLoading(true);

    const timeoutId = setTimeout(() => {
      setFakeLoading(false);
    }, fallbackMinDurationMs);

    return () => clearTimeout(timeoutId);
  }, [fallbackMinDurationMs]);

  useEffect(() => {
    startFakeLoading();
  }, []);

  return (
    <Suspense fallback={fallback}>
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
