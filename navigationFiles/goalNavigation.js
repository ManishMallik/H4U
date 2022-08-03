import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Goals from "../screens/personalGoals";
import CompleteGoals from "../screens/completedGoals";
import IncompleteGoals from "../screens/incompleteGoals";

const Stack = createNativeStackNavigator();

const GoalTypes = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen 
          name="All" 
          component={Goals}
          options={{
            animationEnabled: false
          }}
        />
        <Stack.Screen 
          name="Complete" 
          component={CompleteGoals}
          options={{
            animationEnabled: false
          }}
        />
        <Stack.Screen 
          name="Incomplete" 
          component={IncompleteGoals}
          options={{
            animationEnabled: false
          }}
        />
    </Stack.Navigator>
  )
}

export default GoalTypes;