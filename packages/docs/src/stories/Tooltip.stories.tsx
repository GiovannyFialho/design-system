import { Box, Text, Tooltip, type TooltipProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<TooltipProps>;

export default {
  title: "Surfaces/Tooltip",
  component: Tooltip,
  args: {
    position: "top",
    content: "Tooltip maneiro",
    children: <Text size="md">Texto muito legal</Text>,
  },
  argTypes: {
    position: {
      options: ["top", "right", "bottom", "left"],
      control: {
        type: "radio",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$2",
            marginTop: "$5",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: Story = {};
