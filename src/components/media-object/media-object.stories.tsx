import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MediaContent, MediaLeft, MediaObject, MediaRight } from './media-object'
import { Content } from '../content'
import { Image } from '../image/image'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MediaObject',
  component: MediaContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MediaContent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MediaContent> = (args) => (
  <MediaObject>
    <MediaLeft>
      <Image is64 src="https://bulma.io/images/placeholders/128x128.png" alt="THis is an image" />
    </MediaLeft>
    <MediaContent>
      <Content className="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
          pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
          facilisis.
        </p>
      </Content>
    </MediaContent>
    <MediaRight>
      <button>Del</button>
    </MediaRight>
  </MediaObject>
)

export const SimpleMediaObjectExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleMediaObjectExample.args = {}
