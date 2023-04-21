import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import ContentIcon from '../../assets/icons/content-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';
import ContentItems from '../../components/ContentItems/content-items';
import ProgressStepsComponent from '../../components/ProgressSteps/progress-steps';

const Content = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
  <SafeAreaView style={{flex: 1}}>
    <Box backgroundColor="pageBackground" flex={1} height={'100%'}>
    <ScrollView >
    <Box mt="l" ml="m" flexDirection='row' alignItems='center'>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <BackIcon />
            <Text color="grey" fontSize={17} ml="s">
              Back
            </Text>
          </TouchableOpacity>
        <Box ml='l'>
          <ProgressStepsComponent currentStep={4} />
        </Box>
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
        <Box mt="l" mx="l" mb='large'>
          <ContentItems onSelect={item => setSelectedItem(item)} />
        </Box>
      </Box>
      </ScrollView>
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
    </SafeAreaView>
  );
};

export default Content;
