import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import SelectDropdown from "react-native-select-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from "../styles.json";

const exercises = ["Running", "Weightlifting", "Soccer", "Basketball", "Other"];

const FitEntry = ({navigation}) =>{
  const route = useRoute();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var curDate = route.params.date;
    var month = route.params.date.getMonth();
    var day = route.params.date.getDate();
    var year = route.params.date.getFullYear();
    var formatDate = months[month] + " " + day + ", " + year;
    const [text1, onChangeText1] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback 
        onPress={() => Keyboard.dismiss()}> {children}
        </TouchableWithoutFeedback>
    );

    const handleKeyDown = (e) => {
        if (e.nativeEvent.key == 'Enter') {
          Keyboard.dismiss();
        }
      };
    return (
        <View style={styles.container}>
          <View>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("FitnessScreen")}}/>
              <Appbar.Content 
              title="Add Fitness Entry"
              subtitle={<Text style={{textDecorationLine: 'underline'}}>{formatDate}</Text>} 
              color="#FFFFFF"
              onPress={() => {navigation.navigate(
                "CalendarPicker",
                {
                  date: curDate,
                  screen: "FitnessEntry"
                }
            )}}/>
            </Appbar.Header>
          </View>

          <ScrollView style={styles.countContainer}>
            <View style={{padding: 20}}></View>
            <View style={{alignItems: "center", justifyContent: "center",  }}>
              <SelectDropdown
                data={exercises}
                defaultButtonText={"Select Your Workout"}
                onSelect={(selectedItem, index) => {

                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
                buttonStyle={{width: "80%"}}
                dropdownStyle={{width: "80%"}}
                //rowStyle={{width: "80%"}}
                renderDropdownIcon={({size, color}) => (<Icon name={"arrow-down"} color={color} size={size} />)}
                dropdownIconPosition={'right'}
              />
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
                <View style={{padding: 20, width: "100%"}}>  
                </View>
              </TouchableWithoutFeedback>
              <TextInput
              placeholder="Enter number of calories burned"
              onChangeText={onChangeText1}
              style={styles.input}
              editable={true}
              value={text1}
              returnKeyType="done"
              />
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
                <View style={{padding: 20, width: "100%"}}>  
                </View>
              </TouchableWithoutFeedback>
              <TextInput
              placeholder="Enter your workouts"
              onChangeText={onChangeText2}
              style={styles.input}
              editable={true}
              multiline={true}
              value={text2}
              //returnKeyType="done"
              />
              <View style={{padding: 20}}></View>
              
              <Button
                onPress={() => {
                  navigation.navigate("FitnessScreen", {date: curDate})
                  console.log(text2);
                }}
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

  appBar: {
    paddingHorizontal: 0,
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
    //alignItems: "center",
    //justifyContent: "center",  
  },

  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",  
  },

  input: {
    //height: "flex",
    width: "80%",
    maxHeight: "40%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    //textAlign: "center",
    //alignItems: "center",
    //justifyContent: "center",
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

export default FitEntry;