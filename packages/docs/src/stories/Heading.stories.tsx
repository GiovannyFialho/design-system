import { Heading, HeadingProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<HeadingProps>;

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
    size: "lg",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: Story = {
  args: {
    size: "lg",
  },
};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
    size: "6xl",
  },
};
