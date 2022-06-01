import React, { Component } from "react";
import { StyleSheet, Text, Button, View} from "react-native";
import { Appbar } from 'react-native-paper';

const Home = ({navigation}) =>{
    return (
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Appbar.Header style={styles.appBarColor}>
            <Appbar.Content title="H4U" color="#FFFFFF"/>
            <Appbar.Action icon="logout" color="#FFFFFF" onPress={() => {navigation.navigate("Logged Out")}} />
          </Appbar.Header>
        </View>

        <View style={styles.countContainer}>
          <Text style={styles.textBase}>
            <Text style={styles.hello}>Hello, we'll help you determine whether your daily routine is H4U:
            Healthy For You or Horrible For You!!!</Text>
          </Text>
        </View>
          
        <Button
          onPress={() => navigation.navigate("Food")}
          title={"Enter your meals"}
        />
        <Button
          onPress={() => navigation.navigate("Fitness")}
          title={"Enter your workouts"}
        />
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
      height: '20%',
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
    
    countContainer: {
      alignItems: "center",
      //justifyContent: "center",  
      //padding: 10,
      width: '100%',
      height: '30%',
    },

    textBase: {
      fontFamily: "Cochin",
    },

    hello: {
      fontSize: 20,
      //alignItems: "center",
      textAlign: "center"
    }
  });

export default Home;