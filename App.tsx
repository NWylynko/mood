import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";
import Slider from "@react-native-community/slider";
import "./src/firebase";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mood" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  const [romantic, setRomantic] = useState(0);
  const [motivated, setMotivated] = useState(0);
  const [sad, setSad] = useState(0);
  const [moody, setMoody] = useState(0);

  const send = () => {
    console.log({
      romantic,
      motivated,
      sad,
      moody,
    });
  };

  return (
    <Container>
      <StatusBar style="auto" />
      <Text>Romantic: {romantic}</Text>
      <CustomSlider colour="#e660e1" setValue={setRomantic} />
      <Text>Motivated: {motivated}</Text>
      <CustomSlider colour="#e6a160" setValue={setMotivated} />
      <Text>Sad: {sad}</Text>
      <CustomSlider colour="#60dbe6" setValue={setSad} />
      <Text>Moody: {moody}</Text>
      <CustomSlider colour="#ba62e3" setValue={setMoody} />
      <Button title="Send!" onPress={send} />
    </Container>
  );
}

function CustomSlider({
  colour,
  setValue,
}: {
  colour: string;
  setValue: (n: number) => void;
}) {
  return (
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={0}
      maximumValue={10}
      step={1}
      minimumTrackTintColor={colour}
      maximumTrackTintColor={colour}
      thumbTintColor={colour}
      onValueChange={setValue}
    />
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px;
`;
