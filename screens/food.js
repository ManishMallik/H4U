import React, { Component } from "react";
import { StyleSheet, Text, Button, View} from "react-native";
import { Appbar } from 'react-native-paper';

const FoodScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
          <View style={styles.appBar}>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("Home")}}/>
              <Appbar.Content title="Meals" color="#FFFFFF"/>
            </Appbar.Header>
          </View>

          <View style={styles.countContainer}>
            <Text>This will be your food screen</Text>
          </View>

          <Button
            onPress={() => navigation.navigate("FoodEntry")}
            title={"Enter your meals"}
          />

          <Button
            onPress={() => navigation.navigate("FoodDiary")}
            title={"View your food diary"}
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

export default FoodScreen;