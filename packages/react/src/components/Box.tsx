import { ReactNode } from "react";

import { styled } from "./../styles/stitches.config";

export type BoxProps = {
  children: ReactNode;
};

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
});
