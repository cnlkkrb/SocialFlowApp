import React, {useRef} from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import DownIcon from '../../assets/icons/up-icon';
import RingIcon from '../../assets/icons/ring-icon';
import {Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {useAtom} from 'jotai';
import {loggedInAtom, userDataAtom} from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import {SocailData} from '../../data/SocailPlatformData';
import TopTabNavigator from '../../navigations/top-tab-navigator';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';
import { useNavigation } from '@react-navigation/native';

const LibraryScreen = () => {
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [myData, setMyData] = React.useState(SocailData);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();

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
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Box
        m="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <DotIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePresentModal}
          style={{alignItems: 'center', flexDirection: 'row'}}>
          <Box>
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
        <RingIcon />
      </Box>
        <TopTabNavigator />
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

export default LibraryScreen;
