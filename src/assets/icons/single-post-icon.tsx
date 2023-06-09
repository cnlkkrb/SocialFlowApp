import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const SinglePostIcon = () => {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <Path
        d="M17.5 14V16.5C17.5 18.43 15.93 20 14 20H4C2.07 20 0.5 18.43 0.5 16.5V15.85C0.5 14.28 1.78 13 3.35 13H16.5C17.05 13 17.5 13.45 17.5 14ZM12.5 0H5.5C1.5 0 0.5 1 0.5 5V12.58C1.26 11.91 2.26 11.5 3.35 11.5H16.5C17.05 11.5 17.5 11.05 17.5 10.5V5C17.5 1 16.5 0 12.5 0ZM10 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H10C10.41 7.25 10.75 7.59 10.75 8C10.75 8.41 10.41 8.75 10 8.75ZM13 5.25H5C4.59 5.25 4.25 4.91 4.25 4.5C4.25 4.09 4.59 3.75 5 3.75H13C13.41 3.75 13.75 4.09 13.75 4.5C13.75 4.91 13.41 5.25 13 5.25Z"
        fill="url(#paint0_linear_493_1115)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_493_1115"
          x1="13.1342"
          y1="-2.36746"
          x2="13.1781"
          y2="19.2166"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SinglePostIcon;
