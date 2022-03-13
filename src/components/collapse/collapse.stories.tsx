import React, { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Collapse } from './collapse'
import { useToggle } from '../../hooks'
import {
  Block,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardHeaderIcon,
  Column,
  Columns,
  Content,
  Control,
  Icon,
  Panel,
  PanelBlock,
  PanelTabs,
} from '../'

const Demo: FC = () => {
  const [shown, toggle] = useToggle(false)
  return (
    <div>
      <Collapse isShown={shown}>
        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{' '}
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum
        rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
      </Collapse>
      {!shown && (
        <button
          className="button"
          onClick={(e) => {
            toggle()
          }}
        >
          Show
        </button>
      )}
      {shown && (
        <button
          className="button"
          onClick={(e) => {
            toggle()
          }}
        >
          Hide
        </button>
      )}
    </div>
  )
}

const PanelDemo: FC = () => {
  const [shown, toggle] = useToggle(false)
  return (
    <>
      <Block>
        {!shown && (
          <Button
            onClick={(e) => {
              toggle()
            }}
          >
            Show
          </Button>
        )}
        {shown && (
          <Button
            onClick={(e) => {
              toggle()
            }}
          >
            Hide
          </Button>
        )}
      </Block>
      <Panel heading="repositories">
        <PanelBlock>
          <Control hasIconsLeft>
            <input className="input is-small" type="text" placeholder="search" />
            <Icon isSmall isLeft fas icon="search"></Icon>
          </Control>
        </PanelBlock>

        <Collapse isPrimary isShown={shown}>
          <PanelTabs>
            <a className="is-active">all</a>
            <a>public</a>
            <a>private</a>
            <a>sources</a>
            <a>forks</a>
          </PanelTabs>
          <PanelBlock as="a" isActive>
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            bulma
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            marksheet
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            minireset.css
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="book"></Icon>
            jgthms.github.io
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>
            daniellowtw/infboard
          </PanelBlock>
          <PanelBlock as="a">
            <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>
            mojs
          </PanelBlock>
          <PanelBlock as="label">
            <input type="checkbox"></input>
            remember me
          </PanelBlock>
          <PanelBlock>
            <Button isLink isOutlined isFullWidth>
              reset all filters
            </Button>
          </PanelBlock>
        </Collapse>
      </Panel>
    </>
  )
}

const CardDemo: FC = () => {
  const [shown, toggle] = useToggle(true)
  return (
    <Columns>
      <Column isOneThird>
        <Card>
          <CardHeader title="Component">
            <CardHeaderIcon
              onClick={(e) => {
                e.preventDefault()
                toggle()
              }}
            >
              <Icon icon={shown ? 'angle-down' : 'angle-up'} fas />
            </CardHeaderIcon>
          </CardHeader>
          <Collapse isShown={shown}>
            <CardBody>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
                mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </Content>
            </CardBody>
            <CardFooter>
              <CardFooterItem>
                <a
                  href="#"
                  onClick={(e) => {
                    console.info('clicked')
                    e.preventDefault()
                  }}
                >
                  Save
                </a>
              </CardFooterItem>
              <CardFooterItem>
                <a href="#">Edit</a>
              </CardFooterItem>
              <CardFooterItem>
                <a href="#">Delete</a>
              </CardFooterItem>
            </CardFooter>
          </Collapse>
        </Card>
      </Column>
    </Columns>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Collapse',
  component: Collapse,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Collapse>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapse> = (args) => <Demo />

export const CollapseExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CollapseExample.args = {}

const PanelTemplate: ComponentStory<typeof Collapse> = (args) => <PanelDemo />

export const PanelExample = PanelTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PanelExample.args = {}

const CardTemplate: ComponentStory<typeof Collapse> = (args) => <CardDemo />

export const CardExample = CardTemplate.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardExample.args = {}
