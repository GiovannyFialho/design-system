import { ElementType, HTMLAttributes } from "react";

import { TextContainer } from "./styles";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

export function Text(props: TextProps) {
  return <TextContainer {...props}></TextContainer>;
}
