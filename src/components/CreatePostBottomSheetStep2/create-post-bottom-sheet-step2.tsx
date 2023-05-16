import React, { useEffect, useRef } from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {LogBox, Platform, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import DropDownMenu from '../DropDownMenu/drop-down-menu';
import Button from '../Button/button';
import SwitchButton from '../SwitchButton/switch-button';
import CloseIcon from '../../assets/icons/close-icon';
import PostTypeBottomSheet from '../PostTypeBottomSheet/post-type-bottom-sheet';
import Calendar from '../Calendar/calendar';
import Clock from '../Clock/clock';

const CreatePostBottomSheetStep2 = ({createPostBottomSheetStep2Ref}: any) => {

    useEffect(() => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])
    const postTypeBottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = ['95%'];

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={createPostBottomSheetStep2Ref}
        index={0}
        snapPoints={Platform.OS === 'android' ? snapPoints : ['85%']}
        stackBehavior="push"
        style={{flex: 1}}
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
        backgroundStyle={{backgroundColor: '#F4F8FC'}}>
        <BottomSheetScrollView>
        <SafeAreaView style={{flex: 1}}>
          <Box flex={1} mx="l">
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
                  height: 95,
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
                onPress={() => {}}
              />
            </Box>
            <Box mt="m">
              <Text ml="m" variant="heading3">
                Preview
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  height: 160,
                  borderColor: '#D6E0EA',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  backgroundColor: 'white',
                  marginTop: 10,
                  textAlignVertical: 'top',
                  color: 'black',
                }}
                placeholderTextColor={'#D0C9D6'}
                multiline={true}
                numberOfLines={5}
              />
            </Box>
            
          </Box>
          <TouchableOpacity
            onPress={() => {
              createPostBottomSheetStep2Ref.current?.close()
            }}
            style={{position: 'absolute', top: 0, right: 20}}>
            <CloseIcon />
          </TouchableOpacity>
          <Box mx='l' mt='l'>
              <Button
                variant="primary"
                label="Share"
                onPress={() => {
                    createPostBottomSheetStep2Ref.current?.close()
                    postTypeBottomSheetRef.current?.present()
                }}
                labelColor={'white'}
              />
            </Box>
            </SafeAreaView>
        </BottomSheetScrollView>
      </BottomSheetModal>
      <PostTypeBottomSheet postTypeBottomSheetRef={postTypeBottomSheetRef}/>
    </BottomSheetModalProvider>
  );
};

export default CreatePostBottomSheetStep2;
