import React from 'react';
import Lottie from 'lottie-react-native';
import Box from '../Box/box';

export default function ScheduleaAnimation() {
  return (
  <Box width={140} height={140}>
    <Lottie source={require('./animation.json')} autoPlay loop />
  </Box>
  );
}