//import {Realm, createRealmContext} from '@realm/react';

import React, { Component } from "react";
import { LogBox, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoggedIn from "./screens/loggedInUser";
import LoggedOut from "./screens/loggedOutUser";
import CreateUser from "./screens/createNewUser";

const Stack = createNativeStackNavigator();

/*const id = "applicationh4u-boste";

const config = {
  id,
};
const app = new Realm.App(config);*/

LogBox.ignoreAllLogs(true);

const App = () => {
  global.myVar = 7
  global.myArray = [
	{ "id": 1, "name": "Bench press 60 lbs", "boxState": "check-square"},
  	{ "id": 2, "name": "Hammer Curl 35 lbs", "boxState": "check-square"},
  	{ "id": 3, "name": "Leg Curl 100 lbs", "boxState": "square-o"}
  ]
  global.foodCurDate = true
  global.fitCurDate = true
  global.journalCurDate = true
  return (
    //Navigating between 3 Screens: Create New User Screen, Log In Screen, and the Home Screen
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Logged Out"
          component={LoggedOut}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Create User"
          component={CreateUser}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Logged In"
          component={LoggedIn}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;

/*import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

/*import React, { useState } from "react";
	import { Button, StyleSheet, Text, TextInput, View } from "react-native";
	
	import {
	  S3Client,
	  CreateBucketCommand,
	  DeleteBucketCommand,
	} from "@aws-sdk/client-s3";
	import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
	import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
	
	const App = () => {
	  const [bucketName, setBucketName] = useState("");
	  const [successMsg, setSuccessMsg] = useState("");
	  const [errorMsg, setErrorMsg] = useState("");
	
	  // Replace REGION with the appropriate AWS Region, such as 'us-east-1'.
	  const region = 'us-east-2';
	  const client = new S3Client({
	    region,
	    credentials: fromCognitoIdentityPool({
	      client: new CognitoIdentityClient({ region }),
	      // Replace IDENTITY_POOL_ID with an appropriate Amazon Cognito Identity Pool ID for, such as 'us-east-1:xxxxxx-xxx-4103-9936-b52exxxxfd6'.
	      identityPoolId: 'us-east-2:bd53390a-aca7-4a36-a25d-401d366e57bd',
	    }),
	  });
	
	  const createBucket = async () => {
	    setSuccessMsg("");
	    setErrorMsg("");
	
	    try {
	      await client.send(new CreateBucketCommand({ Bucket: bucketName }));
	      setSuccessMsg(`Bucket "${bucketName}" created.`);
	    } catch (e) {
	      setErrorMsg(e);
	    }
	  };
	
	  const deleteBucket = async () => {
	    setSuccessMsg("");
	    setErrorMsg("");
	
	    try {
	      await client.send(new DeleteBucketCommand({ Bucket: bucketName }));
	      setSuccessMsg(`Bucket "${bucketName}" deleted.`);
	    } catch (e) {
	      setErrorMsg(e);
	    }
	  };
	
	  return (
	    <View style={styles.container}>
	      <Text style={{ color: "green" }}>
	        {successMsg ? `Success: ${successMsg}` : ``}
	      </Text>
	      <Text style={{ color: "red" }}>
	        {errorMsg ? `Error: ${errorMsg}` : ``}
	      </Text>
	      <View>
	        <TextInput
	          style={styles.textInput}
	          onChangeText={(text) => setBucketName(text)}
	          autoCapitalize={"none"}
	          value={bucketName}
	          placeholder={"Enter Bucket Name"}
	        />
	        <Button
	          backroundColor="#68a0cf"
	          title="Create Bucket"
	          onPress={createBucket}
	        />
	        <Button
	          backroundColor="#68a0cf"
	          title="Delete Bucket"
	          onPress={deleteBucket}
	        />
	      </View>
	    </View>
	  );
	};
	
	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    alignItems: "center",
	    justifyContent: "center",
	  },
	});
	
	export default App;*/