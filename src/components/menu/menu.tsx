import React, { FC } from 'react'
import classnames from 'classnames'
export interface MenuProps {
  children?: React.ReactNode
  className?: string
}
export const MenuLabel: FC<MenuProps> = ({ children, className }) => {
  return <p className={classnames('menu-label', className)}>{children}</p>
}
export const MenuList: FC<MenuProps> = ({ children, className }) => {
  return <ul className={classnames('menu-list', className)}>{children}</ul>
}
export const MenuListItem: FC<MenuProps> = ({ children, className }) => {
  return <li className={classnames(className)}>{children}</li>
}
export const Menu: FC<MenuProps> = ({ children, className }) => {
  return <aside className={classnames('menu', className)}>{children}</aside>
}
