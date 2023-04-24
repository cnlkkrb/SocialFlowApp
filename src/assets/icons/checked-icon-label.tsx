import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const CheckedIconLabel = (props: SvgProps) => {
  return (
    <Svg width="9" height="8" viewBox="0 0 9 8" fill="none">
      <Path
        d="M3.22148 8C3.04243 7.9998 2.87077 7.91148 2.74425 7.75445L0.196025 4.59574C0.0704329 4.43821 0 4.22566 0 4.00419C0 3.78271 0.0704329 3.57016 0.196025 3.41263C0.457151 3.08894 0.889358 3.08894 1.15048 3.41263L3.22148 5.97977L7.8497 0.242762C8.11082 -0.0809208 8.54303 -0.0809208 8.80416 0.242762C9.06528 0.566446 9.06528 1.1022 8.80416 1.42588L3.69871 7.75445C3.57218 7.91148 3.40052 7.9998 3.22148 8Z"
        fill="white"
      />
    </Svg>
  );
};

export default CheckedIconLabel;
