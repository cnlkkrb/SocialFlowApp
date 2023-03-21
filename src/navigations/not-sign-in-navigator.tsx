import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen/login-screen";
import Industry from "../screens/Industry/industry";
import Business from "../screens/Business/business";
import ProductInfo from "../screens/ProductInfo/product-info";
import Content from "../screens/Content/content";
import ContentGeneration from "../screens/ContentGeneration/content-generation";

const Stack = createNativeStackNavigator();

const NotSignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Industry" component={Industry} />
        <Stack.Screen options={{ headerShown: false }} name="Business" component={Business} />
        <Stack.Screen options={{ headerShown: false }} name="ProductInfo" component={ProductInfo} />
        <Stack.Screen options={{ headerShown: false }} name="Content" component={Content} />
        <Stack.Screen options={{ headerShown: false }} name="ContentGeneration" component={ContentGeneration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NotSignInNavigator;
