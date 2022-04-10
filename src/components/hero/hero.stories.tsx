import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Hero, HeroBody, HeroFooter, HeroHead } from './'
import { Title, SubTitle } from '../'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Hero',
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Hero>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const BasicTemplate = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicTemplate.args = {
  children: 'Simple Hero',
}

const FullHeroTemplate: ComponentStory<typeof Hero> = (args) => (
  <Hero {...args}>
    <HeroHead>The Head</HeroHead>
    <HeroBody>
      <div>
        <Title as="p">The Hero</Title>
        <SubTitle as="p">We Need</SubTitle>
      </div>
    </HeroBody>
    <HeroFooter>Foot</HeroFooter>
  </Hero>
)

export const FullHeroExample = FullHeroTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullHeroExample.args = {
  isPrimary: true,
  isFullHeight: true,
}
