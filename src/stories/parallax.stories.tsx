import React from 'react'
import { useStyleSheet } from '@brightleaf/react-hooks/lib/use-stylesheet'
import { useScript } from '@brightleaf/react-hooks/lib/use-script'
import { useMediaQuery } from '@brightleaf/react-hooks/lib/use-media-query'
import classnames from 'classnames'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  BaseIcon,
  Box,
  Button,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Footer,
  Hero,
  HeroBody,
  MediaObject,
  MediaContent,
  MediaLeft,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  Icon,
  Title,
  SubTitle,
  Section,
  Tag,
  Tags,
  Message,
  MessageBody,
} from '..'

export const ParallaxTemplate = () => {
  useStyleSheet('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')
  useStyleSheet('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700')
  useStyleSheet('parallax.css')
  useScript('fa.js')

  return (
    <>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 ">Hello Parallax</h1>
            <h2 className="subtitle">
              A simple boilerplate for setting up parallax <br /> using the Bulma Hero container.
            </h2>
            <a href="#" className="button is-white is-medium is-inverted">
              Learn More&ensp;<i className="fad fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="parallax-1" className="hero is-large ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-6">
                <h1 className="title is-1 ">Lorem Ipsum</h1>
                <hr className="content-divider" />
                <h2 className="subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo amet
                  magni illum eum voluptate! Eveniet voluptatem nam magnam necessitatibus.
                </h2>
                <a href="#" className="button is-white is-inverted">
                  Next&ensp;<i className="fad fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="parallax-2" className="hero is-large ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <h1 className="title is-1 ">Dolor Sit</h1>
                <hr className="content-divider" />
                <h2 className="subtitle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque veritatis
                  sequi natus minima distinctio ullam deleniti quasi quisquam autem deserunt.
                </h2>
                <a href="#" className="button is-white is-inverted">
                  Next&ensp;<i className="fad fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="parallax-3" className="hero is-large ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-6">
                <h1 className="title is-1 ">Amet Consectetur</h1>
                <hr className="content-divider" />
                <h2 className="subtitle">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus nam
                  necessitatibus neque in perferendis eveniet dolorum assumenda dolores accusamus.
                </h2>
                <a href="#" className="button is-white is-inverted">
                  Next&ensp;<i className="fad fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta va">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title is-1 ">Adipisicing Elit</h1>
              <hr className="content-divider" />
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut nulla maiores,
                beatae voluptas sunt excepturi deserunt vero. Beatae est ratione quia neque
                molestias, cum asperiores quibusdam rem illum, debitis dolorem natus, eos fuga
                eveniet numquam ab officia reiciendis inventore. Tempore repudiandae exercitationem
                quisquam? Fugiat!
              </h2>
            </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input is-medium" type="text" placeholder="Jon Snow" />
                </div>
              </div>
              <br />
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="email"
                    placeholder="jon@winterfell.com"
                  />
                </div>
              </div>
              <br />
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-white is-rounded is-outlined">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source
            code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is
            licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>
            .
          </p>
        </div>
      </footer>
    </>
  )
}

export default {
  title: 'Templates/Parallax',
  component: ParallaxTemplate,
} as ComponentMeta<typeof ParallaxTemplate>
