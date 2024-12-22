import { Box, BoxProps, Text } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<BoxProps>;

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<BoxProps>;

export const Primary: Story = {};
