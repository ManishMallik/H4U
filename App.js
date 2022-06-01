import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoggedIn from "./screens/loggedInUser";
import LoggedOut from "./screens/loggedOutUser";
import CreateUser from "./screens/createNewUser";

const Stack = createNativeStackNavigator();

const App = () => {
  global.myVar = 6
  global.myArray = []
  return (
    //Navigating between 3 Screens: Create New User Screen, Log In Screen, and the Home Screen
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Logged Out"
          component={LoggedOut}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Create User"
          component={CreateUser}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Logged In"
          component={LoggedIn}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;

/*import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/