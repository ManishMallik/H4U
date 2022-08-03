import React, { useState } from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Red Apple",
    description: "260 kcal per serving"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Golden Apple",
    description: "300 kcal per serving"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Green Apple",
    description: "260 kcal per serving"
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.description, textColor]}>{item.description}</Text>
  </TouchableOpacity>
);

const FoodResults = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#000" : "#FFF";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
        <View>
            <Appbar.Header style={styles.appBarColor}>
              <Appbar.BackAction color="#FFFFFF" onPress={() => {navigation.navigate("FoodEntry")}}/>
              <Appbar.Content 
              title="Food Results"
              />
            </Appbar.Header>
        </View>
        <ScrollView>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-start",
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    //marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 13,
  },
  appBarColor: {
    backgroundColor: "#00BB00"
  },
});

export default FoodResults;