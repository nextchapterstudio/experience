import React, { FC } from 'react'
import classnames from 'classnames'

export interface FieldProps {
  className?: string
  isGrouped?: boolean
  isGroupedCentered?: boolean
  isGroupedRight?: boolean
  isGroupedMultiline?: boolean
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  hasAddonsRight?: boolean
  isHorizontal?: boolean
  isNarrow?: boolean
  isExpanded?: boolean
}
export const Field: FC<FieldProps> = ({
  className,
  children,
  isGrouped,
  isGroupedCentered,
  isGroupedRight,
  isGroupedMultiline,
  hasAddons,
  hasAddonsCentered,
  hasAddonsRight,
  isHorizontal,
  isNarrow,
  isExpanded,
}) => {
  const classes = {
    'is-grouped': isGrouped,
    'is-grouped-centered': isGroupedCentered,
    'is-grouped-right': isGroupedRight,
    'has-addons': hasAddons,
    'has-addons-centered': hasAddonsCentered,
    'has-addons-right': hasAddonsRight,
    'is-grouped-multiline': isGroupedMultiline,
    'is-horizontal': isHorizontal,
    'is-expanded': isExpanded,
    'is-narrow': isNarrow,
  }
  return <div className={classnames('field', className, classes)}>{children}</div>
}
