import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {useAtom} from 'jotai';
import {myDataAtom, userDataAtom} from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import {SocailData} from '../../data/SocailPlatformData';
import TopTabNavigator from '../../navigations/top-tab-navigator';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';

const LibraryScreen = () => {
  const [myData, setMyData] = useAtom(myDataAtom);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const selectedItem = (item: { id: number; }) => {
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F8FC'}}>
        <TopTabNavigator />
        <SocialPlatformBottomSheet
          bottomSheetModalRef={bottomSheetModalRef}
          selectedItem={selectedItem}
          myData={myData}
          userData={userData}
        />
    </SafeAreaView>
  );
};

export default LibraryScreen;
