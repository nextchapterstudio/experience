import React, { FC } from 'react'
import classnames from 'classnames'
import { BaseElement } from '../base-element'

export interface ContainerProps {
    children?: React.ReactNode
    className?: string
}
export const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
  return (
    <BaseElement className={classnames('container', className)} {...props}>
      {children}
    </BaseElement>
  )
}

export default Container

Container.defaultProps = {
  className: '',
  isMobile: false,
  isFluid: false,
  isWideScreen: false,
  isFullHD: false,
  as: 'div',
}
