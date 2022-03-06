import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import { Button, Buttons } from '../button'

describe('The Button Component', () => {
  afterEach(cleanup)
  it('should render with the class basic', () => {
    const { container } = render(<Button className="basic">test</Button>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('basic')
  })

  it('should render a span when isStatic', () => {
    const { container } = render(<Button isStatic>test</Button>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render a button with an aria attribute', () => {
    const { container } = render(<Button aria-hidden>test</Button>)

    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveAttribute('aria-hidden')
  })
  it('should render as an anchor tag', () => {
    const { container } = render(<Button isAnchor>test</Button>)
    expect(container).toMatchSnapshot()
    expect(container).toContainHTML('<a')
  })
  it('should render as an input tag when isSubmit', () => {
    const { container } = render(<Button isSubmit>test</Button>)
    expect(container).toMatchSnapshot()
    expect(container).toContainHTML('<a')
  })
  it('should support an onclick function', async () => {
    const mockFn = jest.fn()
    const { container } = render(<Button onClick={mockFn}>The Button</Button>)

    const b = await screen.findByText('The Button')
    await fireEvent.click(b)
    expect(container).toMatchSnapshot()
    expect(mockFn).toBeCalled()
  })
  it('should render the Buttons with colored classes applied', () => {
    const { container } = render(
      <Buttons>
        <Button isPrimary>Primary</Button>
        <Button isInfo>Info</Button>
        <Button isDanger>Danger</Button>
        <Button isLink>Link</Button>
        <Button isWarning>Warning</Button>
        <Button isSuccess>Success</Button>
      </Buttons>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('buttons')
  })
  it('should render the Buttons as correct elements', () => {
    const { container } = render(
      <Buttons>
        <Button>Button</Button>
        <Button isSubmit>Submit</Button>
        <Button isAnchor href="#">
          Anchor
        </Button>
        <Button isReset>Reset</Button>
      </Buttons>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
