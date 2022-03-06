import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Image } from './image'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Image',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Image>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const SampleImage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SampleImage.args = {
  src: 'https://via.placeholder.com/128',
  alt: 'The Alt Text',
  is128: true,
}

export const LargeImage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SampleImage.args = {
  src: 'https://via.placeholder.com/900',
  alt: 'The Alt Text',
}

export const Image16by9 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Image16by9.args = {
  src: 'https://via.placeholder.com/480x270',
  alt: 'The Alt Text',
  is16by9: true,
}
