import { Box, BoxProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BoxProps> = {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<BoxProps>;

export const Primary: Story = {};
