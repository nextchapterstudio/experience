import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TabItem, Tabs, TabList } from './tabs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tabs',
  component: Tabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Tabs>

const TabsTemplate: ComponentStory<typeof Tabs> = (args) => (
  <Tabs>
    <TabList>
      <TabItem isActive>
        <a href="#">Pictures</a>
      </TabItem>
      <TabItem>
        <a href="#">Music</a>
      </TabItem>
      <TabItem>
        <a href="#">Videos</a>
      </TabItem>
      <TabItem>
        <a href="#">Documents</a>
      </TabItem>
    </TabList>
  </Tabs>
)
export const TabsTemplateExample = TabsTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TabsTemplateExample.args = {}
