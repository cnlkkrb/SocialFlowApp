import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tab-navigator';
import ContentSignIn from '../screens/ContentSignIn/content-sign-in';
import TopTabNavigator from './top-tab-navigator';
import TeamManagement from '../screens/TeamManagement/team-managemene';
import Menu from '../screens/Menu/menu';
import AccountSettings from '../screens/AccountSettings/account-settings';
import Business from '../screens/Business/business';
import Content from '../screens/Content/content';
import ContentGeneration from '../screens/ContentGeneration/content-generation';
import Industry from '../screens/Industry/industry';
import ProductInfo from '../screens/ProductInfo/product-info';

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
        <Stack.Screen options={{ headerShown: false, animation: 'fade_from_bottom' }} name="Menu" component={Menu} />
        <Stack.Screen options={{ headerShown: false }} name="AccountSettings" component={AccountSettings} />
        <Stack.Screen options={{ headerShown: false }} name="Industry" component={Industry} />
        <Stack.Screen options={{ headerShown: false }} name="Business" component={Business} />
        <Stack.Screen options={{ headerShown: false }} name="ProductInfo" component={ProductInfo} />
        <Stack.Screen options={{ headerShown: false }} name="Content" component={Content} />
        <Stack.Screen options={{ headerShown: false }} name="ContentGeneration" component={ContentGeneration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default SignInNavigator;
