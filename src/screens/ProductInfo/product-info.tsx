import {useNavigation} from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BackIcon from '../../assets/icons/back-icon';
import ProductIcon from '../../assets/icons/product-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import FixedButton from '../../components/FixedButton/fixed-button';
import Text from '../../components/Text/text';
import ProgressStepsComponent from '../../components/ProgressSteps/progress-steps';

const ProductInfo = () => {
  const navigation = useNavigation();
  const [productName, setProductName] = useState('');
  const [description, setdescription] = useState('');
  const productRef = useRef(null);
  const descriptionRef = useRef(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box backgroundColor="pageBackground" flex={1} height={'100%'}>
        <Box mt="l" ml="m" flexDirection="row" alignItems="center">
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <BackIcon />
            <Text color="grey" fontSize={17} ml="s">
              Back
            </Text>
          </TouchableOpacity>
          <Box ml="l">
            <ProgressStepsComponent currentStep={3} />
          </Box>
        </Box>
        <KeyboardAwareScrollView style={{flex: 1}}>
          <Box>
            <Box mt="m" justifyContent="center" alignItems="center">
              <Box flexDirection="row" alignItems="center">
                <ProductIcon />
                <Text ml="s" variant="heading1">
                  Product/Service
                </Text>
              </Box>
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
                value={productName}
                ref={productRef}
                onChangeText={text => setProductName(text)}
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
                onSubmitEditing={() => {
                  descriptionRef.current.focus();
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
                value={description}
                ref={descriptionRef}
                onChangeText={text => setdescription(text)}
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
          <Button
            onPress={() => navigation.navigate('Content')}
            labelColor={'white'}
            mx="m"
            variant="primary"
            label="Continue"
            disabled={productName === '' || description === ''}
          />
        </FixedButton>
      </Box>
    </SafeAreaView>
  );
};

export default ProductInfo;
