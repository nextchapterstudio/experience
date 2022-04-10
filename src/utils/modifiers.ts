export interface ResponsiveProps {
  isBlock?: boolean
  isBlockMobile?: boolean
  isBlockDesktopOnly?: boolean
  isBlockTabletOnly?: boolean
  isBlockWideScreenOnly?: boolean
  isFlex?: boolean
  isFlexMobile?: boolean
  isFlexDesktopOnly?: boolean
  isFlexTabletOnly?: boolean
  isFlexWideScreenOnly?: boolean
  isInline?: boolean
  isInlineMobile?: boolean
  isInlineDesktopOnly?: boolean
  isInlineTabletOnly?: boolean
  isInlineWideScreenOnly?: boolean
  isInlineBlock?: boolean
  isInlineBlockMobile?: boolean
  isInlineBlockDesktopOnly?: boolean
  isInlineBlockTabletOnly?: boolean
  isInlineBlockWideScreenOnly?: boolean
  isInlineFlex?: boolean
  isInlineFlexMobile?: boolean
  isInlineFlexTabletOnly?: boolean
  isInlineFlexDesktopOnly?: boolean
  isInlineFlexWideScreenOnly?: boolean
}

export interface TextHelpersProps {
  isClearfix?: boolean
  isPulledLeft?: boolean
  isPulledRight?: boolean
  isMarginless?: boolean
  isPaddingless?: boolean
  isOverlay?: boolean
  isClipped?: boolean
  isRadiusless?: boolean
  isShadowless?: boolean
  isUnselectable?: boolean
  isInvisible?: boolean
  isHidden?: boolean
  isScreenReaderOnly?: boolean
  isRelative?: boolean
}

export interface FontWeightProps {
  hasTextWeightLight?: boolean
  hasTextWeightNormal?: boolean
  hasTextWeightMedium?: boolean
  hasTextWeightSemiBold?: boolean
  hasTextWeightBold?: boolean
}

export interface isSizedProps {
  isSize1?: boolean
  isSize2?: boolean
  isSize3?: boolean
  isSize4?: boolean
  isSize5?: boolean
  isSize6?: boolean
  isSize7?: boolean
}

export interface BackgroundColorProps {
  hasBackgroundWhite?: boolean
  hasBackgroundBlack?: boolean
  hasBackgroundLight?: boolean
  hasBackgroundDark?: boolean
  hasBackgroundPrimary?: boolean
  hasBackgroundInfo?: boolean
  hasBackgroundLink?: boolean
  hasBackgroundSuccess?: boolean
  hasBackgroundWarning?: boolean
  hasBackgroundDanger?: boolean
  hasBackgroundBlackBis?: boolean
  hasBackgroundBlackTer?: boolean
  hasBackgroundGreyDarker?: boolean
  hasBackgroundGreyDark?: boolean
  hasBackgroundGrey?: boolean
  hasBackgroundGreyLight?: boolean
  hasBackgroundGreyLighter?: boolean
  hasBackgroundWhiteTer?: boolean
  hasBackgroundWhiteBis?: boolean
}

export interface HasTextProps {
  hasTextWhite?: boolean
  hasTextBlack?: boolean
  hasTextLight?: boolean
  hasTextDark?: boolean
  hasTextPrimary?: boolean
  hasTextInfo?: boolean
  hasTextLink?: boolean
  hasTextSuccess?: boolean
  hasTextWarning?: boolean
  hasTextDanger?: boolean
  hasTextBlackBis?: boolean
  hasTextBlackTer?: boolean
  hasTextGreyDarker?: boolean
  hasTextGreyDark?: boolean
  hasTextGrey?: boolean
  hasTextGreyLight?: boolean
  hasTextGreyLighter?: boolean
  hasTextWhiteTer?: boolean
  hasTextWhiteBis?: boolean
  hasTextCentered?: boolean
}

export interface StyleOrStateProps {
  isOutlined?: boolean
  isInverted?: boolean
  isLoading?: boolean
  isActive?: boolean
  isFocused?: boolean
  isHovered?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isSelected?: boolean
}

export interface ScreenProps {
  isMobile?: boolean
  isFluid?: boolean
  isWideScreen?: boolean
  isFullHD?: boolean
  isFullHeight?: boolean
  isFullHeightWithNavBar?: boolean
}
export interface ColorProps {
  isPrimary?: boolean
  isSuccess?: boolean
  isInfo?: boolean
  isWarning?: boolean
  isDanger?: boolean
  isLink?: boolean
  isLight?: boolean
  isWhite?: boolean
  isDark?: boolean
  isBlack?: boolean
  isText?: boolean
  isInverted?: boolean
  isOutlined?: boolean
  isSelected?: boolean
}
export const Colors = ({
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
  isInverted,
  isOutlined,
  isSelected,
}: ColorProps) => ({
  'is-primary': isPrimary,
  'is-success': isSuccess,
  'is-info': isInfo,
  'is-warning': isWarning,
  'is-danger': isDanger,
  'is-link': isLink,
  'is-light': isLight,
  'is-white': isWhite,
  'is-dark': isDark,
  'is-black': isBlack,
  'is-text': isText,
  'is-inverted': isInverted,
  'is-outlined': isOutlined,
  'is-selected': isSelected,
})
export interface SizeProps {
  isSmall?: boolean
  isNormal?: boolean
  isMedium?: boolean
  isLarge?: boolean
  isFullWidth?: boolean
}
export const Sizes = ({ isSmall, isNormal, isMedium, isLarge, isFullWidth }: SizeProps) => ({
  'is-small': isSmall,
  'is-normal': isNormal,
  'is-medium': isMedium,
  'is-large': isLarge,
  'is-fullwidth': isFullWidth,
})

export const Screens = ({
  isMobile,
  isFluid,
  isWideScreen,
  isFullHD,
  isFullHeight,
  isFullHeightWithNavBar,
}: ScreenProps) => ({
  'is-mobile': isMobile,
  'is-fluid': isFluid,
  'is-widescreen': isWideScreen,
  'is-fullhd': isFullHD,
  'is-fullheight': isFullHeight,
  'is-fullheight-with-navbar': isFullHeightWithNavBar,
})

export const StyleOrState = ({
  isOutlined,
  isInverted,
  isLoading,
  isActive,
  isFocused,
  isHovered,
  isRounded,
  isStatic,
  isSelected,
}: StyleOrStateProps) => ({
  'is-loading': isLoading,
  'is-outlined': isOutlined,
  'is-active': isActive,
  'is-focused': isFocused,
  'is-inverted': isInverted,
  'is-hovered': isHovered,
  'is-rounded': isRounded,
  'is-static': isStatic,
  'is-selected': isSelected,
})

export const HasText = ({
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
  hasTextCentered,
}: HasTextProps) => ({
  'has-text-white': hasTextWhite,
  'has-text-black': hasTextBlack,
  'has-text-light': hasTextLight,
  'has-text-dark': hasTextDark,
  'has-text-primary': hasTextPrimary,
  'has-text-info': hasTextInfo,
  'has-text-link': hasTextLink,
  'has-text-success': hasTextSuccess,
  'has-text-warning	': hasTextWarning,
  'has-text-danger': hasTextDanger,
  'has-text-black-bis': hasTextBlackBis,
  'has-text-black-ter': hasTextBlackTer,
  'has-text-grey-darker': hasTextGreyDarker,
  'has-text-grey-dark': hasTextGreyDark,
  'has-text-grey': hasTextGrey,
  'has-text-grey-light': hasTextGreyLight,
  'has-text-grey-lighter': hasTextGreyLighter,
  'has-text-white-ter': hasTextWhiteTer,
  'has-text-white-bis': hasTextWhiteBis,
  'has-text-centered': hasTextCentered,
})

export const BackgroundColor = ({
  hasBackgroundWhite,
  hasBackgroundBlack,
  hasBackgroundLight,
  hasBackgroundDark,
  hasBackgroundPrimary,
  hasBackgroundInfo,
  hasBackgroundLink,
  hasBackgroundSuccess,
  hasBackgroundWarning,
  hasBackgroundDanger,
  hasBackgroundBlackBis,
  hasBackgroundBlackTer,
  hasBackgroundGreyDarker,
  hasBackgroundGreyDark,
  hasBackgroundGrey,
  hasBackgroundGreyLight,
  hasBackgroundGreyLighter,
  hasBackgroundWhiteTer,
  hasBackgroundWhiteBis,
}: BackgroundColorProps) => ({
  'has-background-white': hasBackgroundWhite,
  'has-background-black': hasBackgroundBlack,
  'has-background-light': hasBackgroundLight,
  'has-background-dark': hasBackgroundDark,
  'has-background-primary': hasBackgroundPrimary,
  'has-background-info': hasBackgroundInfo,
  'has-background-link': hasBackgroundLink,
  'has-background-success': hasBackgroundSuccess,
  'has-background-warning	': hasBackgroundWarning,
  'has-background-danger': hasBackgroundDanger,
  'has-background-black-bis': hasBackgroundBlackBis,
  'has-background-black-ter': hasBackgroundBlackTer,
  'has-background-grey-darker': hasBackgroundGreyDarker,
  'has-background-grey-dark': hasBackgroundGreyDark,
  'has-background-grey': hasBackgroundGrey,
  'has-background-grey-light': hasBackgroundGreyLight,
  'has-background-grey-lighter': hasBackgroundGreyLighter,
  'has-background-white-ter': hasBackgroundWhiteTer,
  'has-background-white-bis': hasBackgroundWhiteBis,
})

export const Sized = ({
  isSize1,
  isSize2,
  isSize3,
  isSize4,
  isSize5,
  isSize6,
  isSize7,
}: isSizedProps) => {
  return {
    'is-size-1': isSize1,
    'is-size-2': isSize2,
    'is-size-3': isSize3,
    'is-size-4': isSize4,
    'is-size-5': isSize5,
    'is-size-6': isSize6,
    'is-size-7': isSize7,
  }
}
export interface SizeProp {
  size: number
}
export const Size = ({ size }: SizeProp) => {
  const classes = {
    [`is-size-${size}`]: !!size,
  }

  return classes
}

export const FontWeight = ({
  hasTextWeightLight,
  hasTextWeightNormal,
  hasTextWeightMedium,
  hasTextWeightSemiBold,
  hasTextWeightBold,
}: FontWeightProps) => {
  return {
    'has-text-weight-light': hasTextWeightLight,
    'has-text-weight-normal': hasTextWeightNormal,
    'has-text-weight-medium': hasTextWeightMedium,
    'has-text-weight-semibold': hasTextWeightSemiBold,
    'has-text-weight-bold': hasTextWeightBold,
  }
}

export const Helpers = ({
  isClearfix,
  isPulledLeft,
  isPulledRight,
  isMarginless,
  isPaddingless,
  isOverlay,
  isClipped,
  isRadiusless,
  isShadowless,
  isUnselectable,
  isInvisible,
  isHidden,
  isScreenReaderOnly,
  isRelative,
}: TextHelpersProps) => {
  return {
    'is-clearfix': isClearfix,
    'is-pulled-left': isPulledLeft,
    'is-pulled-right': isPulledRight,
    'is-marginless': isMarginless,
    'is-paddingless': isPaddingless,
    'is-overlay': isOverlay,
    'is-clipped': isClipped,
    'is-radiusless': isRadiusless,
    'is-shadowless': isShadowless,
    'is-unselectable': isUnselectable,
    'is-invisible': isInvisible,
    'is-hidden': isHidden,
    'is-sr-only': isScreenReaderOnly,
    'is-relative': isRelative,
  }
}

export const Responsive = ({
  isBlock,
  isBlockMobile,
  isBlockDesktopOnly,
  isBlockTabletOnly,
  isBlockWideScreenOnly,
  isFlex,
  isFlexMobile,
  isFlexDesktopOnly,
  isFlexTabletOnly,
  isFlexWideScreenOnly,

  isInline,
  isInlineMobile,
  isInlineDesktopOnly,
  isInlineTabletOnly,
  isInlineWideScreenOnly,

  isInlineBlock,
  isInlineBlockMobile,
  isInlineBlockDesktopOnly,
  isInlineBlockTabletOnly,
  isInlineBlockWideScreenOnly,

  isInlineFlex,
  isInlineFlexMobile,
  isInlineFlexTabletOnly,
  isInlineFlexDesktopOnly,
  isInlineFlexWideScreenOnly,
}: ResponsiveProps) => {
  return {
    'is-block': isBlock,
    'is-block-mobile': isBlockMobile,
    'is-block-tablet-only': isBlockTabletOnly,
    'is-block-desktop-only': isBlockDesktopOnly,
    'is-blockis-widescreen-only': isBlockWideScreenOnly,

    'is-flex': isFlex,
    'is-flex-mobile': isFlexMobile,
    'is-flex-tablet-only': isFlexTabletOnly,
    'is-flex-desktop-only': isFlexDesktopOnly,
    'is-flex-widescreen-only': isFlexWideScreenOnly,

    'is-inline': isInline,
    'is-inline-mobile': isInlineMobile,
    'is-inline-tablet-only': isInlineTabletOnly,
    'is-inline-desktop-only': isInlineDesktopOnly,
    'is-inline-widescreen-only': isInlineWideScreenOnly,

    'is-inline-block': isInlineBlock,
    'is-inline-block-mobile': isInlineBlockMobile,
    'is-inline-block-tablet-only': isInlineBlockTabletOnly,
    'is-inline-block-desktop-only': isInlineBlockDesktopOnly,
    'is-inline-block-widescreen-only': isInlineBlockWideScreenOnly,

    'is-inline-flex': isInlineFlex,
    'is-inline-flex-mobile': isInlineFlexMobile,
    'is-inline-flex-tablet-only': isInlineFlexTabletOnly,
    'is-inline-flex-desktop-only': isInlineFlexDesktopOnly,
    'is-inline-flex-widescreen-only': isInlineFlexWideScreenOnly,
  }
}
export interface PositionProps {
  isTop?: boolean
  isBottom?: boolean
  isRight?: boolean
  isLeft?: boolean
  isBottomLeft?: boolean
  isBottomRight?: boolean
  isTopLeft?: boolean
  isTopRight?: boolean
}

export const Position = ({
  isTop,
  isBottom,
  isRight,
  isLeft,
  isBottomLeft,
  isBottomRight,
  isTopLeft,
  isTopRight,
}: PositionProps) => {
  return {
    'is-top-right': isTopRight,
    'is-bottom-left': isBottomLeft,
    'is-top-left': isTopLeft,
    'is-right': isRight,
    'is-left': isLeft,
    'is-top': isTop,
    'is-bottom': isBottom,
    'is-bottom-right': isBottomRight,
  }
}
export interface AnimatedProps {
  isAnimated?: boolean
  isFadeIn?: boolean
  isFadeOut?: boolean
}

export const Animated = ({ isAnimated, isFadeIn, isFadeOut }: AnimatedProps) => {
  return {
    animated: isAnimated,
    fadeOut: isFadeOut,
    fadeIn: isFadeIn,
  }
}

// all ResponsiveProps | isSizedProps | BackgroundColorProps | ColorProps | HasTextProps | StyleOrStateProps | ScreenProps | SizeProps | SizeProp | FontWeightProps | TextHelpersProps | PositionProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const allTheClasses = (props: any) => {
  return {
    ...Sized(props),
    ...BackgroundColor(props),
    ...Colors(props),
    ...HasText(props),
    ...StyleOrState(props),
    ...Screens(props),
    ...Sizes(props),
    ...Colors(props),
    ...Size(props),
    ...FontWeight(props),
    ...Helpers(props),
    ...Responsive(props),
    ...Position(props),
    ...Animated(props),
  }
}
