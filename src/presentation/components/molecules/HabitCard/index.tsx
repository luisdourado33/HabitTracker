import React from 'react';

import { Card, Icon, Title } from './styles';

export type HabitCardProps = {
  title: string;
  icon?: any;
  colorOnPress?: string;
};

export const HabitCard: React.FC<HabitCardProps> = ({
  title,
  icon,
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
      <Icon name={icon} size={25} displayIcon={icon} />
      <Title>{title}</Title>
    </Card>
  );
};

export default HabitCard;
