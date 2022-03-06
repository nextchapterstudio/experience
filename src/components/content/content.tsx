import React, { FC } from 'react'
import classnames from 'classnames'
import {
  allTheClasses,
  ResponsiveProps,
  isSizedProps,
  BackgroundColorProps,
  ColorProps,
  HasTextProps,
  StyleOrStateProps,
  ScreenProps,
  SizeProps,
  FontWeightProps,
  TextHelpersProps,
} from '../../utils/modifiers'

export interface ContentBaseProps {
  children?: React.ReactNode
  className?: string
}

export const Content: FC<
  ContentBaseProps &
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
> = ({ children, className, ...props }) => {
  const classes = allTheClasses(props)
  return <div className={classnames('content', className, classes)}>{children}</div>
}
