import React, { createContext, FC, ReactChild, ReactElement, ReactNode } from 'react'
import classnames from 'classnames'
import { Colors, Sizes, Screens } from '../../utils/modifiers'

export interface HeroBaseProps {
  children?: ReactNode
  className?: string
}
export interface IHeroContext {
  isInHero:boolean
}
export const HeroHead: FC<HeroBaseProps> = ({ children, className }) => {
  return <div className={classnames('hero-head', className)}>{children}</div>
}
export const HeroBody: FC<HeroBaseProps>  = ({ children, className }) => {
  return <div className={classnames('hero-body', className)}>{children}</div>
}
export const HeroFooter: FC<HeroBaseProps>  = ({ children, className }) => {
  return <div className={classnames('hero-foot', className)}>{children}</div>
}
export const HeroContext = createContext<IHeroContext>({isInHero:false})

export interface HeroProps {
  isPrimary?:boolean
  isSuccess?:boolean
  isInfo?:boolean
  isWarning?:boolean
  isDanger?:boolean
  isLink?:boolean
  isLight?:boolean
  isDark?:boolean
  isMedium?:boolean
  isLarge?:boolean
  isBold?:boolean
  isFullHeight?:boolean
  isFullHeightWithNavBar?:boolean
}
export const Hero: FC<HeroBaseProps & HeroProps>  = ({
  children,
  className,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isDark,
  isMedium,
  isLarge,
  isBold,
  isFullHeight,
  isFullHeightWithNavBar,
}) => {
  const classes = Colors({
    isPrimary,
    isSuccess,
    isInfo,
    isWarning,
    isDanger,
    isLink,
    isLight,
    isDark,
  })
  const sizeClasses = Sizes({
    isMedium,
    isLarge,
  })
  const screenSizes = Screens({
    isFullHeight,
    isFullHeightWithNavBar,
  })
  const kid = children as ReactElement
  const kids = React.Children.toArray(children)
  console.log('kid?.type', kid?.type)
  console.log('head', kid?.type !== HeroHead)

  if (kids.length === 1 && (kid?.type !== HeroBody && kid?.type !== HeroHead && kid?.type !== HeroFooter)) {
    console.log('singly????', kid?.type)
    return (
      <HeroContext.Provider value={{ isInHero: true }}>
        <section
          className={classnames(
            'hero',
            className,
            classes,
            sizeClasses,
            screenSizes,
            {
              'is-bold': isBold,
            }
          )}
        >
          <div className="hero-body">{children}</div>
        </section>
      </HeroContext.Provider>
    )
  }


  return (
    <HeroContext.Provider value={{ isInHero: true }}>
      <section
        className={classnames(
          'hero',
          className,
          classes,
          sizeClasses,
          screenSizes,
          {
            'is-bold': isBold,
          }
        )}
      >
        {kids}
      </section>
    </HeroContext.Provider>
  )
}
