import styled from 'styled-components';

import { Pressable, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Card = styled(Pressable)`
  padding: 5px;
  width: 175px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: #eee;
`;

export const CardIcon = styled(Icon).attrs(() => ({
  size: 25,
}))`
  margin-bottom: 7px;
`;

export const CardLabel = styled(Text)`
  font-weight: bold;
`;
