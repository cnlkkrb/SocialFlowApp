import React, {useRef, useState} from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useAtom} from 'jotai';
import {myDataAtom, userDataAtom} from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import {SocailData} from '../../data/SocailPlatformData';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import {CalendarData} from '../../data/CalendarData';
import Post from '../../components/Post/post';
import {useNavigation} from '@react-navigation/native';
import SocialHeader from '../../components/SocialHeader/social-header';

const CalendarScreen = () => {
  const [myData, setMyData] = useAtom(myDataAtom);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  const selectedItem = (item: {id: number}) => {
    const newArrData = SocailData.map(e => {
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F8FC'}}>
      <SocialHeader
        handlePresentModal={handlePresentModal}
        userData={userData}
        myData={myData}
        SocailData={SocailData}
      />
      <ScrollView>
        <Box mx="m">
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
                <Box alignItems="center" mr="m">
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
                  <Text variant="heading5">{item.subtitle}</Text>
                </Box>
              );
            }}
          />
          <Box mt="s" width={'100%'} height={1} backgroundColor="lightGrey" />
        </Box>
        <Post draft={undefined} />
      </ScrollView>
      <SocialPlatformBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        selectedItem={selectedItem}
        myData={myData}
        userData={userData}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;
