import React, { useContext, FC, ElementType, ReactNode } from 'react'
import classnames from 'classnames'

import { HeroContext } from '../hero'
import { BaseProps } from '../base-element'

export interface SubTitleProps {
  is?: '1' | '2' | '3' | '4' | '5' | '6' | false
  as?: ElementType
  children?: ReactNode
  className?: string
  isSpaced?: boolean
}
export const SubTitle: FC<SubTitleProps> = ({
  as: Hn = 'h2',
  className,
  is,
  isSpaced,
  children,
  ...props
}) => {
  const value = useContext(HeroContext)
  const isInHero = value && value.isInHero
  const classes = {
    [`is-${is}`]: !isInHero && !!is,
    'is-spaced': isSpaced,
  }

  return (
    <Hn className={classnames('subtitle', className, classes)} {...props}>
      {children}
    </Hn>
  )
}

SubTitle.defaultProps = {
  as: 'h2',
  is: false,
  isSpaced: false,
}

export default SubTitle
