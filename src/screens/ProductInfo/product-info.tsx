import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BackIcon from '../../assets/icons/back-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import FixedButton from '../../components/FixedButton/fixed-button';
import Text from '../../components/Text/text';

const ProductInfo = () => {
  const navigation = useNavigation();

  return (
    <Box backgroundColor="pageBackground" flex={1} height={'100%'}>
      <Box mt="l" ml="m">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      </Box>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <Box>
          <Box mt="m" justifyContent="center" alignItems="center">
            <Text variant="heading1">Product/Service</Text>
            <Text
              variant="heading3"
              textAlign="center"
              mt="m"
              color="textColor">
              {
                'Give us a short information about your \n product or service to generate more \n accurate content. '
              }
            </Text>
          </Box>
          <Box mt="m" mx="l">
            <Text ml="s" variant="heading3">
              Product/Service name
            </Text>
            <TextInput
              style={{
                width: '100%',
                height: 48,
                borderColor: '#D0C9D6',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                backgroundColor: 'white',
                marginTop: 10,
                color: 'black',
              }}
              placeholder="Name"
              placeholderTextColor={'#D0C9D6'}
            />
          </Box>
          <Box mt="m" mx="l">
            <Text ml="s" variant="heading3">
              Short Description
            </Text>
            <TextInput
              style={{
                width: '100%',
                height: 260,
                borderColor: '#D0C9D6',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                backgroundColor: 'white',
                marginTop: 10,
                textAlignVertical: 'top',
                color: 'black',
              }}
              placeholder="Description"
              placeholderTextColor={'#D0C9D6'}
              multiline={true}
              numberOfLines={5}
            />
          </Box>
        </Box>
      </KeyboardAwareScrollView>
      <FixedButton>
        <Button onPress={() => navigation.navigate('Content')} labelColor={'white'} mx="m" variant="primary" label="Continue" />
      </FixedButton>
    </Box>
  );
};

export default ProductInfo;
