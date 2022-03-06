import React, { FC } from 'react'
import classnames from 'classnames'
import {
  allTheClasses,
  ResponsiveProps,
  isSizedProps,
  BackgroundColorProps,
  ColorProps,
  HasTextProps,
  StyleOrStateProps,
  ScreenProps,
  SizeProps,
  FontWeightProps,
  TextHelpersProps,
} from '../../utils/modifiers'

export interface PaginationLinkProps {
  label?: string
  className?: string
  page?: number
  onClick?: () => void
  isCurrent?: boolean
}
export const PaginationLink: FC<PaginationLinkProps> = ({
  label,
  className,
  page,
  onClick,
  isCurrent,
  ...props
}) => {
  return (
    <a
      className={classnames('pagination-link', className, {
        'is-current': isCurrent,
      })}
      aria-label={`Goto page ${page}`}
      onClick={onClick}
      {...props}
    >
      {label || page}
    </a>
  )
}
export interface PaginationEllipsisProps {
  className?: string
}
export const PaginationEllipsis: FC<PaginationEllipsisProps> = ({ className }) => {
  return <span className={classnames('pagination-ellipsis', className)}>&hellip;</span>
}
export const PaginationPrevious: FC<PaginationLinkProps> = ({
  label,
  className,
  page,
  onClick,
  ...props
}) => {
  return (
    <a
      className={classnames('pagination-previous', className)}
      aria-label={`Goto page ${page}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </a>
  )
}
PaginationPrevious.defaultProps = {
  label: 'Previous',
}
export const PaginationNext: FC<PaginationLinkProps> = ({
  label,
  className,
  page,
  onClick,
  ...props
}) => {
  return (
    <a
      className={classnames('pagination-next', className)}
      aria-label={`Goto page ${page}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </a>
  )
}
PaginationNext.defaultProps = {
  label: 'Next',
}

export interface PaginationListProps {
  children?: React.ReactNode
  className?: string
}
export const PaginationList: FC<PaginationListProps> = ({ children, className }) => {
  const kids = React.Children.map(children, (child, i) => {
    return <li>{child}</li>
  })
  return <ul className={classnames('pagination-list', className)}>{kids}</ul>
}
export interface PaginationProps {
  children?: React.ReactNode
  className?: string
}

export const Pagination: FC<
  PaginationProps &
    ResponsiveProps &
    isSizedProps &
    BackgroundColorProps &
    ColorProps &
    HasTextProps &
    StyleOrStateProps &
    ScreenProps &
    SizeProps &
    FontWeightProps &
    TextHelpersProps
> = ({ className, children, ...props }) => {
  const classes = allTheClasses(props)

  return (
    <nav
      className={classnames('pagination', className, classes)}
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </nav>
  )
}
