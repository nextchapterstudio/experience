import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card, CardBody, CardHeader, CardHeaderIcon, CardFooter, CardFooterItem } from './card'
import { Content } from '../content'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card>
    <CardHeader title="Component" hasIcon></CardHeader>
    <CardBody>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </CardBody>
    <CardFooter>
      <CardFooterItem>
        <a
          href="#"
          onClick={(e) => {
            console.info('clicked')
            e.preventDefault()
          }}
        >
          Save
        </a>
      </CardFooterItem>
      <CardFooterItem>
        <a href="#">Edit</a>
      </CardFooterItem>
      <CardFooterItem>
        <a href="#">Delete</a>
      </CardFooterItem>
    </CardFooter>
  </Card>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Card Text',
}
