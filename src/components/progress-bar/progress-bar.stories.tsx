import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProgressBar } from './progress-bar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProgressBar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />

export const ProgressBarExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProgressBarExample.args = {
  value: 20,
}
