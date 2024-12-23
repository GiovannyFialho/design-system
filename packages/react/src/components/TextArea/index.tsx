import { TextareaHTMLAttributes } from "react";

import { TextAreaContainer } from "./styles";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea(props: TextAreaProps) {
  return <TextAreaContainer {...props} />;
}
