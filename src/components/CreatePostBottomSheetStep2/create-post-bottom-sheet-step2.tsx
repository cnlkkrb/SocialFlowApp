import React, { useEffect, useRef, useState } from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { LogBox, Platform, SafeAreaView, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import DropDownMenu from '../DropDownMenu/drop-down-menu';
import Button from '../Button/button';
import CloseIcon from '../../assets/icons/close-icon';
import PostTypeBottomSheet from '../PostTypeBottomSheet/post-type-bottom-sheet';
import { useAtom } from 'jotai';
import { businessDataAtom, productsDataAtom } from '../../utils/atom';
import { sharePostWithPhoto } from '../../utils/facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedLottieView from 'lottie-react-native';
import AddVisualsIcon from '../../assets/icons/add-visuals-icon';
import ApproveIcon from '../../assets/icons/approve-icon';
import EditIcon from '../../assets/icons/edit-icon';
import Divider from '../Divider/divider';
import ScheduleIcon from '../../assets/icons/schedule-icon';
import LargeModal from '../Modal/modal';
import NotificationModal from '../Modal/notification-modal';

const CreatePostBottomSheetStep2 = ({ createPostBottomSheetStep2Ref }: any) => {

  const [postDetails, setPostDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [businessData] = useAtom(businessDataAtom)
  const [productsData] = useAtom(productsDataAtom)
  const [savedUserData, setSavedPageData] = useState(null)
  const [isSharing, setItSharing] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [errorModal, setErrorModal] = useState(false)

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])

  const postTypeBottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['95%'];

  const generateImage = async () => {
    setLoading(true)
    const url = "http://18.159.244.8:9000/generate-image";
    try {
      const params = {
        socialMediaPlatform: "Facebook",
        brandName: businessData?.business,
        products: productsData?.competitors,
        city: businessData?.business,
        foundationyear: businessData?.year,
        companySlogan: productsData?.description,
        competitors: businessData?.competitors,
        numberOfPost: 1,
        postTone: AsyncStorage.getItem('selectedItem'),
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params)
      });

      if (!response.ok) {
        console.log('error')
      }

      const responseData = await response.json()
      setPostDetails(responseData)
      console.log("Image Generated:", responseData);
    } catch (error) {
      console.error("Error saving the user:", error);
    }
    setLoading(false)
  };

  useEffect(() => {
    async function main() {
      const fb = await AsyncStorage.getItem('pageAccessToken')
      setSavedPageData(JSON.parse(fb))
    }
    main()
  }, [])


  const shareButton = async () => {
    setItSharing(true)
    try {
      const pageAccessToken = savedUserData.pageAccessToken.data[0].access_token;
      const id = savedUserData.pageAccessToken.data[0].id;
      const imgUrl = postDetails.imageDetails.output[0];
      const post = postDetails.postDetails.post

      await sharePostWithPhoto(
        id,
        pageAccessToken,
        imgUrl,
        post
      );
      
      if(!imgUrl) {
        setErrorModal(true)
      } else {
        setIsModalVisible(true)
      }
      
    } catch (error) {
      console.log(error)
    }
    setItSharing(false)
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={createPostBottomSheetStep2Ref}
        index={0}
        snapPoints={Platform.OS === 'android' ? snapPoints : ['92%']}
        stackBehavior="push"
        style={{ flex: 1 }}
        detached
        onDismiss={false}
        enableContentPanningGesture={false}
        enablePanDownToClose={false}
        closeOnPress={false}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior={'collapse'}
          />
        )}
        backgroundStyle={{ backgroundColor: '#F4F8FC' }}>
        <BottomSheetScrollView>
          <SafeAreaView style={{ flex: 1 }}>
            <Box flex={1} mx="l">
              <>
                <Text mt='m' textAlign="center" variant="generalHeading" fontWeight="600">
                  Create New Facebook Post
                </Text>
                <Box mt="s">
                  <Text ml="m" variant="heading3">
                    Starting point
                  </Text>
                  <TextInput
                    style={{
                      width: '100%',
                      height: 55,
                      borderColor: '#D6E0EA',
                      borderWidth: 1,
                      borderRadius: 10,
                      paddingLeft: 10,
                      backgroundColor: 'white',
                      marginTop: 10,
                      textAlignVertical: 'top',
                      color: 'black',
                    }}
                    placeholder="What’s in your mind? Give me some tip"
                    placeholderTextColor={'#D0C9D6'}
                    multiline={true}
                    numberOfLines={5}
                  />
                </Box>
                <Box mt="m">
                  <Text ml="m" variant="heading3">
                    Content Tone
                  </Text>
                  <DropDownMenu />
                </Box>
                <Box mt="m" borderWidth={1.5} borderColor="bg" borderRadius={10}>
                  <Button
                    label="Generate Post"
                    labelColor={'bg'}
                    onPress={() => generateImage()}
                  />
                </Box>
              </>
              <Box mt="m" borderRadius={10}>
                {
                  loading ? (
                    <>
                      <Image
                        style={{ borderRadius: 10, marginTop: 10 }}
                        source={require('../../assets/image-loading.png')}
                      />
                      <AnimatedLottieView
                        autoPlay
                        loop
                        source={require('../../assets/lottie/lottie-animation.json')}
                        style={{ height: 150 }}
                      />
                    </>
                  ) : (
                    postDetails && (
                      <Box>
                        <Box
                          backgroundColor="white"
                          borderWidth={1}
                          borderColor="lightGrey"
                          borderRadius={10}
                          mt="s">
                          <Box
                            width={'100%'}
                            backgroundColor="white"
                          />
                          <Image
                            style={{
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                              width: 327,
                              height: 180,
                            }}
                            source={{ uri: postDetails?.imageDetails?.output[0] }}
                            resizeMode='cover'
                          />
                          <Text margin='s' mt='m' style={{ marginBottom: -5 }}>{postDetails?.postDetails?.post}</Text>
                          <Divider />
                          <Box
                            mb="s"
                            flexDirection="row"
                            justifyContent="space-around">
                            <TouchableOpacity
                              style={{ alignItems: 'center', justifyContent: 'center' }}>
                              <EditIcon />
                              <Text fontSize={11}>Edit</Text>
                            </TouchableOpacity>
                            <Box alignItems="center" justifyContent="center">
                              <ScheduleIcon />
                              <Text fontSize={11}>Schedule</Text>
                            </Box>
                            <Box alignItems="center" justifyContent="center">
                              <AddVisualsIcon />
                              <Text fontSize={11}>Add Media</Text>
                            </Box>
                            <Box alignItems="center" justifyContent="center">
                              <ApproveIcon />
                              <Text fontSize={11}>Save to Draft</Text>
                            </Box>
                          </Box>
                        </Box>
                        <Box mt='m' mb='m' justifyContent='center'>
                          <TouchableOpacity
                            onPress={async () => {
                              shareButton()
                            }}
                            disabled={isSharing}
                            style={{
                              width: '100%',
                              height: 50,
                              backgroundColor: isSharing ? '#E4E3E8' : '#6944FF',
                              borderRadius: 10,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Text mr='s' variant='heading3' color='white'>Share Now</Text>
                            {
                              isSharing ? (
                                <ActivityIndicator style={{ position: 'absolute' }} size='small' color='black' />
                              ) : null
                            }
                          </TouchableOpacity>
                        </Box>
                      </Box>
                    )
                  )
                }
              </Box>
              <NotificationModal
                visible={errorModal}
                icon={true}
                closeIcon={false}
                text={'Image Not Produced'}
                buttonLabel="OK"
                onPress={() => {
                  setErrorModal(false);
                }}
              />
              <LargeModal
                visible={isModalVisible}
                icon={false}
                closeIcon={false}
                text={'Congratulations'}
                description={<Text variant='heading4'>Your post has been successfully shared! </Text>}
                buttonLabel="OK"
                onPress={() => {
                  setIsModalVisible(false);
                }}
              />
            </Box>
            <TouchableOpacity
              onPress={() => {
                createPostBottomSheetStep2Ref.current?.close()
              }}
              style={{ position: 'absolute', top: 0, right: 20 }}>
              <CloseIcon />
            </TouchableOpacity>
          </SafeAreaView>
        </BottomSheetScrollView>
      </BottomSheetModal>
      <PostTypeBottomSheet postTypeBottomSheetRef={postTypeBottomSheetRef} />
    </BottomSheetModalProvider>
  );
};

export default CreatePostBottomSheetStep2;
