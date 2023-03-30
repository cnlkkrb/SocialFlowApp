import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tab-navigator';
import ContentSignIn from '../screens/ContentSignIn/content-sign-in';

const Stack = createNativeStackNavigator();

const SignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="TabNavigator"
          component={TabNavigator}
        />
        <Stack.Screen options={{ headerShown: false }} name="ContentSignIn" component={ContentSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInNavigator;
