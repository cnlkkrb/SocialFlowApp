import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, PermissionsAndroid, Platform, SafeAreaView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import UnCheckedIcon from '../../assets/icons/unchecked-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import LargeModal from '../../components/Modal/modal';
import NotificationModal from '../../components/Modal/notification-modal';
import Text from '../../components/Text/text';
import * as Permissions from "react-native-permissions";

const ContentGeneration = () => {
    const navigation = useNavigation()
    const [largeModalVisible, setLargeModalVisible] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [notificationModal, setNotificationModal] = useState(false)
    const [permissionGranted, setPemissionGranted] = useState(false);
    const [permissionAlert, setPermissionAlert] = useState(false);

  return (
  <SafeAreaView style={{flex: 1}}>
    <LinearGradient colors={['#6944FF', '#9644FF']} style={{flex: 1}}>
    <ScrollView>
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
      <Box mt='xl' mb='s'>
        <Button onPress={() => setLargeModalVisible(true)} mx="m" labelColor={'bg'} variant="gradient" label="Let me know once it’s done!" />
      </Box>
      <LargeModal
        visible={largeModalVisible}
        icon={true}
        text={`Get Important Updates`}
        description={`Once your content generation is \n finished you’ll be informed about \n freshly baked results`}
        buttonLabel='Notify me!'
        secondText='Maybe Later'
        closeIcon={true}
        onClose={() => {
          setPermissionAlert(true)
          setLargeModalVisible(false)
        }}
        onCloseSecondary={() => {
          setLargeModalVisible(false)
          setPermissionAlert(true)
        }}/>
        <NotificationModal 
        visible={permissionAlert}
        text={`"SocialFlowApp" Would Like to Send You Notifications`}
        description={`Notifications may include alerts, \n sound and icon badges.These can be \n configured in Settings `}
        buttonLabel='Allow'
        secondText={`Don't Allow`}
        onClose={() => {}}
        onCloseSecondary={() => {
              setNotificationModal(false)
              setPermissionAlert(false);
              setPemissionGranted(false);
              setSuccessModal(true)
        }}
        onPress={() => {
              setPermissionAlert(false);
              Permissions.openSettings();
              setPemissionGranted(false);
        }}
      />
      <LargeModal
        visible={successModal}
        icon={false}
        closeIcon={false}
        text={`Congratulations!`}
        description={<Text variant='heading4'>Your <Text variant='heading4' fontWeight='bold'>Free Content</Text> is ready, after a quick step you can get them quickly.</Text>}
        buttonLabel='Continue'
        onPress={() => {
          setSuccessModal(false)
          navigation.navigate('SignUp')
        }}/>
        </ScrollView>
    </LinearGradient>
    </SafeAreaView>
  );
};

export default ContentGeneration;
