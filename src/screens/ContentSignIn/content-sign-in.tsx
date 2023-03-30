import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import ContentIcon from '../../assets/icons/content-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import DropDownMenu from '../../components/DropDownMenu/drop-down-menu';
import PostThemeDropDown from '../../components/DropDownMenu/post-theme-drop-down';
import Text from '../../components/Text/text';
import {Slider} from '@miblanchard/react-native-slider';

const ContentSignIn = () => {
  const navigation = useNavigation();
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
        <Box mt="m" mx="l">
          <Text ml="s" variant="heading3">
            Post Theme
          </Text>
          <PostThemeDropDown />
        </Box>
        <Box mt="xl" mx="m">
          <Text textAlign='center' variant='heading2'>Post amount slider</Text>
          <Slider
            containerStyle={{marginHorizontal: 20, marginTop: 10}}
            value={4}
            minimumValue={0}
            maximumValue={100}
            step={1}
            trackClickable={true}
            animateTransitions
            minimumTrackTintColor="#D9D9D9"
            maximumTrackTintColor='#D9D9D9'
            trackStyle={{height: 6}}
            thumbTintColor='#D9D9D9'
            thumbStyle={{width: 30, height: 30, borderRadius: 25}}
          />
        </Box>
      </Box>
      <Box
        position="absolute"
        width={'100%'}
        bottom={0}
        height={70}
        justifyContent="center">
        <Button
          onPress={() => {}}
          labelColor={'white'}
          mx="l"
          variant="primary"
          label="Generate"
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
    thumb: {
        color: 'red'
    }
})

export default ContentSignIn;
