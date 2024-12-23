import { Box, MultiStep, MultiStepProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<MultiStepProps>;

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  args: {
    currentStep: 1,
    steps: 5,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: Story = {
  args: {},
};

export const Full: Story = {
  args: {
    currentStep: 5,
  },
};
