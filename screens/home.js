import React, { Component } from "react";
import { StyleSheet, Text, Button, View, Alert} from "react-native";
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Styles from "../styles.json";

const Home = ({navigation}) =>{
    return (
      <View style={styles.container}>
        <View>
          <Appbar.Header style={styles.appBarColor}>
            <Appbar.Content title={<Text style={{fontSize: 30}}>H4U</Text>} color="#FFFFFF" /*style={{alignItems: "space-evenly"}}*//>
            <Appbar.Action icon={({size, color}) => (<Icon name={"questioncircleo"} color={color} size={size} />)} 
            onPress={() => {
              Alert.alert(
                "Alert Title",
                "My Alert Msg",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
            }} />
            <Appbar.Action icon="logout" color="#FFFFFF" onPress={() => {navigation.navigate("Logged Out")}} />
          </Appbar.Header>
        </View>
        <View style={{padding: 20}}></View>
        <View style={styles.subContainer}>
          <Text style={styles.textBase}>
            <Text style={styles.hello}>Hello, we'll help you determine whether your daily routine is H4U:
            Healthy For You or Horrible For You!!!</Text>
          </Text>
        </View>
        <View style={styles.subContainer2}>
            <Button
              onPress={() => navigation.navigate("Food")}
              title={"Enter your meals"}
            />
            <Button
              onPress={() => navigation.navigate("Fitness")}
              title={"Enter your workouts"}
            />
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent:"flex-start",
      backgroundColor: "white",
      paddingHorizontal: 0,
    },

    appBar: {
      //paddingHorizontal: 0,
      //height: '20%',
    },

    appBarColor: {
      backgroundColor: "#00BB00",
      //backgroundColor: "#FFF",
      width: "100%",
    },

    button: {
      flex: 4,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
    
    subContainer: {
      alignItems: "center",
      //justifyContent: "center",  
      //padding: 10,
      width: '100%',
    },

    subContainer2: {
      flex: 0.8,
      alignItems: "center",
      justifyContent: "center",  
      //padding: 10,
      width: '100%',
    },

    textBase: {
      //fontFamily: "Cochin",
      paddingHorizontal: 30
    },

    hello: {
      fontSize: 20,
      //alignItems: "center",
      textAlign: "center",
    }
  });

export default Home;