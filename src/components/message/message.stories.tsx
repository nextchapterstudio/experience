import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MessageHeader, MessageBody, Message } from './message'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Message',
  component: Message,
} as ComponentMeta<typeof Message>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = () => (
  <Message
    isShown={true}
    onClose={() => {
      console.log('onClose called')
    }}
  >
    <MessageHeader
      onDeleteClick={() => {
        console.log('clicked')
      }}
    >
      Messages
    </MessageHeader>
    <MessageBody>Message body</MessageBody>
  </Message>
)

export const MessageExample = Template.bind({})

const TemplatePrimary: ComponentStory<typeof Message> = () => (
  <Message
    isShown={true}
    isPrimary
    onClose={() => {
      console.log('onClose called')
    }}
  >
    <MessageHeader
      onDeleteClick={() => {
        console.log('clicked')
      }}
    >
      Messages
    </MessageHeader>
    <MessageBody>Message body</MessageBody>
  </Message>
)

export const MessagePrimaryExample = TemplatePrimary.bind({})
