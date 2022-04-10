import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Field } from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Field',
  component: Field,
} as ComponentMeta<typeof Field>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Primary Button',
}
