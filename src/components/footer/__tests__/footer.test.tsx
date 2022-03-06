import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Footer } from '../footer'

describe('Container component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(<Footer>Some Text</Footer>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('footer')
  })
  it('should render with extra classnames', () => {
    const { container } = render(<Footer className="contained">Contained Text</Footer>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('footer')
    expect(container.firstChild).toHaveClass('contained')
  })
  it('should render with isActive', () => {
    const { container } = render(<Footer isActive>Active Control</Footer>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('footer')
    expect(container.firstChild).toHaveClass('is-active')
  })
  it('should render with isDanger', () => {
    const { container } = render(<Footer isDanger>Danger Control</Footer>)

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('footer')
    expect(container.firstChild).toHaveClass('is-danger')
  })
})
