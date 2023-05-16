import React, { useEffect, useState } from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {LogBox, Platform, TextInput, TouchableOpacity} from 'react-native';
import Button from '../Button/button';
import CloseIcon from '../../assets/icons/close-icon';
import { useNavigation } from '@react-navigation/native';
import EditIcon from '../../assets/icons/edit-icon';
import { CalendarIcon } from '../../assets/icons/calendar-icon';
import AddVisualsIcon from '../../assets/icons/add-visuals-icon';
import ApproveIcon from '../../assets/icons/approve-icon';
import Divider from '../Divider/divider';

const PostDetailBottomSheet = ({postDetailBottomSheetRef}: any) => {

    useEffect(() => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])
    const [text, setText] = useState('');
    const snapPoints = ['75%'];
    const navigation = useNavigation();

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={postDetailBottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        stackBehavior="push"
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
          <Box mx="l">
            <Text textAlign="center" variant="generalHeading" fontWeight="600">
              Special Post Detail
            </Text>
            <Box mt="m">
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
            <Box mt="m" borderWidth={1.5} borderColor="bg" borderRadius={10}>
              <Button
                label="Generate Post"
                labelColor={'bg'}
                onPress={() => {}}
              />
            </Box>
            <Box mt="m">
            <Box
              backgroundColor="white"
              borderWidth={1}
              borderColor="lightGrey"
              borderRadius={10}
              mt="m">
              <Box
                mb="s"
                width={'100%'}
                height={100}
                backgroundColor="white"
                borderRadius={10}
              />
              <Divider />
                <Box
                  mb="s"
                  flexDirection="row"
                  justifyContent="space-around">
                  <TouchableOpacity
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <EditIcon />
                    <Text fontSize={11}>Edit</Text>
                  </TouchableOpacity>
                  <Box alignItems="center" justifyContent="center">
                    <CalendarIcon />
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
            </Box>
          </Box>
          <Box mt='l'>
              <Button
                mx='l'
                variant="primary"
                label="Share Now"
                onPress={() => navigation.navigate('ContentSignIn')}
                labelColor={'white'}
              />
            </Box>
          <TouchableOpacity
            onPress={() => {
                postDetailBottomSheetRef.current?.close()
            }}
            style={{position: 'absolute', top: 0, right: 20}}>
            <CloseIcon />
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default PostDetailBottomSheet;
