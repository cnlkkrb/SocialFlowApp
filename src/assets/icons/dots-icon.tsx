import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const DotsIcon = (props: SvgProps) => {
  return (
    <Svg width="20" height="6" viewBox="0 0 20 6" fill="none" {...props}>
      <Path
        d="M2.75 0.5C1.23 0.5 0 1.73 0 3.25C0 4.77 1.23 6 2.75 6C4.27 6 5.5 4.77 5.5 3.25C5.5 1.73 4.27 0.5 2.75 0.5ZM16.75 0.5C15.23 0.5 14 1.73 14 3.25C14 4.77 15.23 6 16.75 6C18.27 6 19.5 4.77 19.5 3.25C19.5 1.73 18.27 0.5 16.75 0.5ZM9.75 0.5C8.23 0.5 7 1.73 7 3.25C7 4.77 8.23 6 9.75 6C11.27 6 12.5 4.77 12.5 3.25C12.5 1.73 11.27 0.5 9.75 0.5Z"
        fill={props.color || "#09121F"}
      />
    </Svg>
  );
};

export default DotsIcon;
