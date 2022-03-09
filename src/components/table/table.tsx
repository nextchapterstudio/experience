import React, { FC } from 'react'
import classnames from 'classnames'

export interface TableProps {
  isBordered?: boolean
  isFullWidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
  className?: string
}
/*
The inevitable HTML table, with special case cells
*/
export const Table: FC<TableProps> = ({
  isBordered,
  isFullWidth,
  isHoverable,
  isNarrow,
  isStriped,
  className,
  children,
  ...props
}) => {
  const classes = classnames(
    'table',
    {
      'is-bordered': isBordered,
      'is-fullwidth': isFullWidth,
      'is-hoverable': isHoverable,
      'is-narrow': isNarrow,
      'is-striped': isStriped,
    },
    className
  )

  return (
    <table className={classes} {...props}>
      {children}
    </table>
  )
}

export default Table

export interface TableElementProps {
  className?: string
}
export const TableHead: FC<TableElementProps> = ({ className, children, ...props }) => {
  const classes = classnames(className)

  return (
    <thead className={classnames(className)} {...props}>
      {children}
    </thead>
  )
}

export const TableFoot: FC<TableElementProps> = ({ className, children, ...props }) => {
  return (
    <tfoot className={classnames(className)} {...props}>
      {children}
    </tfoot>
  )
}

export const TableRow: FC<TableElementProps> = ({ className, children, ...props }) => {
  return (
    <tr className={classnames(className)} {...props}>
      {children}
    </tr>
  )
}

export const TableHeaderCell: FC<TableElementProps> = ({ className, children, ...props }) => {
  return (
    <th className={classnames(className)} {...props}>
      {children}
    </th>
  )
}

export const TableCell: FC<TableElementProps> = ({ className, children, ...props }) => {
  return (
    <td className={classnames(className)} {...props}>
      {children}
    </td>
  )
}

export const TableBody: FC<TableElementProps> = ({ className, children, ...props }) => {
  return (
    <tbody className={classnames(className)} {...props}>
      {children}
    </tbody>
  )
}

export const TableContainer: FC<TableElementProps> = ({ className, children, ...props }) => {
  const classes = classnames('table-container', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
