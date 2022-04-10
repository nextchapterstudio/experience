import React, { createContext, useContext, useState, FC } from 'react'
import classnames from 'classnames'
import { Collapse } from '../collapse'
import { Colors, Sizes } from '../../utils/modifiers'

export interface MessageHeaderProps {
  children?: React.ReactNode
  className?: string
  hasDelete?: boolean
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export interface MessageContextProps {
  isSmall?: boolean
  isMedium?: boolean
  isLarge?: boolean
  closeMessage: () => void
}

const MessageContext = createContext<MessageContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeMessage: () => {},
})
export const MessageHeader: FC<MessageHeaderProps> = ({
  hasDelete,
  children,
  onDeleteClick,
  className,
}) => {
  const value = useContext(MessageContext)

  const classes = Sizes(value)

  return (
    <div className={classnames('message-header', className)}>
      <p>{children}</p>
      {hasDelete && (
        <button
          className={classnames('delete', classes)}
          aria-label="delete"
          onClick={(e) => {
            onDeleteClick(e)
            if (!e.isDefaultPrevented()) {
              value.closeMessage()
            }
          }}
        ></button>
      )}
    </div>
  )
}

MessageHeader.defaultProps = {
  hasDelete: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => {},
}
export interface MessageBodyProps {
  children?: React.ReactNode
  className?: string
}
export const MessageBody: FC<MessageBodyProps> = ({ children, className }) => {
  return <div className={classnames('message-body', className)}>{children}</div>
}

export interface MessageProps {
  children?: React.ReactNode
  className?: string
  isSmall?: boolean
  isMedium?: boolean
  isLarge?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isInfo?: boolean
  isWarning?: boolean
  isDanger?: boolean
  isLink?: boolean
  isLight?: boolean
  isWhite?: boolean
  isDark?: boolean
  isBlack?: boolean
  isText?: boolean
  isShown?: boolean
  onClose: () => void
}

export const Message: FC<MessageProps> = ({
  children,
  isSmall,
  isMedium,
  isLarge,
  isPrimary,
  isSuccess,
  isInfo,
  isWarning,
  isDanger,
  isLink,
  isLight,
  isWhite,
  isDark,
  isBlack,
  isText,
  isShown,
  className,
  onClose,
}) => {
  const classes = {
    ...Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isWhite,
      isDark,
      isBlack,
      isText,
    }),
    ...Sizes({
      isSmall,
      isMedium,
      isLarge,
    }),
  }

  const [show, setShow] = useState(isShown)

  return (
    <MessageContext.Provider
      value={{
        isSmall,
        isMedium,
        isLarge,
        closeMessage: () => {
          onClose()
          setShow(false)
        },
      }}
    >
      <Collapse isShown={show}>
        <article className={classnames('message', className, classes)}>{children}</article>
      </Collapse>
    </MessageContext.Provider>
  )
}
Message.defaultProps = {
  isShown: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: () => {},
}
