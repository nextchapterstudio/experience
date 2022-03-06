import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Hero, HeroBody, HeroFooter, HeroHead } from '../hero'

describe('The Hero Component', () => {
  afterEach(cleanup)
  it('should render A Full Hero with just the hero', () => {
    const { container } = render(<Hero>test</Hero>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('hero')
    expect(container.firstChild?.firstChild).toHaveClass('hero-body')
  })
  it('should render A Hero with the head element', () => {
    const { container } = render(<Hero><HeroHead>The Head</HeroHead></Hero>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('hero')
    expect(container.firstChild?.firstChild).toHaveClass('hero-head')
  })
  it('should render A Hero with the head body and footer', () => {
    const { container } = render(<Hero><HeroHead>The Head</HeroHead><HeroBody>Body</HeroBody><HeroFooter>Foot</HeroFooter></Hero>)

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('hero')
    expect(container.firstChild?.firstChild).toHaveClass('hero-head')
    expect(container.firstChild?.firstChild?.nextSibling).toHaveClass('hero-body')
    expect(container.firstChild?.firstChild?.nextSibling?.nextSibling).toHaveClass('hero-foot')
  })
})
