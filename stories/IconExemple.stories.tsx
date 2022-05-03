import { Meta, Story } from '@storybook/react';
import {
  PlOutlinePlusCircle,
  SVGRProps,
} from '../packages/ui-icons/src/components/PlOutlinePlusCircle';

export default {
  title: 'Components/Icons',
  component: PlOutlinePlusCircle,
  args: {
    color: '#215aff',
    size: 25,
  },
} as Meta;

export const Primary: Story<SVGRProps> = (args) => (
  <PlOutlinePlusCircle {...args} />
);
// Primary.args = {
//   children: 'Primary',
//   appearance: 'primary',
// };

// export const Secondary: Story<ButtonProps> = (args) => <Button {...args} />;
// Secondary.args = {
//   children: 'Secondary',
//   appearance: 'secondary',
// };

// export const Outline: Story<ButtonProps> = (args) => <Button {...args} />;
// Outline.args = {
//   children: 'Outline',
//   appearance: 'outline',
// };

// export const Approve: Story<ButtonProps> = (args) => <Button {...args} />;
// Approve.args = {
//   children: 'Approve',
//   appearance: 'approve',
// };

// export const Cancel: Story<ButtonProps> = (args) => <Button {...args} />;
// Cancel.args = {
//   children: 'Cancel',
//   appearance: 'cancel',
// };

// export const asLink: Story = (args) => <Button {...args} />;
// asLink.args = {
//   children: 'Link',
//   as: 'a',
//   href: '#',
// };

// asLink.argTypes = {
//   as: { type: 'string' },
// };

// export const LinkChildren: Story<ButtonProps> = (args) => (
//   <Button {...args}>
//     <a href="/">Link</a>
//   </Button>
// );
// LinkChildren.args = {
//   appearance: 'secondary',
//   linkStyle: true,
// };
