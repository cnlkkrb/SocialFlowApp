import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const ProductIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="url(#paint0_linear_367_4452)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.69995 9.26L12 12.33L17.26 9.28M12 17.77V12.32"
        stroke="url(#paint1_linear_367_4452)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.76 6.29L7.55999 8.07C6.83999 8.47 6.23999 9.48 6.23999 10.31V13.7C6.23999 14.53 6.82999 15.54 7.55999 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.47 17.18 8.46 16.45 8.06L13.25 6.28C12.56 5.9 11.44 5.9 10.76 6.29Z"
        stroke="url(#paint2_linear_367_4452)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_367_4452"
          x1="16.8637"
          y1="-0.367458"
          x2="16.901"
          y2="21.2166"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_367_4452"
          x1="14.548"
          y1="8.25265"
          x2="14.5608"
          y2="17.4367"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_367_4452"
          x1="14.8089"
          y1="4.57473"
          x2="14.8323"
          y2="17.5346"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default ProductIcon;
