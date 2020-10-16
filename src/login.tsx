import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import firebase from "./firebase";
import { Button, Image, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./Home";
import styled from "styled-components/native";

WebBrowser.maybeCompleteAuthSession();

export function Login() {

  const navigation = useNavigation()
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ margin: 10 }}>
          <AnonymousLogin />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <Container style={{ height: 400 }} >
      <Title>Mood</Title>
      <GoogleLogin />
    </Container>
  );
}

const Title = styled(Text)`
  font-size: 32px;
  font-weight: 600;
`;

const AnonymousLogin = () => {

  const onPress = () => {
    firebase.auth().signInAnonymously()
  }

  return (
    <Button title="Later" onPress={onPress} />
  )
}

const GoogleLogin = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "123346955414-ibq0bpkui8np9s47ss02p1rnljfqi6ga.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  return (
    <TouchableOpacity
      onPress={() => {
        promptAsync();
      }}
      disabled={!request}
    >
      <Image
        style={{ width: 198 * 1.5, height: 28 * 1.5 }}
        source={{
          uri:
            "https://img.shields.io/badge/Login%20With%20Google%20-%234285F4.svg?&style=for-the-badge&logo=Google&logoColor=white",
        }}
      />
    </TouchableOpacity>
  );
};
