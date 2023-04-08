import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import ContentIcon from '../../assets/icons/content-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';
import ContentItems from '../../components/ContentItems/content-items';
import LinearGradient from 'react-native-linear-gradient';

const Content = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

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
      <Box>
        <Box mt="m" justifyContent="center" alignItems="center">
          <Box flexDirection="row" alignItems="center">
            <ContentIcon />
            <Text ml="s" variant="heading1">
              Content Tone & Theme
            </Text>
          </Box>
          <Text variant="heading3" textAlign="center" mt="m" color="textColor">
            {
              'Ai will generate optimum tone&theme \n regarding your industry metrics and \n competitors.'
            }
          </Text>
        </Box>
        <Box mt="l" mx="l">
          <TouchableOpacity>
            <LinearGradient
              colors={
                selectedItem === null
                  ? ['#6944FF', '#9644FF']
                  : ['white', 'white']
              }
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={{
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                color={selectedItem === null ? 'white' : 'darkGrey'}
                variant="heading2">
                Auto (Ai choose the best)
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Box>
        <ContentItems onSelect={item => setSelectedItem(item)} />
      </Box>
      <Box
        position="absolute"
        width={'100%'}
        bottom={0}
        height={70}
        justifyContent="center">
        <Button
          onPress={() => navigation.navigate('ContentGeneration')}
          labelColor={'white'}
          mx="l"
          variant="primary"
          label="Continue"
        />
      </Box>
    </Box>
  );
};

export default Content;
