import React from 'react';

import { CustomText } from './styles';

const Paragraph: React.FC<any> = ({
  children,
  marginVertical,
  width,
  color,
}) => {
  return (
    <CustomText style={{ marginVertical, width, color }}>{children}</CustomText>
  );
};

export default Paragraph;
