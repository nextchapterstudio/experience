import React, { FC } from 'react'
import classnames from 'classnames'

export interface LevelBaseProps {
  className?: string
}
export const LevelLeft: FC<LevelBaseProps> = ({ children, className }) => {
  return <div className={classnames('level-left', className)}>{children}</div>
}
export const LevelRight: FC<LevelBaseProps> = ({ children, className }) => {
  return <div className={classnames('level-right', className)}>{children}</div>
}

export interface LevelItemProps extends LevelBaseProps {
  hasTextCentered?: boolean
}
export const LevelItem: FC<LevelItemProps> = ({ className, children, hasTextCentered }) => {
  const kids = React.isValidElement(children)
    ? React.cloneElement(children, {
        className: classnames('level-item', className, {
          'has-text-centered': hasTextCentered,
        }),
      })
    : children

  return <>{kids}</>
}

export interface LevelProps extends LevelBaseProps {
  isMobile?: boolean
}

export const Level: FC<LevelProps> = ({ children, isMobile, className }) => {
  const classNames = classnames('level', className, { 'is-mobile': isMobile })

  return <nav className={classNames}>{children}</nav>
}
