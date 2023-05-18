import React, { useRef } from 'react';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import { SafeAreaView, ScrollView } from 'react-native';
import Insights from '../../components/Insights/insights';
import TipsTricks from '../../components/TipsTricks/tips-tricks';
import SpecialDays from '../../components/SpecialDays/special-days';
import { useAtom } from 'jotai';
import { myDataAtom, userDataAtom } from '../../utils/atom';
import BottomSheet from '@gorhom/bottom-sheet';
import { SocailData } from '../../data/SocailPlatformData';
import SocialPlatformBottomSheet from '../../components/SocialPlatformBottomSheet/social-platform-bottom-sheet';
import SocialHeader from '../../components/SocialHeader/social-header';
import { sharePost, sharePostWithPhoto } from '../../utils/facebook';
import Button from '../../components/Button/button';

const HomeScreen = () => {

  const [myData, setMyData] = useAtom(myDataAtom);
  const [userData] = useAtom(userDataAtom);
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
  }

  const selectedItem = (item: { id: number }) => {
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

  const handleButtonPress = () => {
    const pageAccessToken =
      "EAATZCkdCwZB1wBAO0XEYfjtZAW4yjKF2QGUZAcExyj6ZCusCeiKotZBuMis5CWZAK6eU8zwbjZA2JZC5Mda0O6amZCxrMP0yfQ4s7ZAmjsMjlaVFpQeHGavGAGcFm4XUDWg8U7ZAlroHr774uKe2ZBbZAuFToSYWP0HNu5K55iPqlkh6NXbSCbz5GhZCSFU";
    const id = "100426513065072";
    const imgUrl =
      "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/be9f16c4-00b8-4682-abdb-72a4dc926d9e-0.png";

    sharePost(pageAccessToken, id, "Kelebek gibi ucarim ari gibi sokarim")
    sharePostWithPhoto(
      id,
      pageAccessToken,
      imgUrl,
      "Kelebek gibi ucarim ari gibi sokarim"
    );
  };


  const generateImage = async () => {
    const url = "http://192.168.1.10:9000/generate-image";
    try {
      const params = {
        socialMediaPlatform: "Facebook",
        brandName: "Gege Cake",
        products: [
          "Desserts",
          "bakery",
          "foods",
          "cakes",
          "cookies",
          "croissants",
          "pies",
        ],
        city: "London",
        foundationyear: 1990,
        companySlogan: "Eat little bit",
        competitors: ["Entree", "PeckaCudo"],
        numberOfPost: 1,
        postTone: "friendly",
      };
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
  
      if (!response.ok) {
        console.log('error')
      }
  
      const savedUser = await response.json();
      console.log("User saved:", savedUser);
    } catch (error) {
      console.error("Error saving the user:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F8FC' }}>
      <Box>
        <SocialHeader
          handlePresentModal={handlePresentModal}
          userData={userData}
          myData={myData}
          SocailData={SocailData}
        />
        <ScrollView>
          <Button onPress={handleButtonPress} label={'Share'} labelColor={'black'} variant='primary'/>
          <Button mt='l' onPress={generateImage} label={'GenerateImage'} labelColor={'black'} variant='primary'/>
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
      </Box>
      <SocialPlatformBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        selectedItem={selectedItem}
        myData={myData}
        userData={userData}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
