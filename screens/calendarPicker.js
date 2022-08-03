import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import Styles from "../styles.json";

const DatePicker = ({navigation}) => {
    const route = useRoute();
    var prevScreen = route.params.screen;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const minDate = new Date(2017, 8, 8); // Today
    const maxDate = new Date(2022, 8, 8);
    const selected = selectedDate ? selectedDate.toString() : '';
    var month;
    var day;
    var year;

    function onDateChange(date)
    {
      var formatDate = date.format('L');
      var strmonth = formatDate.substring(0, 2);
      var strday = formatDate.substring(3, 5);
      var stryear = formatDate.substring(6);
      month = parseInt(strmonth);
      day = parseInt(strday);
      year = parseInt(stryear);
      setSelectedDate(new Date(year, month - 1, day));
      console.log(formatDate);
      //month = date.getMonth();
      //day = date.getDate();
      //year = date.getFullYear();
    }

    return (
        <View style={styles.container}>
          <View>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate(
                prevScreen,
                {
                  date: selectedDate,
                }
              )}}/>
              <Appbar.Content title="Date" color="#FFFFFF"/>
            </Appbar.Header>
          </View>

          <View style={{padding: 20}}></View>

        <View style={styles.subContainer}>
            <CalendarPicker
                //startFromMonday={true}
                //allowRangeSelection={true}
                minDate={minDate}
                maxDate={maxDate}
                todayBackgroundColor="#00BB00"
                selectedDayColor="#0000BB"
                selectedDayTextColor="#FFFFFF"
                onDateChange={onDateChange}
            />
          
        </View>
  
        </View>
      );
}

export default DatePicker;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      //justifyContent: 'space-evenly'
      //marginTop: 100,
    },
    appBarColor: {
        backgroundColor: "#00BB00"
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",  
        //padding: 10,
    },
});