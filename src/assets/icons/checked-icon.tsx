import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckedIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM17.04 9.96L11.28 15.72C10.8 16.2 10.08 16.2 9.6 15.72L6.96 13.08C6.48 12.6 6.48 11.88 6.96 11.4C7.44 10.92 8.16 10.92 8.64 11.4L10.44 13.2L15.36 8.28C15.84 7.8 16.56 7.8 17.04 8.28C17.52 8.76 17.52 9.48 17.04 9.96Z"
        fill="#6944FF"
      />
    </Svg>
  );
};

export default CheckedIcon;
