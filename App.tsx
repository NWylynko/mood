import "react-native-gesture-handler";
import firebase from "./src/firebase";
import React, { useEffect, useState } from "react";
import { Text, Button, View } from "react-native";
import { AppLoading } from 'expo';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Container } from "./src/Home";
import { Login } from "./src/login";
import { Graphs } from "./src/Graphs";
import { Settings } from './src/Settings'
import { User } from './src/User'

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<firebase.User | null>();

  useEffect(() => {
    const unListen = firebase.auth().onAuthStateChanged((newUser) => {
      setUser(newUser);
      setLoading(false);
    });

    return unListen;
  }, []);

  if (loading) {
    return (
      <AppLoading />
    );
  }

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Mood" component={Home} />
          <Stack.Screen name="Graphs" component={Graphs} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="User" component={User} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}
