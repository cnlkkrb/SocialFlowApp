import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import homeScreen from '../screens/LoginScreen/homeScreen';

const Stack = createNativeStackNavigator();

const SignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={homeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInNavigator;
