import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NavigationView } from './navigation-view'
import { Menu, MenuLabel, MenuList, MenuListItem } from '../menu/menu'
import { Icon } from '../icon/icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/NavigationView',
  component: NavigationView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavigationView>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationView> = (args) => (
  <NavigationView {...args}>Stuff </NavigationView>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

const MenuNavTemplate: ComponentStory<typeof NavigationView> = (args) => (
  <NavigationView>
    <Menu>
      <MenuLabel>General</MenuLabel>
      <MenuList className="menu-list">
        <MenuListItem>
          <a>
            <Icon fas icon="box" /> Dashboard
          </a>
        </MenuListItem>
        <MenuListItem>
          <a>
            <Icon fas icon="address-card" /> Customers
          </a>
        </MenuListItem>
      </MenuList>
      <MenuLabel>Administration</MenuLabel>
      <MenuList>
        <MenuListItem>
          <a>
            <Icon fas icon="cog" />
            Team Settings
          </a>
        </MenuListItem>
        <MenuListItem>
          <a className="is-active">
            <Icon fas icon="child" />
            Manage Your Team
          </a>
        </MenuListItem>
        <MenuListItem>
          <a>
            <Icon fas icon="at" /> Invitations
          </a>
        </MenuListItem>
        <MenuListItem>
          <a>
            <Icon fas icon="cloud" /> Cloud Storage Settings
          </a>
        </MenuListItem>
        <MenuListItem>
          <a>
            <Icon fas icon="user" /> Authentication
          </a>
        </MenuListItem>
      </MenuList>
      <MenuLabel>Transactions</MenuLabel>
      <MenuList>
        <MenuListItem>
          <a>
            <Icon fas icon="credit-card" /> Payments
          </a>
        </MenuListItem>
        <MenuListItem>
          <a>
            <Icon fas icon="align-center" /> Transfers
          </a>
        </MenuListItem>
        <MenuListItem>
          <a>
            <Icon fas icon="briefcase" /> Balance
          </a>
        </MenuListItem>
      </MenuList>
    </Menu>
  </NavigationView>
)

export const MenuNavExample = MenuNavTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MenuNavExample.args = {}
