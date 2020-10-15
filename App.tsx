import "react-native-gesture-handler";
import firebase from "./src/firebase";
import React, { useEffect, useState } from "react";
import { Text, Button, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Container } from "./src/Home";
import { Login } from "./src/login";
import { Graphs } from "./src/Graphs";

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
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Mood" component={Home} />
          <Stack.Screen name="Graphs" component={Graphs} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}
