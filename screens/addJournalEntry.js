import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import Styles from "../styles.json";

const AddEntry = ({navigation}) =>{
    const [text1, onChangeText1] = React.useState(null);

    return (
        <View style={styles.container}>
          <View style={styles.appBar}>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("ReadEntry")}}/>
              <Appbar.Content title="Writing Journal" color="#FFFFFF"/>
            </Appbar.Header>
          </View>

          <ScrollView>
            <View style={styles.countContainer}>
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
                  <View style={{padding: 20, width: "100%"}}>  
                  </View>
              </TouchableWithoutFeedback>
              
              <Text>Enter your thoughts and feelings about today.</Text>

              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
                  <View style={{padding: 20, width: "100%"}}>  
                  </View>
              </TouchableWithoutFeedback>

              <TextInput
                placeholder="Your Placeholder"
                onChangeText={onChangeText1}
                style={styles.input}
                editable={true}
                multiline={true}
                value={text1}
              />

              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
                  <View style={{padding: 20, width: "100%"}}>  
                  </View>
              </TouchableWithoutFeedback>

              <Button
                onPress={() => navigation.navigate("StartScreen")}
                title={"Submit"}
              />
            </View>
          </ScrollView>
          
          
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
        //maxHeight: "50%",
        width: "80%",
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
      //height: '20%',
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
      //height: '10%',
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
  
export default AddEntry;