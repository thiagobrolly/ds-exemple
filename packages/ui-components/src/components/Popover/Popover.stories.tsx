import { Meta, Story } from '@storybook/react';
import { Popover } from '.';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    marginTop: '',
    marginBottom: '',
  },
} as Meta;

export const Default: Story = (args) => <Popover {...args} />;
