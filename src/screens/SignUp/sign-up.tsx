import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import AppleIcon from '../../assets/icons/apple-icon'
import FacebookIcon from '../../assets/icons/facebook-icon'
import GoogleIcon from '../../assets/icons/google-icon'
import Box from '../../components/Box/box'
import SignButton from '../../components/SignButton/sign-button'
import Text from '../../components/Text/text'
import { loggedInAtom, userDataAtom } from '../../utils/atom'
import auth from '@react-native-firebase/auth';
import Storage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {

  const [userData, setUserData] = useState({})
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [, setUserDataAtom] = useAtom(userDataAtom);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '436871348176-p8ad2e47n5ddk2pcffjmq3hgu95nh8ph.apps.googleusercontent.com',
    })
  }, [])

  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

      return (
        <Box style={{backgroundColor: '#F4F8FC'}} flex={1} alignItems='center'>
            <Text mt='xxl'>Illustration will be added</Text>
            <Text mt='l' variant='heading1'>Create Your Account</Text>
          <Box width={'100%'}> 
          <Box mt='l'>
            <SignButton mx='m' variant='iosBtn' onPress={() => {
              
            }} label={'Continue With Apple'} labelColor={'white'} icon={<AppleIcon/>} />
          </Box>
          <Box mt='cardP'>
            <SignButton mx='m' variant='googleBtn' label={'Continue With Google'} labelColor={'white'} icon={<GoogleIcon/>} onPress={() => onGoogleButtonPress().then(res => {
              setLoggedIn(true)
              setUserData(res.user)
              setUserDataAtom(res.user)
            })} />
          </Box>
          <Box mt='cardP'>
            <SignButton mx='m' variant='facebookBtn' onPress={()=>{}} label={'Continue With Facebook'} labelColor={'white'} icon={<FacebookIcon/>} /> 
          </Box>
            <Text variant='heading3' textAlign='center' mt='xl'>or</Text>
          </Box>
          <TouchableOpacity>
            <Text variant='heading2' color='bg' textAlign='center' mt='xl'>Sign up with e-mail</Text>
          </TouchableOpacity>
          <Box position='absolute' bottom={20}>
            <Text fontSize={13} color='grey'>By continuing, you agree to our terms and privacy policy</Text>
            <Box mt='m' flexDirection='row' alignItems='center' justifyContent='center'>
              <Text variant='heading3'>Already have an account?</Text>
            <TouchableOpacity>
              <Text variant='heading2' color='bg' ml='s'>Log in</Text>
            </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      )
    }


export default SignUp