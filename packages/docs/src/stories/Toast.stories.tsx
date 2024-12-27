import { Button, Toast, type ToastProps } from "@fialho-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

type Story = StoryObj<ToastProps>;

export default {
  title: "Surfaces/Toast",
  component: Toast,
  args: {
    title: "Notification",
    description: "This is a toast message.",
  },
  argTypes: {
    onActionClick: { action: "action clicked" },
  },
} as Meta<ToastProps>;

const ToastWrapper = ({ args }: { args: ToastProps }) => {
  const [open, setOpen] = useState(false);

  const handleToastOpen = () => {
    setOpen(true);
  };

  const handleToastClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="sm" onClick={handleToastOpen}>
        Show Toast
      </Button>

      {open && <Toast {...args} onActionClick={handleToastClose} />}
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <ToastWrapper args={args} />,
};
