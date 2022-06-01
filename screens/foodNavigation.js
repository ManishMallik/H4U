import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./home";
import FoodScreen from "./food";
import Fitness from "./fitness";
import Reports from "./reports";
import FoodEntry from "./foodEntries";
import FoodDiary from "./foodDiary";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const FoodNav = () => {
  return (
      //When users are logged in, there will be different screens to navigate
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FoodScreen" component={FoodScreen} options={{headerShown: false}}/>
        <Stack.Screen name="FoodEntry" component={FoodEntry} options={{headerShown: false}}/>
        <Stack.Screen name="FoodDiary" component={FoodDiary} options={{headerShown: false}}/>
      </Stack.Navigator>
  ); 
}

export default FoodNav;