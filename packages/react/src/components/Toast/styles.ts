import * as RadixToast from "@radix-ui/react-toast";

import { styled } from "../../styles/stitches.config";

export const ToastProvider = RadixToast.Provider;

export const ToastRoot = styled(RadixToast.Root, {
  width: "max-content",
  minWidth: "22rem",
  padding: "$4",
  borderRadius: "$sm",
  border: "1px solid $colors$gray600",
  backgroundColor: "$gray800",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
});

export const ContainerTitle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ToastTitle = styled(RadixToast.Title, {
  fontSize: "$xl",
  fontWeight: "$bold",
  color: "$white",
  marginBottom: "$1",
});

export const ToastDescription = styled(RadixToast.Description, {
  fontSize: "$sm",
  fontWeight: "$medium",
  color: "$gray200",
  margin: 0,
});

export const ToastAction = styled(RadixToast.Action, {
  fontSize: "$sm",
  color: "$gray200",
  "&:hover": {
    backgroundColor: "$gray500",
  },
});
