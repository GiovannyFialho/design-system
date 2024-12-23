import { Box, Text, TextInput, type TextInputProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<TextInputProps>;

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: Story = {
  args: {
    placeholder: "Digite o seu nome",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: "cal.com/",
  },
};
