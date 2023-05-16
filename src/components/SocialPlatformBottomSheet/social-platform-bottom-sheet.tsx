import React, { useState } from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import CheckedIcon from '../../assets/icons/checked-icon';
import { useSetAtom } from 'jotai';
import { socialPlatformAtom } from '../../utils/atom';

const SocialPlatformBottomSheet = ({bottomSheetModalRef, userData, selectedItem, myData, selectedItemName}: any) => {
  const setSocialPlatform = useSetAtom(socialPlatformAtom)
  const snapPoints = ['100%']

  const renderItem = ({item, index}: any) => {
    return (
      <Box flex={1}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setSocialPlatform(item)
            item.isSelected = !item.isSelected;
            myData[index] = item;
            selectedItem(item)
          }}>
          {item.isSelected ? (
            <Box
              mt="m"
              mx="m"
              backgroundColor="white"
              height={54}
              borderRadius={10}
              flexDirection="row"
              alignItems="center"
              borderWidth={2}
              borderColor="bg">
              <Box>
                <Image
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 25,
                    marginLeft: 5,
                  }}
                  source={{uri: userData.photoURL}}
                />
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    position: 'absolute',
                    top: 15,
                    left: 20,
                  }}
                  source={item.image}
                />
              </Box>
              <Text
                marginRight="auto"
                color="bg"
                variant="heading4"
                fontWeight="700"
                ml="m">
                {item.name}
              </Text>
              <Box marginRight="m">
                <CheckedIcon />
              </Box>
            </Box>
          ) : (
            <Box
              mt="m"
              mx="m"
              style={{backgroundColor: '#F4F8FC'}}
              height={54}
              borderRadius={10}
              flexDirection="row"
              alignItems="center">
              <Box>
                <Image
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 25,
                    marginLeft: 5,
                  }}
                  source={{uri: userData.photoURL}}
                />
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    position: 'absolute',
                    top: 15,
                    left: 20,
                  }}
                  source={item.image}
                />
              </Box>
              <Text marginRight="auto" variant="heading4" ml="m">
                {item.name}
              </Text>
              <Box
                marginRight="m"
                width={24}
                height={24}
                borderWidth={1}
                borderColor={'grey'}
                borderRadius={25}
              />
            </Box>
          )}
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
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
        bottomInset={430}
        topInset={60}
        style={{marginHorizontal: 16}}
        backgroundStyle={{backgroundColor: 'white'}}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mx="m">
          <Text variant="generalHeading" fontWeight="500">
            Select social platform
          </Text>
          <Text variant="heading2" color="bg">
            Add
          </Text>
        </Box>
        <FlatList
          data={myData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ListFooterComponent={() => <Box height={80} />}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default SocialPlatformBottomSheet;

