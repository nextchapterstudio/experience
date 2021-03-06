import React, { FC } from 'react'
import classnames from 'classnames'
import { Sizes, HasText, allTheClasses, SizeProps } from '../../utils/modifiers'
import { HasTextProps } from '../../types/text'
export interface rotationProps {
  rotation?: '90' | '180' | '270'
  flipHorizontal: boolean
  flipVertical: boolean
  flipBoth: boolean
}
const rotation = ({
  rotation,
  flipHorizontal = false,
  flipVertical = false,
  flipBoth = false,
}: rotationProps) => {
  const classes = {
    'fa-flip-horizontal': flipHorizontal,
    'fa-flip-vertical': flipVertical,
    'fa-flip-both': flipBoth,
    'fa-rotate-90': false,
    'fa-rotate-180': false,
    'fa-rotate-270': false,
  }

  if (rotation) {
    classes[`fa-rotate-${rotation}`] = true
  }

  return classes
}
export interface IconProps {
  className?: string
  iconClassName?: string
  icon?: string
  fas?: boolean
  fab?: boolean
  fa?: boolean
  far?: boolean
  isLeft?: boolean
  isRight?: boolean
  isMediumFA?: boolean
  isLargeFA?: boolean
}
export const Icon: FC<IconProps & HasTextProps & SizeProps> = ({
  className,
  iconClassName,
  icon = 'home',
  fas,
  fab,
  fa,
  isSmall,
  isMedium,
  isLarge,
  isMediumFA,
  isLargeFA,
  isLeft,
  isRight,
  hasTextWhite,
  hasTextBlack,
  hasTextLight,
  hasTextDark,
  hasTextPrimary,
  hasTextInfo,
  hasTextLink,
  hasTextSuccess,
  hasTextWarning,
  hasTextDanger,
  hasTextBlackBis,
  hasTextBlackTer,
  hasTextGreyDarker,
  hasTextGreyDark,
  hasTextGrey,
  hasTextGreyLight,
  hasTextGreyLighter,
  hasTextWhiteTer,
  hasTextWhiteBis,
  far,
  ...props
}) => {
  const classes = {
    fa: fa,
    fas: fas,
    fab: fab,
    far: far,
    'fa-2x': isMediumFA,
    'fa-3x': isLargeFA,
  }
  const parent = {
    'is-left': isLeft,
    'is-right': isRight,
    ...Sizes({ isSmall, isMedium, isLarge }),
    ...HasText({
      hasTextWhite,
      hasTextBlack,
      hasTextLight,
      hasTextDark,
      hasTextPrimary,
      hasTextInfo,
      hasTextLink,
      hasTextSuccess,
      hasTextWarning,
      hasTextDanger,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextGreyDarker,
      hasTextGreyDark,
      hasTextGrey,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextWhiteTer,
      hasTextWhiteBis,
    }),
  }

  const iconName = `fa-${icon}`
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const change = rotation(props)
  /*

  material-icons
<span className="icon is-left is-small">
  <i className="material-icons">search</i>
</span>
  */

  return (
    <span className={classnames(iconClassName, className, parent)}>
      <i className={classnames(classes, iconName, change)} aria-hidden="true"></i>
    </span>
  )
}

Icon.defaultProps = {
  iconClassName: 'icon',
}
export default Icon

export const BaseIcon: FC<IconProps> = ({
  icon = 'home',
  fas,
  fab,
  far,
  fa,
  isMediumFA,
  isLargeFA,
  className,
  ...props
}) => {
  const classes = {
    fa: fa,
    fas: fas,
    fab: fab,
    far: far,
    'fa-2x': isMediumFA,
    'fa-3x': isLargeFA,
  }
  const allClasses = allTheClasses(props)
  const iconName = `fa-${icon}`
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const change = rotation(props)
  return (
    <i
      className={classnames(classes, className, iconName, allClasses, change)}
      aria-hidden="true"
    ></i>
  )
}
export interface StackedIconProps extends IconProps {
  is3x?: boolean
  is4x?: boolean
}
export const StackedIcons: FC<StackedIconProps & HasTextProps & SizeProps> = ({
  children,
  className,
  isSmall,
  isMedium,
  isLarge,
  isMediumFA,
  isLargeFA,
  isLeft,
  isRight,
  hasTextWhite,
  hasTextBlack,
  hasTextLight,
  hasTextDark,
  hasTextPrimary,
  hasTextInfo,
  hasTextLink,
  hasTextSuccess,
  hasTextWarning,
  hasTextDanger,
  hasTextBlackBis,
  hasTextBlackTer,
  hasTextGreyDarker,
  hasTextGreyDark,
  hasTextGrey,
  hasTextGreyLight,
  hasTextGreyLighter,
  hasTextWhiteTer,
  hasTextWhiteBis,
  is4x,
  is3x,
}) => {
  const classes = {
    'fa-lg': isLargeFA,
    'fa-4x': is4x,
    'fa-3x': is3x,
  }
  const parent = {
    'is-left': isLeft,
    'is-right': isRight,
    ...Sizes({ isSmall, isMedium, isLarge }),
    ...HasText({
      hasTextWhite,
      hasTextBlack,
      hasTextLight,
      hasTextDark,
      hasTextPrimary,
      hasTextInfo,
      hasTextLink,
      hasTextSuccess,
      hasTextWarning,
      hasTextDanger,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextGreyDarker,
      hasTextGreyDark,
      hasTextGrey,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextWhiteTer,
      hasTextWhiteBis,
    }),
  }

  return (
    <span className={classnames('icons', className, parent)}>
      <span className={classnames('fa-stack', classes)}>{children}</span>
    </span>
  )
}

export const MaterialIcon: FC<IconProps & HasTextProps & SizeProps> = ({
  className,
  iconClassName,
  icon = 'home',
  isSmall,
  isMedium,
  isLarge,
  isMediumFA,
  isLargeFA,
  isLeft,
  isRight,
  hasTextWhite,
  hasTextBlack,
  hasTextLight,
  hasTextDark,
  hasTextPrimary,
  hasTextInfo,
  hasTextLink,
  hasTextSuccess,
  hasTextWarning,
  hasTextDanger,
  hasTextBlackBis,
  hasTextBlackTer,
  hasTextGreyDarker,
  hasTextGreyDark,
  hasTextGrey,
  hasTextGreyLight,
  hasTextGreyLighter,
  hasTextWhiteTer,
  hasTextWhiteBis,
  ...props
}) => {
  const parent = {
    'is-left': isLeft,
    'is-right': isRight,
    ...Sizes({ isSmall, isMedium, isLarge }),
    ...HasText({
      hasTextWhite,
      hasTextBlack,
      hasTextLight,
      hasTextDark,
      hasTextPrimary,
      hasTextInfo,
      hasTextLink,
      hasTextSuccess,
      hasTextWarning,
      hasTextDanger,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextGreyDarker,
      hasTextGreyDark,
      hasTextGrey,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextWhiteTer,
      hasTextWhiteBis,
    }),
  }

  const iconName = `${icon}`

  /*

  material-icons
<span className="icon is-left is-small">
  <i className="material-icons">search</i>
</span>
<MaterialIcon icon="search" />
  */

  return (
    <span className={classnames('icon', className, parent)}>
      <i className="material-icons">{iconName}</i>
    </span>
  )
}

MaterialIcon.defaultProps = {
  iconClassName: 'icon',
}
