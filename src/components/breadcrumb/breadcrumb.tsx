import React, { FC, ReactNode } from 'react'
import classnames from 'classnames'
import { Sizes } from '../../utils/modifiers'

export interface BreadcrumbItemProps {
  children?: React.ReactNode
  className?: string
  isActive?: boolean
}
export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, isActive, className }) => {
  const classes = {
    'is-active': isActive,
  }

  return (
    <li className={classnames(className, classes)} aria-current={isActive ? 'page' : false}>
      {children}
    </li>
  )
}

export interface BreadcrumbProps {
  children?: ReactNode
  className?: string
  isCentered?: boolean
  isRight?: boolean
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSucceedsSeparator?: boolean
  isSmall?: boolean
  isMedium?: boolean
  isLarge?: boolean
}

export const Breadcrumb: FC<BreadcrumbProps> = ({
  children,
  className,
  isCentered,
  isRight,
  hasArrowSeparator,
  hasBulletSeparator,
  hasDotSeparator,
  hasSucceedsSeparator,
  isSmall,
  isMedium,
  isLarge,
}) => {
  const classes = {
    'is-centered': isCentered,
    'is-right': isRight,
    'has-arrow-separator': hasArrowSeparator,
    'has-bullet-separator': hasBulletSeparator,
    'has-dot-separator': hasDotSeparator,
    'has-succeeds-separator': hasSucceedsSeparator,
    ...Sizes({ isSmall, isMedium, isLarge }),
  }
  const chappies = children as ReactNode[]
  const last = chappies.length - 1
  const kids = React.Children.toArray(children).map((child, i) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          isActive: last === i,
        })
      : child
  )

  return (
    <nav className={classnames('breadcrumb', className, classes)} aria-label="breadcrumbs">
      <ul>{kids}</ul>
    </nav>
  )
}
