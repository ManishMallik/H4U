import React, { useState } from "react";
import { StyleSheet, Text, Button, View, ScrollView, TouchableOpacity, Alert} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Appbar } from 'react-native-paper';
import { PieChart, StackedBarChart } from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import User from './user.json';
import Style from '../styles.json';

const listOfGoals = [];
/*User.personalGoals.forEach(function(goalObj){
    if(goalObj.boxState == "check-square")
        listOfGoals[listOfGoals.length] = goalObj
})*/

const goalTypes = ["All", "Complete", "Incomplete"];

const CheckList = (props) => {
  const[checkBox, setCheck] = useState(props.state);
  return(
    <View style={styles.rowOfItems}>
      <View style={{paddingRight: 20}}></View>
        <TouchableOpacity style={styles.button} onPress={() => {
          if(checkBox == "square-o")
          {         
            setCheck("check-square");
            myArray[props.num].boxState = "check-square";
          }
          else
          {
            setCheck("square-o");
            myArray[props.num].boxState = "square-o";
          }
        }}>
          <Icon name={checkBox} color={"#0B0"} size={20} />
          <View style={{paddingRight: 20}}></View>
          <Text style={{fontSize: 20, textAlign: "center"}}>{props.name}</Text>
        </TouchableOpacity>
    </View>
  );
}

const CompleteGoals = ({navigation}) =>{

    const[alertText, setText] = useState("Enter");
    
    const [, setArr] = useState([]);

    while(listOfGoals.length > 0){
      listOfGoals.pop();
    }
    myArray.forEach(function(goalObj){
      if(goalObj.boxState == "check-square")
          listOfGoals[listOfGoals.length] = goalObj
    })

    function SelectedFilter(selectedItem)
    {
      if(selectedItem == "All")
      {
        while(listOfGoals.length > 0)
        {
          listOfGoals.pop();
        }
        User.personalGoals.forEach(function(goalObj){
          listOfGoals[listOfGoals.length] = goalObj;
        })
      }
      else if(selectedItem == "Complete")
      {
        while(listOfGoals.length > 0)
        {
          listOfGoals.pop();
        }
        User.personalGoals.forEach(function(goalObj){
          if(goalObj.boxState == "check-square")
            listOfGoals[listOfGoals.length] = goalObj;
          })
      }
      else
      {
        while(listOfGoals.length > 0)
        {
          listOfGoals.pop();
        }
        User.personalGoals.forEach(function(goalObj){
        if(goalObj.boxState == "square-o")
          listOfGoals[listOfGoals.length] = goalObj;
        })
      }
      //setArr(listOfGoals);
      console.log(selectedItem + " " + listOfGoals.length)
      listOfGoals.forEach(function(goalObj){
        console.log(goalObj);
      })
      setArr(listOfGoals);
    }

    /*listOfGoals.forEach(function(goalObj){
      arr[arr.length] = goalObj
      console.log(goalObj.name);
    })*/
    
    return (
        <View style={styles.container}>
          <View>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("StartScreen")}}/>
              <Appbar.Content title="Goals" color="#FFFFFF"/>
              <Appbar.Action icon={({size, color}) => (<MaterialIcon name={"add"} color={color} size={size} />)} color="#FFFFFF" onPress={() => {
                /*Alert.prompt(
                    "New Goal",
                    "Enter your new goal",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      {
                        text: "Add",
                        onPress: () => {
                          setText(alertText)
                          console.log(alertText);
                        }
                      },
                      'plain-text',
                      alertText,
                    ]
                  )*/
                }} />
            </Appbar.Header>
          </View>

          <ScrollView>
            <View style={{padding: 20}}></View>

            <View style={styles.countContainer}>
              <SelectDropdown
                data={goalTypes}
                defaultButtonText={"Complete"}
                onSelect={(selectedItem, index) => {
                    if(selectedItem == "All")
                        navigation.navigate("All")
                    else if(selectedItem == "Incomplete")
                        navigation.navigate("Incomplete")
                  //navigation.navigate("Goals")
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  selectedItem = "Complete"  
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
              <View style={{padding: 20}}></View>
              {listOfGoals.map((goal) => (
                  <>
                  <CheckList key={goal.id} num={myArray.indexOf(goal)} name={goal.name} state={goal.boxState}/>
                  <View style={{padding: 20}}></View>
                  </>
              ))}

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
    },
  
    appBarColor: {
      backgroundColor: Style.barAndTitleColor
    },
  
    button: {
      flexDirection: "row",
      borderWidth: 3,
      padding: 10,
      width: "90%"
    },
    
    countContainer: {
      //flex: 1,
      alignItems: "center",
      justifyContent: "center",  
      //padding: 10,
    },

    rowOfItems: {
      flexDirection: "row",
      alignItems: "center",
      //justifyContent: "center",  
      //padding: 10,
      width: '100%',
    },
  
    textBase: {
      fontFamily: "Cochin",
    },
  
    hello: {
      fontSize: 20,
      //alignItems: "center",
      textAlign: "center"
    },

    tinyLogo: {
      width: 15,
      height: 15,
    },
  });
  
export default CompleteGoals;