import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Settings() {
  const navigation = useNavigation()
  return (
    <Container>
      <ScreenSelector
        onPress={() => navigation.navigate("User")}
      >User</ScreenSelector>
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
  onPress?: () => void;
}

const ScreenSelector = ({ children, onPress }: ScreenProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
    </TouchableOpacity>
  );
};
