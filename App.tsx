import "react-native-gesture-handler";
import firebase from "./src/firebase";
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/Home";

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    const unListen = firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    });

    return unListen
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mood" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}