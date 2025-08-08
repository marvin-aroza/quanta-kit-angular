import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { QuantaKit } from './quanta-kit';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<QuantaKit> = {
  title: 'Example/Starter',
  component: QuantaKit,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<QuantaKit>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
};