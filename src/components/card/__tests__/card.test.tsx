import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Card, CardBody, CardHeader, CardFooter, CardImage } from '../card'


describe('Card and components', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { container } = render(
      <Card>
        <CardBody>Hi</CardBody>
      </Card>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with header and footer and body', () => {
    const { container } = render(
      <Card>
        <CardHeader title={'HEADER'}></CardHeader>
        <CardBody>Hi</CardBody>
        <CardFooter title={'HEADER'}></CardFooter>
      </Card>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with footer header and body', () => {
    const { container } = render(
      <Card>
        <CardHeader title={'HEADER'}></CardHeader>
        <CardBody>Hi</CardBody>
        <CardFooter></CardFooter>
      </Card>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container?.firstChild?.firstChild).toHaveClass('card-header')
    expect(container?.firstChild?.lastChild).toHaveClass('card-footer')
  })
})
