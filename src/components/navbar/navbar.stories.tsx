import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  NavBar,
  NavBarBrand,
  NavBarBurger,
  NavBarDivider,
  NavBarEnd,
  NavBarDropDown,
  NavBarItem,
  NavBarMenu,
  NavBarStart,
} from './navbar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Navbar',
  component: NavBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavBar>

const TriggerTemplate: ComponentStory<typeof NavBar> = (args) => (
  <NavBar>
    <NavBarBrand
      title=" Next Chapter"
      src="logo-larger.png"
      href="https://thenextchapter.studio"
      target="self"
      width={48}
      height={48}
    />

    <NavBarMenu id="navbarBasicExample">
      <NavBarStart>
        <NavBarItem>
          <a>Home</a>
        </NavBarItem>
        <NavBarItem>
          <a>Documentation</a>
        </NavBarItem>
        <NavBarDropDown title="Examples">
          <NavBarItem>
            <a href="/containers">Container</a>
          </NavBarItem>
          <NavBarItem>
            <a href="/columns">Columns</a>
          </NavBarItem>
          <NavBarItem>
            <a href="/notifications">Notifications</a>
          </NavBarItem>
          <NavBarItem>
            <a href="/autocomplete">AutoComplete</a>
          </NavBarItem>
          <NavBarDivider />
          <NavBarItem>
            <a>Report an issue</a>
          </NavBarItem>
        </NavBarDropDown>
      </NavBarStart>

      <NavBarEnd>
        <NavBarItem>
          <div>Stuff</div>
        </NavBarItem>
      </NavBarEnd>
    </NavBarMenu>
  </NavBar>
)
export const TriggerTemplateExample = TriggerTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TriggerTemplateExample.args = {}
