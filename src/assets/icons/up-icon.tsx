import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const DownIcon = (props: SvgProps) => {
  return (
    <Svg width="16" height="10" viewBox="0 0 16 10" fill="none" {...props}>
      <Path
        d="M1.33337 1.66666L7.80956 8.33332L14.6667 1.66666"
        stroke="#7D8998"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DownIcon;
