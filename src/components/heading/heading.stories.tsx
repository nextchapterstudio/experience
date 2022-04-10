import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from './heading'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Heading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}>Header Text</Heading>

export const HeadingExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeadingExample.args = {}
