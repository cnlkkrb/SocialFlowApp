import React, { ReactNode } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Modal } from "react-native";
import Button from "../Button/button";
import Box from "@components/Box/box";
import Text from "@components/Text/text";

interface SeatModalProps {
  title?: string;
  description?: ReactNode;
  visible: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPressPrimary?: () => void;
  onPressSecondary?: () => void;
  icon?: ReactNode;
}

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("screen");
const modalMaxHeight = deviceHeight * 0.7;
const AlertModal = ({
  visible = false,
  description,
  primaryLabel,
  secondaryLabel,
  icon,
  onPressPrimary,
  onPressSecondary,
}: SeatModalProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => {}}>
      <Box justifyContent="center" style={styles.backdrop}>
        <Box borderRadius={15} m="m" p="m" maxHeight={modalMaxHeight} backgroundColor="lightGrey">
          <Box alignItems={"center"} justifyContent="flex-end" px="m">
            {icon && <Box mb="m" children={icon} />}
            {typeof description === "string" ? (
              <Text variant="heading2" textAlign={"center"} children={description} />
            ) : (
              description
            )}
          </Box>
          <Box flexDirection="row" mt="l" mb="xs">
            {onPressSecondary && secondaryLabel && (
              <Box flex={1}>
                <Button variant={"secondary"} label={secondaryLabel} onPress={onPressSecondary} />
              </Box>
            )}
            {onPressSecondary && secondaryLabel && onPressPrimary && primaryLabel && <Box width={0} mx="s" />}
            {onPressPrimary && primaryLabel && (
              <Box flex={1}>
                <Button variant={"primary"} label={primaryLabel} onPress={onPressPrimary} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  backdrop: { backgroundColor: "rgba(0,0,0,0.8)", height: deviceHeight, width: deviceWidth },
});
