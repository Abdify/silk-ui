import { Meta, StoryObj } from '@storybook/react';
import Timeline from './Timeline';

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Timeline',
  },
};
