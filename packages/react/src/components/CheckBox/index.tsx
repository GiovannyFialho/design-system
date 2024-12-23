import { Check } from "phosphor-react";
import { ComponentProps } from "react";

import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function CheckBox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}
