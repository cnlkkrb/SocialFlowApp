import React, {useRef, useState} from 'react';
import Box from '../../components/Box/box';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '../../components/Text/text';
import {SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Button from '../../components/Button/button';
import {useNavigation} from '@react-navigation/native';
import EyeIcon from '../../assets/icons/eye-icon';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passworConfirmRef = useRef(null);

  const handlePasswordChange = (value: string) => setPassword(value);
  const handleConfirmPasswordChange = (value: string) =>
    setConfirmPassword(value);

  const handlePasswordConfirm = () => {
    if (password === confirmPassword) {
      console.log('Passwords match');
    } else {
      console.log('Passwords do not match');
    }
  };

  const showPasswordButton = () => {
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordButton = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
  <SafeAreaView style={{flex: 1}}>
    <Box>
      <KeyboardAwareScrollView>
        <Box>
          <Box mt="m" justifyContent="center">
            <Text mt="xl" ml="l" variant="heading1">
              Create an account
            </Text>
            <Text
              variant="heading5"
              fontSize={15}
              mt="s"
              ml="l"
              flex={1}
              mr="s"
              color="textColor">
              {' Start using PostCraft by filling the form \n beloved'}
            </Text>
          </Box>
          <Box mt="l" mx="l">
            <Text ml="m" variant="heading4">
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
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
                emailRef.current.focus();
              }}
              placeholder="Enter name"
              placeholderTextColor={'#D0C9D6'}
            />
          </Box>
          <Box mt="m" mx="l">
            <Text ml="m" variant="heading4">
              E-mail
            </Text>
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
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
                onSubmitEditing={() => {
                  passworConfirmRef.current.focus();
                }}
                placeholder="Choose password"
                placeholderTextColor={'#D0C9D6'}
              />
              <TouchableOpacity
                style={{position: 'absolute', right: 15, top: 24}}
                onPress={showPasswordButton}>
                <EyeIcon />
              </TouchableOpacity>
            </Box>
          </Box>
          <Box mt="m" mx="l">
            <Text ml="m" variant="heading4">
              Confirm Password
            </Text>
            <Box justifyContent="center">
              <TextInput
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                ref={passworConfirmRef}
                secureTextEntry={!showConfirmPassword}
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
                placeholder="Confirm password"
                placeholderTextColor={'#D0C9D6'}
              />
              <TouchableOpacity
                style={{position: 'absolute', right: 15, top: 24}}
                onPress={showConfirmPasswordButton}>
                <EyeIcon />
              </TouchableOpacity>
            </Box>
          </Box>
          <Text ml="l">
            {password !== confirmPassword ? (
              <Text color="googleBtnColor" variant="heading5" fontSize={13}>
                Password does not match
              </Text>
            ) : null}
          </Text>
        </Box>
        <Box mt="l" mx="l">
          <Button
            variant="primary"
            onPress={handlePasswordConfirm}
            label={'Create Account'}
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
  </SafeAreaView>
  );
};

export default CreateAccount;
