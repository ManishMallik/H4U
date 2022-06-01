import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./home";
import FoodScreen from "./food";
import FoodNav from "./foodNavigation";
import Fitness from "./fitness";
import Reports from "./reports";

//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const LoggedIn = () => {
  return (
      //When users are logged in, there will be different screens to navigate
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Food" component={FoodNav} options={{headerShown: false}}/>
        <Tab.Screen name="Fitness" component={Fitness} options={{headerShown: false}}/>
        <Tab.Screen name="Reports" component={Reports} options={{headerShown: false}}/>
      </Tab.Navigator>
  ); 
}

export default LoggedIn;

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