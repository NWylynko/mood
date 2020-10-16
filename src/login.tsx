import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import firebase from "./firebase";
import { Button, Image, TouchableOpacity, Text } from "react-native";

import { Container } from "./Home";

WebBrowser.maybeCompleteAuthSession();

export function Login() {
  return (
    <Container style={{ height: 400 }} >
      <Text>Please login</Text>
      <GoogleLogin />
      <AnonymousLogin />
    </Container>
  );
}

const AnonymousLogin = () => {

  const onPress = () => {
    firebase.auth().signInAnonymously()
  }

  return (
    <Button title="Login Later" onPress={onPress} />
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
