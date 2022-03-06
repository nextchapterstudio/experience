import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { BaseElement } from '../base-element'

describe('The Base Element Component', () => {
  afterEach(cleanup)
  it('should render a div with the class basic', () => {
    const { container } = render(<BaseElement className='basic'>test</BaseElement>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('basic')
  })

  it('should render a span with the class basic', () => {
    const { container } = render(<BaseElement as="span" className='basic' >test</BaseElement>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('basic')
  })
  it('should render a div with the html attribute', () => {
    const { container } = render(<BaseElement className='basic' aria-hidden>test</BaseElement>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveAttribute('aria-hidden')
  })
  it('should render as a p tag', () => {
    const { container } = render(<BaseElement className='basic' as="p">test</BaseElement>)
    expect(container).toMatchSnapshot()
    expect(container).toContainHTML('<p')
  })
  it('should add an onclick', async () => {
    let value = 0
    const { container } = render(<BaseElement className='basic' onClick={()=> {
      value = 2
    }}>test</BaseElement>)
    fireEvent.click(await screen.findByText('test'))
    expect(container).toMatchSnapshot()
    expect(container).toContainHTML('<p')
    expect(value).toBe(2)
  })
})
