import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from "./home";
import FoodNav from "../navigationFiles/foodNavigation";
import FitNav from "../navigationFiles/fitnessNavigation";
import Reports from "./reports";
import UserNav from "../navigationFiles/profileNavigation";

//const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const LoggedIn = () => {
  return (
      //When users are logged in, there will be different screens to navigate
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (<Icon name={"home"} color={color} size={size} />)
          }}
        />
        <Tab.Screen 
          name="Food" 
          component={FoodNav} 
          options={{
            tabBarIcon: ({size, color}) => (<Icon name={"fastfood"} color={color} size={size} />)
          }}
        />
        <Tab.Screen 
          name="Fitness" 
          component={FitNav} 
          options={{
            tabBarIcon: ({size, color}) => (<Icon name={"fitness-center"} color={color} size={size} />)
          }}
        />
        <Tab.Screen 
          name="Reports" 
          component={Reports} 
          options={{
            tabBarIcon: ({size, color}) => (<Icon name={"pie-chart"} color={color} size={size} />)
          }}
        />
        <Tab.Screen 
          name="Me" 
          component={UserNav} 
          options={{
            tabBarIcon: ({size, color}) => (<Icon name={"person"} color={color} size={size} />)
          }}
        />
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