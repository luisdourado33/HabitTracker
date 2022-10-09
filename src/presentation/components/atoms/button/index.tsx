import React from 'react';

import { Button, Label } from './styles';

const CustomButton: React.FC<any> = ({ children, bgColor }) => {
  return (
    <Button style={{ backgroundColor: bgColor }}>
      <Label>{children}</Label>
    </Button>
  );
};

export default CustomButton;
