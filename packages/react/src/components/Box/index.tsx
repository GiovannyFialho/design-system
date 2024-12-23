import { HTMLAttributes } from "react";

import { BoxContainer } from "./styles";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

export function Box(props: BoxProps) {
  return <BoxContainer {...props}></BoxContainer>;
}
