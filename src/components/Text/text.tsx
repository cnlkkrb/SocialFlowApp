import { ComponentProps } from "react";
import { Text as RNText } from "react-native";
import {
  color,
  createRestyleComponent,
  createText,
  createVariant,
  opacity,
  spacing,
  TextProps,
  textShadow,
  typography,
  VariantProps,
  spacingShorthand,
  visible,
  createRestyleFunction,
} from "@shopify/restyle";
import { Theme } from "../../theme/theme";

const TextRestyle = createText<Theme>();

type RestyleProps = TextProps<Theme> &
  VariantProps<Theme, "textWeights", "weight"> & { flex?: number; flexWrap?: number };
type Props = RestyleProps & ComponentProps<typeof TextRestyle>;

const flexWrap = createRestyleFunction({
  property: "flexWrap",
});
const flex = createRestyleFunction({
  property: "flex",
});

const textVariant = createVariant<Theme, "textVariants">({
  themeKey: "textVariants",
});
const textWeight = createVariant<Theme, "textWeights", "weight">({
  themeKey: "textWeights",
  property: "weight",
});

const Text = createRestyleComponent<Props, Theme>(
  [spacing, spacingShorthand, textShadow, typography, visible, opacity, textVariant, color, textWeight, flex, flexWrap],
  RNText,
);

export default Text;
