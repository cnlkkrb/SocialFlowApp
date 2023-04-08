import { createTheme } from "@shopify/restyle";

const themeSpacing = {
  none: 0,
  auto: "auto",
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 40,
  xxl: 140,
  xxxl: 160,
  cardP: 20,
  large: 70,
};


const palette = {
  mainBackground: "#6944FF",
  mainBackground2: "#9644FF",
  grey: "#7D8998",
  darkBlue: "#171648",
  darkGrey: "#4A4A4A",
  lightGrey: "#D6E0EA",
  black: "#000000",
  white: "#FFFFFF",
  textColor: "#4A4A4A",
  pageBackground: '#F4F8FC',
  iosBtnColor: '#09121F',
  googleBtnColor: '#EB5757',
  facebookBtnColor: '#356EFF',
  disabledBtnColor: 'grey'
};

const theme = createTheme({
  colors: {
    bg: palette.mainBackground,
    bg50: palette.mainBackground2,
    white: palette.white,
    black: palette.black,
    grey: palette.grey,
    darkBlue: palette.darkBlue,
    darkGrey: palette.darkGrey,
    lightGrey: palette.lightGrey,
    textColor: palette.textColor,
    pageBackground: palette.pageBackground,
    iosBtnColor: palette.iosBtnColor,
    googleBtnColor: palette.googleBtnColor,
    facebookBtnColor: palette.facebookBtnColor,
    disabledBtnColor: palette.disabledBtnColor
  },
  textWeights: {
    regular: {
      fontFamily: "OpenSans-Regular",
    },
    bold: {
      fontFamily: "OpenSans-Bold",
    },
  },
  spacing: themeSpacing,
  breakpoints: {},
  textVariants: {
    generalHeading: {
      fontWeight: "700",
      fontSize: 20,
    },
    heading1: {
      fontWeight: "700",
      fontSize: 24,
    },
    heading2: {
      fontWeight: "700",
      fontSize: 17,
    },
    heading3: {
      fontWeight: "600",
      fontSize: 17,
    },
    heading4: {
      fontWeight: "400",
      fontSize: 16,
    },
    heading5: {
      fontWeight: "600",
      fontSize: 12,
    },
    screenSubTitle: {
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
    },
    subTitle: {
      fontSize: 15,
      fontWeight: "500",
      lineHeight: 25,
    },
    defaults: {
      fontSize: 14,
      color: "black",
      fontFamily: "OpenSans-Regular",
    },
  },
  textInputVariants: {
    primary: {},
    success: {},
    error: {},
    defaults: { width: "100%", borderRadius: 8, color: "white" },
  },
  buttonVariants: {
    gradient: {
      backgroundColor: "white",
    },
    primary: {
      backgroundColor: "bg",
    },
    iosBtn: {
      backgroundColor: "iosBtnColor",
    },
    googleBtn: {
      backgroundColor: "googleBtnColor",
    },
    facebookBtn: {
      backgroundColor: "facebookBtnColor",
    },
    disabled: {
      backgroundColor: "disabledBtnColor",
    },
    defaults: {
      paddingHorizontal: "l",
      paddingVertical: "m",
      borderRadius: 10,
      overflow: "hidden",
    },
  },
});

export type Theme = typeof theme;
export default theme;
