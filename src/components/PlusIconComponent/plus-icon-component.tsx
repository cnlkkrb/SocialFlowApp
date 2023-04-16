import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity, Keyboard } from 'react-native'; 
import PlusIcon from '../../assets/icons/plus-icon';

const PlusIconComponent = ({handlePresentModal}) => {

    const [visible, setVisible] = useState(true)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => setVisible(false))
        Keyboard.addListener('keyboardDidHide', () => setVisible(true))
    }, [])

    if(!visible) return null;

    return(
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
    )
}

export default PlusIconComponent