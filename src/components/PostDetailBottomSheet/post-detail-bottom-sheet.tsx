import React, { useEffect } from 'react';
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
import SwitchButton from '../SwitchButton/switch-button';
import CloseIcon from '../../assets/icons/close-icon';
import Calendar from '../Calendar/calendar';
import Clock from '../Clock/clock';
import { useNavigation } from '@react-navigation/native';

const PostDetailBottomSheet = ({postDetailBottomSheetRef}: any) => {

    useEffect(() => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])
    const [text, setText] = React.useState('');
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
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        enablePanDownToClose
        backgroundStyle={{backgroundColor: '#F4F8FC'}}>
        <BottomSheetScrollView>
          <Box mx="l">
            <Text textAlign="center" variant="generalHeading" fontWeight="600">
              Special Post Detail
            </Text>
            <Box mt="s">
              <Text ml="m" variant="heading3">
                Starting point
              </Text>
              <TextInput
                value={text}
                onChangeText={text => setText(text)}
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
              <Text ml="m" variant="heading3">
                Preview
              </Text>
              <TextInput
                style={{
                  width: '100%',
                  height: 120,
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
                postDetailBottomSheetRef.current?.close()
            }}
            style={{position: 'absolute', top: 0, right: 20}}>
            <CloseIcon />
          </TouchableOpacity>
        </BottomSheetScrollView>
        <Box position='absolute' bottom={Platform.OS === 'android' ? 10 : 40} width={'100%'}>
              <Button
                mx='l'
                variant="primary"
                label="Share Now"
                onPress={() => navigation.navigate('ContentSignIn')}
                labelColor={'white'}
              />
            </Box>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default PostDetailBottomSheet;
