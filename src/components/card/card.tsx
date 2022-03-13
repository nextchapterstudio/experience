import React, { HTMLAttributes, FC } from 'react'
import classnames from 'classnames'
import { Screens } from '../../utils/modifiers'

export interface CardBaseProps extends HTMLAttributes<HTMLOrSVGElement> {
  className?: string
  children?: React.ReactNode | React.ReactChild[]
}

export interface CardHeaderIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  className?: string
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const CardHeaderIcon: FC<CardHeaderIconProps> = ({ children, onClick, ...props }) => {
  return (
    <a href="#" className="card-header-icon" aria-label="more options" onClick={onClick}>
      {children}
    </a>
  )
}
export interface CardHeaderProps extends CardBaseProps {
  title: string
  hasIcon?: boolean
}

export const CardHeader: FC<CardHeaderProps> = ({ title, className, children }) => {
  return (
    <header className={classnames('card-header', className)}>
      <p className="card-header-title">{title}</p>

      {children}
    </header>
  )
}
// CardHeader.sortOrder = 0

export const CardFooterItem: FC<CardBaseProps> = ({ className, children }) => {
  const kid = React.Children.toArray(children).map((child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          className: classnames('card-footer-item', className),
        })
      : child
  )

  return <>{kid}</>
}
export const CardFooter: FC<CardBaseProps> = ({ children, className }) => {
  return <footer className={classnames('card-footer', className)}>{children}</footer>
}

export interface CardImageProps {
  className?: string
  src: string
  alt?: string
}
export const CardImage: FC<CardImageProps> = ({ src, alt, className }) => {
  return (
    <div className={classnames('card-image', className)}>
      <figure className="image is-4by3">
        <img src={src} alt={alt} />
      </figure>
    </div>
  )
}

export interface CardImageContainerProps extends CardBaseProps {
  hasTextCentered?: boolean
}
export const CardImageContainer: FC<CardImageContainerProps> = ({
  children,
  className,
  hasTextCentered,
}) => {
  const classes = {
    'has-text-centered': hasTextCentered,
  }
  return <div className={classnames('card-image', className, classes)}>{children}</div>
}

export const CardBody: FC<CardBaseProps> = ({ children, className }) => {
  return <div className={classnames('card-content', className)}>{children}</div>
}

export interface CardProps extends CardBaseProps {
  isMobile?: boolean
  isFluid?: boolean
  isWideScreen?: boolean
  isFullHD?: boolean
  onClick?: () => void
}

export const Card: FC<CardProps> = ({
  children,
  isMobile,
  isFluid,
  isWideScreen,
  isFullHD,
  className,
  onClick,
}) => {
  const classes = Screens({ isMobile, isFluid, isWideScreen, isFullHD })

  return (
    <div className={classnames('card', className, classes)} onClick={onClick}>
      {children}
    </div>
  )
}
