import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon, BaseIcon, StackedIcons } from './icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const DefaultIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultIcon.args = {
  icon: 'home',
  fa: true,
}
export const ChevronRightIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChevronRightIcon.args = {
  icon: 'chevron-right',
  fa: true,
}

export const ChevronLeftIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChevronLeftIcon.args = {
  icon: 'chevron-left',
  fa: true,
}

export const CogIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CogIcon.args = {
  icon: 'cog',
  fa: true,
}
export const CogsIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CogsIcon.args = {
  icon: 'cogs',
  fas: true,
}
