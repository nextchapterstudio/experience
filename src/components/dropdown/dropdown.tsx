import React, { useRef, useState, createContext, useContext, FC, ReactNode } from 'react'
import { useClickOutside } from '../../hooks'
import classnames from 'classnames'

export interface DropDownListItem {
  name: string
  id: string | number
}

export interface DropDownProps {
  list: DropDownListItem[]
  onSelect: (arg0: DropDownListItem) => void
  onValueChange?: (arg0: DropDownListItem) => void
  label: string
  className: string
  isUp: boolean
}

export const DropDown: FC<DropDownProps> = ({ list, onSelect, label, className, isUp }) => {
  const [dropDownIsShown, setDropDownIsShown] = useState(false)
  const mappedItems = list.map((item, index) => {
    if (!item) {
      return <hr className="dropdown-divider" key={`dd-divider-${index}`} />
    }

    return (
      <a
        key={`dd-${item.id}-${index}`}
        className="dropdown-item"
        onClick={(e) => {
          e.preventDefault()
          onSelect(item)
          setDropDownIsShown(false)
        }}
      >
        <span>{item.name}</span>
      </a>
    )
  })

  const dropDown = useRef(null)
  const hideDropDown = () => {
    if (dropDownIsShown) {
      setDropDownIsShown(false)
    }
  }
  useClickOutside(dropDown, hideDropDown)

  return (
    <div
      ref={dropDown}
      className={classnames('dropdown', className, {
        'is-active': dropDownIsShown,
        'is-up': isUp,
      })}
      onFocus={(e) => {
        setDropDownIsShown(true)
      }}
    >
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={(e) => {
            e.preventDefault()
            setDropDownIsShown(!dropDownIsShown)
          }}
        >
          <span>{label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div
        className={classnames('dropdown-menu', 'animated', {
          'is-hidden': !dropDownIsShown,
          fadeIn: dropDownIsShown,
        })}
      >
        <div className="dropdown-content">{mappedItems}</div>
      </div>
    </div>
  )
}

DropDown.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onValueChange: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect: () => {},
  list: [],
  label: 'Dropdown button',
}

export interface IDropDownContext {
  setDropDown: (val: boolean) => void
}

const DropDownContext = createContext<IDropDownContext>({
  setDropDown: (val: boolean) => {
    console.log('set', val)
  },
})

export interface DropDownItemProps {
  className?: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  children: ReactNode
}
export const DropDownItem: FC<DropDownItemProps> = ({ className, onClick, children }) => {
  const { setDropDown } = useContext(DropDownContext)
  return (
    <a
      className={classnames('dropdown-item', className)}
      onClick={(e) => {
        setDropDown(false)
        onClick(e)
      }}
    >
      <span>{children}</span>
    </a>
  )
}

DropDownItem.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
}

export interface DropDownDividerProps {
  className?: string
}
export const DropDownDivider: FC<DropDownDividerProps> = ({ className }) => (
  <hr className={classnames('dropdown-divider', className)} />
)

export interface DropDownMenuProps {
  className?: string
  label: string
  isUp?: boolean
  children?: ReactNode
}

export const DropDownMenu: FC<DropDownMenuProps> = ({ children, label, isUp, className }) => {
  const [dropDownIsShown, setDropDownIsShown] = useState(false)

  const dropDown = useRef(null)
  const hideDropDown = () => {
    setDropDownIsShown(false)
  }
  useClickOutside(dropDown, hideDropDown)

  return (
    <DropDownContext.Provider value={{ setDropDown: setDropDownIsShown }}>
      <div
        ref={dropDown}
        className={classnames('dropdown', className, {
          'is-active': dropDownIsShown,
          'is-up': isUp,
        })}
        onFocus={(e) => {
          setDropDownIsShown(true)
        }}
      >
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={(e) => {
              e.preventDefault()
              setDropDownIsShown(!dropDownIsShown)
            }}
          >
            <span>{label}</span>
            <span className="icon is-small">
              {isUp && <i className="fas fa-angle-up" aria-hidden="true" />}
              {!isUp && <i className="fas fa-angle-down" aria-hidden="true" />}
            </span>
          </button>
        </div>
        <div
          className={classnames('dropdown-menu', 'animated', {
            'is-hidden': !dropDownIsShown,
            fadeIn: dropDownIsShown,
          })}
        >
          <div className="dropdown-content">{children}</div>
        </div>
      </div>
    </DropDownContext.Provider>
  )
}

DropDownMenu.defaultProps = {
  label: 'Dropdown button',
}
