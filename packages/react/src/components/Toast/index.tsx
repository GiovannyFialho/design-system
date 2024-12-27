import { X } from "phosphor-react";
import { ComponentProps } from "react";

import {
  ContainerTitle,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
} from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description?: string;
  onActionClick?: () => void;
}

export function Toast({
  title,
  description,
  onActionClick,
  ...props
}: ToastProps) {
  return (
    <ToastProvider>
      <ToastRoot {...props}>
        <ContainerTitle>
          <ToastTitle>{title}</ToastTitle>

          <ToastAction asChild altText="close toast">
            <button type="button" onClick={onActionClick}>
              <X />
            </button>
          </ToastAction>
        </ContainerTitle>

        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastRoot>
    </ToastProvider>
  );
}
