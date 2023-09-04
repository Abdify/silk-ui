import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    events: [
      { date: '2023-01-01', description: 'Event 1' },
      { date: '2023-02-01', description: 'Event 2' },
    ],
  },
};
