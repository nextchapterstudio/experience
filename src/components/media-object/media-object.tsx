import React, { FC, ElementType } from 'react'
import classnames from 'classnames'

export interface MinMediaProps {
  className?: string
}
export interface MediaProps extends MinMediaProps {
  as?: ElementType
  className?: string
}
export const MediaLeft: FC<MediaProps> = ({ children, className, as: Element = 'figure' }) => {
  return <Element className={classnames('media-left', className)}>{children}</Element>
}

MediaLeft.defaultProps = {
  as: 'figure',
}
// MediaLeft.sortOrder = 0

export const MediaContent: FC<MinMediaProps> = ({ children, className }) => {
  return <div className={classnames('media-content', className)}>{children}</div>
}

//MediaContent.sortOrder = 1

export const MediaRight: FC<MediaProps> = ({ children, className, as: Element = 'div' }) => {
  return <Element className={classnames('media-right', className)}>{children}</Element>
}

MediaRight.defaultProps = {
  as: 'div',
}

// MediaRight.sortOrder = 2

export const MediaObject: FC<MediaProps> = ({ children, className, as: Element = 'article' }) => {
  return <Element className={classnames('media', className)}>{children}</Element>
}

MediaObject.defaultProps = {
  as: 'article',
}
