import React, { FC } from 'react'
import classnames from 'classnames'
import { BaseElement, BaseProps } from '../base-element'

export const Section: FC<BaseProps> = ({ className, children, ...props }) => {
  return (
    <BaseElement className={classnames('section', className)} {...props}>
      {children}
    </BaseElement>
  )
}

Section.defaultProps = {
  className: '',
  as: 'div',
}

export default Section
