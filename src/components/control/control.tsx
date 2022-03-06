import React, { FC, ElementType } from 'react'
import classnames from 'classnames'
import { BaseElement } from '../base-element'

export interface ControlProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isGrouped?: boolean
  as?: ElementType
  children?: React.ReactNode
  className?: string
}
export const Control: FC<ControlProps> = ({
  as,
  className,
  children,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isGrouped,
}) => {
  const classes = {
    'has-icons-left': hasIconsLeft,
    'has-icons-right': hasIconsRight,
    'is-expanded': isExpanded,
    'is-grouped': isGrouped,
  }
  return (
    <BaseElement as={as} className={classnames('control', className, classes)}>
      {children}
    </BaseElement>
  )
}

Control.defaultProps = {
  as: 'div',
}
