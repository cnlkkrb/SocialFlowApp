import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CheckedIconLabel from '../../assets/icons/checked-icon-label';

const ProgressStep = ({ isActive, isCompleted }) => {
    const circleStyle = isActive ? styles.activeCircle : styles.inactiveCircle;
    const iconColor = isCompleted ? '#6944FF' : 'white';
    const circleColor = isCompleted ? '#6944FF' : styles.inactiveCircle.backgroundColor;
  
    return (
      <View style={styles.circleContainer}>
        <View style={[styles.circle, circleStyle, { backgroundColor: circleColor }]}>
          {isCompleted && <CheckedIconLabel color={iconColor}/>}
        </View>
      </View>
    );
  };

  const ProgressLine = ({ isActive }) => {
    const lineStyle = isActive ? styles.activeLine : styles.inactiveLine;
  
    return (
      <View style={[styles.line, lineStyle]} />
    );
  };

const ProgressStepsComponent = ({ currentStep }) => {
  const [steps] = useState([1, 2, 3, 4]);

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <>
          <ProgressStep
            key={step}
            isActive={step === currentStep}
            isCompleted={step < currentStep || step === currentStep}
          />
          {index < steps.length - 1 && (
            <ProgressLine
              key={`line${step}`}
              isActive={step < currentStep}
            />
          )}
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
  },
  circleContainer: {
    width: 22,
    height: 22,
    alignItems: 'center',
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

  },
  activeCircle: {
    backgroundColor: '#6944FF',
  },
  inactiveCircle: {
    backgroundColor: '#D6E0EA',
  },
  line: {
    flex: 1,
    height: 2,
  },
  activeLine: {
    backgroundColor: '#6944FF',
  },
  inactiveLine: {
    backgroundColor: '#D6E0EA',
  },
});

export default ProgressStepsComponent;