import React, { FC } from 'react'
import classnames from 'classnames'

export interface TabProps {
  className?: string
  isActive?: boolean
}

export const TabItem: FC<TabProps> = ({ children, className, isActive }) => {
  return <li className={classnames(className, { 'is-active': isActive })}>{children}</li>
}
export const TabList: FC<TabProps> = ({ children, className, isActive }) => {
  return <ul className={classnames(className)}>{children}</ul>
}

export interface FullTabProps {
  isCentered?: boolean
  isRight?: boolean
  isSmall?: boolean
  isMedium?: boolean
  isLarge?: boolean
  isBoxed?: boolean
  isToggle?: boolean
  isToggleRounded?: boolean
  isFullWidth?: boolean
}

export const Tabs: FC<TabProps & FullTabProps> = ({
  children,
  className,
  isCentered,
  isRight,
  isSmall,
  isMedium,
  isLarge,
  isBoxed,
  isToggle,
  isToggleRounded,
  isFullWidth,
}) => {
  const classes = {
    'is-centered': isCentered,
    'is-right': isRight,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
    'is-boxed': isBoxed,
    'is-toggle': isToggle,
    'is-toggle-rounded': isToggleRounded,
    'is-fullwidth': isFullWidth,
  }

  return <div className={classnames('tabs', className, classes)}>{children}</div>
}
