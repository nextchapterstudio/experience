import React, { FC, HTMLAttributes } from 'react'
import {
  ModalCardBody,
  ModalCardFoot,
  ModalCardHead,
  Button,
  Field,
  Control,
  ModalCard,
  CardModal,
} from '../'
import { useToggle } from '../../hooks'
import { noop } from '../../utils'

export interface ConfirmButtonProps {
  onConfirm: () => void
  onCancel: () => void
  question?: string
  confirmText?: string
  declineText?: string
  isDisabled?: boolean
  title?: string
}
const ConfirmButton: FC<ConfirmButtonProps> = ({
  onConfirm = noop,
  onCancel = noop,
  question = 'Are you sure?',
  confirmText = 'OK',
  declineText = 'Cancel',
  isDisabled,
  children,
  title,
}) => {
  const [modalShown, setModalShown] = useToggle(false)

  console.log('modlal shown', modalShown)
  return (
    <>
      <Button
        isPrimary
        isLoading={modalShown}
        onClick={(e) => {
          setModalShown()
          e.preventDefault()
        }}
      >
        {children}
      </Button>
      <CardModal includeTrigger={false} isActive={modalShown} onCloseClick={onCancel}>
        <ModalCardHead title={title}></ModalCardHead>
        <ModalCardBody>{question}</ModalCardBody>
        <ModalCardFoot>
          <Field isGrouped>
            <Control>
              <Button
                isSuccess
                onClick={(e) => {
                  e.preventDefault()
                  onConfirm()
                  setModalShown()
                }}
              >
                {confirmText}
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  onCancel()
                  setModalShown()
                }}
              >
                {declineText}
              </Button>
            </Control>
          </Field>
        </ModalCardFoot>
      </CardModal>
    </>
  )
}

ConfirmButton.defaultProps = {
  confirmText: 'Ok',
  onCancel: noop,
  onConfirm: noop,
  declineText: 'Cancel',
  question: 'Are you sure?',
  title: 'Please confirm',
}
export { ConfirmButton }
export default ConfirmButton
