import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Appbar } from 'react-native-paper';

const FoodDiary = ({navigation}) =>{
    const [text1, onChangeText1] = React.useState(null);

    return (
        <View style={styles.container}>
          <View style={styles.appBar}>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("FoodScreen")}}/>
              <Appbar.Content title="Food Diary" color="#FFFFFF"/>
            </Appbar.Header>
          </View>

          <View style={styles.countContainer}>
            <Text>Select one of the following meals to view your diary and reports</Text>
          </View>

          <TextInput
            placeholder="Search for your food"
            onChangeText={onChangeText1}
            style={styles.input}
            editable={true}
            multiline={true}
            value={text1}
            />

        <Button
            onPress={() => navigation.navigate("FoodScreen")}
            title={"Submit"}
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

    input: {
        //height: "flex",
        maxHeight: "50%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        //textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
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
      height: '10%',
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
  
export default FoodDiary;