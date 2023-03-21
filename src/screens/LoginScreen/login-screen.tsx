import React from 'react';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../components/Text/text';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <Box backgroundColor="white" flex={1} padding="m">
      <LinearGradient
        style={{
          width: '100%',
          height: 400,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        colors={['#6944FF', '#9644FF']}>
        <Text variant="generalHeading" color="white">
          TUTORIAL VIDEO CONTENT
        </Text>
      </LinearGradient>
      <Box justifyContent="center" alignItems="center" mt="m">
        <Text variant="generalHeading" style={{color: '#171648'}}>
          Welcome to Social Flow
        </Text>
        <Text variant="heading3" textAlign="center" mt="m" color='textColor'>
          {
            'Best personal Ai Assistant to boost your \n social media Social Flow is your new Ai \n Assistant to boos you business, social \n media engagement and more...'
          }
        </Text>
      </Box>
      <Box mx="s" mt="l">
        <Button
          style={{width: '100%'}}
          variant="primary"
          labelColor={'white'}
          onPress={() => navigation.navigate('Industry')}
          label={'Get Started'}
        />
      </Box>
      <Box flexDirection='row' justifyContent='center' mt='m'>
        <Text variant='heading4' color='textColor'>Already have an account? </Text>   
        <TouchableOpacity>
          <Text variant='heading4' color='bg'>Log in</Text>
        </TouchableOpacity>     
      </Box>
    </Box>
  );
};

export default LoginScreen;
