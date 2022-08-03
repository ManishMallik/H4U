import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Dimensions} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Appbar } from 'react-native-paper';
import { PieChart, StackedBarChart } from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import User from './user.json';
import Styles from "../styles.json";

const FitReports = ({navigation}) => {
    const route = useRoute();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var curDate = route.params.date;
    var month = route.params.date.getMonth();
    var day = route.params.date.getDate();
    var year = route.params.date.getFullYear();
    var formatDate = months[month] + " " + day + ", " + year;

    const data = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Victor Wayne" },
      { id: 3, name: "Jane Doe" },
    ];

    return(
        <View style={styles.container}>
            <View>
                <Appbar.Header style={styles.appBarColor}>
                <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("FitnessScreen"), {date: curDate}}}/>
                <Appbar.Content title="Fitness Reports"
                subtitle={<Text style={{textDecorationLine: 'underline'}}>{formatDate}</Text>}
                color="#FFFFFF" 
                onPress={() => {navigation.navigate(
                    "CalendarPicker",
                    {
                    date: curDate,
                    screen: "FitnessGraph"
                    }
                )}}/>
                </Appbar.Header>
            </View>

            <View style={{padding: 20}}></View>

            <View style={styles.countContainer}>
                {data.map((fitness) => (
                    <>
                    <Text key={fitness.id}>{fitness.id}</Text>
                    <View style={{padding: 20}}></View>
                    </>
                ))}
            </View>
        </View>
    );
}

export default FitReports;

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
      flex: 1
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
  
    hello: {
      fontSize: 20,
      //alignItems: "center",
      textAlign: "center"
    }
  });