import React from 'react';
import {Keyboard, TouchableOpacity} from 'react-native';
import PlusIcon from '../assets/icons/plus-icon';
import LinearGradient from 'react-native-linear-gradient';

const PlusIconComponent = ({handlePresentModal}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setVisible(false));

    Keyboard.addListener('keyboardDidHide', () => setVisible(true));
  }, []);

  if (!visible) return null;

  return (
    <TouchableOpacity
      onPress={handlePresentModal}
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LinearGradient
        style={{
          top: -10,
          width: 50,
          height: 50,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: 'white',
        }}
        colors={['#6944FF', '#9644FF']}>
        <PlusIcon />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PlusIconComponent;
