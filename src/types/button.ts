export interface ButtonProps {
  isPrimary?: boolean
  isSuccess?: boolean
  isInfo?: boolean
  isWarning?: boolean
  isDanger?: boolean
  isLink?: boolean
  isLight?: boolean
  isAnchor?: boolean
  isSubmit?: boolean
  isReset?: boolean
  isWhite?: boolean
  isDark?: boolean
  isBlack?: boolean
  isLoading?: boolean
  isText?: boolean
  isSmall?: boolean
  isMedium?: boolean
  isNormal?: boolean
  isLarge?: boolean
  isFullWidth?: boolean
  isInverted?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isActive?: boolean
  isHovered?: boolean
  isFocused?: boolean
  isStatic?: boolean
  isSelected?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}
