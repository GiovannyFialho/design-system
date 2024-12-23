import { InputHTMLAttributes } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </TextInputContainer>
  );
}
