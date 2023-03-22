import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Animated, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import CheckedIcon from '../../assets/icons/checked-icon';
import ContentIcon from '../../assets/icons/content-icon';
import UnCheckedIcon from '../../assets/icons/unchecked-icon';
import DownIcon from '../../assets/icons/up-icon';
import Box from '../../components/Box/box';
import Button from '../../components/Button/button';
import Text from '../../components/Text/text';

const data = [
  {
    id: 1,
    title: 'Auto (Ai choose the best)',
  },
  {
    id: 2,
    title: 'Luxury',
  },
  {
    id: 3,
    title: 'Bold',
  },
  {
    id: 4,
    title: 'Professional',
  },
  {
    id: 5,
    title: 'Adventurous',
  },
  {
    id: 6,
    title: 'Friendly',
  },
];

const Content = () => {
  const navigation = useNavigation();
  const aboutOrganizerAnim = useRef(new Animated.Value(0)).current;
  const aboutOrganizerAnim2 = useRef(new Animated.Value(0)).current;
  const [aboutOrganizerStatus, setAboutOrganizerStatus] = useState(false);
  const [aboutOrganizerStatus2, setAboutOrganizerStatus2] = useState(false);
  const [mydata, setMyData] = React.useState(data);
  const [selectedItem, setSelectedItem] = React.useState([]);
  const [firstItem, setFirstItem] = useState(data[0].title);


  const onPressAboutOrgaizer = () => {
    if (aboutOrganizerStatus) {
      setAboutOrganizerStatus(false);
      Animated.timing(aboutOrganizerAnim, {
        duration: 300,
        toValue: 0,
        useNativeDriver: false,
      }).start(() => {});
    } else {
      Animated.timing(aboutOrganizerAnim, {
        duration: 300,
        toValue: 1,
        useNativeDriver: false,
      }).start(() => {
        setAboutOrganizerStatus(true);
      });
    }
  };

  const onPressAboutOrgaizer2 = () => {
    if (aboutOrganizerStatus2) {
      setAboutOrganizerStatus2(false);
      Animated.timing(aboutOrganizerAnim2, {
        duration: 300,
        toValue: 0,
        useNativeDriver: false,
      }).start(() => {});
    } else {
      Animated.timing(aboutOrganizerAnim2, {
        duration: 300,
        toValue: 1,
        useNativeDriver: false,
      }).start(() => {
        setAboutOrganizerStatus2(true);
      });
    }
  };

  const aboutOrganizerAnimInterpolate = aboutOrganizerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 225],
  });
  const aboutOrganizerAnimInterpolate2 = aboutOrganizerAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 225],
  });

  const renderItem = ({item}) => {
    const {id, title} = item;
    const isSelected = selectedItem.filter(i => i === id).length > 0;
    return (
      <TouchableOpacity
        onPress={() => {
          if (isSelected) {
            setSelectedItem(prev => prev.filter(i => i !== id));
          } else {
            setSelectedItem(prev => [...prev, id]);
          }
        }}>
        {isSelected ? (
          <Box flexDirection="row" justifyContent="space-between" mx="m" mt="m">
            <Text color="bg50" fontWeight="700" variant="heading4">
              {title}
            </Text>
            <CheckedIcon />
          </Box>
        ) : (
          <Box flexDirection="row" justifyContent="space-between" mx="m" mt="m">
            <Text variant="heading4">{title}</Text>
            <UnCheckedIcon />
          </Box>
        )}
      </TouchableOpacity>
    );
  };

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
          <Box mt="s">
            <Animated.View
              style={{
                height: aboutOrganizerAnimInterpolate,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#D6E0EA',
                borderRadius: 8,
                overflow: 'hidden',
              }}>
              <TouchableOpacity
                onPress={onPressAboutOrgaizer}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  height: 50,
                }}>
                <Text color="lightGrey">{firstItem}</Text>
                <DownIcon style={aboutOrganizerStatus ? styles.arrow : null} />
              </TouchableOpacity>
              <Box>
                <FlatList
                  data={mydata}
                  renderItem={renderItem}
                  ListFooterComponent={() => <Box height={60} />}
                />
              </Box>
            </Animated.View>
          </Box>
        </Box>
        <Box mt="m" mx="l">
          <Text ml="s" variant="heading3">
            Post Theme
          </Text>
          <Box mt="s">
            <Animated.View
              style={{
                height: aboutOrganizerAnimInterpolate2,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#D6E0EA',
                borderRadius: 8,
                overflow: 'hidden',
              }}>
              <TouchableOpacity
                onPress={onPressAboutOrgaizer2}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  height: 50,
                }}>
                <Text color="lightGrey">Perfect Mix</Text>
                <DownIcon style={aboutOrganizerStatus2 ? styles.arrow : null} />
              </TouchableOpacity>
              <Box>
                <FlatList
                  data={mydata}
                  renderItem={renderItem}
                  ListFooterComponent={() => <Box height={60} />}
                />
              </Box>
            </Animated.View>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        width={'100%'}
        bottom={0}
        height={70}
        justifyContent="center">
        <Button
          disabled={selectedItem.length === 0}
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

const styles = StyleSheet.create({
  arrow: {transform: [{rotate: '180deg'}]},
});

export default Content;
