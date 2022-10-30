// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
import MainContainer from './src/MainContainer'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainContainer" component={MainContainer}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;