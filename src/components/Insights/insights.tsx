import React from 'react';
import {ScrollView} from 'react-native';
import Box from '../Box/box';

const Insights = () => {
  return (
    <Box left={5} mt="s">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box
          width={223}
          height={145}
          mr="m"
          borderRadius={10}
          style={{backgroundColor: '#EDFDEE'}}
        />
        <Box
          width={223}
          height={145}
          borderRadius={10}
          style={{backgroundColor: '#FFF1F1', marginRight: 20}}
        />
      </ScrollView>
    </Box>
  );
};

export default Insights;
