import React from 'react'
import Box from '../Box/box';

const FixedButton = ({children}) => {
  return (
    <Box
    position="relative"
    width={'100%'}
    bottom={0}
    height={70}
    justifyContent="center">
      {children}
    </Box>
  )
}

export default FixedButton;