import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import {Modal} from 'react-native';
import CloseIcon from '../../assets/icons/close-icon';
import Box from '../Box/box';
import Button from '../Button/button';
import Text from '../Text/text';

interface SeatModalProps {
  title?: string;
  text?: string;
  visible: boolean;
  onClose?: () => void;
  buttonLabel?: string;
  secondText?: string;
  description?: string;
  onCloseSecondary?: () => void;
  onPress?: () => void;
}

const NotificationModal = ({
  visible = false,
  text,
  buttonLabel,
  secondText,
  description,
  onCloseSecondary,
  onPress,
}: SeatModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.backdrop}>
        <View
          style={{
            borderRadius: 15,
            margin: 15,
            padding: 15,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 20,
                marginTop: 12,
                fontWeight: '700',
              }}>
              {text}
            </Text>
          </View>
          <View style={{width:'90%',marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Box width={'100%'}>
            <Button
              onPress={onPress}
              label={buttonLabel ?? ''}
              variant={'primary'}
              labelColor={'white'}
            />
            </Box>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});
