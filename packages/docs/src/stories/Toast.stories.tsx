import {
  Button,
  Toast,
  type ToastProps,
  ToastProvider,
} from "@fialho-ui/react";
import { useArgs, useCallback } from "@storybook/client-api";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef } from "react";

type Story = StoryObj<ToastProps>;

export default {
  title: "Surfaces/Toast",
  component: Toast,
  args: {
    title: "Título do Toast",
    description: "Descrição do toast",
    isOpen: false,
    swipeDirection: "right",
  },
  argTypes: {
    swipeDirection: {
      options: ["left", "right", "up", "down"],
      control: {
        type: "radio",
      },
    },
  },
  decorators: [
    (Story) => {
      const [args, updateArgs] = useArgs();

      const timerRef = useRef(0);

      const setOpen = useCallback(() => {
        updateArgs({ isOpen: !args.isOpen });
      }, [updateArgs, args.isOpen]);

      useEffect(() => {
        updateArgs({ handleChange: setOpen });

        return () => clearTimeout(timerRef.current);
      }, [updateArgs, setOpen]);

      function handleClick() {
        setOpen();
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
          setOpen();
        }, 3000);
      }

      return (
        <ToastProvider swipeDirection={args.swipeDirection}>
          <Button onClick={handleClick}>Ativar Toast</Button>
          <Story />
        </ToastProvider>
      );
    },
  ],
} as Meta<ToastProps>;

export const Primary: Story = {};
