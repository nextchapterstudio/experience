import React, { ElementType, FC, ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface ColumnsProps extends HTMLAttributes<HTMLOrSVGElement> {
  children?: React.ReactNode
  className?: string
  isMobile?: boolean
  isMultiline?: boolean
  isCentered?: boolean
  isNarrow?: boolean
  isGapless?: boolean
}
export const Columns: FC<ColumnsProps> = ({
  children,
  className,
  isMobile,
  isMultiline,
  isCentered,
  isNarrow,
  isGapless,
  ...props
}) => {
  const classes = {
    'is-mobile': isMobile,
    'is-multiline': isMultiline,
    'is-centered': isCentered,
    'is-narrow': isNarrow,
    'is-gapless': isGapless,
  }

  return (
    <div className={classnames('columns', className, classes)} {...props}>
      {children}
    </div>
  )
}
Columns.defaultProps = {
  className: '',
  isMobile: false,
  isMultiline: false,
  isCentered: false,
  isNarrow: false,
  isGapless: false,
}

export interface ColumnProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
  children?: ReactNode
  className?: string
  isSpaced?: boolean
  is?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | null
  isThreeQuarters?: boolean
  isTwoThirds?: boolean
  isHalf?: boolean
  isOneThird?: boolean
  isOneQuarter?: boolean
  isFull?: boolean
  isFourFifths?: boolean
  isThreeFifths?: boolean
  isTwoFifths?: boolean
  isOneFifth?: boolean
  isNarrow?: boolean
  isOffsetOneQuarter?: boolean
  isOffsetOneFifth?: boolean
  isOffsetHalf?: boolean
  isOffsetOneThird?: boolean
  isHidden?: boolean
  isFullheight?: boolean
  offset?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | null
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | null
}
export const Column: FC<ColumnProps> = ({
  children,
  as: Col = 'div',
  className,
  isThreeQuarters,
  isTwoThirds,
  isHalf,
  isOneThird,
  isOneQuarter,
  isFull,
  isFourFifths,
  isThreeFifths,
  isTwoFifths,
  isOneFifth,
  isNarrow,
  isOffsetOneQuarter,
  isOffsetOneFifth,
  isOffsetHalf,
  isOffsetOneThird,
  isHidden,
  offset,
  size,
  is,
  isFullheight,
  ...props
}) => {
  const classes = {
    'is-four-fifths': isFourFifths,
    'is-three-fifths': isThreeFifths,
    'is-two-fifths': isTwoFifths,
    'is-one-fifth': isOneFifth,
    'is-three-quarters': isThreeQuarters,
    'is-two-thirds': isTwoThirds,
    'is-half': isHalf,
    'is-one-third': isOneThird,
    'is-one-quarter': isOneQuarter,
    'is-full': isFull,
    'is-narrow': isNarrow,
    'is-offset-one-quarter': isOffsetOneQuarter,
    'is-offset-one-fifth': isOffsetOneFifth,
    'is-offset-half': isOffsetHalf,
    'is-offset-one-third': isOffsetOneThird,
    'is-hidden': isHidden,
    'is-1': false,
    'is-2': false,
    'is-3': false,
    'is-4': false,
    'is-5': false,
    'is-6': false,
    'is-7': false,
    'is-8': false,
    'is-9': false,
    'is-10': false,
    'is-11': false,
    'is-12': false,
    'is-offset-1': false,
    'is-offset-2': false,
    'is-offset-3': false,
    'is-offset-4': false,
    'is-offset-5': false,
    'is-offset-6': false,
    'is-offset-7': false,
    'is-offset-8': false,
    'is-offset-9': false,
    'is-offset-10': false,
    'is-offset-11': false,
    'is-full-height': isFullheight,
  }
  if (size) {
    classes[`is-${size}`] = true
  }
  if (is) {
    classes[`is-${is}`] = true
  }
  if (offset) {
    classes[`is-offset-${offset}`] = true
  }
  if (size && is) {
    console.warn('Do not use both size and is')
  }
  return (
    <Col className={classnames('column', className, classes)} {...props}>
      {children}
    </Col>
  )
}

Column.defaultProps = {
  isFourFifths: false,
  isThreeFifths: false,
  isTwoFifths: false,
  isOneFifth: false,
  isThreeQuarters: false,
  isTwoThirds: false,
  isHalf: false,
  isOneThird: false,
  isOneQuarter: false,
  isFull: false,
  isNarrow: false,
  as: 'div',
}

export interface FullColumnProps {
  children?: React.ReactNode
  className?: string
}
export const FullColumn: FC<FullColumnProps> = ({ children, className }: FullColumnProps) => (
  <Columns>
    <Column isFull className={className}>
      {children}
    </Column>
  </Columns>
)
