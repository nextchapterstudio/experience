import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Carousel, CarouselItem } from './carousel'

import { Hero, Image } from '..'

import './stories.css'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel>
    <CarouselItem>
      <div>The First Slide</div>
    </CarouselItem>
    <CarouselItem>
      <div>The Second Slide</div>
    </CarouselItem>
    <CarouselItem>
      <div>The Third Slide</div>
    </CarouselItem>
    <CarouselItem>
      <div>The Fourth Slide</div>
    </CarouselItem>
  </Carousel>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Carousel Text',
}

const HeroSlidesTemplate: ComponentStory<typeof Carousel> = (args) => (
  <Carousel>
    <CarouselItem>
      <Hero isInfo>A Hero Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isDanger>Another Hero Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero className="hero-bg">Background Image</Hero>
    </CarouselItem>
    <CarouselItem>
      <Image src="https://placedog.net/1200/210" alt="dogs" />
    </CarouselItem>
  </Carousel>
)

export const HeroSlidesExample = HeroSlidesTemplate.bind({})

const AutoplayTemplate: ComponentStory<typeof Carousel> = (args) => (
  <Carousel autoplay duration={args.duration}>
    <CarouselItem>
      <Hero isInfo>A Hero Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isDanger>Another Hero Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero className="hero-bg">Background Image</Hero>
    </CarouselItem>
    <CarouselItem>
      <Image src="https://placedog.net/1200/210" alt="dogs" />
    </CarouselItem>
  </Carousel>
)

export const AutoplayExample = AutoplayTemplate.bind({})
AutoplayExample.args = {
  duration: 8000,
}

const ShowMultipleSlidesTemplate: ComponentStory<typeof Carousel> = (args) => (
  <Carousel slidesToShow={args.slidesToShow}>
    <CarouselItem>
      <Hero isInfo>The First Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isPrimary>The Second Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero className="hero-bg">The Third Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isLink>The Fourth Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isDanger>The Fifth Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isBold>The Sixth Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isDark>The Seventh Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero isWarning>The Eighth Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero>The Ninth Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero>The Tenth Slide</Hero>
    </CarouselItem>
    <CarouselItem>
      <Hero>The Eleventh Slide</Hero>
    </CarouselItem>
  </Carousel>
)

export const ShowMultipleSlidesExample = ShowMultipleSlidesTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ShowMultipleSlidesExample.args = {
  slidesToShow: 2,
}
