import React, { forwardRef, ElementType, HTMLAttributes, FC, ComponentProps } from 'react'
import classnames from 'classnames'
import { Colors, Sizes, StyleOrState } from '../../utils/modifiers'
import { ButtonProps } from 'types/button'
import { ColorProps } from 'types/colors'
import htmlAttributes, { ariaAttributes, allAttributes } from '../../utils/element-attributes'

const cleanProps = (tag: string, props: any) => {
  const castedProps = props as Record<string, string>
  return htmlAttributes['*']
    .concat(htmlAttributes[tag] || [])
    .concat(ariaAttributes)
    .reduce((objs: Record<string, string>, current: string) => {
      if (castedProps[current]) {
        objs[current] = castedProps[current]
      }
      return objs
    }, {})
}

export const Button: FC<
  ButtonProps & BaseButtonProps & ColorProps & HTMLAttributes<HTMLButtonElement>
> = ({
  className,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isAnchor,
  isSubmit,
  isReset,
  isWhite,
  isDark,
  isBlack,
  isLoading,
  isText,
  isSmall,
  isMedium,
  isNormal,
  isLarge,
  isFullWidth,
  isInverted,
  isOutlined,
  isRounded,
  isActive,
  isHovered,
  isFocused,
  isStatic,
  isSelected,
  children,
  ...props
}) => {
  const classes = {
    ...Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isDark,
      isBlack,
      isText,
      isWhite,
      isInverted,
      isOutlined,
      isSelected,
    }),
    ...Sizes({ isSmall, isMedium, isNormal, isLarge, isFullWidth }),
    ...StyleOrState({
      isLoading,
      isInverted,
      isOutlined,
      isRounded,
      isActive,
      isHovered,
      isFocused,
      isSelected,
    }),
  }

  if (isStatic) {
    return (
      <span className={classnames('button', className, classes)} {...cleanProps('span', props)}>
        {children}
      </span>
    )
  }
  if (isAnchor) {
    return (
      <a className={classnames('button', className, classes)} {...cleanProps('a', props)}>
        {children}
      </a>
    )
  }

  if (isSubmit) {
    return (
      <input
        className={classnames('button', className, classes)}
        {...cleanProps('input', props)}
        type="submit"
        value={children?.toString()}
      />
    )
  }
  if (isReset) {
    return (
      <input
        className={classnames('button', className, classes)}
        {...cleanProps('input', props)}
        type="reset"
        value={children?.toString()}
      />
    )
  }
  return (
    <button className={classnames('button', className, classes)} {...cleanProps('button', props)}>
      {children}
    </button>
  )
}

Button.propTypes = {}

export default Button

export interface ButtonsProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  areSmall?: boolean
  areMedium?: boolean
  areLarge?: boolean
  hasAddons?: boolean
  isCentered?: boolean
  isRight?: boolean
}
export const Buttons: FC<ButtonsProps> = ({
  className,
  children,
  areSmall,
  areMedium,
  areLarge,
  hasAddons,
  isCentered,
  isRight,
}) => {
  const sized = {
    'are-small': areSmall,
    'are-medium': areMedium,
    'are-large': areLarge,
    'has-addons': hasAddons,
    'is-centered': isCentered,
    'is-right': isRight,
  }
  return <div className={classnames('buttons', className, sized)}>{children}</div>
}

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  as?: ElementType
  children?: React.ReactNode
  className?: string
  isSpaced?: boolean
  status?: 'inactive' | 'inProgress' | 'success' | 'failed'
  value?: string | number | Error
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}
