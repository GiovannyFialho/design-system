import { Box, Text, TextArea, type TextAreaProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<TextAreaProps>;

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observações</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: Story = {
  args: {
    placeholder: "Algumas observações...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
