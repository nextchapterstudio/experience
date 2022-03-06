import React, { forwardRef, FC, ReactNode } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
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

export interface ProgressBarProps {
  children?: ReactNode
  className?: string
  max: number
  value: number
}
const ProgressBar: FC<
  ProgressBarProps &
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
> = ({ children, className, max, value, ...props }) => {
  const classes = allTheClasses(props)
  return (
    <progress className={classnames('progress', className, classes)} value={value} max={max}>
      {children}
    </progress>
  )
}

ProgressBar.defaultProps = {
  max: 100,
  value: 0,
}

export { ProgressBar }

export default ProgressBar
