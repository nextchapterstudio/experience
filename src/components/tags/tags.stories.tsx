import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tag, Tags } from './tags'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Tag>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args}>Tag Text</Tag>

export const TagExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TagExample.args = {}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TagsTemplate: ComponentStory<typeof Tags> = (args) => (
  <Tags {...args}>
    <Tag>Tag Text</Tag>
    <Tag>Tag Text</Tag>
  </Tags>
)
export const TagsTemplateExample = TagsTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TagsTemplateExample.args = {}
