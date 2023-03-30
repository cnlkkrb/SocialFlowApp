import React from 'react';
import ClockIcon from '../../assets/icons/clock-icon';
import Box from '../Box/box';
import Text from '../Text/text';

const Clock = ({color,iconColor}) => {
  return (
    <Box
      alignItems="center"
      backgroundColor="white"
      width={140}
      height={48}
      borderWidth={1}
      borderColor="lightGrey"
      borderRadius={10}
      flexDirection="row">
      <Box ml="m">
        <ClockIcon color={iconColor}/>
      </Box>
      <Text ml="m" variant="heading4" color={color}>
        14 : 30
      </Text>
    </Box>
  );
};

export default Clock;
