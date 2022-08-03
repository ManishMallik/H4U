import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./home";
import FoodScreen from "./food";
import Fitness from "./fitness";
import Reports from "./reports";
import Styles from "../styles.json";
import { Colors } from "react-native-paper";


//const Stack = createNativeStackNavigator();


const LoggedOut = ({navigation}) => {

    const [text1, onChangeText1] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                H4U
            </Text>
            <View style={styles.subContainer}>
                <Text style={styles.info}>
                    Hello! Please sign in or create an account.
                </Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeText1}
                    value={text1}
                    placeholder="Username"
                />
                
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <Button
                    title="Sign In"
                    color={Colors.blue}
                    onPress={() => navigation.navigate("Logged In")}
                />

                <Button
                    title="Sign Up"
                    color={Colors.blue}
                    onPress={() => navigation.navigate("Create User")}
                />

            </View>
        </View>
    ); 
}

export default LoggedOut;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#FFF",
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
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
        color: "#0B0",
        padding: 20
    },
    subContainer: {
        //alignItems: "center",
        backgroundColor: "#00BB00",
        justifyContent: "center",  
        padding: 10,
        borderRadius: 20,
        //width: '100%',
        //height: '30%',
    },
});