import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Box from '../Box/box';
import DownIcon from '../../assets/icons/up-icon';
import Text from '../Text/text';
import {useAtom} from 'jotai';
import {businessDataAtom} from '../../utils/atom';
import RingIcon from '../../assets/icons/ring-icon';
import DotIcon from '../../assets/icons/dot-icon';
import {useNavigation} from '@react-navigation/native';

const SocialHeader = ({
  handlePresentModal,
  userData = {},
  myData,
  SocailData,
}: any) => {
  
  const [businessData] = useAtom(businessDataAtom);
  const navigation = useNavigation();

  const selectedIconIndex = myData.findIndex(
    (d: {isSelected: any}) => d.isSelected,
  );
  const selectedIcon =
    selectedIconIndex > -1 && SocailData[selectedIconIndex].image;

  return (
    <Box
      m="m"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <DotIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePresentModal}
        style={{alignItems: 'center', flexDirection: 'row'}}>
        <Box ml='l'>
          <Image
            style={{width: 34, height: 34, borderRadius: 25}}
            source={{uri: userData.photoURL}}
          />
          <Image
            style={{
              position: 'absolute',
              top: 18,
              bottom: 0,
              left: 16,
              width: 24,
              height: 24,
            }}
            source={
              userData.providerId  === 'google.com'
                ? selectedIcon || require('../../assets/google-logo.png')
                : selectedIcon || require('../../assets/logo_fb.png')
            }
          />
        </Box>
        <Text variant="heading2" ml="s">
          {businessData.business}
        </Text>
        <DownIcon style={{top: 1, marginLeft: 5}} />
      </TouchableOpacity>
    <Box flexDirection='row'>
    <Image
          style={{width: 25, height: 25,right: 10}} 
          source={require('../../assets/premium.png')}
        />
        <RingIcon />
    </Box>
    </Box>
  );
};

export default SocialHeader;
