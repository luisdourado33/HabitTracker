import React from 'react';

import { Card, CardIcon, CardLabel } from './styles';

export type HabitCardProps = {
  title: string;
  icon?: string;
};

const HabitCard: React.FC<HabitCardProps> = ({ icon, title }) => {
  return (
    <Card
      pressed={props => props.pressed}
      style={props => ({
        borderColor: props.pressed ? 'orange' : 'transparent',
      })}>
      <CardIcon name={icon} />
      <CardLabel>{title}</CardLabel>
    </Card>
  );
};

export default HabitCard;
