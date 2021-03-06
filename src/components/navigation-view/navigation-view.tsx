import React, { FC } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useToggle } from '../../hooks'
import './navigation-view.css'

export interface NavigationViewProps {
  children?: React.ReactNode
  className?: string
  isStatic?: boolean
  isActive?: boolean
}
export const NavigationView: FC<NavigationViewProps> = ({ children, className, isStatic }) => {
  const [isActive, setIsActive] = useToggle(false)
  return (
    <div
      className={classnames('navigation-view', className, {
        'is-static': isStatic,
        'is-active': isActive,
      })}
    >
      <a
        className={classnames('navbar-burger', { 'is-active': !isActive })}
        role="button"
        aria-expanded="false"
        aria-label="menu"
        onClick={() => {
          setIsActive()
        }}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      {children}
    </div>
  )
}

NavigationView.propTypes = {
  className: PropTypes.string,
  isStatic: PropTypes.bool,
}

NavigationView.defaultProps = {
  isStatic: true,
}

export default NavigationView
