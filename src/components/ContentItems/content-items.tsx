import React, { useState } from 'react';
import Box from '../Box/box';
import Text from '../Text/text';
import FriendlyIcon from '../../assets/icons/friendly-icon';
import LuxuryIcon from '../../assets/icons/luxury-icon';
import BoldIcon from '../../assets/icons/bold-icon';
import ProfessionalIcon from '../../assets/icons/professional-icon';
import PersuasiveIcon from '../../assets/icons/persuasive-icon';
import EmphaticIcon from '../../assets/icons/emphatic-icon';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ContentItems = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handlePress = id => {
    setSelected(id);
    onSelect(id);
  };

  const getBackgroundColor = id => {
    return selected === id ? 'transparent' : 'white';
  };

  return (
    <Box mt="l">
    <Box width={'100%'} mb='m'>
  <TouchableOpacity onPress={() => handlePress(7)}>
    <LinearGradient
            colors={
              selected === 7 || selected === null
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
              color={selected === 7 || selected === null
                ? 'white' 
                : 'darkGrey'}
              variant="heading2">
              Auto (Ai choose the best)
            </Text>

      </LinearGradient>
      </TouchableOpacity>
      </Box>
      <Box style={{ flexDirection: 'row'}}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.5}
          onPress={() =>handlePress(1)}
          style={[styles.container, { backgroundColor: disabled ? 'lightgrey' : getBackgroundColor(1), 
          opacity: disabled ? 0.6 : 1 }]}>
          {selected === 1 && (
            <LinearGradient
              colors={['#6944FF', '#9644FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
            />
          )}
          <FriendlyIcon color={selected === 1 ? 'white' : '#6944FF'} />
          <Text
            color={selected === 1 ? 'white' : 'black'}
            mt="xs"
            variant="heading3">
            Friendly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.5}
          onPress={() =>handlePress(2)}
          style={[styles.container, { backgroundColor: disabled ? 'lightgrey' : getBackgroundColor(2), 
          opacity: disabled ? 0.6 : 1 }]}>
          {selected === 2 && (
            <LinearGradient
              colors={['#6944FF', '#9644FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
            />
          )}
          <LuxuryIcon color={selected === 2 ? 'white' : '#6944FF'} />
          <Text
            color={selected === 2 ? 'white' : 'black'}
            mt="xs"
            variant="heading3">
            Luxury
          </Text>
        </TouchableOpacity>
      </Box>
      <Box style={{ flexDirection: 'row'}}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.5}
          onPress={() =>handlePress(3)}
          style={[styles.container, { backgroundColor: disabled ? 'lightgrey' : getBackgroundColor(3), 
          opacity: disabled ? 0.6 : 1 }]}>
          {selected === 3 && (
            <LinearGradient
              colors={['#6944FF', '#9644FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
            />
          )}
          <BoldIcon color={selected === 3 ? 'white' : '#6944FF'} />
          <Text
            color={selected === 3 ? 'white' : 'black'}
            mt="xs"
            variant="heading3">
            Bold
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.5}
          onPress={() =>handlePress(4)}
          style={[styles.container, { backgroundColor: disabled ? 'lightgrey' : getBackgroundColor(4), 
          opacity: disabled ? 0.6 : 1 }]}>
          {selected === 4 && (
            <LinearGradient
              colors={['#6944FF', '#9644FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
            />
          )}
          <ProfessionalIcon color={selected === 4 ? 'white' : '#6944FF'} />
          <Text
            color={selected === 4 ? 'white' : 'black'}
            mt="xs"
            variant="heading3">
            Professional
          </Text>
        </TouchableOpacity>
      </Box>
      <Box style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.5}
          onPress={() =>handlePress(5)}
          style={[styles.container, { backgroundColor: disabled ? 'lightgrey' : getBackgroundColor(5), 
          opacity: disabled ? 0.6 : 1 }]}>
          {selected === 5 && (
            <LinearGradient
              colors={['#6944FF', '#9644FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
            />
          )}
          <PersuasiveIcon color={selected === 5 ? 'white' : '#6944FF'} />
          <Text
            color={selected === 5 ? 'white' : 'black'}
            mt="xs"
            variant="heading3">
            Persuasive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.5}
          onPress={() =>handlePress(6)}
          style={[styles.container, { backgroundColor: disabled ? 'lightgrey' : getBackgroundColor(6), 
          opacity: disabled ? 0.6 : 1 }]}>
          {selected === 6 && (
            <LinearGradient
              colors={['#6944FF', '#9644FF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
            />
          )}
          <EmphaticIcon color={selected === 6 ? 'white' : '#6944FF'} />
          <Text
            color={selected === 6 ? 'white' : 'black'}
            mt="xs"
            variant="heading3">
            Emphatic
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D6E0EA',
    borderRadius: 10,
    width: '100%',
    flex: 1,
    margin: 4,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
});

export default ContentItems;
