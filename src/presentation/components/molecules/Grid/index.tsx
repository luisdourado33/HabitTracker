import React from 'react';

import { List } from './styles';

const Grid: React.FC<any> = ({ children }) => {
  return <List>{children}</List>;
};

export default Grid;
