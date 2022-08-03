import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button, ScrollView} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDropdown from "react-native-select-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from "./home";
import FoodScreen from "./food";
import Fitness from "./fitness";
import Reports from "./reports";
import Styles from "../styles.json";
import { Colors } from "react-native-paper";


//const Stack = createNativeStackNavigator();

const gender = ["Male", "Female", "Non-Binary"];

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
            <View style={styles.subContainer}>
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
                onChangeText={onChangeText3}
                value={firstName}
                placeholder="First Name"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText4}
                value={lastName}
                placeholder="Last Name"
            />
            
            <View style={{padding: 5}}></View>

            <SelectDropdown
              data={gender}
              defaultButtonText={"Select Your Gender"}
              onSelect={(selectedItem, index) => {

              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              buttonStyle={{width: "80%", height: 30, borderWidth: 1}}
              //dropdownStyle={{height: 90}}
              rowStyle={{height: 30}}
              renderDropdownIcon={({size, color}) => (<Icon name={"arrow-down"} color={color} size={size} />)}
              dropdownIconPosition={'right'}
            />

            <View style={{padding: 5}}></View>

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText5}
                value={weight}
                placeholder="Weight (in pounds)"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText6}
                value={height}
                placeholder="Height (in inches, 1 ft = 12 inches)"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText7}
                value={birthday}
                placeholder="Birthday (mm/dd/yyyy)"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangeText8}
                value={religion}
                placeholder="Religion"
            />

            <Button
                title="Sign Up"
                onPress={() => navigation.navigate("Logged Out")}
            />
            </View>
        </View>
    ); 
}

export default CreateUser;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#FFF",
      paddingHorizontal: 10
    },
    input: {
      width: "80%",
      height: 30,
      margin: 10,
      borderWidth: 1,
      padding: 5,
      backgroundColor: "white"
    },
    
    info: {
        fontSize: 20,
        textAlign: "center",
        color: Colors.white,
        padding: 20
    },
    subContainer: {
        alignItems: "center",
        backgroundColor: Styles.barAndTitleColor,
        justifyContent: "center",  
        padding: 10,
        borderRadius: 40,
        //width: '100%',
        //height: '30%',
    },
});