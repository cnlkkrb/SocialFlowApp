import {Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import Divider from '../../components/Divider/divider';
import {useAtom} from 'jotai';
import {businessDataAtom, userDataAtom} from '../../utils/atom';
import SwitchWorkIcon from '../../assets/icons/switch-work-icon';
import SmallPlusIcon from '../../assets/icons/small-plus-icon';
import BusinessSettings from '../../components/BusinessSettings/business-settings';
import { useNavigation } from '@react-navigation/native';

const WorkspaceScreen = () => {
  const [userData] = useAtom(userDataAtom);
  const navigation = useNavigation();
  const [businessData] = useAtom(businessDataAtom)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F8FC'}}>
      <Box mt="m" mb="m" alignItems="center">
        <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{position: 'absolute', left: 20}}>
          <DotIcon />
        </TouchableOpacity>
        <Text textAlign="center" variant="heading2" ml="s">
          {businessData.business}
        </Text>
      </Box>
      <Divider disablePadding />
    <ScrollView>
      <Box mx="m" mt="m" mb='m'>
        <Text color="grey" ml="m" variant="heading4">
          Brands & Team
        </Text>
        <Box
          mt="s"
          backgroundColor="white"
          flexDirection="row"
          alignItems="center"
          borderColor="lightGrey"
          borderWidth={1}
          borderRadius={10}
          height={60}>
          <Image
            style={{width: 40, height: 40, borderRadius: 25, marginLeft: 10}}
            source={{uri: userData.photoURL}}
          />
          <Text marginRight="auto" variant="heading3" ml="s">
            {businessData.business}
          </Text>
          <Box mr="s">
            <SwitchWorkIcon />
          </Box>
        </Box>
        <Text mt='m' color="grey" ml="m" variant="heading4">
          Social Media Accounts
        </Text>
        <Box
          mt="s"
          backgroundColor="white"
          flexDirection="row"
          alignItems="center"
          borderColor="lightGrey"
          borderWidth={1}
          borderRadius={10}
          height={60}>
          <Box ml='s'>
              <Image
                style={{width: 40, height: 40, borderRadius: 25}}
                source={{uri: userData.photoURL}}
              />
              <Image
                style={{
                  position: 'absolute',
                  top: 20,
                  bottom: 0,
                  left: 20,
                  width: 28,
                  height: 28,
                }}
                source={require('../../assets/google-logo.png')}
              />
            </Box>
          <Image style={{marginLeft: 8}} source={require('../../assets/logo_ig.png')}/>
          {
            userData?.providerData?.[0].providerId === 'google.com'  ? null : <Image style={{marginLeft: 8}} source={require('../../assets/google-image.png')}/>
          }
          <Image style={{marginLeft: 8}} source={require('../../assets/logo_linkedin.png')}/>
          <Image style={{marginLeft: 8, marginRight: 'auto'}} source={require('../../assets/logo_twtter.png')}/>
          <Box borderWidth={2} borderColor='bg' p='xs' borderRadius={7} mr="m">
            <SmallPlusIcon />
          </Box>
        </Box>
        <Text mt='m' color="grey" ml="m" variant="heading4">
          Ai & Business Settings
        </Text>
        <BusinessSettings />
      </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  teamButton: {
    marginTop: 8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D6E0EA",
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
  }
})

export default WorkspaceScreen;
