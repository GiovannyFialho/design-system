import { styled } from "../../styles/stitches.config";

export const ButtonContainer = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$fialho500",
        "&:not(:disabled):hover": {
          background: "$fialho300",
        },
        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },
      secondary: {
        color: "$fialho300",
        border: "2px solid $fialho500",
        "&:not(:disabled):hover": {
          background: "$fialho500",
          color: "$white",
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white",
        },
        "&:disabled": {
          color: "$gray600",
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
