import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '../../components/Box/box'
import Post from '../../components/Post/post'

const DraftScreen = () => {
  return (
    <Box>
        <Post draft={true} />
    </Box>
  )
}

export default DraftScreen

const styles = StyleSheet.create({})