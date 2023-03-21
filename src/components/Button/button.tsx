import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { Theme } from "../../theme/theme";
import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import Box from "../Box/box";
import Text from "../Text/text";

type Props = React.ComponentPropsWithRef<typeof TouchableOpacity> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  VariantProps<Theme, "buttonVariants"> & {
    label: string;
    disabled?: boolean;
    onPress: () => void;
    leftIcon?: ReactNode;
    labelColor: any;
  };

const variant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

const restyleFunctions = composeRestyleFunctions<Theme, Props>([spacing, spacingShorthand, variant]);

const Button = ({ onPress, label, disabled, labelColor, ...rest }: Props) => {
  // @ts-ignore
  const props = useRestyle(restyleFunctions, rest);
  const opacity = disabled ? 0.3 : 1;

  const button = (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Box alignItems="center" justifyContent="center" flexDirection="row" style={props.style} opacity={opacity}>
        <Text textAlign="center" variant="heading2" color={labelColor}>
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );

  return button;
};

export default Button;
