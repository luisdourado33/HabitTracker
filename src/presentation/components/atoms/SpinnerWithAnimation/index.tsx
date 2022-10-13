import React from 'react';

import Lottie from 'lottie-react-native';

type Props = {
  source: any;
  width?: number;
  height?: number;
};

const SpinnerWithAnimation: React.FC<Props> = ({ source, width, height }) => {
  return (
    <Lottie
      source={source}
      autoPlay
      style={{
        width,
        height,
      }}
    />
  );
};

export default SpinnerWithAnimation;
