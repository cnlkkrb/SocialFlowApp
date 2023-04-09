import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import Box from '../../components/Box/box';
import Text from '../../components/Text/text';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {BestSeller, ProBusiness, StarterPack} from '../../data/Packs';
import LinearGradient from 'react-native-linear-gradient';

const AccountSettings = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePressItem = item => {
    setSelectedItem(item);
  };

  const renderBackground = item => {
    if (item === selectedItem) {
      return (
        <LinearGradient
          colors={['#FF42E1', '#B03EFF']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            borderRadius: 9,
          }}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <Box mt="m" mb="m" alignItems="center">
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          left: 20,
        }}
        onPress={() => navigation.goBack()}>
        <BackIcon />
        <Text color="grey" fontSize={17} ml="s">
          Back
        </Text>
      </TouchableOpacity>
      <Text textAlign="center" variant="heading2" ml="s">
        Account Settings
      </Text>
      <Text variant="heading3" textAlign="center" mt="m">
        Upgrade your subscription
      </Text>
      <Box flexDirection="row" mt="m">
        <FlatList
          data={StarterPack}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <Box>
                <Text textAlign="center" variant="heading3" fontWeight={item === selectedItem ? '700' : '600'}>
                  Starter Pack
                </Text>
                <TouchableOpacity
                  style={styles.selectItem}
                  onPress={() => handlePressItem(item)}>
                  {renderBackground(item)}
                  <Text
                    color={item === selectedItem ? 'white' : 'grey'}
                    ml="xs"
                    mt="s">
                    {item.title}
                  </Text>
                  <Text
                    color={item === selectedItem ? 'white' : 'grey'}
                    ml="xs">
                    {item.subtitle}
                  </Text>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item1}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item2}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item3}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item4}
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            );
          }}
        />
        <FlatList
          data={BestSeller}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <Box>
                <Text textAlign="center" variant="heading3" fontWeight={item === selectedItem ? '700' : '600'}>
                  Best Seller
                </Text>
                <TouchableOpacity
                  style={styles.selectItem}
                  onPress={() => handlePressItem(item)}>
                  {renderBackground(item)}
                  <Text
                    color={item === selectedItem ? 'white' : 'grey'}
                    ml="xs"
                    mt="s">
                    {item.title}
                  </Text>
                  <Text
                    color={item === selectedItem ? 'white' : 'grey'}
                    ml="xs">
                    {item.subtitle}
                  </Text>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item1}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item2}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item3}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item4}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item5}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item6}
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            );
          }}
        />
        <FlatList
          data={ProBusiness}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <Box>
                <Text textAlign="center" variant="heading3" fontWeight={item === selectedItem ? '700' : '600'}>
                  Pro Business
                </Text>
                <TouchableOpacity
                  style={styles.selectItem}
                  onPress={() => handlePressItem(item)}>
                  {renderBackground(item)}
                  <Text
                    color={item === selectedItem ? 'white' : 'grey'}
                    ml="xs"
                    mt="s">
                    {item.title}
                  </Text>
                  <Text
                    color={item === selectedItem ? 'white' : 'grey'}
                    ml="xs">
                    {item.subtitle}
                  </Text>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item1}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item2}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item3}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item4}
                    </Text>
                  </Box>
                  <Box flexDirection="row" alignItems="center">
                    <Box
                      ml="xs"
                      width={4}
                      height={4}
                      borderRadius={25}
                      backgroundColor={item === selectedItem ? 'white' : 'grey'}
                    />
                    <Text
                      variant="heading5"
                      color={item === selectedItem ? 'white' : 'grey'}
                      ml="xs">
                      {item.item5}
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  selectItem: {
    borderWidth: 1,
    borderColor: '#D6E0EA',
    borderRadius: 10,
    height: 170,
    width: 120,
  },
});
