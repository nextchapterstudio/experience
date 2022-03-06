import React, { FC } from 'react'
import classnames from 'classnames'
import { Colors, Sizes, StyleOrState, ColorProps, SizeProps } from '../../utils/modifiers'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export interface TagProps {
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  isRounded?: boolean
  isDelete?: boolean
}
export const Tag: FC<TagProps & ColorProps & SizeProps> = ({
  children,
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
  isSmall,
  isNormal,
  isMedium,
  isLarge,
  isRounded,
  isDelete,
  onClick,
  className,
  href,
}) => {
  const classes = {
    'is-delete': isDelete,
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
    ...Sizes({
      isSmall,
      isNormal,
      isMedium,
      isLarge,
    }),
    ...StyleOrState({ isRounded }),
  }
  if (isDelete || isLink) {
    return (
      <a className={classnames('tag', className, classes)} href={href} onClick={onClick || noop}>
        {children}
      </a>
    )
  }
  return <span className={classnames('tag', className, classes)}>{children}</span>
}

export interface TagsProps {
  children?: React.ReactNode
  className?: string
  hasAddons?: boolean
  areNormal?: boolean
  areMedium?: boolean
  areLarge?: boolean
}
export const Tags: FC<TagsProps> = ({
  children,
  hasAddons,
  areNormal,
  areMedium,
  areLarge,
  className,
}) => {
  const classes = {
    'has-addons': hasAddons,
    'are-normal': areNormal,
    'are-medium': areMedium,
    'are-large': areLarge,
  }
  return <span className={classnames('tags', className, classes)}>{children}</span>
}
