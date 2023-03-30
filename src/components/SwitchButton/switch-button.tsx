import {Switch} from 'react-native';
import React, { useState } from 'react';

const SwitchButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
      trackColor={{false: 'grey', true: '#A472EA'}}
      thumbColor={isEnabled ? '#6200EE' : 'white'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default SwitchButton;
