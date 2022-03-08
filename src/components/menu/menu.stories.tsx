import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Menu, MenuLabel, MenuList, MenuListItem } from './menu'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = () => (
  <Menu>
    <MenuLabel>General</MenuLabel>
    <MenuList className="menu-list">
      <MenuListItem>
        <a>Dashboard</a>
      </MenuListItem>
      <MenuListItem>
        <a>Customers</a>
      </MenuListItem>
    </MenuList>
    <MenuLabel>Administration</MenuLabel>
    <MenuList>
      <MenuListItem>
        <a>Team Settings</a>
      </MenuListItem>
      <MenuListItem>
        <a className="is-active">Manage Your Team</a>
        <ul>
          <li>
            <a>Members</a>
          </li>
          <li>
            <a>Plugins</a>
          </li>
          <li>
            <a>Add a member</a>
          </li>
        </ul>
      </MenuListItem>
      <MenuListItem>
        <a>Invitations</a>
      </MenuListItem>
      <MenuListItem>
        <a>Cloud Storage Environment Settings</a>
      </MenuListItem>
      <MenuListItem>
        <a>Authentication</a>
      </MenuListItem>
    </MenuList>

    <MenuLabel>Transactions</MenuLabel>
    <MenuList>
      <MenuListItem>
        <a>Payments</a>
      </MenuListItem>
      <MenuListItem>
        <a>Transfers</a>
      </MenuListItem>
      <MenuListItem>
        <a>Balance</a>
      </MenuListItem>
    </MenuList>
  </Menu>
)

export const MenuExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
