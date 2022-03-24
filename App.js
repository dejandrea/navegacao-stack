import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import telaJavaScript from "./screms/telaJavaScript";
import telaReact from "./screms/telaReact";
import telaNode from "./screms/telaNode";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="JavaScript" component = { telaJavaScript } />
        <Stack.Screen name="React" component = { telaReact } />
        <Stack.Screen name="NodeJS" component = { telaNode } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};