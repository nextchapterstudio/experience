import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Notice } from './notice'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Notice',
  component: Notice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Notice>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Notice> = (args) => (
  <Notice isPrimary isShown duration={3000} {...args}>
    <b>Default</b> lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
    <b>Pellentesque risus mi</b>, elit
  </Notice>
)

export const PrimaryNoticeExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryNoticeExample.args = {
  isShown: true,
}
