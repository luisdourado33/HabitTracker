import React from 'react';
import { Title } from './styles';

const Heading: React.FC<any> = ({ children, width, height, margin }) => {
  return <Title style={{ width, height, margin }}>{children}</Title>;
};

export default Heading;
