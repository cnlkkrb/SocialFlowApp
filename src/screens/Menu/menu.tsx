import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/icons/back-icon';
import MenuMoreItems from '../../components/MenuMoreItems/menu-more-items';
import AccountItems from '../../components/AccountItems/account-items';
import LinearGradient from 'react-native-linear-gradient';
import RightIcon from '../../assets/icons/right-icon';
import MessageIcon from '../../assets/icons/message-icon';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useAtom } from 'jotai';
import appleAuth, {AppleRequestOperation} from '@invertase/react-native-apple-authentication';
import { loggedInAtom, userDataAtom } from '../../utils/atom';

const Menu = () => {
  const navigation = useNavigation();
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const [userData] = useAtom(userDataAtom);

  const handleExit = () => {
    setLoggedIn(false)
  };
  
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setLoggedIn(false);
      console.log('sign out success');
    }
  };
  const appleLogout = async () => {
    try {
      await appleAuth.performRequest({
        requestedOperation: AppleRequestOperation.LOGOUT,
      });
      console.log('Apple logout success');
    } catch (error) {
      console.log('Apple logout error:', error);
    }
  }
  
  // Call the appleLogout function when you want to log out
  const handleLogout = async () => {
    try {
      // Call any other logout functions you need here
      await appleLogout();
    } catch (error) {
      console.log('Logout error:', error);
    } finally {
      setLoggedIn(false);
    }
  }
  const facebookLogout = async function onFacebookLogoutPress() {
    try {
      await auth().signOut(); // optional, to sign out of Firebase as well
      setLoggedIn(false);
      console.log('logout success');
    } catch (error) {
      console.log(error);
    }
  }
  return (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <Box mt="m" mb="m" alignItems="center">
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            left: 20,
          }}
          onPress={() => navigation.goBack()}>
          <BackIcon />
          <Text color="grey" fontSize={17} ml="s">
            Back
          </Text>
        </TouchableOpacity>
        <Text textAlign="center" variant="heading2" ml="s">
          Menu
        </Text>
      </Box>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={{height: 48, justifyContent: 'center'}}
        colors={['#6944FF', '#9644FF']}>
        <Box flexDirection="row" alignItems="center">
          <Box ml="xl">
            <MessageIcon />
          </Box>
          <Text ml="m" variant="heading3" color="white" mr="auto">
            Recommend Post Craft{' '}
          </Text>
          <Box mr="m">
            <RightIcon color={'white'} />
          </Box>
        </Box>
      </LinearGradient>
      <Box mx="m" mt="m">
        <Text color="grey" ml="m" variant="heading4">
          Account
        </Text>
        <AccountItems />
        <Text mt="m" color="grey" ml="m" variant="heading4">
          More
        </Text>
        <MenuMoreItems />
      </Box>
      <Text
        variant="heading3"
        color="bg"
        textAlign="center"
        mt="m"
        textDecorationLine="underline">
        Restore my purchases
      </Text>
      <TouchableOpacity onPress={() => {
        if (userData && userData.providerData && userData.providerData[0] && userData.providerData[0].providerId === 'google.com') {
          signOut();
        } else if (userData && userData.providerData && userData.providerData[0] && userData.providerData[0].providerId === 'facebook.com') {
          facebookLogout();
        } else {
          handleExit();
        }
      }} style={styles.logOutButton}>
        <Text variant="heading3" style={{color: '#EB5757'}}>
          Log out
        </Text>
      </TouchableOpacity>
      <Text textAlign="center" mb="m" variant="heading5" color="grey">
        App version v0.1.1 (10893)
      </Text>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logOutButton: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#EB5757',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Menu;










