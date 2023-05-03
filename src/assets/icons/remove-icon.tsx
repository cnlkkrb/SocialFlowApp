import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RemoveIcon = () => {
  return (
    <Svg width="20" height="22" viewBox="0 0 20 22" fill="none">
      <Path
        d="M19 4.98C15.67 4.65 12.32 4.48 8.98 4.48C7 4.48 5.02 4.58 3.04 4.78L1 4.98M6.5 3.97L6.72 2.66C6.88 1.71 7 1 8.69 1H11.31C13 1 13.13 1.75 13.28 2.67L13.5 3.97M16.85 8.14L16.2 18.21C16.09 19.78 16 21 13.21 21H6.79C4 21 3.91 19.78 3.8 18.21L3.15 8.14M8.33 15.5H11.66M7.5 11.5H12.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SmallRemoveIcon = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path d="M15 4.786C12.78 4.555 10.5467 4.436 8.32 4.436C7 4.436 5.68 4.506 4.36 4.646L3 4.786M6.66667 4.079L6.81333 3.162C6.92 2.497 7 2 8.12667 2H9.87333C11 2 11.0867 2.525 11.1867 3.169L11.3333 4.079M13.5667 6.998L13.1333 14.047C13.06 15.146 13 16 11.14 16H6.86C5 16 4.94 15.146 4.86667 14.047L4.43333 6.998M7.88667 12.15H10.1067M7.33333 9.35H10.6667" stroke="#09121F" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default RemoveIcon;
