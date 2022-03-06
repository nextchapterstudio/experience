import React, {  useEffect, useRef, forwardRef, ElementType, HTMLAttributes, FC, ComponentProps  } from 'react'
import classnames from 'classnames'
import { BaseElement } from '../base-element'

export interface CollapseProps extends HTMLAttributes<HTMLOrSVGElement>  {
    className?: string
    isShown?: boolean
    children?: React.ReactNode
    animationIn?: string
    animationOut?: string
    onClick?: () => void;
  }

  export interface AnimationProps   {
    target: HTMLElement
    animationName: string
  }
const defaultProps = {
    isShown: true,
    animationIn: 'fadeIn',
    animationOut: 'fadeOut',
  }
export const Collapse: FC<CollapseProps> = ({
  className,
  children,
  isShown,
  animationIn,
  animationOut,
  ...props
}) => {
  const container = useRef<HTMLElement>()

  const animation = {
    animated: true,
    animation: true,
    [animationIn || 'fadeIn']: isShown,
    [animationOut || 'fadeOut']: !isShown,
    'is-hidden': !isShown,
  }

  useEffect(() => {
    
    const onEnd = ({ target, animationName }:AnimationEvent) => {
        const castTarget = target as HTMLElement
      if (castTarget && animationName.indexOf('Out') > -1) {
        castTarget.classList.add('is-hidden')
      }
    }
    const onStart = ({ target  }:AnimationEvent) => {
        const castTarget = target as HTMLElement
        castTarget.classList.remove('is-hidden')
    }
    if (container && container.current) {
      container.current.addEventListener('animationend', onEnd)
      container.current.addEventListener('animationstart', onStart)
      return () => {
        container?.current?.removeEventListener('animationend', onEnd)
        container?.current?.removeEventListener('animationstart', onStart)
      }
    }
  }, [isShown])

  return (
    <div
      className={classnames('collapsed', className, animation)}
      {...props}
    >
      {children}
    </div>
  )
}

Collapse.defaultProps = defaultProps

export default Collapse






