import React from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import RightIcon from '../../assets/icons/right-icon';
import IndustryIcon from '../../assets/icons/industry-icon';
import BusinessIcon from '../../assets/icons/business-icon';
import ProductIcon from '../../assets/icons/product-icon';
import ContentIcon from '../../assets/icons/content-icon';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const BusinessSettings = () => {
  const navigation = useNavigation()
  return (
    <Box>
      <TouchableOpacity onPress={() => navigation.navigate('Industry')} style={styles.container}>
        <Box style={styles.iconContainer}>
          <IndustryIcon />
        </Box>
        <Text marginRight="auto" variant="heading3" ml="s">
          Industry Selection
        </Text>
        <Box mr="m">
          <RightIcon />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Business')} style={styles.container}>
        <Box style={styles.iconContainer}>
          <BusinessIcon />
        </Box>
        <Text marginRight="auto" variant="heading3" ml="s">
          Business Details
        </Text>
        <Box mr="m">
          <RightIcon />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProductInfo')} style={styles.container}>
        <Box style={styles.iconContainer}>
          <ProductIcon />
        </Box>
        <Text marginRight="auto" variant="heading3" ml="s">
          Product/Service
        </Text>
        <Box mr="m">
          <RightIcon />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Content')} style={styles.container}>
        <Box style={styles.iconContainer}>
          <ContentIcon />
        </Box>
        <Text marginRight="auto" variant="heading3" ml="s">
          Content Tone & Theme
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

export default BusinessSettings;
