import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

const PlusIcon = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Rect x="9" width="4" height="22" rx="2" fill="white" />
      <Rect
        y="13"
        width="4"
        height="22"
        rx="2"
        transform="rotate(-90 0 13)"
        fill="white"
      />
    </Svg>
  );
};

export default PlusIcon;
