import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FoodScreen from "../screens/food";
import FoodEntry from "../screens/foodEntries";
import FoodResults from "../screens/foodResults";
import FoodDiary from "../screens/foodDiary";
import DatePicker from "../screens/calendarPicker";

const Stack = createNativeStackNavigator();


const FoodNav = () => {
  return (
      //When users are logged in, there will be different screens to navigate
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FoodScreen" component={FoodScreen} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="FoodEntry" component={FoodEntry} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="FoodResults" component={FoodResults} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="FoodDiary" component={FoodDiary} options={{headerShown: false}}
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="CalendarPicker" component={DatePicker} options={{headerShown: false}}
        initialParams={{date: new Date()}}/>
      </Stack.Navigator>
  ); 
}

export default FoodNav;