import React, { useRef } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Text from '../Text/text';
import Box from '../Box/box';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import PostDetailBottomSheet from '../PostDetailBottomSheet/post-detail-bottom-sheet';

const PostTypeBottomSheet = ({postTypeBottomSheetRef}: any) => {

  const postDetailBottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['60%'];

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={postTypeBottomSheetRef}
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
        <Box mx="l">
          <Text textAlign="center" variant="generalHeading" fontWeight="600">
            Create a special post
          </Text>
          <Text color="darkGrey" mt="m" textAlign="center" variant="heading4">
            What type of post do you want to create?
          </Text>
          <Box flexDirection="row" mt='l' justifyContent='space-between'>
            <TouchableOpacity
              onPress={() => {
                postTypeBottomSheetRef.current?.close()
                postDetailBottomSheetRef.current?.present()
              }}
              style={styles.postButton}>
              <Image
                source={require('../../assets/special-event.png')}
              />
              <Text textAlign='center'>Special Events & Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                  
              }}
              style={styles.postButton}>
              <Image
                source={require('../../assets/hours-discount.png')}
              />
              <Text>Hours & Discounts</Text>
            </TouchableOpacity>
          </Box>
        <Box flexDirection="row" mt='l' justifyContent='space-between'>
        <TouchableOpacity
              onPress={() => {
                
              }}
              style={styles.postButton}>
            <Image
              source={require('../../assets/customer-review.png')}
            />
            <Text textAlign='center'>{'Customer \n Reviews'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                
              }}
              style={styles.postButton}>
            <Image
              source={require('../../assets/announcement.png')}
            />
            <Text>Announcements</Text>
          </TouchableOpacity>
        </Box>
        </Box>
      </BottomSheetModal>
      <PostDetailBottomSheet postDetailBottomSheetRef={postDetailBottomSheetRef}/>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  postButton: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"#D6E0EA",
    width:140,
    height:120
  }
})

export default PostTypeBottomSheet;
