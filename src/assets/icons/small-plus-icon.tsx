import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

const SmallPlusIcon = () => {
  return (
    <Svg width="13" height="13" viewBox="0 0 22 22" fill="none">
      <Rect x="9" width="4" height="22" rx="2" fill="#9644FF" />
      <Rect
        y="13"
        width="4"
        height="22"
        rx="2"
        transform="rotate(-90 0 13)"
        fill="#9644FF"
      />
    </Svg>
  );
};

export default SmallPlusIcon;