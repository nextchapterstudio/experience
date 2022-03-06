import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Column, Columns, FullColumn } from '../columns'

describe('The Columns Component', () => {
  afterEach(cleanup)
  it('should render correct structure ', () => {
    const { container } = render(<Columns><Column offset='4'>Offset</Column></Columns>)
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('columns')
    expect(container?.firstChild?.firstChild).toHaveClass('column')
    expect(container?.firstChild?.firstChild).toHaveClass('is-offset-4')
  })

  it('should render correct structure for the FullColumn', () => {
    const { container } = render(<FullColumn>Offset</FullColumn>)
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('columns')
    expect(container?.firstChild?.firstChild).toHaveClass('column')
    expect(container?.firstChild?.firstChild).toHaveClass('is-full')
  })
})
