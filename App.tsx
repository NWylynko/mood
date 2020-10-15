import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'

export default function App() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;