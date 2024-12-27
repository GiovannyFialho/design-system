import * as Toast from "@radix-ui/react-toast";

import { keyframes, styled } from "../../styles/stitches.config";

const VIEWPORT_PADDING = 25;

type Direction = "left" | "right" | "up" | "down";

const createSlideInAnimation = (direction: Direction) => {
  const transformMap = {
    left: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))`,
    right: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
    up: `translateY(calc(-100% - ${VIEWPORT_PADDING}px))`,
    down: `translateY(calc(100% + ${VIEWPORT_PADDING}px))`,
  };

  return keyframes({
    from: { transform: transformMap[direction] },
    to: { transform: "translate(0)" },
  });
};

const createSwipeOutAnimation = (direction: Direction) => {
  const transformMap: Record<Direction, { transform: string }> = {
    left: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` },
    right: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
    up: { transform: `translateY(calc(-100% - ${VIEWPORT_PADDING}px))` },
    down: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
  };

  return keyframes({
    from: { transform: "translate(0)" },
    to: transformMap[direction],
  });
};

export const ToastPrimitiveProvider = styled(Toast.Provider, {});

export const ToastContainer = styled(Toast.Root, {
  all: "unset",
  backgroundColor: "$gray800",
  borderRadius: "$md",
  border: "2px solid $gray600",
  padding: "$3 $5",
  overflow: "hidden",

  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  alignItems: "center",

  variants: {
    swipeDirection: {
      left: {
        '&[data-state="open"]': {
          animation: `${createSlideInAnimation(
            "left"
          )} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-swipe="end"]': {
          animation: `${createSwipeOutAnimation("left")} 100ms ease-out`,
        },
      },
      right: {
        '&[data-state="open"]': {
          animation: `${createSlideInAnimation(
            "right"
          )} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-swipe="end"]': {
          animation: `${createSwipeOutAnimation("right")} 100ms ease-out`,
        },
      },
      up: {
        '&[data-state="open"]': {
          animation: `${createSlideInAnimation(
            "up"
          )} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-swipe="end"]': {
          animation: `${createSwipeOutAnimation("up")} 100ms ease-out`,
        },
      },
      down: {
        '&[data-state="open"]': {
          animation: `${createSlideInAnimation(
            "down"
          )} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-swipe="end"]': {
          animation: `${createSwipeOutAnimation("down")} 100ms ease-out`,
        },
      },
    },
  },
});

export const ToastDescription = styled(Toast.Description, {
  color: "$gray200",
});

export const ToastHead = styled("div", {
  position: "relative",
  display: "inline-block",

  width: "100%",
  color: "$white",
});

export const ToastTitle = styled(Toast.Title, {
  width: "$80",
});

export const ToastClose = styled(Toast.Close, {
  all: "unset",
  position: "absolute",
  top: 0,
  right: 0,

  cursor: "pointer",
  color: "$gray100",

  '&[data-swipe="end"]': {
    animation: `${createSwipeOutAnimation("right")} 100ms ease-out`,
  },
});

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  padding: VIEWPORT_PADDING,
  width: "$80",
  maxWidth: "100vw",
  zIndex: 2147483647,
  outline: "none",

  flexDirection: "column",
  margin: 0,
  listStyle: "none",

  gap: 10,
});
