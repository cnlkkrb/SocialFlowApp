import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import UnCheckedIcon from '../../assets/icons/unchecked-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import LargeModal from '../../components/Modal/modal';
import NotificationModal from '../../components/Modal/notification-modal';
import Text from '../../components/Text/text';

const ContentGeneration = () => {
    const navigation = useNavigation()
    const [largeModalVisible, setLargeModalVisible] = useState(false)
    const [notificationModal, setNotificationModal] = useState(false)
  return (
    <LinearGradient colors={['#6944FF', '#9644FF']} style={{flex: 1}}>
      <Box style={{marginTop: 80}} justifyContent="center" alignItems="center">
        <Text variant="heading1" color='white'>Ai is tailoring your contents!</Text>
        <Text variant="heading3" textAlign="center" mt="m" color="white">
          {
            'Unique and perfect \n contents are almost ready. \n Thank you for your patience'
          }
        </Text>
      </Box>
      <Box alignItems='center' mt='l'>
        <Image 
            source={require('../../assets/loading-image2.png')}
        />
      </Box>
      <Box alignItems='center'>
      <Box mt='xl' flexDirection='row' left={11} alignItems='center'>
        <UnCheckedIcon color={'white'} />
        <Text ml='s' color='white' variant='heading4'>Collecting industry trends.</Text>
      </Box>
      <Box mt='s' flexDirection='row' alignItems='center'>
        <UnCheckedIcon color={'white'} />
        <Text ml='s' color='white' variant='heading4'>Analyzing competitors.</Text>
      </Box>
      <Box mt='s' flexDirection='row' left={4} alignItems='center'>
        <UnCheckedIcon color={'white'} />
        <Text ml='s' color='white' variant='heading4'>Generating text content.</Text>
      </Box>
      <Box mt='s' flexDirection='row' right={17} alignItems='center'>
        <UnCheckedIcon color={'white'} />
        <Text ml='s' color='white' variant='heading4'>Image generation.</Text>
      </Box>
      </Box>
      <Box position='absolute'
      width={'100%'}
      bottom={0}
      height={70}
      justifyContent="center">
        <Button onPress={() => setLargeModalVisible(true)} mx="m" labelColor={'bg'} variant="gradient" label="Let me know once it’s done!" />
      </Box>
      <LargeModal
        visible={largeModalVisible}
        text={`Get Important Updates`}
        description={`Once your content generation is \n finished you’ll be informed about \n freshly baked results`}
        buttonLabel='Notify me!'
        secondText='Maybe Later'
        onClose={() => {
          setNotificationModal(true)
          setLargeModalVisible(false)
        }}
        onCloseSecondary={() => {}} />
      <NotificationModal 
        visible={notificationModal}
        text={`Get Important Updates`}
        description={`Once your content generation is \n finished you’ll be informed about \n freshly baked results`}
        buttonLabel='Notify me!'
        secondText='Maybe Later'
        onClose={() => setLargeModalVisible(false)}
        onCloseSecondary={() => {}}
      />
    </LinearGradient>
  );
};

export default ContentGeneration;
