import React from 'react';
import {ScrollView} from 'react-native';
import Box from '../Box/box';

const SpecialDays = () => {
  return (
    <Box left={5} mt="s">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box
          width={223}
          height={110}
          mr="m"
          borderRadius={10}
          borderWidth={1}
          borderColor="lightGrey"
          backgroundColor='white'
        />
        <Box
          width={223}
          height={110}
          mr="m"
          borderRadius={10}
          borderWidth={1}
          borderColor="lightGrey"
          backgroundColor='white'
        />
      </ScrollView>
    </Box>
  );
};

export default SpecialDays;
