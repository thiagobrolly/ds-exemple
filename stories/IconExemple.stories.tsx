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
