import React, { useContext, FC, ElementType, ReactNode } from 'react'
import classnames from 'classnames'

export interface TitleProps {
  is?: '1' | '2' | '3' | '4' | '5' | '6' | false
  as?: ElementType
  children?: ReactNode
  className?: string
  isSpaced?: boolean
}
export const Title: FC<TitleProps> = ({
  as: Hn = 'h1',
  className,
  is,
  isSpaced,
  children,
  ...props
}) => {
  const classes = {
    [`is-${is}`]: !!is,
    'is-spaced': isSpaced,
  }

  return (
    <Hn className={classnames('title', className, classes)} {...props}>
      {children}
    </Hn>
  )
}

Title.defaultProps = {
  as: 'h1',
  is: false,
  isSpaced: false,
}

export default Title
