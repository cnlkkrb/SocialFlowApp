import React from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import RightIcon from '../../assets/icons/right-icon';
import IndustryIcon from '../../assets/icons/industry-icon';
import BusinessIcon from '../../assets/icons/business-icon';
import ProductIcon from '../../assets/icons/product-icon';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PremiumIcon from '../../assets/icons/premium-icon';
import UserIcon from '../../assets/icons/user-icon';
import NotificationIcon from '../../assets/icons/notification-icon';

const AccountItems = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <TouchableOpacity style={styles.container}>
        <Box style={styles.iconContainer}>
          <PremiumIcon />
        </Box>
        <Text marginRight="auto" variant="heading3" ml="s">
          Try Premium for Free
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')} style={styles.container}>
        <Box style={styles.iconContainer}>
          <UserIcon />
        </Box>
        <Text marginRight="auto" variant="heading3" ml="s">
          Account settings
        </Text>
        <Box mr="m">
          <RightIcon />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Box style={styles.iconContainer}>
          <NotificationIcon />
        </Box>
        <Text marginRight="auto" variant="heading3" ml="s">
          Notifications
        </Text>
        <Box mr="m">
          <RightIcon />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D6E0EA',
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
  },
  iconContainer: {
    marginLeft: 8,
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pageBackground',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D6E0EA',
  },
});

export default AccountItems;
