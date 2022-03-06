import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Notification } from './notification'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Notification',
  component: Notification,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Notification>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification
    isPrimary
    isShown={args.isShown}
    onDismissed={() => {
      console.log('dis')
    }}
  >
    Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum
    rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
    efficitur. Sit amet, consectetur adipiscing elit
  </Notification>
)

export const ModelExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModelExample.args = {
  isShown: true,
}

const InfoTemplate: ComponentStory<typeof Notification> = (args) => (
  <Notification
    isInfo
    isShown
    onDismissed={() => {
      console.log('dis')
    }}
  >
    Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum
    rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}
    efficitur. Sit amet, consectetur adipiscing elit
  </Notification>
)
export const InfoTemplateExample = InfoTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InfoTemplateExample.args = {}
