import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export function Settings() {
  return (
    <Container>
      <ScreenSelector>User</ScreenSelector>
    </Container>
  );
}

const Container = styled(View)`
  background-color: #fff;
  flex: 1;
  padding: 10px;
`;

interface ScreenProps {
  children: string;
}

const ScreenSelector = ({ children }: ScreenProps) => {
  return (
    <View
      style={{
        borderColor: "grey",
        borderStyle: "solid",
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 18 }}>{children}</Text>
      <Ionicons name="ios-arrow-forward" size={24} color="black" />
    </View>
  );
};
