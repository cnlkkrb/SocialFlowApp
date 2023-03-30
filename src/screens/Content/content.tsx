import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import ContentIcon from '../../assets/icons/content-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import DropDownMenu from '../../components/DropDownMenu/drop-down-menu';
import Text from '../../components/Text/text';

const Content = () => {
  const navigation = useNavigation()
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
        <Box mt="m" mx="l">
          <Text ml="s" variant="heading3">
            Content Tone
          </Text>
          <DropDownMenu />
        </Box>
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
          mx="m"
          variant="primary"
          label="Continue"
        />
      </Box>
    </Box>
  );
};



export default Content;
