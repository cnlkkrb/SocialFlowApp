import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import ContentIcon from '../../assets/icons/content-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';
import {Slider} from '@miblanchard/react-native-slider';
import LinearGradient from 'react-native-linear-gradient';
import ContentItems from '../../components/ContentItems/content-items';

const ContentSignIn = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSlidingComplete = val => {
    setValue(val);
  };

  const renderThumb = () => {
    return (
      <Box style={styles.thumb}>
        <LinearGradient
          colors={['#6944FF', '#9644FF']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            borderRadius: 10,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: -60,
          }}>
          <Text style={styles.value}>{value}</Text>
          <Box style={styles.arrow} />
        </LinearGradient>
      </Box>
    );
  };

  return (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView
      style={{
        flex: 1,
      }}>
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
        <Box mx="l" mt="m">
        <TouchableOpacity onPress={() => {
          if(selectedItem === null) {
            return
          }
          setSelectedItem(null)
        }}>
          </TouchableOpacity>
          <Box mb="m">
            <ContentItems onSelect={item => setSelectedItem(item)} />
          </Box>
          <Text ml="m" mb="l" variant="heading2">
            How many posts
          </Text>
          <Box
            borderWidth={1}
            borderRadius={10}
            borderColor="lightGrey"
            mt="l"
            paddingHorizontal="s"
            paddingVertical="xs"
            justifyContent="center">
            <Slider
              minimumValue={0}
              maximumValue={20}
              step={1}
              value={value}
              onValueChange={val => setValue(val)}
              onSlidingComplete={val => handleSlidingComplete(val)}
              minimumTrackTintColor="#6944FF"
              maximumTrackTintColor="#D8CEFF"
              trackStyle={{height: 6}}
              thumbTintColor="white"
              thumbStyle={styles.thumb}
              renderThumbComponent={renderThumb}
            />
          </Box>
          <Text mt='xs' textAlign='center' variant='heading5' style={{marginBottom: 80}} color="grey">
            Remaining Post amount: <Text fontWeight='bold' variant='heading5' color="grey">160</Text>
          </Text>
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
          label="Continue"
        />
      </Box>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
  },
  value: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  arrow: {
    borderTopWidth: 10,
    borderTopColor: '#9644FF',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    width: 0,
    height: 0,
    zIndex: -1,
    position: 'absolute',
    bottom: -7,
  },
});

export default ContentSignIn;
