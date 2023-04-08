import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SmallCalendarIcon = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M5.93676 4.13487C5.62932 4.13487 5.37436 3.89801 5.37436 3.61239V1.52248C5.37436 1.23686 5.62932 1 5.93676 1C6.2442 1 6.49915 1.23686 6.49915 1.52248V3.61239C6.49915 3.89801 6.2442 4.13487 5.93676 4.13487ZM11.9356 4.13487C11.6282 4.13487 11.3732 3.89801 11.3732 3.61239V1.52248C11.3732 1.23686 11.6282 1 11.9356 1C12.2431 1 12.498 1.23686 12.498 1.52248V3.61239C12.498 3.89801 12.2431 4.13487 11.9356 4.13487ZM6.31169 10.2298C6.21421 10.2298 6.11672 10.2089 6.02674 10.174C5.92926 10.1392 5.85427 10.0904 5.77929 10.0277C5.64431 9.89536 5.56183 9.71424 5.56183 9.53311C5.56183 9.35199 5.64431 9.17086 5.77929 9.0385C5.85427 8.9758 5.93676 8.92704 6.02674 8.89221C6.2093 8.82253 6.41407 8.82253 6.59663 8.89221C6.68662 8.92704 6.7691 8.9758 6.84409 9.0385C6.87408 9.07333 6.91157 9.10816 6.93407 9.143C6.96406 9.1848 6.98656 9.22659 7.00156 9.26839C7.02405 9.31019 7.03905 9.35199 7.04655 9.39379C7.05405 9.44255 7.06155 9.49131 7.06155 9.53311C7.06155 9.71424 6.97906 9.89536 6.84409 10.0277C6.7691 10.0904 6.68662 10.1392 6.59663 10.174C6.50665 10.2089 6.40917 10.2298 6.31169 10.2298ZM8.93619 10.2304C8.83871 10.2304 8.74123 10.2095 8.65125 10.1747C8.55376 10.1399 8.47878 10.0911 8.40379 10.0284C8.26882 9.89606 8.18633 9.71494 8.18633 9.53381C8.18633 9.49201 8.19383 9.44325 8.20133 9.39448C8.20883 9.35268 8.22383 9.31089 8.24632 9.26909C8.26132 9.22729 8.28382 9.18549 8.31381 9.14369L8.40379 9.0392C8.68124 8.78144 9.18365 8.78144 9.46859 9.0392L9.55857 9.14369C9.58857 9.18549 9.61106 9.22729 9.62606 9.26909C9.64856 9.31089 9.66355 9.35268 9.67105 9.39448C9.67855 9.44325 9.68605 9.49201 9.68605 9.53381C9.68605 9.71494 9.60357 9.89606 9.46859 10.0284C9.32612 10.1538 9.13865 10.2304 8.93619 10.2304ZM6.31169 12.668C6.21421 12.668 6.11672 12.6471 6.02674 12.6123C5.93676 12.5774 5.85427 12.5287 5.77929 12.466C5.64431 12.3336 5.56183 12.1525 5.56183 11.9713C5.56183 11.9295 5.56933 11.8808 5.57683 11.839C5.58432 11.7902 5.59932 11.7484 5.62182 11.7066C5.63681 11.6648 5.65931 11.623 5.6893 11.5812C5.7118 11.5464 5.74929 11.5116 5.77929 11.4767C5.85427 11.414 5.93676 11.3653 6.02674 11.3304C6.2093 11.2608 6.41407 11.2608 6.59663 11.3304C6.68662 11.3653 6.7691 11.414 6.84409 11.4767C6.87408 11.5116 6.91157 11.5464 6.93407 11.5812C6.96406 11.623 6.98656 11.6648 7.00156 11.7066C7.02405 11.7484 7.03905 11.7902 7.04655 11.839C7.05405 11.8808 7.06155 11.9295 7.06155 11.9713C7.06155 12.1525 6.97906 12.3336 6.84409 12.466C6.7691 12.5287 6.68662 12.5774 6.59663 12.6123C6.50665 12.6471 6.40917 12.668 6.31169 12.668ZM15.31 6.98412H2.56239C2.25495 6.98412 2 6.74726 2 6.46164C2 6.17602 2.25495 5.93916 2.56239 5.93916H15.31C15.6174 5.93916 15.8724 6.17602 15.8724 6.46164C15.8724 6.74726 15.6174 6.98412 15.31 6.98412ZM11.8007 16C11.5157 16 11.2458 15.9025 11.0508 15.7213C10.8183 15.5054 10.7134 15.1919 10.7658 14.8645L10.9083 13.924C10.9458 13.6802 11.1033 13.3876 11.2907 13.2134L13.9452 10.7474C14.3052 10.413 14.6576 10.2388 15.04 10.204C15.5125 10.1622 15.9699 10.3433 16.4048 10.7474C16.8622 11.1723 17.4771 12.0361 16.4048 13.0323L13.7503 15.4984C13.5628 15.6726 13.2479 15.8189 12.9854 15.8537L11.9731 15.9861C11.9131 15.993 11.8606 16 11.8007 16ZM15.1675 11.242H15.145C15.04 11.2489 14.8976 11.3395 14.7401 11.4858L12.0856 13.9519C12.0552 13.9861 12.0346 14.0268 12.0256 14.0703L11.8906 14.9411L12.828 14.8157C12.858 14.8088 12.9329 14.7739 12.9554 14.753L15.6099 12.2869C15.9399 11.9804 15.9849 11.8271 15.6099 11.4788C15.49 11.3743 15.3175 11.242 15.1675 11.242Z"
        fill="#09121F"
      />
      <Path
        d="M15.3899 13C15.3335 13 15.2771 12.9946 15.2288 12.9839C14.7032 12.8845 14.2245 12.6973 13.8382 12.44C13.4519 12.1827 13.1709 11.8638 13.0217 11.5137C12.9793 11.4106 12.9995 11.3005 13.0779 11.2072C13.1562 11.1138 13.2865 11.0447 13.4405 11.0147C13.7627 10.9557 14.093 11.0791 14.1897 11.2937C14.3749 11.7337 14.8985 12.0825 15.559 12.2059C15.8812 12.2649 16.0665 12.4903 15.9779 12.7049C15.8973 12.882 15.6557 13 15.3899 13Z"
        fill="#09121F"
      />
      <Path
        d="M9 16H6.12821C3.50769 16 2 14.53 2 11.975V6.025C2 3.47 3.50769 2 6.12821 2H11.8718C14.4923 2 16 3.47 16 6.025V8.475C16 8.762 15.7559 9 15.4615 9C15.1672 9 14.9231 8.762 14.9231 8.475V6.025C14.9231 4.023 13.9251 3.05 11.8718 3.05H6.12821C4.07487 3.05 3.07692 4.023 3.07692 6.025V11.975C3.07692 13.977 4.07487 14.95 6.12821 14.95H9C9.29436 14.95 9.53846 15.188 9.53846 15.475C9.53846 15.762 9.29436 16 9 16Z"
        fill="#09121F"
      />
    </Svg>
  );
};

export default SmallCalendarIcon;