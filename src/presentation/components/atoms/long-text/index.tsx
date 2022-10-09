import React from 'react';
import { Description } from './styles';

const LongText: React.FC<any> = ({ children, width, height, margin }) => {
  return (
    <Description
      style={{
        width,
        height,
        margin,
      }}>
      {children}
    </Description>
  );
};

export default LongText;
