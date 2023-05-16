import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
  const [productNames, setProductNames] = useState<{ name: string, color: string }[]>([]);
  const [productInfo, setProductInfo] = useState('');

  const handleInputChange = (text: string) => {
    setProductName(text);
  };

  const handleInputSubmit = () => {
    setProductNames(prevProductNames => [
      ...prevProductNames,
      {name: productName, color: getRandomColor()},
    ]);
    setProductName('');
  };

  const getRandomColor = () => {
    const colors = [
      '#27AE60',
      '#F17C10',
      '#0491F8',
      '#EB5757',
      '#AB21FF',
      '#FF218C',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleDeleteItem = (index: number) => {
    setProductNames(prevProductNames => {
      const newProductNames = [...prevProductNames];
      newProductNames.splice(index, 1);
      return newProductNames;
    });
  };

  const handleSave = () => {
    const updatedBusinessInfo = {
      productName: productName,
      description: description,
    };
    fetch('http://192.168.1.10:9000/save-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBusinessInfo),
    })
      .then(response => {
        if (response.ok) {
          setProductInfo(updatedBusinessInfo)
        } else {
          console.error('Error saving data:', response.statusText);
        }
      })
      .then(() => {
        console.log('Data saved successfully:', updatedBusinessInfo);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  
  React.useEffect(() => {
    console.log('businessData', productInfo);
  }, [productInfo]);
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box backgroundColor="pageBackground" flex={1} height={'100%'}>
        <Box mt="l" ml="m" flexDirection="row" alignItems="center" mb="m">
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
                onChangeText={handleInputChange}
                onSubmitEditing={handleInputSubmit}
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
              <Box style={styles.boxContainer}>
                {productNames.map((product, index) => (
                  <TouchableOpacity
                    onPress={() => handleDeleteItem(index)}
                    key={index}
                    style={[styles.box, {backgroundColor: product.color}]}>
                    <Text style={styles.boxText}>{product.name}</Text>
                  </TouchableOpacity>
                ))}
              </Box>
            </Box>
            <Box mt="m" mx="l">
              <Text ml="s" variant="heading3">
                Short Description
              </Text>
              <TextInput
                value={description}
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
            onPress={() => {
              handleSave()
              navigation.navigate('Content')
            }}
            labelColor={'white'}
            mx="l"
            variant="primary"
            label="Continue"
            disabled={description === ''}
          />
        </FixedButton>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 24,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    color: 'black',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  box: {
    backgroundColor: '#D0C9D6',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 8
  },
});

export default ProductInfo;
