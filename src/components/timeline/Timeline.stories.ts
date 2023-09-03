import { Meta } from '@storybook/react';
import Timeline from './Timeline';

// type Event = {
//   date: string;
//   description: string;
// };

const meta: Meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// export const Primary = (args: TimelineProps) => (
//   <Timeline {...args} />
// );

// Primary.args = {
//   events: [
//     { date: '2023-01-01', description: 'Event 1' },
//     { date: '2023-02-01', description: 'Event 2' },
//   ],
// };
