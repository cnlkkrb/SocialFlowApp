import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const RightIcon = (props: SvgProps) => {
  return (
    <Svg width="10" height="16" viewBox="0 0 10 16" fill="none" {...props}>
      <Path
        d="M1.66675 14.6667L8.33341 8.19056L1.66675 1.33342"
        stroke={props.color || "#7D8998"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RightIcon;
