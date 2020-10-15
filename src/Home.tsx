import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import styled from "styled-components/native";
import { CustomSlider } from "./CustomSlider";

export function Home() {
  const [romantic, setRomantic] = useState(0);
  const [motivated, setMotivated] = useState(0);
  const [sad, setSad] = useState(0);
  const [moody, setMoody] = useState(0);
  const [happy, setHappy] = useState(0);
  const [unmotivated, setUnmotivated] = useState(0);
  const [bored, setBored] = useState(0);

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
      <Text>Happy: {happy}</Text>
      <CustomSlider colour="#f0de54" setValue={setHappy} />
      <Text>Unmotivated: {unmotivated}</Text>
      <CustomSlider colour="#44cf54" setValue={setUnmotivated} />
      <Text>Bored: {bored}</Text>
      <CustomSlider colour="#8a8a8a" setValue={setBored} />
      <Button title="Send!" onPress={send} />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px;
`;
