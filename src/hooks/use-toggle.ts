import { useState, useCallback } from 'react'

export const useToggle = (initialValue: boolean) => {
  const [toggleValue, setToggleValue] = useState(initialValue)
  const toggler = useCallback(() => setToggleValue(!toggleValue), [])

  return [toggleValue, toggler] as const
}
