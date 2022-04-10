import React, { FC } from 'react'
import classnames from 'classnames'
import { BaseElement, BaseProps } from '../base-element'
import './loading-indicator.css'
export const LoadingIndicator: FC<BaseProps> = ({ className, children, ...props }) => {
  return (
    <BaseElement className={classnames('loader', className)} {...props}>
      {children}
    </BaseElement>
  )
}

LoadingIndicator.defaultProps = {
  as: 'div',
}

export default LoadingIndicator
