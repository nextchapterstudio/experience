import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isPrimary: true,
  children: 'Primary Button',
}

export const Info = Template.bind({})
Info.args = {
  children: 'Info Button',
  isInfo: true,
}
export const Success = Template.bind({})
Success.args = {
  children: 'Success Button',
  isSuccess: true,
}
export const Inactive = Template.bind({})
Inactive.args = {
  children: 'Inactive Button',
  isStatic: true,
}

export const Large = Template.bind({})
Large.args = {
  isLarge: true,
  children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  isSmall: true,
  children: 'Button',
}
