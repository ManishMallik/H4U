import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from '../screens/userProfile';
import AddEntry from "../screens/addJournalEntry";
import ReadJournal from "../screens/readJournal";
import DatePicker from "../screens/calendarPicker";
import Goals from "../screens/personalGoals";
import GoalTypes from "./goalNavigation";

const Stack = createNativeStackNavigator();


const UserNav = () => {
  return (
      //When users are logged in, there will be different screens to navigate
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="ReadEntry" component={ReadJournal} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="AddEntry" component={AddEntry} options={{headerShown: false}} 
        initialParams={{date: new Date()}}/>
        <Stack.Screen name="Goal Types" component={GoalTypes} options={{headerShown: false}} 
        />
        <Stack.Screen name="CalendarPicker" component={DatePicker} options={{headerShown: false}}
        initialParams={{date: new Date()}}/>
      </Stack.Navigator>
  ); 
}

export default UserNav;