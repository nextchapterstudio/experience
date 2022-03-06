import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tile } from './tile'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tile',
  component: Tile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Tile>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args}>This is a tile</Tile>

export const TileExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TileExample.args = {}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TilesTemplate: ComponentStory<typeof Tile> = (args) => (
  <Tile isAncestor>
    <Tile isVertical size="8">
      <Tile>
        <Tile isParent isVertical>
          <Tile isChild isNotification isPrimary>
            <p>Top tile</p>
          </Tile>
          <Tile isChild isNotification isWarning>
            <p className="title">...tiles</p>
            <p className="subtitle">Bottom tile</p>
          </Tile>
        </Tile>
        <Tile isParent>
          <Tile isChild isNotification isInfo>
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </Tile>
        </Tile>
      </Tile>
      <Tile isParent>
        <Tile isChild isNotification isDanger>
          <p className="title">Wide tile</p>
          <p className="subtitle">Aligned with the right tile</p>
        </Tile>
      </Tile>
    </Tile>
    <Tile isParent>
      <Tile isChild isNotification isSuccess>
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
      </Tile>
    </Tile>
  </Tile>
)
export const TilesTemplateExample = TilesTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TilesTemplateExample.args = {}
