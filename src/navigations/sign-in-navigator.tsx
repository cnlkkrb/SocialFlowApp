import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tab-navigator';
import ContentSignIn from '../screens/ContentSignIn/content-sign-in';
import TopTabNavigator from './top-tab-navigator';
import TeamManagement from '../screens/TeamManagement/team-managemene';
import Menu from '../screens/Menu/menu';
import AccountSettings from '../screens/AccountSettings/account-settings';

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
        <Stack.Screen options={{ headerShown: false }} name="TopTabNavigator" component={TopTabNavigator} />
        <Stack.Screen options={{ headerShown: false }} name="TeamManagement" component={TeamManagement} />
        <Stack.Screen options={{ headerShown: false, animation: 'slide_from_left' }} name="Menu" component={Menu} />
        <Stack.Screen options={{ headerShown: false }} name="AccountSettings" component={AccountSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInNavigator;
