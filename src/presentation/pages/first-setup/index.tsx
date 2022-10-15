import React from 'react';

import { Container } from './styles';

import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import Grid from '../../components/molecules/Grid';
import HabitCard from '../../components/molecules/HabitCard';

const ITEMS = [1, 2, 3];

const FirstSetup: React.FC<any> = () => {
  const renderItems = ITEMS.map((item, key) => (
    <HabitCard key={key}>Item</HabitCard>
  ));

  return (
    <Container>
      <Heading>Choose habit</Heading>
      <Paragraph marginVertical={10} width={'80%'} color="#000">
        Choose your daily habits, you can choose more than one
      </Paragraph>
      <Grid>{renderItems}</Grid>
    </Container>
  );
};

export default FirstSetup;
