import React, { FC, ElementType, ReactNode } from 'react'
import classnames from 'classnames'
import { BaseElement } from '../base-element'

export interface BlockProps {
  className?: string
}
export const Block: FC<BlockProps> = ({ className, children, ...props }) => {
  return (
    <BaseElement className={classnames('block', className)} {...props}>
      {children}
    </BaseElement>
  )
}

export default Block

Block.defaultProps = {
  className: '',
}
