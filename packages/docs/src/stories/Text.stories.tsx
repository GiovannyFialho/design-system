import { Text, TextProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<TextProps>;

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.",
  },
} as Meta<TextProps>;

export const Primary: Story = {};

export const CustomTag: Story = {
  args: {
    as: "strong",
    size: "4xl",
  },
};
