import { Story, Meta } from '@storybook/react/types-6-0';
import { PlOutlinePlusInfo } from '@thiago_brolly/icons';
import { Tooltip, TooltipProps } from '.';
// import { TooltipProps } from './types';

export default {
  title: 'Popover/Tooltip',
  component: Tooltip,
  args: {
    trigger: 'Tooltip',
    children: 'Content',
    className: '',
  },
  argTypes: {
    colorContent: { control: 'color' },
  },
} as Meta;

export const Default: Story<TooltipProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Tooltip {...args} />
  </div>
);

export const Example: Story<TooltipProps> = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(90deg, rgba(33,90,255,1) 20%, rgba(0,151,255,1) 60%)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <Tooltip
      trigger={
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          <PlOutlinePlusInfo />
        </span>
      }
    >
      Warning
    </Tooltip>
  </div>
);

Example.argTypes = {
  trigger: { control: { disable: true } },
  children: { control: { disable: true } },
  className: { control: { disable: true } },
  colorContent: { control: { disable: true } },
};
