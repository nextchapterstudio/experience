import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DeleteButton } from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DeleteButton',
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DeleteButton> = (args) => <DeleteButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Delete Button',
}
