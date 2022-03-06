import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Column, Columns, FullColumn } from './columns'
import { Content } from '../content'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Columns',
  component: Columns,
} as ComponentMeta<typeof Columns>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Column> = (args) => (
  <Columns>
    <Column {...args}>One Half</Column>
    <Column {...args}>One Half</Column>
  </Columns>
)

export const IsHalf = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IsHalf.args = {
  isHalf: true,
}
const MultiTemplate: ComponentStory<typeof Columns> = (args) => (
  <Columns {...args}>
    <Column>One</Column>
    <Column>Two</Column>
    <Column>Three</Column>
    <Column>Four</Column>
  </Columns>
)
export const IsMulti = MultiTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IsMulti.args = {}

const SingleTemplate: ComponentStory<typeof Columns> = (args) => (
  <Columns {...args}>
    <Column isHalf>One</Column>
  </Columns>
)
export const IsSingle = SingleTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IsSingle.args = {}
