import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import CheckedIcon from '../../assets/icons/checked-icon';
import IndustryIcon from '../../assets/icons/industry-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';
import ProgressStepsComponent from '../../components/ProgressSteps/progress-steps';
import axios from 'axios';

const Industry = ({route}) => {
  const [industryData, setIndustryData] = useState<{ text: string; isSelected: boolean; }[]>([]);
  const [selectedData, setSelectedData] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://192.168.1.10:9000/api/data').then(res => {
      setIndustryData(
        res.data[0].name.map((text: string) => ({text, isSelected: false})),
      );
    });
  }, []);

  const selectedItem = (item: {text: string}) => {
    const newArrData = industryData.map((e: any) => {
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
    setSelectedData(item);
  };

  const saveData = () => {
    if (selectedData) {
      const selectedItem = industryData.find(
        item => item.text === selectedData.text,
      );
      if (selectedItem) {
        axios
          .post('http://192.168.1.10:9000/api/saveData', {data: selectedItem})
          .then(res => {
            console.log('Response data:', res.data);
            setSelectedData(null);
            const newItem = {text: selectedData.text, isSelected: false};
            setIndustryData(prevData => [...prevData, newItem]);
            console.log('Saved item:', selectedItem);
          })
          .catch(err => {
            console.error('Failed to save data:', err);
          });
      } else {
        console.error('Selected item not found.');
      }
    } else {
      console.error('selectedData is null or undefined.');
    }
  };

  const renderItem = ({item, index}: any) => {
    return (
      <Box flex={1}>
        <TouchableOpacity onPress={() => selectedItem(item, index)}>
          {item.isSelected ? (
            <Box
              key={`${item.text}-selected`}
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
              <Box key={`${item.text}-icon`} marginRight="m">
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
              <Text key={`${item.text}-unselected`} variant="heading4" ml="m">
                {item.text}
              </Text>
            </Box>
          )}
        </TouchableOpacity>
      </Box>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box backgroundColor="pageBackground" flex={1}>
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
            <ProgressStepsComponent currentStep={1} />
          </Box>
        </Box>
        <ScrollView>
          <Box mt="m" justifyContent="center" alignItems="center">
            <Box flexDirection="row" alignItems="center">
              <IndustryIcon />
              <Text ml="s" variant="heading1">
                Select Your Industry
              </Text>
            </Box>
            <Text
              variant="heading3"
              textAlign="center"
              mt="m"
              color="textColor">
              {
                'Best personal Ai Assistant to boost your \n social media Social Flow is your new Ai \n Assistant to boost you business,'
              }
            </Text>
          </Box>
          <FlatList
            data={industryData}
            keyExtractor={(item) => item.id}
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
            onPress={() => {
              saveData();
              navigation.navigate('Business');
            }}
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
