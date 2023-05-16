import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BusinessIcon from '../../assets/icons/business-icon';
import ProgressStepsComponent from '../../components/ProgressSteps/progress-steps';
import { businessDataAtom } from '../../utils/atom';
import { useAtom } from 'jotai';

const Business = () => {
  const navigation = useNavigation();
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [businessData, setBusinessInfo] = useAtom(businessDataAtom)

  const [productNames, setProductNames] = useState<{ name: string, color: string }[]>([]);

  const handleInputChange = (text: string) => {
    setCompetitors(text);
  };

  const handleInputSubmit = () => {
    setProductNames(prevProductNames => [
      ...prevProductNames,
      {name: competitors, color: getRandomColor()},
    ]);
    setCompetitors('');
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
  
  const handleSaveBusiness = () => {
    const updatedBusinessInfo = {
      business: business,
      location: location,
      year: year,
      competitors: competitors,
    };
  
    fetch('http://192.168.1.10:9000/save-business', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBusinessInfo),
    })
      .then(response => {
        if (response.ok) {
          setBusinessInfo(updatedBusinessInfo);
          console.log('Data saved successfully!');
        } else {
          console.error('Error saving data:', response.statusText);
        }
      })
      .catch(error => console.error('Error saving data:', error));
  };
  
  React.useEffect(() => {
    console.log('businessData', businessData);
  }, [businessData]);

  const locationRef = React.useRef(null);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box backgroundColor="pageBackground" flex={1} height={'100%'}>
        <Box mt="l" ml="m" flexDirection="row" alignItems="center" mb='m'>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <BackIcon />
            <Text color="grey" fontSize={17} ml="s">
              Back
            </Text>
          </TouchableOpacity>
          <Box ml="l">
            <ProgressStepsComponent currentStep={2} />
          </Box>
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
                value={business}
                onChangeText={text => setBusiness(text)}
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
                  locationRef.current.focus();
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
                value={location}
                ref={locationRef}
                onChangeText={text => setLocation(text)}
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
                value={year}
                keyboardType="numeric"
                onChangeText={text => setYear(text)}
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
                value={competitors}
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
                placeholder="Competitors"
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
          </Box>
        </KeyboardAwareScrollView>
        <Box
          position="relative"
          width={'100%'}
          bottom={0}
          height={70}
          justifyContent="center">
          <Button
            onPress={() => {
              handleSaveBusiness();
              navigation.navigate('ProductInfo');
            }}
            mx="m"
            labelColor={'white'}
            variant="primary"
            label="Continue"
            disabled={
              business.length === 0 ||
              location.length === 0 ||
              year.length === 0
            }
          />
        </Box>
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

export default Business;
