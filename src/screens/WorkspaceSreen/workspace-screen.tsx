import {Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import Box from '../../components/Box/box';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../../components/Text/text';
import Divider from '../../components/Divider/divider';
import {useAtom} from 'jotai';
import {userDataAtom} from '../../utils/atom';
import SwitchWorkIcon from '../../assets/icons/switch-work-icon';
import TeamIcon from '../../assets/icons/team-icon';
import RightIcon from '../../assets/icons/right-icon';
import SmallPlusIcon from '../../assets/icons/small-plus-icon';
import BusinessSettings from '../../components/BusinessSettings/business-settings';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkspaceScreen = () => {
  const [userData] = useAtom(userDataAtom);
  const navigation = useNavigation()
  const [business, setBusiness] = useState('');

  useEffect(() => {
    retrieveBusiness();
  }, []);

  const retrieveBusiness = async () => {
    try {
      const value = await AsyncStorage.getItem('business');
      if (value !== null) {
        setBusiness(value);
      }
    } catch (error) {
      console.log('Error retrieving business:', error);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box mt="m" mb="m" alignItems="center">
        <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{position: 'absolute', left: 20}}>
          <DotIcon />
        </TouchableOpacity>
        <Text textAlign="center" variant="heading2" ml="s">
          {business}
        </Text>
      </Box>
      <Divider disablePadding />
    <ScrollView>
      <Box mx="m" mt="m" mb='m'>
        <Text color="grey" ml="m" variant="heading4">
          Workspace & Team
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
            {business}
          </Text>
          <Box mr="s">
            <SwitchWorkIcon />
          </Box>
        </Box>
        <TouchableOpacity onPress={() => navigation.navigate('TeamManagement')} style={styles.teamButton}>
          <Box
            ml="s"
            width={38}
            height={38}
            justifyContent="center"
            alignItems="center"
            backgroundColor="pageBackground"
            borderRadius={10}
            borderWidth={1}
            borderColor="lightGrey">
            <TeamIcon />
          </Box>
          <Text marginRight="auto" variant="heading3" ml="s">
            Team Management
          </Text>
          <Box mr="m">
            <RightIcon />
          </Box>
        </TouchableOpacity>
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
            userData.providerData[0].providerId === 'google.com'  ? null : <Image style={{marginLeft: 8}} source={require('../../assets/google-image.png')}/>
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
