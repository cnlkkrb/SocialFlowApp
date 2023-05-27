import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const CircularProgress = () => {
  const [progress, setProgress] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedProgress >= progress) {
        clearInterval(interval);
      } else {
        setDisplayedProgress(displayedProgress + 1);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [displayedProgress, progress]);


  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={260}
        width={10}
        fill={progress}
        tintColor="white"
        backgroundColor="grey"
        rotation={180}
        lineCap="round"
        duration={1800}
      />
      <Text style={styles.progressText}>{`${displayedProgress}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 100,
  },
});

export default CircularProgress;