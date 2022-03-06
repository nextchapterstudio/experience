import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Number } from './number'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Number',
  component: Number,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Number>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Number> = (args) => <Number {...args}>21</Number>

export const NumberExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NumberExample.args = {}
