import {useAtom} from 'jotai';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppleIcon from '../../assets/icons/apple-icon';
import FacebookIcon from '../../assets/icons/facebook-icon';
import GoogleIcon from '../../assets/icons/google-icon';
import Box from '../../components/Box/box';
import SignButton from '../../components/SignButton/sign-button';
import Text from '../../components/Text/text';
import {loggedInAtom, userDataAtom} from '../../utils/atom';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import 'firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import appleAuth, { appleAuthAndroid, AppleButton } from '@invertase/react-native-apple-authentication';

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [, setUserDataAtom] = useAtom(userDataAtom);

  const facebookLogin = async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
      if (result.isCancelled) {
        throw new Error('User cancelled the login process');
      }
  
      const data = await AccessToken.getCurrentAccessToken();
  
      if (!data) {
        throw new Error('Something went wrong obtaining access token');
      }
  
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
      const userCredential = await auth().signInWithCredential(facebookCredential);
      setLoggedIn(true);
      setUserData(userCredential.user);
      setUserDataAtom(userCredential.user);
      return userCredential;
    } catch (error) {
      console.log(error);
      // Display a message to the user that the login process was cancelled
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '436871348176-p8ad2e47n5ddk2pcffjmq3hgu95nh8ph.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  /* async function onAppleButtonPress() {
    // Generate secure, random values for state and nonce
    const rawNonce = uuid();
    const state = uuid();
  
    // Configure the request
    appleAuthAndroid.configure({
      // The Service ID you registered with Apple
      clientId: 'com.example.client-android',
  
      // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
      // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
      redirectUri: 'https://example.com/auth/callback',
  
      // The type of response requested - code, id_token, or both.
      responseType: appleAuthAndroid.ResponseType.ALL,
  
      // The amount of user information requested from Apple.
      scope: appleAuthAndroid.Scope.ALL,
  
      // Random nonce value that will be SHA256 hashed before sending to Apple.
      nonce: rawNonce,
  
      // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
      state,
    });
  
    // Open the browser window for user sign in
    const response = await appleAuthAndroid.signIn();
  
    // Send the authorization code to your backend for verification
  }

  async function handleAppleSignIn() {
    try {
      await onAppleButtonPress();
      // Send the authorization code to your backend for verification
    } catch (error) {
      console.log('Error signing in with Apple:', error);
      // Show an error message to the user
    }
  } */

  const appleLogin = async function onAppleButtonPress() {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      // Note: it appears putting FULL_NAME first is important, see issue #293
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
  
    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
  
    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  }
  

  return (
    <Box style={{backgroundColor: '#F4F8FC'}} flex={1} alignItems="center">
      <Text mt="xxl">Illustration will be added</Text>
      <Text mt="l" variant="heading1">
        Create Your Account
      </Text>
      <Box width={'100%'}>
        <Box mt="l">
          <SignButton
            mx="m"
            variant="iosBtn"
            onPress={appleLogin}
            label={'Continue With Apple'}
            labelColor={'white'}
            icon={<AppleIcon />}
          />
        </Box>
        <Box mt="cardP">
          <SignButton
            mx="m"
            variant="googleBtn"
            label={'Continue With Google'}
            labelColor={'white'}
            icon={<GoogleIcon />}
            onPress={() =>
              onGoogleButtonPress().then(res => {
                setLoggedIn(true);
                setUserData(res.user);
                setUserDataAtom(res.user);
              })
            }
          />
        </Box>
        <Box mt="cardP">
          <SignButton
            mx="m"
            variant="facebookBtn"
            onPress={facebookLogin}
            label={'Continue With Facebook'}
            labelColor={'white'}
            icon={<FacebookIcon />}
          />
        </Box>
        <Text variant="heading3" textAlign="center" mt="xl">
          or
        </Text>
      </Box>
      <TouchableOpacity>
        <Text variant="heading2" color="bg" textAlign="center" mt="xl">
          Sign up with e-mail
        </Text>
      </TouchableOpacity>
      <Box position="absolute" bottom={20}>
        <Text fontSize={13} color="grey">
          By continuing, you agree to our terms and privacy policy
        </Text>
        <Box
          mt="m"
          flexDirection="row"
          alignItems="center"
          justifyContent="center">
          <Text variant="heading3">Already have an account?</Text>
          <TouchableOpacity>
            <Text variant="heading2" color="bg" ml="s">
              Log in
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
