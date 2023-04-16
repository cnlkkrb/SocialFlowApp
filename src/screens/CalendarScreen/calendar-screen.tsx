import React, {useRef, useState} from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import DownIcon from '../../assets/icons/up-icon';
import {Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useAtom} from 'jotai';
import {loggedInAtom, userDataAtom} from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import {SocailData} from '../../data/SocailPlatformData';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import {CalendarData} from '../../data/CalendarData';
import Post from '../../components/Post/post';
import { useNavigation } from '@react-navigation/native';

const CalendarScreen = () => {
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [myData, setMyData] = React.useState(SocailData);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      setLoggedIn(false);
      console.log('sign out success');
    } catch (error) {
      console.error(error);
    }
  };

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  const selectedItem = (item, index) => {
    const newArrData = SocailData.map((e, index) => {
      if (e.id === item.id) {
        return {
          ...e,
          isSelected: true,
        };
      }
      return {
        ...e,
        isSelected: false,
      };
    });
    setMyData(newArrData);
    bottomSheetModalRef.current?.close();
  };

  const selectedIconIndex = myData.findIndex(d => d.isSelected);
  const selectedIcon =
    selectedIconIndex > -1 && SocailData[selectedIconIndex].image;

  return (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView style={{flex: 1, backgroundColor: '#F4F8FC'}}>
      <Box mx="m">
        <Box mt="m" mb="m" flexDirection="row" alignItems="center">
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <DotIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePresentModal}
            style={{alignItems: 'center', flexDirection: 'row'}}>
            <Box style={{marginLeft: 90}}>
              <Image
                style={{width: 34, height: 34, borderRadius: 25}}
                source={{uri: userData.photoURL}}
              />
              <Image
                style={{
                  position: 'absolute',
                  top: 18,
                  bottom: 0,
                  left: 16,
                  width: 24,
                  height: 24,
                }}
                source={selectedIcon || require('../../assets/google-logo.png')}
              />
            </Box>
            <Text variant="heading2" ml="s">
              {userData.displayName}
            </Text>
            <DownIcon style={{top: 1, marginLeft: 5}} />
          </TouchableOpacity>
        </Box>
        <Box alignItems="center">
          <Calendar
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              width: 338,
              borderRadius: 10,
            }}
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#9644FF',
              },
            }}
            theme={{
              arrowColor: 'black',
              todayTextColor: 'black',
            }}
          />
        </Box>
        <Box mt="s">
          <Text variant="heading4">Upcoming Special Days</Text>
          <Box flexDirection="row" alignItems="center" mt="xs">
            <Image
              style={{marginLeft: -5}}
              source={require('../../assets/lampcharge.png')}
            />
            <Text fontSize={11} variant="heading5" color="grey">
              Tap on upcoming day button to generate fresh post content
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="xs" width={'100%'} height={1} backgroundColor="lightGrey" />
      <Box>
      <FlatList
        data={CalendarData}
        horizontal
        style={{marginLeft: 10}}
        renderItem={({item}) => {
          return (
            <Box alignItems='center' mr='m'>
              <Box
                flexDirection="row"
                justifyContent="center"
                margin="s"
                overflow="hidden"
                width={60}
                height={60}
                borderWidth={1}
                borderColor="grey"
                borderRadius={13}>
                <Box
                  backgroundColor="grey"
                  width={'100%'}
                  height={'100%'}
                  borderTopLeftRadius={12}
                  borderTopRightRadius={12}>
                  <Text textAlign="center" color="white">
                    {item.title}
                  </Text>
                  <Box
                    alignItems="center"
                    height={'100%'}
                    backgroundColor="white">
                    <Text mt="xs" fontWeight="400" variant="heading1">
                      {item.day}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Text variant='heading5'>{item.subtitle}</Text>
            </Box>
          );
        }}
      />
      <Box mt="s" width={'100%'} height={1} backgroundColor="lightGrey" />
      </Box>
      <Post />
      <SocialPlatformBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        selectedItem={selectedItem}
        myData={myData}
        userData={userData}
      />
    </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
