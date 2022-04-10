import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle, FC } from 'react'
import classnames from 'classnames'
import { Colors } from '../../utils/modifiers'
import './notification.css'
import '../../styles/animation.css'

export interface NotificationProps {
  isShown: boolean
  children?: React.ReactNode
  className?: string
  onClose?: () => void
  onExit?: () => void
  onDismiss?: () => void
  onDismissed: () => void
  isPrimary?: boolean
  isSuccess?: boolean
  isInfo?: boolean
  isWarning?: boolean
  isDanger?: boolean
  isLink?: boolean
  isLight?: boolean
  isDismissible?: boolean
}
export const Notification: FC<NotificationProps> = forwardRef(
  (
    {
      isShown,
      children,
      onDismiss,
      onDismissed,
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
      isDismissible,
      className,
    },
    ref
  ) => {
    const classes = Colors({
      isPrimary,
      isSuccess,
      isInfo,
      isWarning,
      isDanger,
      isLink,
      isLight,
    })

    const [show, setShow] = useState(!!isShown)

    const animation = {
      animated: isDismissible,
      animation: true,
      fadeIn: show,
      fadeOutLeft: !show,
      'is-hidden': !isShown,
    }

    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const onEnd = ({ target, animationName }: AnimationEvent) => {
        const castTarget = target as HTMLElement
        if (animationName.indexOf('fadeOut') > -1) {
          castTarget.classList.add('is-hidden')
          onDismissed()
        }
      }
      const onStart = ({ target, animationName }: AnimationEvent) => {
        const castTarget = target as HTMLElement
        castTarget.classList.remove('is-hidden')
      }
      if (container.current) {
        container.current.addEventListener('animationend', onEnd)
        container.current.addEventListener('animationstart', onStart)
        return () => {
          container?.current?.removeEventListener('animationend', onEnd)
          container?.current?.removeEventListener('animationstart', onStart)
        }
      }
    }, [show])

    useImperativeHandle(ref, () => ({
      show: function () {
        setShow(true)
      },
      hide: function () {
        setShow(false)
      },
    }))

    return (
      <div
        ref={container}
        className={classnames('notification', className, animation, classes)}
        title="notification element"
      >
        {isDismissible && (
          <button
            title="dismiss notification"
            className="delete notification-dismiss"
            onClick={(e) => {
              e.preventDefault()
              setShow(false)
              if (onDismiss) {
                onDismiss()
              }
            }}
          ></button>
        )}
        {children}
      </div>
    )
  }
)

export default Notification

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

Notification.defaultProps = {
  isShown: true,
  isPrimary: false,
  isSuccess: false,
  isInfo: false,
  isWarning: false,
  isDanger: false,
  isLink: false,
  onClose: noop,
  onExit: noop,
  onDismiss: noop,
  onDismissed: noop,
  isDismissible: true,
}
