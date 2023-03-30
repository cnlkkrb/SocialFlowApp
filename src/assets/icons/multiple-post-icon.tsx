import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const MultiplePostIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M10.6 4.15C10.6 4.34 10.44 4.5 10.25 4.5H9.12C6.96 4.5 5.2 6.26 5.2 8.42V17.65C5.2 17.84 5.04 18 4.85 18H4.15C2.96 18 2 17.04 2 15.85V4.15C2 2.96 2.96 2 4.15 2H8.45C9.64 2 10.6 2.96 10.6 4.15ZM22 4.15V15.85C22 17.04 21.04 18 19.85 18H19.22C19.03 18 18.87 17.84 18.87 17.65V8.42C18.87 6.26 17.11 4.5 14.95 4.5H13.75C13.56 4.5 13.4 4.34 13.4 4.15C13.4 2.96 14.36 2 15.55 2H19.85C21.04 2 22 2.96 22 4.15Z"
        fill="url(#paint0_linear_493_580)"
      />
      <Path
        d="M14.95 6H9.11995C7.77995 6 6.69995 7.08 6.69995 8.42V19.58C6.69995 20.92 7.77995 22 9.11995 22H10.75C11.03 22 11.25 21.78 11.25 21.5V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V21.5C12.75 21.78 12.97 22 13.25 22H14.96C16.29 22 17.37 20.92 17.37 19.59V8.42C17.37 7.08 16.29 6 14.95 6ZM14 14.75H9.99995C9.58995 14.75 9.24995 14.41 9.24995 14C9.24995 13.59 9.58995 13.25 9.99995 13.25H14C14.41 13.25 14.75 13.59 14.75 14C14.75 14.41 14.41 14.75 14 14.75ZM14 11.75H9.99995C9.58995 11.75 9.24995 11.41 9.24995 11C9.24995 10.59 9.58995 10.25 9.99995 10.25H14C14.41 10.25 14.75 10.59 14.75 11C14.75 11.41 14.41 11.75 14 11.75Z"
        fill="url(#paint1_linear_493_580)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_493_580"
          x1="16.8637"
          y1="0.106033"
          x2="16.8876"
          y2="17.3733"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_493_580"
          x1="14.6298"
          y1="4.10603"
          x2="14.6745"
          y2="21.3732"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6944FF" />
          <Stop offset="0.787491" stopColor="#9644FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default MultiplePostIcon;
