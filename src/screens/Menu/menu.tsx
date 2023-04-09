import {
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
import { loggedInAtom } from '../../utils/atom';

const Menu = () => {
  const navigation = useNavigation();
  const [, setLoggedIn] = useAtom(loggedInAtom);
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      setLoggedIn(false);
      console.log('sign out success');
    } catch (error) {
      console.error(error);
    }
  };
  return (
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
      <TouchableOpacity onPress={signOut} style={styles.logOutButton}>
        <Text variant="heading3" style={{color: '#EB5757'}}>
          Log out
        </Text>
      </TouchableOpacity>
      <Text textAlign="center" mb="m" variant="heading5" color="grey">
        App version v0.1.1 (10893)
      </Text>
    </ScrollView>
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
