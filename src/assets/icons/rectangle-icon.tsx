import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const RectangleIcon = () => {
  return (
    <Svg width="100%" height="430" viewBox="0 0 360 456" fill="none">
      <Path
        d="M0 18C0 8.05887 8.05888 0 18 0H342C351.941 0 360 8.05888 360 18V372.774C360 381.554 353.665 389.053 345.008 390.521L21.0081 445.439C10.0218 447.301 0 438.835 0 427.692V18Z"
        fill="url(#paint0_linear_146_2508)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_146_2508"
          x1="267.547"
          y1="-53.1494"
          x2="268.592"
          y2="431.412"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default RectangleIcon;
