import { Button, ButtonProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<ButtonProps>;

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export const Small: Story = {};

export const Big: Story = {
  args: {
    size: "big",
  },
};
