import { useState } from 'react'

export const useToggle = (initialValue: boolean) => {
  const [toggleValue, setToggleValue] = useState(initialValue)
  const toggler = () => {
    console.log('current toggle value', toggleValue)
    console.log('set the value to', !toggleValue)
    setToggleValue(!toggleValue)
  }

  return [toggleValue, toggler] as const
}
