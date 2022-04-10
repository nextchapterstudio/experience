import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AutoComplete, ItemProp } from './autocomplete'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AutoComplete>

const items = [
  { name: 'First', id: 1 },
  { name: 'Second', id: 2 },
  { name: 'Third', id: 3 },
]

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete
    htmlId="TheAUtoId"
    list={items}
    onSelect={(item) => {
      console.info('Selected Item', item)
    }}
  />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}
