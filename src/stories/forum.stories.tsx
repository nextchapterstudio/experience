import React from 'react'
import classnames from 'classnames'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useScript } from '@brightleaf/react-hooks/lib/use-script'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  BaseIcon,
  Box,
  Button,
  Card,
  CardImageContainer,
  CardBody,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Footer,
  Hero,
  HeroHead,
  HeroBody,
  HeroFooter,
  Image,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  NavBar,
  NavBarStart,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarBurger,
  NavBarDropDown,
  NavBarItem,
  NavBarDivider,
  Icon,
  Tile,
  Title,
  SubTitle,
  Tag,
  Tags,
  Tabs,
  TabItem,
  MediaObject,
  MediaContent,
  MediaLeft,
  MediaRight,
} from '..'

export const ForumTemplate = () => {
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('forum.css')
  return (
    <>
      <NavBar className="navbar is-white topNav">
        <Container className="container">
          <NavBarBrand src="logo-larger.png" width={48} height={48} />
          <NavBarMenu id="topNav" className="navbar-menu">
            <NavBarStart>
              <NavBarItem>
                <a href="#COVER">Home</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#LANDING">Landing</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#BLOG">Blog</a>
              </NavBarItem>
              <NavBarItem>
                <a href="IMAGE_TIMELINE">Album</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#CHEATSHEET">Cheatsheet</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#ADMIN">Admin</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#KANBAN">Kanban</a>
              </NavBarItem>
            </NavBarStart>
            <NavBarEnd>
              <NavBarItem>
                <div>
                  <Field isGrouped>
                    <Control>
                      <Button isSmall isAnchor>
                        <Icon icon="user-plus" fas />
                        <span>Register</span>
                      </Button>
                    </Control>
                    <Control>
                      <Button className="button is-small is-info is-outlined">
                        <Icon icon="user" fas />
                        <span>Login</span>
                      </Button>
                    </Control>
                  </Field>
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </Container>
      </NavBar>
      <NavBar isWhite>
        <Container className="container">
          <NavBarMenu className="navbar-menu">
            <NavBarStart className="navbar-start">
              <NavBarItem isActive>
                <a href="#">Popular</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#">Recent</a>
              </NavBarItem>
              <NavBarItem>
                <a href="#">Rising</a>
              </NavBarItem>
            </NavBarStart>
            <NavBarEnd className="navbar-end">
              <NavBarItem>
                <div>
                  <input className="input" type="search" placeholder="Search forum..." />
                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </Container>
      </NavBar>
      <Container>
        <Columns>
          <Column is="3">
            <Button isAnchor isPrimary isLarge className="is-block is-alt" href="#">
              New Post
            </Button>
            <Menu className="menu">
              <MenuLabel>Tags</MenuLabel>
              <MenuList>
                <MenuListItem>
                  <Tag isPrimary isMedium>
                    Dashboard
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag className="is-link" isMedium>
                    Customers
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isLight isDanger isMedium>
                    Authentication
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isDark isMedium>
                    Payments
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isSuccess isMedium>
                    Transfers
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isWarning isMedium>
                    Balance
                  </Tag>
                </MenuListItem>
                <MenuListItem>
                  <Tag isMedium>Question</Tag>
                </MenuListItem>
              </MenuList>
            </Menu>
          </Column>
          <Column is="9">
            <Box className="content">
              <article className="post">
                <h4>Bulma: How do you center a button in a box?</h4>
                <MediaObject as="div">
                  <MediaLeft as="div">
                    <Image as="p" is32 src="http://bulma.io/images/placeholders/128x128.png" />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <p>
                        <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                        <Tag as="span">Question</Tag>
                      </p>
                    </Content>
                  </MediaContent>
                  <MediaRight>
                    <span className="has-text-grey-light">
                      <BaseIcon icon="comments" fa /> 1
                    </span>
                  </MediaRight>
                </MediaObject>
              </article>
              <article className="post">
                <h4>How can I make a bulma button go full width?</h4>
                <MediaObject as="div">
                  <MediaLeft as="div">
                    <Image as="p" is32 src="http://bulma.io/images/placeholders/128x128.png" />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <p>
                        <a href="#">@red</a> replied 40 minutes ago &nbsp;
                        <Tag as="span">Question</Tag>
                      </p>
                    </Content>
                  </MediaContent>
                  <MediaRight>
                    <span className="has-text-grey-light">
                      <BaseIcon icon="comments" fa /> 0
                    </span>
                  </MediaRight>
                </MediaObject>
              </article>
              <article className="post">
                <h4>
                  TypeError: Data must be a string or a buffer when trying touse vue-bulma-tabs
                </h4>
                <MediaObject as="div">
                  <MediaLeft as="div">
                    <Image as="p" is32 src="http://bulma.io/images/placeholders/128x128.png" />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <p>
                        <a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
                        <Tag as="span">Question</Tag>
                      </p>
                    </Content>
                  </MediaContent>
                  <MediaRight>
                    <span className="has-text-grey-light">
                      <BaseIcon icon="comments" fa /> 13
                    </span>
                  </MediaRight>
                </MediaObject>
              </article>
              <article className="post">
                <h4>How to vertically center elements in Bulma?</h4>
                <MediaObject as="div">
                  <MediaLeft as="div">
                    <Image as="p" is32 src="http://bulma.io/images/placeholders/128x128.png" />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <p>
                        <a href="#">@brown</a> replied 3 hours ago &nbsp;
                        <Tag as="span">Question</Tag>
                      </p>
                    </Content>
                  </MediaContent>
                  <MediaRight>
                    <span className="has-text-grey-light">
                      <BaseIcon icon="comments" fa /> 2
                    </span>
                  </MediaRight>
                </MediaObject>
              </article>
              <article className="post">
                <h4>
                  I'm trying to use hamburger menu on bulma css, but it doesn't work. What is wrong?
                </h4>
                <MediaObject as="div">
                  <MediaLeft as="div">
                    <Image as="p" is32 src="http://bulma.io/images/placeholders/128x128.png" />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <p>
                        <a href="#">@hamburgler</a> replied 5 hours ago &nbsp;
                        <Tag as="span">Question</Tag>
                      </p>
                    </Content>
                  </MediaContent>
                  <MediaRight>
                    <span className="has-text-grey-light">
                      <BaseIcon icon="comments" fa /> 2
                    </span>
                  </MediaRight>
                </MediaObject>
              </article>
              <article className="post">
                <h4>How to make tiles wrap with Bulma CSS?</h4>
                <MediaObject as="div">
                  <MediaLeft as="div">
                    <Image as="p" is32 src="http://bulma.io/images/placeholders/128x128.png" />
                  </MediaLeft>
                  <MediaContent>
                    <Content>
                      <p>
                        <a href="#">@rapper</a> replied 3 hours ago &nbsp;
                        <Tag as="span">Question</Tag>
                      </p>
                    </Content>
                  </MediaContent>
                  <MediaRight>
                    <span className="has-text-grey-light">
                      <BaseIcon icon="comments" fa /> 2
                    </span>
                  </MediaRight>
                </MediaObject>
              </article>
            </Box>
          </Column>
        </Columns>
      </Container>
      <Footer>
        <Container>
          <Content hasTextCentered>
            <Columns isMobile isCentered>
              <Field isGrouped isGroupedMultiline>
                <Control>
                  <Tags hasAddons>
                    <Tag isLink href="https://github.com/dansup/bulma-templates">
                      Bulma Templates
                    </Tag>
                    <Tag isLight>Daniel Supernault</Tag>
                  </Tags>
                </Control>
                <Control>
                  <Tags hasAddons>
                    <Tag isLink href="https://github.com/brightleaf/elements">
                      Brightleaf/Elements
                    </Tag>
                    <Tag isLight>Kevin Isom</Tag>
                  </Tags>
                </Control>
                <Control className="control">
                  <Tags hasAddons className="tags has-addons">
                    <Tag className="is-link">The source code is licensed</Tag>
                    <Tag isLight>
                      MIT &nbsp;<BaseIcon fab icon="github"></BaseIcon>
                    </Tag>
                  </Tags>
                </Control>
              </Field>
            </Columns>
          </Content>
        </Container>
      </Footer>
    </>
  )
}
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Forum',
  component: ForumTemplate,
} as ComponentMeta<typeof ForumTemplate>
