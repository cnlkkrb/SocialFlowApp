import React, {useRef, useState} from 'react';
import {Animated, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CheckedIcon from '../../assets/icons/checked-icon';
import UnCheckedIcon from '../../assets/icons/unchecked-icon';
import DownIcon from '../../assets/icons/up-icon';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import {DropDownData} from '../../data/DropDownData';

const DropDownMenu = () => {
    
  const aboutOrganizerAnim = useRef(new Animated.Value(0)).current;
  const [aboutOrganizerStatus, setAboutOrganizerStatus] = useState(false);
  const [mydata, setMyData] = React.useState(DropDownData);
  const [selectedItem, setSelectedItem] = React.useState([]);
  const [firstItem, setFirstItem] = useState(DropDownData[0].title);

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

  const aboutOrganizerAnimInterpolate = aboutOrganizerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 400],
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
  );
};

const styles = StyleSheet.create({
  arrow: {transform: [{rotate: '180deg'}]},
});

export default DropDownMenu;
