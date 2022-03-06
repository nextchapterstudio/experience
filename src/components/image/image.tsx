import React, { FC, ElementType } from 'react'
import classnames from 'classnames'

export interface ImageProps {
  src: string
  alt: string
  className?: string
  isRounded?: boolean
  isSquare?: boolean
  is5by4?: boolean
  is1by1?: boolean
  is4by3?: boolean
  is3by2?: boolean
  is5by3?: boolean
  is16by9?: boolean
  is2by1?: boolean
  is3by1?: boolean
  is4by5?: boolean
  is3by4?: boolean
  is2by3?: boolean
  is3by5?: boolean
  is9by16?: boolean
  is1by2?: boolean
  is1by3?: boolean
  is16?: boolean
  is24?: boolean
  is32?: boolean
  is48?: boolean
  is64?: boolean
  is96?: boolean
  is128?: boolean
  as?: ElementType
}
export const Image: FC<ImageProps> = ({
  src,
  alt,
  className,
  isRounded,
  isSquare,
  is5by4,
  is1by1,
  is4by3,
  is3by2,
  is5by3,
  is16by9,
  is2by1,
  is3by1,
  is4by5,
  is3by4,
  is2by3,
  is3by5,
  is9by16,
  is1by2,
  is1by3,
  is16,
  is24,
  is32,
  is48,
  is64,
  is96,
  is128,
  as: Element = 'figure',
  ...props
}) => {
  const classes = {
    'is-square': isSquare,
    'is-5by4': is5by4,
    'is-1by1': is1by1,
    'is-4by3': is4by3,
    'is-3by2': is3by2,
    'is-5by3': is5by3,
    'is-16by9': is16by9,
    'is-2by1': is2by1,
    'is-3by1': is3by1,
    'is-4by5': is4by5,
    'is-3by4': is3by4,
    'is-2by3': is2by3,
    'is-3by5': is3by5,
    'is-9by16': is9by16,
    'is-1by2': is1by2,
    'is-1by3': is1by3,
    'is-16x16': is16,
    'is-24x24': is24,
    'is-32x32': is32,
    'is-48x48': is48,
    'is-64x64': is64,
    'is-96x96': is96,
    'is-128x128': is128,
  }

  return (
    <Element className={classnames('image', className, classes)}>
      <img
        src={src}
        alt={alt}
        {...props}
        className={classnames({
          'is-rounded': isRounded,
        })}
      />
    </Element>
  )
}
