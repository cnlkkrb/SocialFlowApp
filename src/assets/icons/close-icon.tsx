import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseIcon = () => {
  return (
    <Svg width="15" height="14" viewBox="0 0 15 14" fill="none">
      <Path
        d="M1.5231 13L13.6965 1"
        stroke="#7D8998"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M13.6965 13L1.5231 1"
        stroke="#7D8998"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CloseIcon;
