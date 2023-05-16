import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import CheckedIcon from '../../assets/icons/checked-icon';
import IndustryIcon from '../../assets/icons/industry-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';
import ProgressStepsComponent from '../../components/ProgressSteps/progress-steps';
import axios from 'axios'

const Industry = ({route}) => {
  const [industryData, setIndustryData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://192.168.1.10:9000/api/data')
      .then(res => {
        setIndustryData(res.data[0].name.map(text => ({text, isSelected: false})))
      })
  }, []);
  
  const selectedItem = (item, index) => {
    const newArrData = industryData.map((e, index) => {
      if (e.text === item.text) {
        return {
          text: e.text,
          isSelected: true,
        };
      }
      return {
        text: e.text,
        isSelected: false,
      };
    });
    setIndustryData(newArrData);
  };

  const renderItem = ({item, index}) => {
    return (
      <Box flex={1}>
        <TouchableOpacity onPress={() => selectedItem(item, index)}>
          {item.isSelected ? (
            <Box
              mt="m"
              mx="m"
              backgroundColor="white"
              height={54}
              borderRadius={10}
              flexDirection="row"
              alignItems="center"
              borderWidth={2}
              borderColor="bg">
              <Box
                ml="s"
                borderRadius={7}
                width={38}
                height={38}
                style={{backgroundColor: '#D9D9D9'}}
              />
              <Text
                marginRight="auto"
                color="bg"
                variant="heading4"
                fontWeight="700"
                ml="m">
                {item.text}
              </Text>
              <Box marginRight="m">
                <CheckedIcon />
              </Box>
            </Box>
          ) : (
            <Box
              mt="m"
              mx="m"
              backgroundColor="white"
              height={54}
              borderRadius={10}
              flexDirection="row"
              alignItems="center">
              <Box
                ml="s"
                borderRadius={7}
                width={38}
                height={38}
                style={{backgroundColor: '#D9D9D9'}}
              />
              <Text variant="heading4" ml="m">
                {item.text}
              </Text>
            </Box>
          )}
        </TouchableOpacity>
      </Box>
    );
  };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F8FC'}}>
      <Box flex={1}>
        <Box mt="l" ml="m" flexDirection='row' alignItems='center' mb='m'>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <BackIcon />
            <Text color="grey" fontSize={17} ml="s">
              Back
            </Text>
          </TouchableOpacity>
        {
          route.params && route.params.from === 'industry'
          ? null
          :<Box ml='l'>
            <ProgressStepsComponent currentStep={1} />
          </Box>
        }
        </Box>
        <ScrollView>
        <Box mt="m" justifyContent="center" alignItems="center">
          <Box flexDirection="row" alignItems="center">
            <IndustryIcon />
            <Text ml="s" variant="heading1">
              Select Your Industry
            </Text>
          </Box>
          <Text variant="heading3" textAlign="center" mt="m" color="textColor">
            {
              'Best personal Ai Assistant to boost your \n social media Social Flow is your new Ai \n Assistant to boost you business,'
            }
          </Text>
        </Box>
        <FlatList
          data={industryData}
          keyExtractor={item => item.text}
          renderItem={renderItem}
          ListFooterComponent={() => <Box height={80} />}
        />
        </ScrollView>
        <Box
          position="absolute"
          width={'100%'}
          bottom={0}
          backgroundColor="white"
          height={70}
          justifyContent="center">
          <Button
            onPress={() => route.params && route.params.from === 'business'
            ? navigation.goBack()
            : navigation.navigate('Business')}
            labelColor={'white'}
            mx="m"
            variant="primary"
            label={route.params && route.params.from === 'industry' ? 'Save' : 'Continue'}
            disabled={industryData.filter(item => item.isSelected).length === 0}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Industry;
