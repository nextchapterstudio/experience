import React, { FC } from 'react'
import classnames from 'classnames'
import { Sizes } from '../../utils/modifiers'

export interface DeleteProps {
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  isSmall?: boolean
  isMedium?: boolean
  isLarge?: boolean
}

export const Delete: FC<DeleteProps> = ({ className, onClick, isSmall, isMedium, isLarge }) => {
  const classes = Sizes({ isSmall, isMedium, isLarge })
  return <button className={classnames('delete', className, classes)} onClick={onClick}></button>
}

Delete.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
}

export default Delete
