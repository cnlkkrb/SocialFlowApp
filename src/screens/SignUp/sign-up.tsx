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
import appleAuth from '@invertase/react-native-apple-authentication';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [, setUserDataAtom] = useAtom(userDataAtom);
  const navigation = useNavigation();

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

  const appleLogin = async function onAppleButtonPress() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
  
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    if (credentialState === appleAuth.State.AUTHORIZED) {
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
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text variant="heading2" color="bg" textAlign="center" mt="xl">
          Sign up with e-mail
        </Text>
      </TouchableOpacity>
      <Box position="absolute" bottom={20}>
        <Text fontSize={13} color="grey">
          By continuing, you agree to our terms and privacy policy
        </Text>
      </Box>
    </Box>
  );
};

export default SignUp;
