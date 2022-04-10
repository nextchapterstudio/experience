import React, { useState, createContext, useContext, useCallback, FC } from 'react'
import classnames from 'classnames'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ModalContext = createContext({ isShown: false, closeModal: () => {} })

export interface ModalCardHeadProps {
  title?: string
  className?: string
}
export const ModalCardHead: FC<ModalCardHeadProps> = ({ title, className }) => {
  const value = useContext(ModalContext)
  return (
    <header className={classnames('modal-card-head', className)}>
      <p className="modal-card-title">{title}</p>
      <button
        className="delete"
        aria-label="close"
        onClick={(e) => {
          e.preventDefault()
          value.closeModal()
        }}
      ></button>
    </header>
  )
}

export interface ModalCardProps {
  children?: React.ReactNode
  className?: string
  includeTrigger?: boolean
}
export const ModalCardBody: FC<ModalCardProps> = ({ children, className }) => {
  return <section className={classnames('modal-card-body', className)}>{children}</section>
}

export const ModalCardFoot: FC<ModalCardProps> = ({ children, className }) => {
  return <footer className={classnames('modal-card-foot', className)}>{children}</footer>
}
export interface CardModalProps extends ModalCardProps {
  isActive?: boolean
  onCloseClick?: () => void
}
export const CardModal: FC<CardModalProps> = ({ children, isActive, onCloseClick, className }) => {
  return (
    <div className={classnames('modal', className, { 'is-active': isActive })}>
      <div className="modal-background"></div>
      <div className="modal-card">{children}</div>
      <button className="modal-close is-large" aria-label="close" onClick={onCloseClick}></button>
    </div>
  )
}

CardModal.defaultProps = {
  isActive: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseClick: () => {},
}
export const BaseModal: FC<CardModalProps> = ({ children, isActive, onCloseClick, className }) => {
  return (
    <div className={classnames('modal', className, { 'is-active': isActive })}>
      <div className="modal-background"></div>
      <div className="modal-content">{children}</div>
      <button className="modal-close is-large" aria-label="close" onClick={onCloseClick}></button>
    </div>
  )
}

BaseModal.defaultProps = {
  isActive: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCloseClick: () => {},
}

export interface SimpleModalProps {
  children?: React.ReactNode
  className?: string
  triggerClassName?: string
  triggerText?: string
  triggerFn: (x: boolean) => void
  isModalShown?: boolean
}
const SimpleModal: FC<SimpleModalProps> = ({
  children,
  triggerClassName,
  triggerText,
  triggerFn,
  isModalShown,
  className,
}) => {
  return (
    <div>
      <BaseModal
        className={className}
        isActive={isModalShown}
        onCloseClick={() => {
          triggerFn(false)
        }}
      >
        {children}
      </BaseModal>
      {!isModalShown && (
        <div>
          <button
            className={classnames('button', triggerClassName)}
            onClick={(e) => {
              e.preventDefault()
              triggerFn(true)
            }}
          >
            {triggerText}
          </button>
        </div>
      )}
    </div>
  )
}

SimpleModal.defaultProps = {
  triggerClassName: 'is-primary',
  triggerText: 'Show',
}

export interface CoreModalProps {
  children?: React.ReactNode
  className?: string
  triggerClassName?: string
  triggerText?: string
  triggerFn?: (arg0: boolean) => void
  isActive?: boolean
  includeTrigger?: boolean
}
export const CoreModal: FC<CoreModalProps> = ({
  children,
  className,
  triggerClassName,
  triggerText,
  triggerFn,
  isActive,
  includeTrigger,
}) => {
  const [show, setShow] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        closeModal: () => (triggerFn !== undefined ? triggerFn(false) : setShow(false)),
        isShown: isActive !== undefined ? isActive : show,
      }}
    >
      <div>
        <BaseModal
          className={className}
          isActive={isActive !== undefined ? isActive : show}
          onCloseClick={() => {
            const showHide = triggerFn !== undefined ? triggerFn : setShow

            showHide(false)
          }}
        >
          {children}
        </BaseModal>
        {includeTrigger && !isActive && (
          <div>
            <button
              className={classnames('button', triggerClassName)}
              onClick={(e) => {
                e.preventDefault()
                triggerFn ? triggerFn(true) : setShow(true)
              }}
            >
              {triggerText}
            </button>
          </div>
        )}
      </div>
    </ModalContext.Provider>
  )
}

CoreModal.defaultProps = {
  triggerClassName: 'is-primary',
  triggerText: 'Show',
  includeTrigger: true,
}

export default CoreModal
export { SimpleModal }
