import React, { FC, ElementType, ReactNode } from 'react'
import classnames from 'classnames'
import { BaseElement } from '../base-element'

export interface ContainerProps {
  as?: ElementType
  children?: ReactNode
  className?: string
  isMobile?: boolean
  isFluid?: boolean
  isWideScreen?: boolean
  isFullHD?: boolean
  hasTextCentered?: boolean
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
