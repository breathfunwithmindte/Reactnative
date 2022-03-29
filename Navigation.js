import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "./screens/Main";

export default function RootNavigation () 
{
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}