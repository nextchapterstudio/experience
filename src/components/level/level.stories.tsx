import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Level, LevelItem, LevelLeft, LevelRight } from './level'
import { Icon } from '../icon/icon'
import { Title } from '../title/title'
import { Heading } from '../heading/heading'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Level',
  component: Level,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Level>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Level> = (args) => (
  <Level isMobile>
    <LevelLeft>
      <LevelItem>
        <a>
          <Icon isSmall fas icon="reply" />
        </a>
      </LevelItem>
      <LevelItem>
        <a>
          <Icon isSmall fas icon="retweet" />
        </a>
      </LevelItem>
      <LevelItem>
        <a>
          <Icon isSmall fas icon="heart" />
        </a>
      </LevelItem>
    </LevelLeft>
  </Level>
)

export const LevelExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LevelExample.args = {}

const TextTemplate: ComponentStory<typeof Level> = (args) => (
  <Level>
    <LevelItem hasTextCentered>
      <div>
        <div>
          <Heading>Tweets</Heading>
          <Title as="p">3,456</Title>
        </div>
      </div>
    </LevelItem>
    <LevelItem hasTextCentered>
      <div>
        <div>
          <Heading>Following</Heading>
          <Title as="p">123</Title>
        </div>
      </div>
    </LevelItem>
    <LevelItem hasTextCentered>
      <div>
        <div>
          <Heading>Followers</Heading>
          <Title as="p">456K</Title>
        </div>
      </div>
    </LevelItem>
    <LevelItem hasTextCentered>
      <div>
        <div>
          <Heading>Likes</Heading>
          <Title as="p">789</Title>
        </div>
      </div>
    </LevelItem>
  </Level>
)
export const AnotherLevelExample = TextTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AnotherLevelExample.args = {}
