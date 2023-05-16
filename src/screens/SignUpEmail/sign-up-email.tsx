import React, {useRef, useState} from 'react';
import Box from '../../components/Box/box';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '../../components/Text/text';
import {Image, TextInput, TouchableOpacity} from 'react-native';
import Button from '../../components/Button/button';
import {useNavigation} from '@react-navigation/native';
import EyeIcon from '../../assets/icons/eye-icon';
import {useAtom} from 'jotai';
import {loggedInAtom} from '../../utils/atom';

const SignUpEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const navigation = useNavigation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const showPasswordButton = () => {
    setShowPassword(!showPassword);
  };

  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleLogin = () => {
    fetch('http://192.168.1.10:9000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
      .then(response => {
        if (response.status === 404) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setLoggedIn(true);
      })
      .catch(error => {
        console.error('Error:', error.message);
        setErrorMessage('Wrong email or password');
      });
  };

  return (
    <Box backgroundColor="pageBackground" flex={1}>
      <KeyboardAwareScrollView>
        <Box>
      <Box alignItems='center'>
        <Image 
        source={require('../../assets/login_illustration.png')}
        resizeMode='contain'
        style={{marginTop: 30}}
      />
      </Box>
          <Box mt="m" justifyContent="center">
            <Text mt="xl" textAlign='center' variant="heading1">
              Start Using PostCraft
            </Text>
          </Box>
          <Box mt="m" mx="l">
            <Text ml="m" variant="heading4">
              E-mail
            </Text>
            <TextInput
              value={email}
              onChangeText={handleEmailChange}
              ref={emailRef}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#D0C9D6',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                backgroundColor: 'white',
                marginTop: 5,
                color: 'black',
              }}
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              placeholder="Enter email"
              placeholderTextColor={'#D0C9D6'}
            />
          </Box>
          <Box mt="m" mx="l">
            <Text ml="m" variant="heading4">
              Password
            </Text>
            <Box justifyContent="center">
              <TextInput
                value={password}
                onChangeText={handlePasswordChange}
                ref={passwordRef}
                secureTextEntry={!showPassword}
                style={{
                  width: '100%',
                  height: 48,
                  borderColor: '#D0C9D6',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  backgroundColor: 'white',
                  marginTop: 5,
                  color: 'black',
                }}
                placeholder="Choose password"
                placeholderTextColor={'#D0C9D6'}
              />
              {errorMessage !== '' && (
                <Text style={{color: 'red'}} mt="xs">
                  {errorMessage}
                </Text>
              )}
              <TouchableOpacity
                style={{position: 'absolute', right: 15, top: 24}}
                onPress={showPasswordButton}>
                <EyeIcon />
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
        <Box mt="l" mx="l">
          <Button
            variant="primary"
            onPress={() => {
              handleLogin();
            }}
            label={'Login'}
            labelColor={'white'}
          />
        </Box>
        <Box
          mt="l"
          flexDirection="row"
          alignItems="center"
          justifyContent="center">
          <Text variant="heading4">Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text color="bg" variant="heading3">
              {' '}
              Log in
            </Text>
          </TouchableOpacity>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default SignUpEmail;
