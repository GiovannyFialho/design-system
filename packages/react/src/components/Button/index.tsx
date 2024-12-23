import { ButtonHTMLAttributes, ElementType } from "react";

import { ButtonContainer } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
}

export function Button(props: ButtonProps) {
  return <ButtonContainer {...props}></ButtonContainer>;
}
