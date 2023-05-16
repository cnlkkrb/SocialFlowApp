import React from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetTextInput as TextInput
} from '@gorhom/bottom-sheet';
import {Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import CloseIcon from '../../assets/icons/close-icon';
import MediaIcon from '../../assets/icons/media-icon';
import RemoveIcon from '../../assets/icons/remove-icon';
import Button from '../Button/button';

const EditPostBottomSheet = ({selectedPost, EditPostBottomSheetRef, setSelectedPost, onSharePress, onRemovePress}: any) => {
  const scrollViewRef = React.useRef()
  const snapPoints = ['100%'];

  const handleSharePress = () => {
    onSharePress(selectedPost);
  }

  const handleRemovePress = () => {
    setSelectedPost((prevState: any) => ({...prevState, image: null}));
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
        <ScrollView ref={scrollViewRef}>
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
                  </ImageBackground>
                )}
                <Text ml='m' mt='s' variant='generalHeading'>Edit Text</Text>
              <Box mt='m'>
                <TextInput 
                  multiline
                  onFocus={() => {
                    setTimeout(() => {
                        scrollViewRef.current?.scrollToEnd?.({ animated: true })
                    }, 500);
                  }}
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
          <Box mx='m' mt='m'>
            <Button labelColor={'white'} variant='primary' label='Save' onPress={handleSharePress} />
          </Box>
        </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default EditPostBottomSheet;











