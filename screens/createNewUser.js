import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./home";
import FoodScreen from "./food";
import Fitness from "./fitness";
import Reports from "./reports";
import { Colors } from "react-native-paper";


//const Stack = createNativeStackNavigator();


const CreateUser = ({navigation}) => {

    const [username, onChangeText1] = React.useState(null);
    const [password, onChangeText2] = React.useState(null);
    const [firstName, onChangeText3] = React.useState(null);
    const [lastName, onChangeText4] = React.useState(null);
    const [weight, onChangeText5] = React.useState(null);
    const [height, onChangeText6] = React.useState(null);
    const [birthday, onChangeText7] = React.useState(null);
    const [religion, onChangeText8] = React.useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.info}>
                Please enter the following information
            </Text>

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText1}
                value={username}
                placeholder="Username"
            />
            
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText2}
                value={password}
                placeholder="Password"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText2}
                value={firstName}
                placeholder="First Name"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText2}
                value={lastName}
                placeholder="Last Name"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText2}
                value={weight}
                placeholder="Weight (in pounds)"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText2}
                value={height}
                placeholder="Height (in inches, 1 ft = 12 inches)"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText2}
                value={birthday}
                placeholder="Birthday (mm/dd/yyyy)"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText2}
                value={religion}
                placeholder="Religion"
            />

            <Button
                title="Sign Up"
                color="white"
                onPress={() => navigation.navigate("Logged Out")}
            />
        </View>
    ); 
}

export default CreateUser;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#00BB00",
      paddingHorizontal: 10
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "white"
    },
    
    info: {
        fontSize: 20,
        textAlign: "center",
        color: Colors.white,
        padding: 20
    }
});