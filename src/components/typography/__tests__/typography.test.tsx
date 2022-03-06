import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Typography } from '../typography'

describe('The Typography Component', () => {
  afterEach(cleanup)
  it('should render a div with the class basic', () => {
    const { container } = render(<Typography className='basic'>test</Typography>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('basic')
    expect(container.firstChild).toHaveClass('typography')
  })

  it('should render a span with the class basic', () => {
    const { container } = render(<Typography as="span" className='basic' >test</Typography>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('basic')
    expect(container.firstChild).toHaveClass('typography')
  })
  it('should render a div with the html attribute', () => {
    const { container } = render(<Typography className='basic' aria-hidden>test</Typography>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveAttribute('aria-hidden')
    expect(container.firstChild).toHaveClass('typography')
  })
  it('should render as a p tag', () => {
    const { container } = render(<Typography className='basic' as="p">test</Typography>)
    expect(container).toMatchSnapshot()
    expect(container).toContainHTML('<p')
    expect(container.firstChild).toHaveClass('typography')
  })
})
