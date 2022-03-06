import React, {  ElementType, FC  } from 'react'
import classnames from 'classnames'
// import { BaseElement } from 'components/base-element'


export const Typography: FC<TypographyProps> = ({
    as: Element = 'span',
    className,
    is,
    isSpaced,
    children,
    ...props
  }) => {
    const classes = {
      [`is-${is}`]: is,
      'is-spaced': isSpaced,
    }
  
    return (
      <Element className={classnames('typography', className, classes)} {...props}>
        {children}
      </Element>
    )
  }
  export interface TypographyProps {
    as?: ElementType;
    children?: React.ReactNode
    className?: string
    isSpaced?: boolean
    is?: '1' | '2' | '3' | '4' | '5' | '6'| false
    status?: 'inactive' | 'inProgress' | 'success' | 'failed'
    value?: string | number | Error
  }

  
  Typography.defaultProps = {
    as: 'span',
    is: false,
    isSpaced: false,
  }
  