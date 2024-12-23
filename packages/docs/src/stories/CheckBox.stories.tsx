import { Box, CheckBox, Text, type CheckboxProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<CheckboxProps>;

export default {
  title: "Form/Checkbox",
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size="sm">Aceito os termos</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: Story = {};
