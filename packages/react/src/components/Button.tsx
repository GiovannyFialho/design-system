import { ReactNode } from "react";

import { styled } from "./../styles/stitches.config";

export type ButtonProps = {
  size: "small" | "big";
  children: ReactNode;
};

export const Button = styled("button", {
  cursor: "pointer",

  fontFamily: "$default",
  fontWeight: "bold",
  color: "$white",
  borderRadius: "$sm",
  border: 0,
  backgroundColor: "$ignite300",

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});
