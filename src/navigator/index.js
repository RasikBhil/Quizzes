import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LandingScreen, QuizScreen} from '../components';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen component={LandingScreen} name={'Landing'} />
        <Stack.Screen name={'Quiz'} component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
