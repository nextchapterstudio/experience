import React, { useState, useEffect, FC, ElementType } from 'react'
import classnames from 'classnames'
import { Colors } from '../../utils/modifiers'
import { BaseElement, BaseProps } from '../base-element'

export interface NavBarItemProps {
  isActive?: boolean
}
export const NavBarItem: FC<BaseProps & NavBarItemProps> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  const kid = React.Children.toArray(children).map((child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          className: classnames('navbar-item', className, { 'is-active': isActive }),
        })
      : child
  )
  return <>{kid}</>
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export interface NavBarBurgerProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
  as?: ElementType
  children?: React.ReactNode
  className?: string
  isSpaced?: boolean
  value?: string | number | Error
}
export const NavBarBurger: FC<NavBarBurgerProps> = ({ onClick }) => {
  return (
    <div className="navbar-burger burger" data-target="navMenu" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
NavBarBurger.defaultProps = {
  onClick: noop,
}

export interface NavBarBrandProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  href: string
  src: string
  target: string
  className?: string
  width: number
  height: number
  title: string
  value?: string | number | Error
}
export const NavBarBrand: FC<NavBarBrandProps> = ({
  href,
  src,
  className,
  target,
  onClick = noop,
  width = 112,
  height = 28,
  title,
}) => {
  return (
    <div className="navbar-brand">
      <a className={classnames('navbar-item', className)} href={href}>
        {src && <img src={src} width={width} height={height} alt={title} />}
        {title}
      </a>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target={target}
        onClick={onClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  )
}

export interface NavBarDividerProps {
  className?: string
}
export const NavBarDivider: FC<NavBarDividerProps> = ({ className }) => (
  <hr className={classnames('navbar-divider', className)} />
)

export interface NavBarDropDownProps {
  className?: string
  title?: string
  isRight?: boolean
  isBoxed?: boolean
  children?: React.ReactNode
}
export const NavBarDropDown: FC<NavBarDropDownProps> = ({
  title,
  isRight,
  children,
  isBoxed,
  className,
}) => {
  const classes = classnames('navbar-item', 'has-dropdown', 'is-hoverable', className, {
    'is-right': isRight,
    'is-boxed': isBoxed,
  })

  const ddClasses = classnames('navbar-dropdown', {
    'is-boxed': isBoxed,
  })

  return (
    <div className={classes}>
      <a className="navbar-link">{title}</a>
      <div className={ddClasses}>{children}</div>
    </div>
  )
}

export interface NavProps {
  className?: string
}
export interface NavBarMenuProps {
  id?: string
  isActive?: boolean
}
export const NavBarStart: FC<NavProps> = ({ children, className }) => {
  return <div className={classnames('navbar-start', className)}>{children}</div>
}
export const NavBarEnd: FC<NavProps> = ({ children, className }) => {
  return <div className={classnames('navbar-end', className)}>{children}</div>
}
export const NavBarMenu: FC<NavProps & NavBarMenuProps> = ({
  children,
  id,
  isActive,
  className,
}) => {
  return (
    <div
      id={id}
      className={classnames('navbar-menu', className, {
        'is-active': isActive,
      })}
    >
      {children}
    </div>
  )
}
export interface NavBarProps {
  isFixedTop?: boolean
  isFixedBottom?: boolean
}
export const NavBar: FC<NavProps & NavBarProps> = ({
  children,
  isFixedTop,
  isFixedBottom,
  className,
  ...props
}) => {
  // is-transparent is-fixed-top  is-fixed-bottom
  const [isActive, setActive] = useState(false)
  useEffect(() => {
    if (isFixedTop) {
      const body = document.body
      if (!body) {
        return
      }
      body.classList.add('has-navbar-fixed-top')
      return () => {
        body.classList.remove('has-navbar-fixed-top')
      }
    }
    if (isFixedBottom) {
      const body = document.body
      if (!body) {
        return
      }
      body.classList.add('has-navbar-fixed-bottom')
      return () => {
        body.classList.remove('has-navbar-fixed-bottom')
      }
    }
  }, [isFixedTop, isFixedBottom])

  const classes = classnames('navbar', className, {
    'is-fixed-top': isFixedTop,
    'is-fixed-bottom': isFixedBottom,
  })

  const kids = React.Children.map(children, (child, i) => {
    if (child?.type === NavBarBrand) {
      return React.isValidElement(child)
        ? React.cloneElement(child, {
            onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault()
              setActive(!isActive)
            },
          })
        : child
    }
    if (child?.type === NavBarMenu) {
      return React.cloneElement(child, {
        isActive: isActive,
      })
    }
    return child
  })
  const propsToPass = { isActive, isFixedBottom, isFixedTop }

  return (
    <BaseElement
      as="nav"
      className={classes}
      role="navigation"
      aria-label="main navigation"
      {...props}
      {...propsToPass}
    >
      {kids}
    </BaseElement>
  )
}
