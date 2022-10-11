import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { makeNativeStackNavigatorFactory } from '../factories/navigator';
import { makeSplashScreen } from '../factories/pages';

const Stack = makeNativeStackNavigatorFactory();

export const Router: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={makeSplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
