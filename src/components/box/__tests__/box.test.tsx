import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Box } from '../box'

describe('The Box Component', () => {
  afterEach(cleanup)
  it('should render with the class basic', () => {
    const { container } = render(<Box className="basic">test</Box>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('box')
    expect(container.firstChild).toHaveClass('basic')
  })
})
