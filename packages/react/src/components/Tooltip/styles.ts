import { styled } from "../../styles/stitches.config";

export const TooltipTrigger = styled("div", {
  width: "max-content",
  position: "relative",
  display: "inline-block",
});

export const TooltipContent = styled("div", {
  position: "absolute",
  zIndex: 1000,
  width: "max-content",
  fontFamily: "$default",
  fontSize: "$xs",
  lineHeight: "$base",
  color: "$gray100",
  padding: "$3 $4",
  backgroundColor: "$gray900",
  borderRadius: "$md",
  whiteSpace: "nowrap",

  "&::after": {
    content: '""',
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
  },

  variants: {
    position: {
      top: {
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginBottom: "12px",

        "&::after": {
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          borderWidth: "8px 8px 0 8px",
          borderColor: "$gray900 transparent transparent transparent",
        },
      },

      right: {
        top: "50%",
        left: "100%",
        transform: "translateY(-50%)",
        marginLeft: "12px",

        "&::after": {
          top: "50%",
          left: "-8px",
          transform: "translateY(-50%)",
          borderWidth: "8px 8px 8px 0",
          borderColor: "transparent $gray900 transparent transparent",
        },
      },

      bottom: {
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: "12px",

        "&::after": {
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          borderWidth: "0 8px 8px 8px",
          borderColor: "transparent transparent $gray900 transparent",
        },
      },

      left: {
        top: "50%",
        right: "100%",
        transform: "translateY(-50%)",
        marginRight: "12px",

        "&::after": {
          top: "50%",
          right: "-8px",
          transform: "translateY(-50%)",
          borderWidth: "8px 0 8px 8px",
          borderColor: "transparent transparent transparent $gray900",
        },
      },
    },
  },

  defaultVariants: {
    position: "top",
  },
});
