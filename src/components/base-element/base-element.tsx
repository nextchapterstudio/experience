import React, { forwardRef, ElementType, HTMLAttributes, FC, ComponentProps  } from 'react'
import classnames from 'classnames'

import { allTheClasses } from '../../utils/modifiers'
import htmlAttributes, { ariaAttributes } from '../../utils/element-attributes'
import { propTypes } from '../../utils/prop-types'

export const BaseElement: FC<BaseProps> = forwardRef(({ as: Element = 'div', className, children, ...otherProps }, ref) => {

    const classes = allTheClasses(otherProps)
    const { onClick } = otherProps
    const tagName =Element?.toString() || 'div'


    const castedProps = otherProps as Record<string, string>
    const clean = htmlAttributes['*']
      .concat(htmlAttributes[tagName] || [])
      .concat(ariaAttributes)
      .reduce((objs: Record<string, string>, current: string) => {
        if (castedProps[current]) {
          objs[current] = castedProps[current]
        }
        return objs
      }, {})

    return (
      <Element
        ref={ref}
        className={classnames(className, classes)}
        onClick={onClick}
        {...clean}
      >
        {children}
      </Element>
    )
  })


export interface BaseProps extends HTMLAttributes<HTMLOrSVGElement>  {
    as?: ElementType;
    children?: React.ReactNode
    className?: string
    isSpaced?: boolean
    status?: 'inactive' | 'inProgress' | 'success' | 'failed'
    value?: string | number | Error
    onClick?: () => void;
  }


BaseElement.defaultProps = {
  as: 'div',
}
