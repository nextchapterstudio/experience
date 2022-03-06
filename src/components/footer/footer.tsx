import React, { ElementType, FC, HTMLAttributes } from 'react'
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

export interface FooterProps extends HTMLAttributes<HTMLOrSVGElement> {
  children?: React.ReactNode
  className?: string
}
const Footer: FC<
  FooterProps &
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
  return <footer className={classnames('footer', className, classes)}>{children}</footer>
}

export { Footer }

export default Footer
