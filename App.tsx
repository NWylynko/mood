import "react-native-gesture-handler";
import firebase from "./src/firebase";
import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/Home";
import { Login } from "./src/login"

const Stack = createStackNavigator();

export default function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    const unListen = firebase.auth().onAuthStateChanged(setUser);

    return unListen
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? 
          <Stack.Screen name="Mood" component={Home} />
          :
          <Stack.Screen name="Login" component={Login} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}