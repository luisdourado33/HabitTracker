import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { makeNativeStackNavigatorFactory } from '../factories/navigator';

const Stack = makeNativeStackNavigatorFactory();

export const Router: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
    </NavigationContainer>
  );
};
