import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Fitness from "../screens/fitness";
import FitEntry from "../screens/fitnessEntries";
import FitReports from "../screens/fitnessReports";
import DatePicker from "../screens/calendarPicker";

const Stack = createNativeStackNavigator();


const FitNav = () => {
  return (
      //When users are logged in, there will be different screens to navigate
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FitnessScreen" component={Fitness} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="FitnessEntry" component={FitEntry} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="FitnessGraph" component={FitReports} options={{headerShown: false}}
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="CalendarPicker" component={DatePicker} options={{headerShown: false}}
        initialParams={{date: new Date()}}/>
      </Stack.Navigator>
  ); 
}

export default FitNav;