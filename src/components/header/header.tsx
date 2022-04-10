import React, { FC } from 'react'
import classnames from 'classnames'

export interface HeaderProps {
  className?: string
}
export const Header: FC<HeaderProps> = ({ children, className }) => {
  return <div className={classnames('header', className)}>{children}</div>
}
