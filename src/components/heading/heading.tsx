import React, { FC } from 'react'
import classnames from 'classnames'
import { BaseElement, BaseProps } from '../base-element'

export const Heading: FC<BaseProps> = ({ className, children, as = 'p', ...props }) => {
  return (
    <BaseElement className={classnames('heading', className)} {...props}>
      {children}
    </BaseElement>
  )
}

Heading.defaultProps = {
  as: 'p',
}

export default Heading
