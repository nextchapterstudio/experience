import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Collapse } from '../collapse'

describe('The Collapse Component', () => {
  afterEach(cleanup)
  it('should render a div with the class collapsed', () => {
    const { container } = render(<Collapse>test</Collapse>)
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('collapsed')
  })
})
