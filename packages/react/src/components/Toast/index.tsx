import { X } from "phosphor-react";
import { ComponentProps } from "react";

import { Text } from "../Text";

import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastHead,
  ToastPrimitiveProvider,
  ToastTitle,
  ToastViewport,
} from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string;
  description: string;
  isOpen?: boolean;
  swipeDirection?: "left" | "right" | "up" | "down";
  handleChange: () => void;
}

export interface ToastProviderProps
  extends ComponentProps<typeof ToastPrimitiveProvider> {
  children?: React.ReactNode;
  swipeDirection?: "left" | "right" | "up" | "down";
}

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <ToastPrimitiveProvider {...props}>
      {children}
      <ToastViewport />
    </ToastPrimitiveProvider>
  );
}

export function Toast({
  title,
  description,
  isOpen,
  swipeDirection = "right",
  handleChange,
  ...props
}: ToastProps) {
  return (
    <ToastContainer
      open={isOpen}
      onOpenChange={handleChange}
      swipeDirection={swipeDirection}
      {...props}
    >
      <ToastHead>
        {title && (
          <ToastTitle asChild>
            <Text as="strong" size="xl">
              {title}
            </Text>
          </ToastTitle>
        )}
        <ToastClose aria-label="Close" onClick={handleChange}>
          <X size={20} aria-hidden />
        </ToastClose>
      </ToastHead>

      {description && (
        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>
      )}
    </ToastContainer>
  );
}

Toast.displayName = "Toast";
