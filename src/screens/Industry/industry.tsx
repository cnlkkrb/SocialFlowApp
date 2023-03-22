import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import CheckedIcon from '../../assets/icons/checked-icon';
import IndustryIcon from '../../assets/icons/industry-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';

const data = [
  {
    id: 1,
    name: 'General (for any business)',
  },
  {
    id: 2,
    name: 'Food & Beverages',
  },
  {
    id: 3,
    name: 'Beauty & Personal Care',
  },
  {
    id: 4,
    name: 'Health & Fitness',
  },
  {
    id: 5,
    name: 'Travel & Hospitality',
  },
  {
    id: 6,
    name: 'Retail & E-commerce',
  },
  {
    id: 7,
    name: 'Local Services',
  },
  {
    id: 8,
    name: 'Arts & Recreation',
  },
  {
    id: 9,
    name: 'Real Estate',
  },
  {
    id: 10,
    name: 'Media & Communication',
  },
  {
    id: 11,
    name: 'Education',
  },
  {
    id: 12,
    name: 'Government & NonProfit',
  },
  {
    id: 13,
    name: 'Professional Services',
  },
];

const Industry = () => {
  const [mydata, setMyData] = React.useState(data);
  const navigation = useNavigation();

  const selectedItem = (item, index) => {
    const newArrData = data.map((e, index) => {
      if (e.id === item.id) {
        return {
          ...e,
          isSelected: true,
        };
      }
      return {
        ...e,
        isSelected: false,
      };
    });
    setMyData(newArrData);
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
              {item.name}
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
              {item.name}
            </Text>
          </Box>
        )}
      </TouchableOpacity>
      </Box>
    );
  };

  return (
    <Box backgroundColor="pageBackground" flex={1}>
      <Box mt="l" ml="m">
        <TouchableOpacity style={{flexDirection:'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
          <BackIcon />
          <Text color='grey' fontSize={17} ml='s'>Back</Text>
        </TouchableOpacity>
      </Box>
        <Box mt="m" justifyContent="center" alignItems="center">
        <Box flexDirection='row' alignItems='center'>
          <IndustryIcon />
          <Text ml='s' variant="heading1">Select Your Industry</Text>
        </Box>
          <Text variant="heading3" textAlign="center" mt="m" color="textColor">
            {
              'Best personal Ai Assistant to boost your \n social media Social Flow is your new Ai \n Assistant to boost you business,'
            }
          </Text>
        </Box>
          <FlatList
            data={mydata}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            ListFooterComponent={() => <Box height={80} />}
          />
      <Box
        position="absolute"
        width={'100%'}
        bottom={0}
        backgroundColor="white"
        height={70}
        justifyContent="center">
        <Button
          onPress={() => navigation.navigate('Business')}
          labelColor={'white'}
          mx="m"
          variant="primary"
          label="Continue"
        />
      </Box>
    </Box>
  );
};

export default Industry;
