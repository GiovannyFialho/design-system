import { CSS } from "@stitches/react";
import { ElementType, HTMLAttributes } from "react";

import { BoxContainer } from "./styles";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  css?: CSS;
}

export function Box(props: BoxProps) {
  return <BoxContainer {...props}></BoxContainer>;
}
