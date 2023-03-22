import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const BusinessIcon = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M11.5 21H3.07997C1.91997 21 0.969971 20.07 0.969971 18.93V4.09C0.969971 1.47 2.91997 0.279998 5.30997 1.45L9.74997 3.63C10.71 4.1 11.5 5.35 11.5 6.41V21ZM11.5 21H17.81C19.97 21 20.97 20 20.97 17.84V14.06C20.97 13.99 20.97 13.93 20.96 13.87C20.9 11.95 19.82 11.27 18.5 10.98L16.47 10.53L11.97 9.52L11.5 9.42V21ZM4.49997 8H7.96997M4.49997 12H7.96997"
        stroke="url(#paint0_linear_425_1416)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_425_1416"
          x1="15.8337"
          y1="-1.36785"
          x2="15.871"
          y2="20.2166"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default BusinessIcon;
