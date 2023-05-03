import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import UnCheckedIcon from '../../assets/icons/unchecked-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import LargeModal from '../../components/Modal/modal';
import Text from '../../components/Text/text';
import * as Permissions from 'react-native-permissions';
import {BlurView} from '@react-native-community/blur';

const ContentGeneration = () => {
  const navigation = useNavigation();
  const [largeModalVisible, setLargeModalVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [, setPermissionAlert] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient colors={['#6944FF', '#9644FF']} style={{flex: 1}}>
        <ScrollView>
          <Box
            style={{marginTop: 80}}
            justifyContent="center"
            alignItems="center">
            <Text variant="heading1" color="white">
              Ai is tailoring your contents!
            </Text>
            <Text variant="heading3" textAlign="center" mt="m" color="white">
              {
                'Unique and perfect \n contents are almost ready. \n Thank you for your patience'
              }
            </Text>
          </Box>
          <Box alignItems="center" mt="l">
            <Image source={require('../../assets/loading-image2.png')} />
          </Box>
          <Box alignItems="center">
            <Box mt="xl" flexDirection="row" left={11} alignItems="center">
              <UnCheckedIcon color={'white'} />
              <Text ml="s" color="white" variant="heading4">
                Collecting industry trends.
              </Text>
            </Box>
            <Box mt="s" flexDirection="row" alignItems="center">
              <UnCheckedIcon color={'white'} />
              <Text ml="s" color="white" variant="heading4">
                Analyzing competitors.
              </Text>
            </Box>
            <Box mt="s" flexDirection="row" left={4} alignItems="center">
              <UnCheckedIcon color={'white'} />
              <Text ml="s" color="white" variant="heading4">
                Generating text content.
              </Text>
            </Box>
            <Box mt="s" flexDirection="row" right={17} alignItems="center">
              <UnCheckedIcon color={'white'} />
              <Text ml="s" color="white" variant="heading4">
                Image generation.
              </Text>
            </Box>
          </Box>
          <Box mt="xl" mb="s">
            <Button
              onPress={() => setLargeModalVisible(true)}
              mx="m"
              labelColor={'bg'}
              variant="gradient"
              label="Let me know once it’s done!"
            />
          </Box>
          <LargeModal
            visible={largeModalVisible}
            icon={true}
            text={`Get Important Updates`}
            description={`Once your content generation is \n finished you’ll be informed about \n freshly baked results`}
            buttonLabel="Notify me!"
            secondText="Maybe Later"
            onPress={() => {
              Permissions.openSettings();
              setLargeModalVisible(false);
              setSuccessModal(true);
            }}
            closeIcon={true}
            onClose={() => {
              setPermissionAlert(true);
              setLargeModalVisible(false);
              setSuccessModal(true);
            }}
            onCloseSecondary={() => {
              setLargeModalVisible(false);
              setPermissionAlert(true);
              setSuccessModal(true);
            }}
          />
          <LargeModal
            visible={successModal}
            icon={false}
            closeIcon={false}
            text={`Congratulations!`}
            description={
              <Text variant="heading4">
                Your{' '}
                <Text variant="heading4" fontWeight="bold">
                  Free Content
                </Text>{' '}
                is ready, after a quick step you can get them quickly.
              </Text>
            }
            buttonLabel="Continue"
            onPress={() => {
              setSuccessModal(false);
              navigation.navigate('SignUp');
            }}
          />
        </ScrollView>
      </LinearGradient>
      {largeModalVisible || successModal ? (
        <Box
          position="absolute"
          width={'100%'}
          height={'100%'}
          style={{display: 'flex'}}
          justifyContent="center"
          alignItems="center">
          <BlurView
            blurType='light'
            blurRadius={2}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}/>
        </Box>
      ) : null}
    </SafeAreaView>
  );
};

export default ContentGeneration;
