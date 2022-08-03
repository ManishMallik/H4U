import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput} from "react-native";
import { Appbar, Colors } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import SelectDropdown from "react-native-select-dropdown";
import Icon from 'react-native-vector-icons/Ionicons';
import User from './user.json';
import Styles from "../styles.json";

const UserProfile = ({navigation}) =>{
  const [cal, setCal] = useState(User.currentWeight);
    return (
        <View style={styles.container}>
          <View style={styles.appBar}>
            <Appbar.Header style={styles.appBarColor}>
              
              <Appbar.Content title={<Text>About Me</Text>} color="#FFFFFF"/>
              <Appbar.Action icon="checkbox-multiple-marked-outline" color="#FFFFFF" onPress={() => {navigation.navigate("Goal Types")}} />
              <Appbar.Action icon="book-edit" color="#FFFFFF" onPress={() => {navigation.navigate("ReadEntry")}} />
            </Appbar.Header>
          </View>

          <View style={styles.subContainer}>
            <View style={styles.nextContainer}>
                <Text
                //onPress={() => navigation.navigate("FoodScreen")}
                style={styles.text}
                >Weight: {'\n' + User.currentWeight} lbs</Text>
                <Text
                //onPress={() => navigation.navigate("FoodScreen")}
                style={styles.text}
                >Height: {'\n' + + User.currentHeight} in</Text>
                <Text
                //onPress={() => navigation.navigate("FoodScreen")}
                style={styles.text}
                >BMI: {'\n'}21</Text>
            </View>

            <View style={{padding: 20}}></View>
            
            <Button
                onPress={() => navigation.navigate("Home")}
                title={"Edit"}
            />
            
            
          </View>

          
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-start",
    backgroundColor: "white",
    paddingHorizontal: 0
  },

  appBar: {
    paddingHorizontal: 0,
    //height: '20%',
    //justifyContent: "center"
  },

  appBarColor: {
    backgroundColor: "#00BB00"
  },

  button: {
    flex: 4,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  
  subContainer: {
    flex: 1,
    //flexDirection: "row",
    //alignItems: "center",
    justifyContent: "center",  
    padding: 0,
    //width: '100%',
    //height: '30%',
  },
  subContainer2: {
    //flex: 1,
    //flexDirection: "row",
    //alignItems: "center",
    justifyContent: "center",  
    padding: 0,
    //width: '100%',
    //height: '30%',
  },
  nextContainer: {
    //flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",   
    //paddingVertical: '20%',
    //width: '100%',
    //height: '30%',
  },

  input: {
    //height: "flex",
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "white",
    //textAlign: "center",
    //alignItems: "center",
    //justifyContent: "center",
  },

  textBase: {
    fontFamily: "Cochin",
  },

  text: {
    //width: "50%",
    fontSize: 20,
    //color: "#DD0000",
    //alignItems: "center",
    //padding: "19%",
  }
});

export default UserProfile;