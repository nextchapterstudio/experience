import React, { FC, ElementType } from 'react'
import classnames from 'classnames'
import {
  allTheClasses,
  BackgroundColorProps,
  ColorProps,
  FontWeightProps,
  HasTextProps,
  isSizedProps,
  ResponsiveProps,
  ScreenProps,
  SizeProps,
  StyleOrStateProps,
  TextHelpersProps,
} from '../../utils/modifiers'

export interface PanelBaseProps {
  as?: ElementType
  children?: React.ReactNode
  className?: string
}
export interface PanelBlockProps extends PanelBaseProps {
  isActive?: boolean
}
export const PanelBlock: FC<PanelBlockProps> = ({
  className,
  children,
  as: Element = 'div',
  isActive,
  ...props
}) => {
  const classes = classnames('panel-block', className, {
    'is-active': isActive,
  })

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  )
}

PanelBlock.defaultProps = {
  as: 'div',
}

export const PanelTabs: FC<PanelBaseProps> = ({ className, children, as: El = 'p', ...props }) => {
  const classes = classnames('panel-tabs', className)
  return (
    <El className={classes} {...props}>
      {children}
    </El>
  )
}

export interface PanelProps extends PanelBaseProps {
  heading: string
}
export const Panel: FC<
  PanelProps &
    ResponsiveProps &
    isSizedProps &
    BackgroundColorProps &
    ColorProps &
    HasTextProps &
    StyleOrStateProps &
    ScreenProps &
    SizeProps &
    FontWeightProps &
    TextHelpersProps
> = ({ heading, children, className, ...props }) => {
  return (
    <nav className={classnames('panel', className, allTheClasses(props))}>
      <p className="panel-heading">{heading}</p>
      {children}
    </nav>
  )
}
