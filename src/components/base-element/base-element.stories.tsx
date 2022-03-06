import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BaseElement } from './base-element'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/BaseElement',
  component: BaseElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BaseElement>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseElement> = (args) => <BaseElement {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'BaseElement Text',
}

export const AsASpan = Template.bind({})
AsASpan.args = {
  children: 'BaseElement Text',
  as: 'span',
}
