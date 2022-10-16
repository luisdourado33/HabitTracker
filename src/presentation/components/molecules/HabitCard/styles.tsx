import styled from 'styled-components';

import { Pressable, Text } from 'react-native';

export const Card = styled(Pressable)`
  background-color: #eee;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 1px solid #d1cfcf;
  border-radius: 12px;
  width: 170px;
  height: 100px;
  margin-bottom: 15px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;
