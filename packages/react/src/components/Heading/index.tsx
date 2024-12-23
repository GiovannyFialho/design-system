import { ElementType, HTMLAttributes } from "react";

import { HeadingContainer } from "./style";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  size: "sm" | "md" | "lg" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

export function Heading(props: HeadingProps) {
  return <HeadingContainer {...props}></HeadingContainer>;
}
