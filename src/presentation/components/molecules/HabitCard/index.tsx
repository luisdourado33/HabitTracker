import React from 'react';

import { Card, Title } from './styles';

export type HabitCardProps = {
  title: string;
  icon?: string;
  colorOnPress?: string;
};

export const HabitCard: React.FC<HabitCardProps> = ({
  title,
  colorOnPress,
}) => {
  return (
    <Card
      onPress={() => console.log('pressed')}
      style={({ pressed }) => [
        {
          borderColor: pressed ? colorOnPress : '#d1cfcf',
        },
      ]}>
      <Title>{title}</Title>
    </Card>
  );
};

export default HabitCard;
