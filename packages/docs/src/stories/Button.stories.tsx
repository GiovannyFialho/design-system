import { Button, ButtonProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ButtonProps> = {
  component: Button,
  args: {
    children: "Enviar",
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Small: Story = {};

export const Big: Story = {
  args: {
    size: "big",
  },
};
