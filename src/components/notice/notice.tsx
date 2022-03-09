import React, { useEffect, useRef, useState, FC } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import { allTheClasses, ColorProps } from '../../utils/modifiers'
import './notice.css'

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  rootContainer.classList.add('notices')
  return rootContainer
}

const addRootElement = (rootElem: string | Node) => {
  document.body.append(rootElem)
}

const usePortal = (id: string, className: string, topLevelClassName: string) => {
  const rootElemRef = useRef<HTMLElement>(null)

  useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`)
    const parentElem = existingParent || createRootElement(id)

    if (!existingParent) {
      addRootElement(parentElem)
    }
    parentElem.appendChild(rootElemRef.current as Node)
    topLevelClassName.split(' ').forEach((cname) => {
      if (parentElem) {
        parentElem.classList.add(cname)
      }
    })

    return function removeElement() {
      rootElemRef?.current?.remove()
      if (parentElem.childNodes.length === -1) {
        parentElem.remove()
      }
    }
  }, [])

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }

    if (className) {
      rootElemRef?.current.className = ''
      className.split(' ').forEach((cname) => {
        rootElemRef?.current?.classList.add(cname)
      })
    }
    return rootElemRef.current
  }

  return getRootElem()
}
export interface PortalProps {
  id: string
  className: string
  topLevelClassName: string
}
const Portal: FC<PortalProps> = ({ id, children, className, topLevelClassName }) => {
  const portalTarget = usePortal(id, className, topLevelClassName)

  const p = createPortal(children, portalTarget)

  const onEnd = ({ target, animationName }: AnimationEvent) => {
    const castTarget = target as HTMLElement
    if (animationName.indexOf('Out') > -1) {
      // target.classList.add('is-hidden')
      castTarget.remove()
    }
  }
  const onStart = ({ target, animationName }: AnimationEvent) => {
    const castTarget = target as HTMLElement
    castTarget.classList.remove('is-hidden')
  }
  useEffect(() => {
    if (p) {
      portalTarget.addEventListener('animationend', onEnd)
      portalTarget.addEventListener('animationstart', onStart)
      return () => {
        portalTarget.removeEventListener('animationend', onEnd)
        portalTarget.removeEventListener('animationstart', onStart)
      }
    }
  })

  return p
}

export interface NoticeProps {
  className?: string
  isShown?: boolean
  isTop?: boolean
  isBottom?: boolean
  isRight?: boolean
  isLeft?: boolean
  isBottomLeft?: boolean
  isBottomRight?: boolean
  isTopLeft?: boolean
  isTopRight?: boolean
  duration?: number
  actionText?: string
  onAction?: (arg: object) => void
  onHide?: () => void
}
export const Notice: FC<NoticeProps & ColorProps> = ({
  children,
  isShown,
  className,
  onAction = noop,
  duration = 2000,
  isTop,
  isBottom,
  isRight,
  isLeft,
  isBottomLeft,
  isBottomRight,
  isTopLeft,
  isTopRight,
  onHide = noop,
  actionText = 'OK',
  ...props
}) => {
  let topLevelClassName = classnames({
    'is-top': isTop,
    'is-bottom': isBottom,
  })

  const classes = allTheClasses({
    isTop,
    isBottom,
    isRight,
    isLeft,
    isBottomLeft,
    isBottomRight,
    isTopLeft,
    isTopRight,
    isAnimated: true,
    ...props,
  })

  const buttonClasses = allTheClasses(props)
  const [show, setShow] = useState(isShown)

  const valueSet = isBottom || isTop || isTopLeft || isBottomLeft || isBottomRight || isTopRight

  let bottomContainer = isBottom || isBottomLeft || isBottomRight
  if (!valueSet) {
    classes['is-bottom-right'] = true
    classes['is-bottom'] = true
    bottomContainer = true

    topLevelClassName = classnames({
      'is-top': isTop,
      'is-bottom': true,
    })
  }
  classes['fadeOut'] = !show
  classes['fadeIn'] = show
  useEffect(() => {
    setShow(isShown)
    if (!isShown) return
    const timer = setTimeout(() => {
      setShow(false)
      onHide()
    }, duration)
    return () => {
      clearTimeout(timer)
    }
  }, [isShown])

  const id = bottomContainer ? 'notice-bottom' : 'notice-top'
  if (!isShown) {
    return <></>
  }
  return (
    <Portal
      id={id}
      className={classnames('snackbar', classes)}
      topLevelClassName={topLevelClassName}
    >
      <div className="text">{children}</div>
      <div className={classnames('action', buttonClasses)}>
        {onAction && (
          <a
            href="#"
            className={classnames('button')}
            onClick={(e) => {
              e.preventDefault()
              onAction({
                close: () => {
                  setShow(false)
                  onHide()
                },
              })
            }}
          >
            {actionText}
          </a>
        )}
      </div>
    </Portal>
  )
}

Notice.defaultProps = {
  actionText: 'OK',
  isShown: true,
  duration: 2000,
  isLeft: false,
  isTop: false,
  isBottom: false,
  isRight: false,
  onHide: noop,
}

export default Notice
