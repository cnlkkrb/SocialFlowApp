import {useAtom} from 'jotai';
import React, {useEffect, useState} from 'react';
import {Image, Platform, SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
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
import { getLongLivedPageAccessToken, getLongLivedUserAccessToken } from '../../utils/facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [, setUserDataAtom] = useAtom(userDataAtom);
  const navigation = useNavigation();

  const facebookLogin = async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile',
      'user_photos',
      'email',
      'pages_show_list',
      'pages_read_engagement',
      'user_posts',
      'pages_manage_posts',
      'instagram_basic',
      'instagram_content_publish',
      'instagram_shopping_tag_products']);
      if (result.isCancelled) {
        throw new Error('User cancelled the login process');
      }
      const data = await AccessToken.getCurrentAccessToken();
      console.log('---', data)
      if (!data) {
        throw new Error('Something went wrong obtaining access token');
      }
  
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      const pageAccessToken = await getLongLivedPageAccessToken(data.accessToken, data.userID)
      AsyncStorage.setItem('pageAccessToken', JSON.stringify({pageAccessToken,userId: data.userID})) 
      console.log('---->',JSON.stringify(facebookCredential, null , 2))

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

  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
  
      const {identityToken, nonce} = appleAuthRequestResponse;
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
  
      const userCredential = await auth().signInWithCredential(appleCredential);
      setLoggedIn(true);
      setUserData(userCredential.user);
      setUserDataAtom(userCredential.user);
      console.log(userCredential.user)

      return userCredential;
    } catch (error) {
      console.log(error);
    }

  };
 
  return (
    <Box style={{backgroundColor: '#F4F8FC'}} flex={1}>
      <ScrollView style={{flex: 1}}>
      <Box alignItems='center' mt='large'>
      <Image 
        source={require('../../assets/login_illustration.png')}
        resizeMode='contain'
        style={{marginTop: 30}}
      />
      <Text mt="l" variant="heading1">
        Create Your Account
      </Text>
      <Box width={'100%'}>
        <Box mt="l">
          <SignButton
            mx="m"
            variant="iosBtn"
            onPress={onAppleButtonPress}
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
      <Box bottom={10} mt={Platform.OS === 'android' ? 'm' : 'xl'}>
        <Text fontSize={13} color="grey">
          By continuing, you agree to our terms and privacy policy
        </Text>
      </Box>
      </Box>
      </ScrollView>
    </Box>
  );
};

export default SignUp;
