import React, { useState } from "react";
import { StyleSheet, Text, Button, View, Dimensions} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Appbar } from 'react-native-paper';
import { PieChart, StackedBarChart } from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import User from './user.json';
import Styles from "../styles.json";


const FoodDiary = ({navigation}) =>{
    const route = useRoute();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var curDate = route.params.date;
    var month = route.params.date.getMonth();
    var day = route.params.date.getDate();
    var year = route.params.date.getFullYear();
    var formatDate = months[month] + " " + day + ", " + year;

    function SelectData(meal){
      if(meal == 'Breakfast')
      {
        setCarbs(User.dailyInformation[0].breakfast.carbohydrate);
        setProt(User.dailyInformation[0].breakfast.protein);
        setFat(User.dailyInformation[0].breakfast.fat);
      }
      else if(meal == 'Lunch')
      {
        setCarbs(User.dailyInformation[0].lunch.carbohydrate);
        setProt(User.dailyInformation[0].lunch.protein);
        setFat(User.dailyInformation[0].lunch.fat);
      }
      else if(meal == 'Dinner')
      {
        setCarbs(User.dailyInformation[0].dinner.carbohydrate);
        setProt(User.dailyInformation[0].dinner.protein);
        setFat(User.dailyInformation[0].dinner.fat);
      }
      else if(meal == 'Snacks/Extra')
      {
        setCarbs(User.dailyInformation[0].snacks.carbohydrate);
        setProt(User.dailyInformation[0].snacks.protein);
        setFat(User.dailyInformation[0].snacks.fat);
      }
      else
      {
        setCarbs(User.dailyInformation[0].totalCarbs);
        setProt(User.dailyInformation[0].totalProtein);
        setFat(User.dailyInformation[0].totalFat);
      }
    }

    const meals = ["Breakfast", "Lunch", "Dinner", "Snacks/Extra", "Overall"];

    const [carbs, setCarbs] = useState(User.dailyInformation[0].totalCarbs);
    const [prot, setProt] = useState(User.dailyInformation[0].totalProtein);
    const [fat, setFat] = useState(User.dailyInformation[0].totalFat);
    const pie = [
      {
        name: 'Carbohydrates',
        amount: carbs,
        color: "#FFFF00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: 'Proteins',
        amount: prot,
        color: "#888888",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: 'Fat',
        amount: fat,
        color: "#0000FF",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }
    ];
    const stacked = {
      labels: ["Breakfast", "Lunch", "Dinner"],
      legend: ["L1", "L2", "L3"],
      data: [
        [carbs, prot, fat],
        [30, 30, 60],
      ],
      barColors: ["#0000FF", "#FF0000", "#00FF00"]
    };
    const chartConfig = {
      backgroundGradientFrom: "#FFF",
      backgroundGradientFromOpacity: 0.5,
      backgroundGradientTo: "#FFF",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 1,
      useShadowColorFromDataset: false // optional
    };
    return (
        <View style={styles.container}>
          <View>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("FoodScreen"), {date: curDate}}}/>
              <Appbar.Content title="Food Graphs"
              subtitle={<Text style={{textDecorationLine: 'underline'}}>{formatDate}</Text>}
              color="#FFFFFF" 
              onPress={() => {navigation.navigate(
                "CalendarPicker",
                {
                  date: curDate,
                  screen: "FoodDiary"
                }
                )}}/>
            </Appbar.Header>
          </View>

          <View style={{padding: 20}}></View>

          <View style={styles.countContainer}>
            <SelectDropdown
              data={meals}
              defaultButtonText={"Overall"}
              onSelect={(selectedItem, index) => {
                SelectData(selectedItem);
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
            <View style={{padding: 20}}></View>

            <PieChart
                data={pie}
                width={Dimensions.get("screen").width}
                height={150}
                chartConfig={chartConfig}
                accessor={"amount"}
                backgroundColor={"transparent"}
                paddingLeft={"-20"}
                center={[10, 10]}
                //absolute will display the population number. Without absolute, you get to see percentage number
            />

            <View style={{padding: 20}}></View>

            
            
          </View>
        </View>
    );
}
/*<StackedBarChart
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
              data={stacked}
              width={Dimensions.get("screen").width}
              height={220}
              chartConfig={chartConfig}
            /> */
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
      backgroundColor: "#00BB00"
    },
  
    button: {
      flex: 4,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
    
    countContainer: {
      //flex: 1,
      alignItems: "center",
      justifyContent: "center",  
      //padding: 10,
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