import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput} from "react-native";
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import SelectDropdown from "react-native-select-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from "../styles.json";

const meals = ["Breakfast", "Lunch", "Dinner", "Snacks/Extra"];

const FoodEntry = ({navigation}) =>{
  const route = useRoute();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var curDate = route.params.date;
    var month = route.params.date.getMonth();
    var day = route.params.date.getDate();
    var year = route.params.date.getFullYear();
    var formatDate = months[month] + " " + day + ", " + year;
    const [text1, onChangeText1] = React.useState(null);
    return (
        <View style={styles.container}>
          <View>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("FoodScreen")}}/>
              <Appbar.Content 
              title="Add Food Entry"
              subtitle={<Text style={{textDecorationLine: 'underline'}}>{formatDate}</Text>} 
              color="#FFFFFF"
              onPress={() => {navigation.navigate(
                "CalendarPicker",
                {
                  date: curDate,
                  screen: "FoodScreen"
                }
                )}}/>
            </Appbar.Header>
          </View>

          <View style={{padding: 20}}></View>

          <View style={styles.countContainer}>
            <SelectDropdown
              data={meals}
              defaultButtonText={"Select Your Meal"}
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
            <View style={{height: "10%"}}></View>
            <TextInput
              placeholder="Search for your food"
              onChangeText={onChangeText1}
              style={styles.input}
              editable={true}
              value={text1}
            />
            <View style={{height: "10%"}}></View>
            <Button
              onPress={() => navigation.navigate("FoodResults", {date: curDate})}
              title={"Search"}
            />
            <View style={{height: "10%"}}></View>
            <Button
              onPress={() => navigation.navigate("FoodResults", {date: curDate})}
              title={"Custom Add"}
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
    justifyContent: "center",  
  },

  input: {
    //height: "flex",
    width: "80%",
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

export default FoodEntry;