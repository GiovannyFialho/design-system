import { Button, ButtonProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

type Story = StoryObj<ButtonProps>;

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Enviar",
  },
} as Meta<ButtonProps>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
