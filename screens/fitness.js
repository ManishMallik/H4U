import React, { Component } from "react";
import { StyleSheet, Text, Button, View} from "react-native";
import { Appbar } from 'react-native-paper';

const Fitness = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <View style={styles.appBar}>
          <Appbar.Header style={styles.appBarColor}>
            <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("Home")}}/>
            <Appbar.Content title="Fitness" color="#FFFFFF"/>
          </Appbar.Header>
          </View>
          <View style={styles.countContainer}>
            <Text>You can record your fitness workouts here.</Text>
            <Text>You have worked out for {myVar} days per week.</Text>
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

export default Fitness;