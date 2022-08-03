import React, { Component } from "react";
import { StyleSheet, Text, Button, View, Dimensions, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import Styles from "../styles.json";

const Reports = ({navigation}) =>{

  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#0F0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#000000",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
    return (
      <View style={styles.container}>
        <View>
          <Appbar.Header style={styles.appBarColor}>
            <Appbar.Content title="Health Reports" color="#FFFFFF"/>
          </Appbar.Header>
        </View>

        <ScrollView style={styles.countContainer}>
          <View style={{alignItems: "center", justifyContent: "center",  }}>
            <View style={{padding: 20}}></View>
              <Text>This will contain your health reports</Text>
              <PieChart
                data={data}
                width={Dimensions.get("screen").width}
                height={150}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                //paddingLeft={"-3"}
                center={[10, 10]}
                //absolute will display the population number. Without absolute, you get to see percentage number
              />
              <PieChart
                data={data}
                width={Dimensions.get("screen").width}
                height={150}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                //paddingLeft={"-3"}
                center={[10, 10]}
                //absolute will display the population number. Without absolute, you get to see percentage number
              />
              <PieChart
                data={data}
                width={Dimensions.get("screen").width}
                height={150}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                //paddingLeft={"-3"}
                center={[10, 10]}
                //absolute will display the population number. Without absolute, you get to see percentage number
              />
              <Text>This will contain your health reports</Text>
              <PieChart
                data={data}
                width={Dimensions.get("screen").width}
                height={150}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                //paddingLeft={"-3"}
                center={[10, 10]}
                //absolute will display the population number. Without absolute, you get to see percentage number
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
  
  countContainer: {
    //alignItems: "center",
    //justifyContent: "center",  
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

export default Reports;