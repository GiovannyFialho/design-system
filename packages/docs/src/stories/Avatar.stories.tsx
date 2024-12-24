import { Avatar, AvatarProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<AvatarProps>;

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/GiovannyFialho.png",
    alt: "Giovanny Fialho",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: Story = {};

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
};
