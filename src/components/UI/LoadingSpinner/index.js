import React from 'react';
import ReactLottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('assets/json/pink-loading.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },
};

const LoadingSpinner = ({ loading, size=100, ...rest }) => {
  if (!loading)
    return null;
  return (
    <ReactLottie
      style={{width: size, height: size}}
      options={defaultOptions}
      isStopped={false}
      isPaused={false} />
  );
};

export default LoadingSpinner;