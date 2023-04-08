import React from 'react';
import Box from '../../components/Box/box';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/back-icon';
import Text from '../../components/Text/text';
import {useNavigation} from '@react-navigation/native';
import Divider from '../../components/Divider/divider';
import {useAtom} from 'jotai';
import {userDataAtom} from '../../utils/atom';
import ThrashIcon from '../../assets/icons/thrash-icon';

const TeamManagement = () => {
  const navigation = useNavigation();
  const [userData] = useAtom(userDataAtom);
  return (
    <Box>
      <Box mx="m" mt="l" flexDirection="row" justifyContent="space-between">
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <BackIcon />
          <Text color="grey" fontSize={17} ml="s">
            Back
          </Text>
        </TouchableOpacity>
        <Text variant="generalHeading">Team Management</Text>
        <TouchableOpacity>
          <Text color="bg" variant="heading4">
            Edit
          </Text>
        </TouchableOpacity>
      </Box>
      <Divider />
      <Text variant="heading4" ml="large">
        You
      </Text>
      <Box style={styles.teamButton}>
        <Box ml="s">
          <Image
            style={{width: 40, height: 40, borderRadius: 25}}
            source={{uri: userData.photoURL}}
          />
        </Box>
        <Box
          ml="s"
          flexDirection="column"
          justifyContent="space-between"
          height={'90%'}>
          <Text fontWeight="600">{userData.displayName}</Text>
          <Text variant="heading5" color="grey">
            Admin
          </Text>
        </Box>
      </Box>
      <Text variant="heading4" mt="m" ml="large">
        Team Members
      </Text>
      <Box style={styles.teamButton}>
        <Box ml="s">
          <Image
            style={{width: 40, height: 40, borderRadius: 25}}
            source={{uri: userData.photoURL}}
          />
        </Box>
        <Box
          ml="s"
          flexDirection="column"
          justifyContent="space-between"
          height={'90%'}>
          <Text fontWeight="600">{userData.displayName}</Text>
          <Text variant="heading5" color="grey">
            Editor
          </Text>
        </Box>
        <Box position='absolute' right={10}>
            <ThrashIcon />
          </Box>
      </Box>
      <Box style={styles.teamButton}>
        <Box ml="s">
          <Image
            style={{width: 40, height: 40, borderRadius: 25}}
            source={{uri: userData.photoURL}}
          />
        </Box>
        <Box
          ml="s"
          flexDirection="column"
          justifyContent="space-between"
          height={'90%'}>
          <Text fontWeight="600">{userData.displayName}</Text>
          <Text marginRight='auto' variant="heading5" color="grey">
            Editor
          </Text>
        
        </Box>
        <Box position='absolute' right={10}>
            <ThrashIcon />
          </Box>
      </Box>
    <Box alignItems='center' mt='large'>
    <TouchableOpacity style={styles.addButton}>
        <Text color='bg' variant='heading2'>Add Member</Text>
    </TouchableOpacity>
    </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  teamButton: {
    marginTop: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D6E0EA',
    borderWidth: 1,
    borderRadius: 10,
    height: 48,
    marginHorizontal: 30,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#6944FF',
    width: 160,
    height: 50,
  }
});

export default TeamManagement;
