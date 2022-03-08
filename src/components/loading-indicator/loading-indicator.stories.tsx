import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LoadingIndicator } from './loading-indicator'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LoadingIndicator',
  component: LoadingIndicator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LoadingIndicator>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingIndicator> = (args) => <LoadingIndicator {...args} />

export const LoadingIndicatorExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoadingIndicatorExample.args = {
  children: ' ',
}
