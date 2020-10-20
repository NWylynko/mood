import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import firebase from './firebase'
import { useNavigation } from "@react-navigation/native";

export function User() {
  const navigation = useNavigation()
  return (
    <Container>
      <Text></Text>
      <Button title="Logout" color="#de220d" onPress={() => { firebase.auth().signOut(); }} />
    </Container>
  );
}

const Container = styled(View)`
  background-color: #fff;
  flex: 1;
  padding: 10px;
`;