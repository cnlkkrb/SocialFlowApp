import React, {useRef} from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import DownIcon from '../../assets/icons/up-icon';
import RingIcon from '../../assets/icons/ring-icon';
import {Image, TouchableOpacity} from 'react-native';
import Insights from '../../components/Insights/insights';
import TipsTricks from '../../components/TipsTricks/tips-tricks';
import SpecialDays from '../../components/SpecialDays/special-days';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useAtom} from 'jotai';
import {loggedInAtom, userDataAtom} from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import {SocailData} from '../../data/SocailPlatformData';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';

const HomeScreen = () => {
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [myData, setMyData] = React.useState(SocailData);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);

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
    <Box flex={1} backgroundColor="pageBackground">
      <Box
        m="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <TouchableOpacity onPress={signOut}>
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
      <Box mt="m" ml="m">
        <Text ml="m" variant="heading2">
          Insights
        </Text>
        <Insights />
      </Box>
      <Box mt="m" ml="m">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text ml="m" variant="heading2">
            Tips & Tricks
          </Text>
          <Text mr="m" color="grey">
            More
          </Text>
        </Box>
        <TipsTricks />
      </Box>
      <Box ml="m" mt="l">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text ml="m" variant="heading2">
            Special Days
          </Text>
          <Text mr="m" color="grey">
            More
          </Text>
        </Box>
        <SpecialDays />
      </Box>
      <SocialPlatformBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        selectedItem={selectedItem}
        myData={myData}
        userData={userData}
      />
    </Box>
  );
};

export default HomeScreen;
