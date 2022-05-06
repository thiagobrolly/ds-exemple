import { Meta, Story } from '@storybook/react';
import { DialogModal } from '.';

export default {
  title: 'Components/DialogModal',
  component: DialogModal,
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    marginTop: '',
    marginBottom: '',
  },
} as Meta;

export const Default: Story = (args) => <DialogModal {...args} />;
