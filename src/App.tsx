import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import Heading from './presentation/components/atoms/heading';
import LongText from './presentation/components/atoms/long-text';
import HabitCard from './presentation/components/molecules/habit-card';
import CustomButton from './presentation/components/atoms/button';

const DEFAULT_HABITS = [
  {
    title: 'Work Out',
    icon: 'running',
  },
  {
    title: 'Eat Food',
    icon: 'lemon',
  },
  {
    title: 'Music',
    icon: 'music',
  },
  {
    title: 'Art & Design',
    icon: 'palette',
  },
];

const App = () => {
  const renderCards = DEFAULT_HABITS.map((item, index) => (
    <HabitCard key={index} {...item} />
  ));

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={{ padding: 15, paddingTop: 30 }}>
        <Heading>Choose habit</Heading>
        <LongText width={'85%'}>
          Choose your daily habits, you can choose more than one
        </LongText>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 10,
          }}>
          {renderCards}
        </View>
        <CustomButton bgColor="orangered">Get Started</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default App;
