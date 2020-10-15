import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, Button, View, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { CustomSlider } from "./CustomSlider";
import { addEntry, getTimestamp } from "./firebase";

export function Home() {
  const [romantic, setRomantic] = useState(0);
  const [motivated, setMotivated] = useState(0);
  const [sad, setSad] = useState(0);
  const [moody, setMoody] = useState(0);
  const [happy, setHappy] = useState(0);
  const [unmotivated, setUnmotivated] = useState(0);
  const [bored, setBored] = useState(0);

  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const send = () => {
    setSending(true)
    addEntry({
      romantic,
      motivated,
      sad,
      moody,
      happy,
      unmotivated,
      bored,
    }).then(() => { setDone(true); setSending(false); });
  };

  return (
    <Container>
      <StatusBar style="auto" />
      <TimeToday />
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
      {sending ? <ActivityIndicator /> : done ? <Text>Thanks xx</Text> :<Button title="Send!" onPress={send} />}
    </Container>
  );
}

const TimeToday = () => {
  const [doneToday, setDoneToday] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const effect = async () => {
      const timestamp = await getTimestamp();

      const today = new Date().setHours(0, 0, 0, 0);
      const thatDay = new Date(timestamp).setHours(0, 0, 0, 0);

      return today === thatDay;
    };
    effect().then((done) => {
      setDoneToday(done);
      setLoading(false);
    });
  }, []);

  return (
    <WarningBox>
      {loading ? (
        <Text>Loading...</Text>
      ) : doneToday ? (
        <>
          <Text>You've already done it today,</Text>
          <Text>Feel free to do it again :)</Text>
        </>
      ) : (
        <>
          <Text>Welcome back,</Text>
          <Text>I hope you've had a wonderful day!</Text>
        </>
      )}
    </WarningBox>
  );
};

const WarningBox = styled(View)`
  margin: 10px;
  min-height: 40px;
  text-align: center;
`;

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  padding-bottom: 50px;
`;
