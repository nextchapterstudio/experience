import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ConfirmButton } from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ConfirmButton',
  component: ConfirmButton,
} as ComponentMeta<typeof ConfirmButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmButton> = (args) => <ConfirmButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Primary Button',
}
