import React from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import RightIcon from '../../assets/icons/right-icon';
import IndustryIcon from '../../assets/icons/industry-icon';
import BusinessIcon from '../../assets/icons/business-icon';
import ProductIcon from '../../assets/icons/product-icon';
import ContentIcon from '../../assets/icons/content-icon';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ContactIcon from '../../assets/icons/contact-icon';
import FeedbackIcon from '../../assets/icons/feedback-icon';
import ThermOnServiceIcon from '../../assets/icons/therm-of-service-icon';
import PrivacyIcon from '../../assets/icons/privacy-icon';

const MenuMoreItems = () => {
  return (
    <Box>
      <TouchableOpacity style={styles.container}>
        <Box style={styles.iconContainer}>
          <ContactIcon />
        </Box>
        <Text variant="heading3" ml="s">
          Contact us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Box style={styles.iconContainer}>
          <FeedbackIcon />
        </Box>
        <Text variant="heading3" ml="s">
          Leave a feedback
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Box style={styles.iconContainer}>
          <ThermOnServiceIcon />
        </Box>
        <Text variant="heading3" ml="s">
          Terms of service
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <Box style={styles.iconContainer}>
          <PrivacyIcon />
        </Box>
        <Text variant="heading3" ml="s">
          Privacy policy
        </Text>
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

export default MenuMoreItems;
