import React, {useRef} from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import RingIcon from '../../assets/icons/ring-icon';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Insights from '../../components/Insights/insights';
import TipsTricks from '../../components/TipsTricks/tips-tricks';
import SpecialDays from '../../components/SpecialDays/special-days';
import {useAtom} from 'jotai';
import {myDataAtom, userDataAtom} from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import {SocailData} from '../../data/SocailPlatformData';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';
import SocialHeader from '../../components/SocialHeader/social-header';

const HomeScreen = () => {
  
  const [myData, setMyData] = useAtom(myDataAtom);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);
  
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
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} backgroundColor="pageBackground">
          <SocialHeader
            handlePresentModal={handlePresentModal}
            userData={userData}
            myData={myData}
            SocailData={SocailData}
          />
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
          <Box ml="m" mt="l" mb="m">
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
