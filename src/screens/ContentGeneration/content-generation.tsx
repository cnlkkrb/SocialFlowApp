import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import LargeModal from '../../components/Modal/modal';
import Text from '../../components/Text/text';
import * as Permissions from 'react-native-permissions';
import { BlurView } from '@react-native-community/blur';
import Video from 'react-native-video';
import AnimatedLottieView from 'lottie-react-native';
import AnimatedCircle from '../../components/AnimatedCircle/animated-circle';

const ContentGeneration = () => {
  const navigation = useNavigation();
  const [largeModalVisible, setLargeModalVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [, setPermissionAlert] = useState(false);
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true);

  const handleOnLoad2 = () => {
    setIsLoading(false);
  };

  const [showTopAnimation, setShowTopAnimation] = useState(true);
  const [showSecondAnimation, setShowSecondAnimation] = useState(true);
  const [showThirdAnimation, setShowThirdAnimation] = useState(true);
  const [showFourthAnimation, setShowFourthAnimation] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowTopAnimation(false);
      setShowSecondAnimation(true);
    }, 5000);

    const timer2 = setTimeout(() => {
      setShowSecondAnimation(false);
      setShowThirdAnimation(true);
    }, 10000);

    const timer3 = setTimeout(() => {
      setShowThirdAnimation(false);
      setShowFourthAnimation(true);
    }, 15000);

    const timer4 = setTimeout(() => {
      setShowThirdAnimation(false);
      setShowFourthAnimation(false);
    }, 20000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleOnLoad = () => {
    if (videoRef.current) {
      videoRef.current.seek(0)
      videoRef.current.play()
    }
  }

  return (
    <Box style={{ flex: 1 }}>
      <LinearGradient colors={['#6944FF', '#6944FF']} style={{ flex: 1 }}>
        <ScrollView>
          <Box
            style={{ marginTop: 100 }}
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
        <Box alignItems='center' justifyContent='center'>
          <Box position= 'absolute' top={50} zIndex={1}>
            <AnimatedCircle />
          </Box>
          <Video
            style={{
              width: 500,
              height: 280,
              position: 'relative',
              top: 40
            }}
            onLoad={handleOnLoad}
            repeat={true}
            source={require('../../assets/Generating-h264.mp4')}
          />
        </Box>
          <Box style={{marginLeft: 80}} alignItems='flex-start'>
            <Box mt="large" flexDirection="row" alignItems="center">
              {
                showTopAnimation ? (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-generation-loading.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={true}
                  />
                ) : (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-loading-animation.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={false}
                  />
                )
              }
              <Text ml="s" fontSize={17} color="white" variant="heading4">
                Collecting industry trends.
              </Text>
            </Box>
            <Box mt="s" flexDirection="row" alignItems="center">
              {
                showSecondAnimation ? (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-generation-loading.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={true}
                  />
                ) : (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-loading-animation.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={false}
                  />
                )
              }
              <Text ml="s" fontSize={17} color="white" variant="heading4">
                Analyzing competitors.
              </Text>
            </Box>
            <Box mt="s" flexDirection="row" alignItems="center">
              {
                showThirdAnimation ? (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-generation-loading.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={true}
                  />
                ) : (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-loading-animation.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={false}
                  />
                )
              }
              <Text ml="s" fontSize={17} color="white" variant="heading4">
                Generating text content.
              </Text>
            </Box>
            <Box mt="s" flexDirection="row" alignItems="center">
              {
                showFourthAnimation ? (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-generation-loading.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={true}
                  />
                ) : (
                  <AnimatedLottieView
                    source={require('../../assets/lottie/lottie-loading-animation.json')}
                    style={{ height: 30 }}
                    autoPlay
                    loop={false}
                  />
                )
              }
              <Text ml="s" fontSize={17} color="white" variant="heading4">
                Image generation.
              </Text>
            </Box>
          </Box>
          <Box mt="xl" mb="s">
            <Button
              onPress={() => setLargeModalVisible(true)}
              disabled={
                showTopAnimation || 
                showSecondAnimation || 
                showThirdAnimation || 
                showFourthAnimation
              }
              mx="l"
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
          style={{ display: 'flex' }}
          justifyContent="center"
          alignItems="center">
          <BlurView
            blurType='light'
            blurRadius={2}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }} />
        </Box>
      ) : null}
    </Box>
  );
};

export default ContentGeneration;
