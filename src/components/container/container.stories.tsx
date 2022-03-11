import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Container } from './'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Container',
  component: Container,
} as ComponentMeta<typeof Container>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isFluid: true,
  children: (
    <div className="notification">
      This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
      viewport size.
    </div>
  ),
}

export const WideScreen = Template.bind({})
WideScreen.args = {
  isWideScreen: true,
  children: (
    <div className="notification">
      This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code>{' '}
      breakpoint.
    </div>
  ),
}
