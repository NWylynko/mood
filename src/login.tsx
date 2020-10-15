import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import firebase from './firebase';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export function Login() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '123346955414-ibq0bpkui8np9s47ss02p1rnljfqi6ga.apps.googleusercontent.com',
      },
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login With Google"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}