import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { makeNativeStackNavigatorFactory } from '../factories/navigator';
import { makeSplashScreen } from '../factories/pages';

const Stack = makeNativeStackNavigatorFactory();

export const Router: React.FC<any> = () => {
  const navigatorOptions = { headerShown: false };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Screen name="SplashScreen" component={makeSplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
