import React from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import CloseIcon from '../../assets/icons/close-icon';
import MediaIcon from '../../assets/icons/media-icon';
import RemoveIcon from '../../assets/icons/remove-icon';
import Button from '../Button/button';

const EditPostBottomSheet = ({selectedPost, EditPostBottomSheetRef, setSelectedPost, onSharePress, onRemovePress}: any) => {

  const snapPoints = ['100%'];

  const handleSharePress = () => {
    onSharePress(selectedPost);
  }

  const handleRemovePress = () => {
    setSelectedPost(prevState => ({...prevState, image: null}));
    onRemovePress();
  }
  
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={EditPostBottomSheetRef}
        index={0}
        detached
        snapPoints={snapPoints}
        stackBehavior="push"
        style={{zIndex: 100}}
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
          <Box mx="m">
            <Text mt="m" variant="generalHeading" textAlign="center">
              Edit Post
            </Text>
            {selectedPost && (
              <>
                {selectedPost.image === null ? null : (
                  <ImageBackground
                    resizeMode="stretch"
                    style={{
                      width: '100%',
                      height: 224,
                      marginTop: 20,
                    }}
                    imageStyle={{borderRadius: 10}}
                    source={selectedPost.image}>
                    <Box
                      position="absolute"
                      bottom={0}
                      flexDirection="row"
                      flex={1}
                      height={54}
                      style={{backgroundColor: '#00000080'}}
                      width={'100%'}
                      borderBottomLeftRadius={10}
                      borderBottomRightRadius={10}
                      justifyContent='space-evenly'>
                      <Box alignItems='center' mt='s'>
                        <MediaIcon />
                        <Text fontSize={13} color='white'>Change</Text>
                      </Box>
                      <TouchableOpacity onPress={handleRemovePress} style={{alignItems: 'center', marginTop: 8}}>
                        <RemoveIcon />
                        <Text fontSize={13} color='white'>Remove</Text>
                      </TouchableOpacity>
                    </Box>
                  </ImageBackground>
                )}
                <Text ml='m' mt='s' variant='generalHeading'>Edit Text</Text>
              <Box mt='m'>
                <TextInput 
                  multiline
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    color: 'black',
                    fontSize: 13,
                    padding: 15,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#D6E0EA',
                  }}
                  value={selectedPost.title}
                  onChangeText={(text) =>
                    setSelectedPost({
                      ...selectedPost,
                      title: text,
                    })
                  }
                />
                </Box>
              </>
            )}
          </Box>
          <TouchableOpacity
            onPress={() => {
              EditPostBottomSheetRef.current?.close();
            }}
            style={{position: 'absolute', right: 20}}>
            <CloseIcon />
          </TouchableOpacity>
          <Box mx='m' mt='l'>
            <Button labelColor={'white'} variant='primary' label='Save' onPress={handleSharePress} />
          </Box>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default EditPostBottomSheet;











