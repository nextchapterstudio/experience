import React, { FC } from 'react'
import classnames from 'classnames'
import { BaseElement, BaseProps } from '../base-element'
import {
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
} from 'utils/modifiers'

export const Number: FC<
  BaseProps &
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
> = ({ className, children, ...props }) => {
  return (
    <BaseElement className={classnames('number', className)} {...props}>
      {children}
    </BaseElement>
  )
}

export default Number
