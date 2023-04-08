import React from "react";
import Box from "../Box/box";

type Props = {
  disablePadding?: boolean;
};

const Divider = ({ disablePadding }: Props) => {
  return (
    <Box
      borderBottomColor="lightGrey"
      borderBottomWidth={1}
      pt={disablePadding ? "none" : "m"}
      mb={disablePadding ? "none" : "m"}
    />
  );
};

export default Divider;