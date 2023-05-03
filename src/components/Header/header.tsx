import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import DotIcon from '../../assets/icons/dot-icon';
import Text from '../Text/text';
import DownIcon from '../../assets/icons/up-icon';
import Box from '../Box/box';
import RingIcon from '../../assets/icons/ring-icon';

export default function UserHeader({ navigation, userData, handlePresentModal, selectedIcon }) {
    
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
        <Box>
          {
            userData.photoURL !== null ? 
            <Image
             style={{width: 34, height: 34, borderRadius: 25}}
             source={{uri: userData.photoURL}}
           />
             : <Box width={34} height={34} borderRadius={25} borderWidth={1}/>

          }
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
              userData.providerData?.[0]?.providerId === 'google.com'
                ? selectedIcon || require('../../assets/google-logo.png')
                : selectedIcon || require('../../assets/logo_fb.png') 
            }
          />
        </Box>
        <Text variant="heading2" ml="s">
          {userData.displayName}
        </Text>
        <DownIcon style={{top: 1, marginLeft: 5}} />
      </TouchableOpacity>
      <RingIcon />
    </Box>
  );
}