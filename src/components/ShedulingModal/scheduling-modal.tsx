import React from 'react';
import {StyleSheet, TouchableOpacity, View,} from 'react-native';
import {Modal} from 'react-native';
import CloseIcon from '../../assets/icons/close-icon';
import Box from '../Box/box';
import Text from '../Text/text';
import ScheduleaAnimation from '../Lottie/ScheduleAnimation';

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

const SchedulingModal = ({
  visible = false,
  text,
  secondText,
  description,
  onClose,
  onCloseSecondary,
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
            <ScheduleaAnimation />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 20,
                fontWeight: '700',
              }}>
              {text}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                marginTop: 8,
                fontWeight: '500',
              }}>
              {description}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {!!secondText && (
              <TouchableOpacity
                style={{width: '45%'}}
                onPress={onCloseSecondary}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#6944FF',
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {secondText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity 
          onPress={onClose}
          style={{position: 'absolute', top: 20, right: 20}}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SchedulingModal;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
