import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { LoadingIndicator } from '../loading-indicator'

describe('The Loader Component', () => {
  afterEach(cleanup)
  it('should render a div with the class loader', () => {
    const { container } = render(<LoadingIndicator> </LoadingIndicator>)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('loader')
  })
  it('should render a div with the class loader and the className passed in', () => {
    const { container } = render(<LoadingIndicator className="loader-test" />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('loader')
    expect(container.firstChild).toHaveClass('loader-test')
  })
})
