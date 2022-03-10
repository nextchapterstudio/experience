import React, { FC } from 'react'
import classnames from 'classnames'
import { Colors, ColorProps, HasTextProps, HasText } from '../../utils/modifiers'

const isColored = (...args: any[]) => {
  return args.some((item) => item)
}
export interface TileProps {
  children?: React.ReactNode
  className?: string
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | null
  isAncestor?: boolean
  isVertical?: boolean
  isParent?: boolean
  isChild?: boolean
  isNotification?: boolean
  isBox?: boolean
}
export const Tile: FC<TileProps & ColorProps & HasTextProps> = ({
  children,
  className,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isWhite,
  isDark,
  isBlack,
  isText,
  isAncestor,
  isVertical,
  isParent,
  isChild,
  isNotification,
  isBox,
  size,
  ...props
}) => {
  const classes = {
    'is-ancestor': isAncestor,
    'is-parent': isParent,
    'is-child': isChild,
    'is-vertical': isVertical,
    'is-1': false,
    'is-2': false,
    'is-3': false,
    'is-4': false,
    'is-5': false,
    'is-6': false,
    'is-7': false,
    'is-8': false,
    'is-9': false,
    'is-10': false,
    'is-11': false,
    'is-12': false,
    box: isBox,
    notification: isNotification,
    ...HasText(props),
    ...Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isWhite,
      isDark,
      isBlack,
      isText,
    }),
  }
  if (size) {
    classes[`is-${size}`] = true
  }

  const hasColor = isColored(
    isPrimary,
    isSuccess,
    isInfo,
    isWarning,
    isDanger,
    isLink,
    isLight,
    isWhite,
    isDark,
    isBlack,
    isText
  )

  const El = hasColor || isNotification || isBox ? 'article' : 'div'

  return <El className={classnames('tile', className, classes)}>{children}</El>
}
