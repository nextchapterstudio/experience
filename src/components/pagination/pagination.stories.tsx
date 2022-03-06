import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from './pagination'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Pagination',
  component: Pagination,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Pagination>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args}>
    <PaginationPrevious label="Previous" page={45}></PaginationPrevious>
    <PaginationNext label="Next page" page={47}></PaginationNext>
    <PaginationList>
      <PaginationLink page={1} />
      <PaginationEllipsis />
      <PaginationLink page={45} />
      <PaginationLink page={46} isCurrent />
      <PaginationLink page={47} />
      <PaginationEllipsis />
      <PaginationLink page={86} />
    </PaginationList>
  </Pagination>
)

export const PaginationExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PaginationExample.args = {}
