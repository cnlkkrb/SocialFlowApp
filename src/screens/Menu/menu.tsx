import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import Divider from '../../components/Divider/divider';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/icons/back-icon';
import MenuMoreItems from '../../components/MenuMoreItems/menu-more-items';
import AccountItems from '../../components/AccountItems/account-items';

const Menu = () => {
  const navigation = useNavigation()
  return (
    <Box>
      <Box mt="m" mb="m" alignItems="center">
      <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', left: 20}}
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
      <Divider disablePadding />
      <Box mx="m" mt="m">
        <Text color="grey" ml="m" variant="heading4">
          Account
        </Text>
        <AccountItems />
        <Text mt='m' color="grey" ml="m" variant="heading4">
          More
        </Text>
        <MenuMoreItems />
      </Box>
    </Box>
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

export default Menu;
