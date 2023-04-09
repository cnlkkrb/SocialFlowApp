import React, {useState} from 'react';
import Box from '../Box/box';
import LinearGradient from 'react-native-linear-gradient';
import {CalendarIcon} from '../../assets/icons/calendar-icon';
import Text from '../Text/text';
import RightIcon from '../../assets/icons/right-icon';
import {TouchableOpacity} from 'react-native';
import SchedulingModal from '../ShedulingModal/scheduling-modal';
import LargeModal from '../Modal/modal';

const SelecetedScheduleItem = ({selectedItem}) => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [autoScheduling, setAutoScheduling] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setVisible(true);

    setTimeout(() => {
        setVisible(false);
        setAutoScheduling(true);
    }, 4000);
  };

  return (
    <>
    <TouchableOpacity onPress={toggleModal}>
      <LinearGradient
        style={{
          marginHorizontal: 20,
          height: 56,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'white',
          justifyContent: 'center',
        }}
        colors={['#6944FF', '#9644FF']}>
        <Box flexDirection="row" alignItems="center">
          <Box
            width={36}
            height={36}
            justifyContent="center"
            alignItems="center"
            backgroundColor="white"
            borderRadius={10}
            ml="s"
            padding="m">
            <CalendarIcon />
          </Box>
          <Box ml="s">
            <Text variant="heading3" color="white">
              Auto Schedule selected {selectedItem.length}
            </Text>
            <Text fontSize={9} variant="heading5" color="lightGrey">
              {`Ai will schedule all selected content according
to your industry metrics`}
            </Text>
          </Box>
        </Box>
        <Box position="absolute" right={20}>
          <RightIcon color={'white'} />
        </Box>
      </LinearGradient>
      <SchedulingModal
        visible={visible}
        text='Auto Scheduling...'
        description={`Approved contents are being auto \n scheduled according to your business \n best practices by Artificial Intelligence. \n Please wait a few seconds! `}
        onClose={() => setVisible(false)}
        onCloseSecondary={() => setVisible(false)}
      />

    </TouchableOpacity>
    <LargeModal
        visible={autoScheduling}
        icon={false}
        closeIcon={false}
        text={`Congratulations!`}
        description={`13 new posts has been scheduled 
automatically by Ai according to you 
business dynamics, industry standarts!`}
        buttonLabel='Continue'
        onPress={() => {
          setAutoScheduling(false)
        }}/>
    </>
  );
};

export default SelecetedScheduleItem;
