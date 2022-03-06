import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Control } from '../control'

describe('Container component', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(<Control>Some Text</Control>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('control')
  })
  it('should render with extra classnames', () => {
    const { container } = render(<Control className="contained">Contained Text</Control>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('control')
    expect(container.firstChild).toHaveClass('contained')
  })
  it('should render with isSmall', () => {
    const { container } = render(<Control isExpanded>Expanded Control</Control>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('control')
    expect(container.firstChild).toHaveClass('is-expanded')
  })
  it('should render with isGrouped', () => {
    const { container } = render(<Control isGrouped>Grouped Control</Control>)

    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('control')
    expect(container.firstChild).toHaveClass('is-grouped')
  })
})
