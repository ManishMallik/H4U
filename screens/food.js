import React, { useState } from "react";
import { StyleSheet, Text, Button, View, ScrollView, Dimensions, Image, TouchableOpacity} from "react-native";
import { Appbar } from 'react-native-paper';
import { useRoute } from "@react-navigation/native";
import Styles from "../styles.json";

const FoodScreen = ({navigation}) =>{
    const route = useRoute();
    //const [date, setDate] = useState(null);

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var curDate = route.params.date;
    var month = route.params.date.getMonth();
    var day = route.params.date.getDate();
    var year = route.params.date.getFullYear();
    var formatDate = months[month] + " " + day + ", " + year;

    function setNewDate(increment)
    {
        curDate.setDate(curDate.getDate() + increment);
        month = route.params.date.getMonth();
        day = route.params.date.getDate();
        year = route.params.date.getFullYear();
        formatDate = months[month] + " " + day + ", " + year;
        setDisplay(formatDate);
    }
  
    const [, setDisplay] = useState(formatDate);
    
    return (
        <View style={styles.container}>
          <View>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.Content title="Meals"
              //subtitle={<Text style={{textDecorationLine: 'underline'}}>{formatDate}</Text>}  
              color="#FFFFFF"
              />
            </Appbar.Header>
          </View>

          <View style={{padding: 20}}></View>

          <View style={styles.countContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setNewDate(-1)}>
                <Image style={styles.tinyLogo} source={require("../assets/leftArrow.png")}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, paddingHorizontal: 10, textDecorationLine: 'underline', color: "#00F"}}
              onPress={() => {navigation.navigate(
                "CalendarPicker",
                {
                  date: curDate,
                  screen: "FoodScreen"
                }
              )}}>
                {formatDate}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => setNewDate(1)}>
                <Image style={styles.tinyLogo} source={require("../assets/rightArrow.png")}/>
            </TouchableOpacity>
          </View>

          <View style={styles.subContainer}>
            <ScrollView style={{padding: 0, maxHeight: '70%', borderWidth: 3,
              borderColor: '#000000'}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{
                  width: Dimensions.get("screen").width * 0.9,
                  //height: Dimensions.get("screen").height * 0.5,
                  //textAlign: 'center',
                  padding: 10,
                }}>
                  Your statistics will be here {'\n\n'}
                  You have eaten 27 times a week.{'\n\n'}
                  Total time exercised: 180 minutes{'\n\n'}
                  Total calories burned: 400 calories{'\n\n'}
                  Running time: 60 minutes{'\n\n'}
                  Running miles total: 8 miles{'\n\n'}
                  Weightlifting time: 120 minutes{'\n\n'}
                  Dumbbell bench press: 45, 55, and 55 lbs in 8, 10, and 10 reps{'\n\n'}
                  Barbell Curls: 70, 70 lbs in 7, 10 reps{'\n\n'}
                  Total time exercised: 120 minutes{'\n\n'}
                  Total time exercised: 120 minutes{'\n\n'}
                  Total time exercised: 120 minutes

                  
                </Text>
              </View>
            </ScrollView>
            
            <Button
              onPress={() => navigation.navigate("FoodEntry", {date: curDate})}
              title={"Enter your meals"}
            />
            <Button
              onPress={() => navigation.navigate("FoodDiary", {date: curDate})}
              title={"View your reports"}
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
    height: '20%',
  },

  appBarColor: {
    backgroundColor: "#00BB00"
  },

  button: {
    padding: 10,
  },
  
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",  
    //padding: 10,
    width: '100%',
  },

  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",  
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
    width: 20,
    height: 20,
  },
});

export default FoodScreen;