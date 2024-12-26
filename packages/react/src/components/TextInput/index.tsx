import { InputHTMLAttributes } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  range?: "sm" | "md";
}

export function TextInput({ prefix, range = "md", ...props }: TextInputProps) {
  return (
    <TextInputContainer range={range}>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </TextInputContainer>
  );
}
