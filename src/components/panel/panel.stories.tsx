import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Panel, PanelBlock, PanelTabs } from './panel'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Panel',
  component: Panel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Panel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Panel> = (args) => (
  <Panel heading="repositories" isPrimary={args.isPrimary}>
    <PanelBlock>BLOCK</PanelBlock>
    <PanelTabs>
      <a className="is-active">all</a>
      <a>public</a>
      <a>private</a>
      <a>sources</a>
      <a>forks</a>
    </PanelTabs>
    <PanelBlock as="a" isActive>
      bulma
    </PanelBlock>
    <PanelBlock as="a">marksheet</PanelBlock>
    <PanelBlock as="a">minireset.css</PanelBlock>
    <PanelBlock as="a">jgthms.github.io</PanelBlock>
    <PanelBlock as="a">daniellowtw/infboard</PanelBlock>
    <PanelBlock as="a">mojs</PanelBlock>
    <PanelBlock>Do something</PanelBlock>
  </Panel>
)

export const PanelExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PanelExample.args = {
  isPrimary: true,
}
