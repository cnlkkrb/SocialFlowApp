import React, {useRef} from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import SinglePostIcon from '../../assets/icons/single-post-icon';
import SpecialPostIcon from '../../assets/icons/special-post-icon';
import MultiplePostIcon from '../../assets/icons/multiple-post-icon';
import CreatePostBottomSheetStep2 from '../CreatePostBottomSheetStep2/create-post-bottom-sheet-step2';

const CreatePostBottomSheet = ({bottomSheetModalRef}: any) => {
    const createPostBottomSheetStep2Ref = useRef<BottomSheet>(null);
    const snapPoints = ['40%'];

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
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
        bottomInset={20}
        style={{marginHorizontal: 16}}
        enablePanDownToClose
        backgroundStyle={{backgroundColor: 'white'}}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mx="m">
          <Image source={require('../../assets/logo_fb.png')} />
          <Text ml="s" variant="generalHeading" fontWeight="600">
            Create New Posts
          </Text>
        </Box>
        <TouchableOpacity
          onPress={() => {
            bottomSheetModalRef.current?.close();
            createPostBottomSheetStep2Ref.current?.present();
          }}
          style={styles.touchable}>
          <Box
            ml="m"
            width={40}
            height={40}
            justifyContent='center'
            alignItems='center'
            borderWidth={1}
            borderRadius={10}
            backgroundColor='white'
            borderColor="lightGrey">
            <SinglePostIcon />
          </Box>
          <Text ml="m" variant="heading3">
            Single Facebook Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}>
          <Box
            ml="m"
            width={40}
            height={40}
            justifyContent='center'
            alignItems='center'
            borderWidth={1}
            borderRadius={10}
            backgroundColor='white'
            borderColor="lightGrey">
            <MultiplePostIcon />
          </Box>
          <Text ml="m" variant="heading3">
            Multiple Facebook Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}>
          <Box
            ml="m"
            width={40}
            height={40}
            justifyContent='center'
            alignItems='center'
            borderWidth={1}
            borderRadius={10}
            backgroundColor='white'
            borderColor="lightGrey">
            <SpecialPostIcon />
          </Box>
          <Text ml="m" variant="heading3">
            Special Facebook Post
          </Text>
        </TouchableOpacity>
      </BottomSheetModal>
      <CreatePostBottomSheetStep2 createPostBottomSheetStep2Ref={createPostBottomSheetStep2Ref}/>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
    touchable: {
        marginTop: 16,
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 16,
        backgroundColor: '#F4F8FC'
    }
})

export default CreatePostBottomSheet;
