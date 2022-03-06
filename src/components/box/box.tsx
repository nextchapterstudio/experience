import React, { FC } from 'react'
import classnames from 'classnames'
import { BaseElement, BaseProps } from '../base-element'


const Box : FC<BaseProps>= ({ children, className, ...props }) => {
  return (
    <BaseElement className={classnames('box', className)} {...props}>
      {children}
    </BaseElement>
  )
}



Box.defaultProps = {
  as: 'div',
}

export { Box }

export default Box
