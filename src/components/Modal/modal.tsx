import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Switch,
  Image,
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
  icon: any;
  closeIcon: any
}

const LargeModal = ({
  visible = false,
  text,
  onClose,
  buttonLabel,
  secondText,
  description,
  onCloseSecondary,
  onPress,
  icon,
  closeIcon
}: SeatModalProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
          {
            closeIcon === true ? (
              <TouchableOpacity
            onPress={onClose}
            style={{
              position: 'absolute',
              right: 20,
              top: 20,
            }}><CloseIcon/></TouchableOpacity>
            ) : null
          }
            {
              icon === true ? (
                <Switch
                  style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginTop: 30 }}
                  trackColor={{false: 'grey', true: '#27AE60'}}
                  thumbColor={isEnabled ? 'white' : 'white'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              ) : (
              <Box>
                <Image source={require('../../assets/success.png')}/>
              </Box>
              )
            }
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 20,
                marginTop: icon === true ? 12 : -12,
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
          {
            icon !== true ? (
              <View style={{width:'100%',marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Box width={'100%'}>
            <Button
              onPress={onPress}
              label={buttonLabel ?? ''}
              variant={'primary'}
              labelColor={'white'}
            />
            </Box>
          </View>
            ) : (
              <View style={{width:'100%',marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
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
            <Box width={'55%'}>
            <Button
              onPress={onPress}
              label={buttonLabel ?? ''}
              variant={'primary'}
              labelColor={'white'}
            />
            </Box>
          </View>
            )
          }
        </View>
      </View>
    </Modal>
  );
};

export default LargeModal;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});
