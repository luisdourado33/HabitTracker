import styled from 'styled-components';

import { Pressable, PressableProps, Text } from 'react-native';

export const Button = styled(Pressable)<PressableProps>`
  border-radius: 15px;
  background-color: #333;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin: 0px;
  padding: 0px;
`;
