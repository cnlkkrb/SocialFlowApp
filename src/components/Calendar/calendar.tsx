import React from 'react';
import { UnSelectCalendar } from '../../assets/icons/calendar-icon';
import Box from '../Box/box';
import Text from '../Text/text';

const Calendar = ({color,calendarColor}) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      width={140}
      height={48}
      borderWidth={1}
      borderColor="lightGrey"
      borderRadius={10}
      flexDirection="row">
      <UnSelectCalendar  color={calendarColor}/>
      <Text ml="s" variant="heading4" color={color}>
        14/04/2024
      </Text>
    </Box>
  );
};

export default Calendar;
