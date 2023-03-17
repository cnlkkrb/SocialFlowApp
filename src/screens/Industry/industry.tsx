import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import CheckedIcon from '../../assets/icons/checked-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';

const data = [
  {
    id: 1,
    name: 'Food & Beverages',
  },
  {
    id: 2,
    name: 'Beauty & Personal Care',
  },
  {
    id: 3,
    name: 'Health & Fitness',
  },
  {
    id: 4,
    name: 'Travel',
  },
  {
    id: 5,
    name: 'Retail & E-commerce',
  },
  {
    id: 6,
    name: 'Professional Services',
  },
  {
    id: 7,
    name: 'Art & Craft',
  },
];

const Industry = () => {
  const [mydata, setMyData] = React.useState(data);
  const navigation = useNavigation();

  const selectedItem = (item,index) => {
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
      }
    })
    setMyData(newArrData)
  }

  const renderItem = ({item,index}) => {
    return (
      <TouchableOpacity onPress={() => selectedItem(item,index)}>
        {
          item.isSelected ? (
            <Box
          mt="m"
          mx="m"
          backgroundColor="white"
          height={54}
          borderRadius={10}
          flexDirection="row"
          alignItems="center"
          borderWidth={2}
          borderColor="bg"
          >
          <Box
            ml="s"
            borderRadius={7}
            width={38}
            height={38}
            style={{backgroundColor: '#D9D9D9'}}
          />
          <Text marginRight='auto' color='bg' variant="heading4" fontWeight="700" ml="m">
            {item.name}
          </Text>
          <Box marginRight='m'>
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
          )
        }
      </TouchableOpacity>
    );
  };

  return (
    <Box backgroundColor="pageBackground" flex={1}>
      <Box mt="l" ml="m">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      </Box>
      <Box>
        <Box mt="m" justifyContent="center" alignItems="center">
          <Text variant="heading1">Select Your Industry</Text>
          <Text variant="heading3" textAlign="center" mt="m" color="textColor">
            {
              'Best personal Ai Assistant to boost your \n social media Social Flow is your new Ai \n Assistant to boost you business, '
            }
          </Text>
        </Box>
        <Box mt="m" mb="l">
          <FlatList
            data={mydata}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </Box>
      </Box>
      <Box
        position="absolute"
        width={'100%'}
        bottom={0}
        backgroundColor="white"
        height={70}
        justifyContent="center">
        <Button onPress={() => {}} mx="m" variant="primary" label="Continue" />
      </Box>
    </Box>
  );
};

export default Industry;
