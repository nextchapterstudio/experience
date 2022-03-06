import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Title } from './title'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Title',
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Title>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => <Title {...args}>Title Text</Title>

export const TitleExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TitleExample.args = {}
