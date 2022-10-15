import React from 'react';

import { CustomText } from './styles';

const Heading: React.FC<any> = ({ children }) => {
  return <CustomText>{children}</CustomText>;
};

export default Heading;
