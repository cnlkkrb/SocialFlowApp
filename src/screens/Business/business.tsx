import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BusinessIcon from '../../assets/icons/business-icon';

const Business = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  return (
    <Box backgroundColor="pageBackground" flex={1} height={'100%'}>
      <Box mt="l" ml="m">
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <BackIcon />
          <Text color="grey" fontSize={17} ml="s">
            Back
          </Text>
        </TouchableOpacity>
      </Box>
      <KeyboardAwareScrollView>
        <Box>
          <Box mt="m" justifyContent="center" alignItems="center">
            <Box flexDirection="row" alignItems="center">
              <BusinessIcon />
              <Text ml="s" variant="heading1">
                Business Details
              </Text>
            </Box>
            <Text
              variant="heading3"
              textAlign="center"
              mt="m"
              color="textColor">
              {
                'Best personal Ai Assistant to boost your \n social media Social Flow is your new Ai \n Assistant to boost you business, '
              }
            </Text>
          </Box>

          <Box mt="m" mx="l">
            <Text ml="s" variant="heading3">
              Business name
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
              placeholder="Business"
              placeholderTextColor={'#D0C9D6'}
            />
          </Box>
          <Box mt="m" mx="l">
            <Text ml="s" variant="heading3">
              Location
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
              placeholder="State, Country"
              placeholderTextColor={'#D0C9D6'}
            />
          </Box>
          <Box mt="m" mx="l">
            <Text ml="s" variant="heading3">
              Foundation Year
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
              placeholder="Since 1984"
              placeholderTextColor={'#D0C9D6'}
            />
          </Box>
          <Box mt="m" mx="l">
            <Text ml="s" variant="heading3">
              Competitors (*)
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
              placeholder="Competitors"
              placeholderTextColor={'#D0C9D6'}
            />
          </Box>
        </Box>
        <Box ml="l" mt="m" flexDirection="row">
          {
            visible && (
              <TouchableOpacity onPress={removeElement}>
              <Box
                borderRadius={10}
                width={90}
                height={30}
                justifyContent="center"
                alignItems="center"
                style={{backgroundColor: '#27AE60'}}>
                <Text color="white">Placeholder</Text>
              </Box>
              </TouchableOpacity>
            )
          }
          <Box
            ml="xs"
            borderRadius={10}
            width={90}
            height={30}
            justifyContent="center"
            alignItems="center"
            style={{backgroundColor: '#0491F8'}}>
            <Text color="white">Placeholder</Text>
          </Box>
          <Box
            ml="xs"
            borderRadius={10}
            width={90}
            height={30}
            justifyContent="center"
            alignItems="center"
            style={{backgroundColor: '#F17C10'}}>
            <Text color="white">Placeholder</Text>
          </Box>
        </Box>
      </KeyboardAwareScrollView>
      <Box
        position="relative"
        width={'100%'}
        bottom={0}
        height={70}
        justifyContent="center">
        <Button
          onPress={() => navigation.navigate('ProductInfo')}
          mx="m"
          labelColor={'white'}
          variant="primary"
          label="Continue"
        />
      </Box>
    </Box>
  );
};

export default Business;
