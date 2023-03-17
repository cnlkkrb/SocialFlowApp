import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen/login-screen";
import Industry from "../screens/Industry/industry";

const Stack = createNativeStackNavigator();

const NotSignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Industry" component={Industry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NotSignInNavigator;
