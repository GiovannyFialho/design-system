import { Heading, HeadingProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<HeadingProps>;

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
  },
} as Meta<HeadingProps>;

export const Primary: Story = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
    size: "6xl",
  },
};
