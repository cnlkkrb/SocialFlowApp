import React, {useRef} from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import DownIcon from '../../assets/icons/up-icon';
import RingIcon from '../../assets/icons/ring-icon';
import {Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Insights from '../../components/Insights/insights';
import TipsTricks from '../../components/TipsTricks/tips-tricks';
import SpecialDays from '../../components/SpecialDays/special-days';
import {useAtom} from 'jotai';
import {userDataAtom} from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import {SocailData} from '../../data/SocailPlatformData';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import UserHeader from '../../components/Header/header';

interface UserData {
  photoURL: string;
  displayName: string;
  providerId: string;
  providerData: any;
}


const HomeScreen = () => {
  const [myData, setMyData] = React.useState(SocailData);
  const [userData] = useAtom<UserData>(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }
  
  const selectedItem = (item: { id: number }) => {
    const newArrData = SocailData.map((e) => {
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
    <Box flex={1} backgroundColor="pageBackground">
      <UserHeader navigation={navigation} userData={userData} handlePresentModal={handlePresentModal} selectedIcon={selectedIcon} />
    <ScrollView>
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
      <Box ml="m" mt="l" mb='m'>
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
      </ScrollView>
      <SocialPlatformBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        selectedItem={selectedItem}
        myData={myData}
        userData={userData}
      />
    </Box>
  </SafeAreaView>
  );
};

export default HomeScreen;
