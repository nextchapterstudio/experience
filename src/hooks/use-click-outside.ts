import { RefObject } from 'react'
import { useEventListener } from './use-event-listener'

type Handler = (event: MouseEvent) => void

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current

    if (!el || el.contains(event.target as Node)) {
      return
    }

    handler(event)
  })
}

export { useClickOutside }
export default useClickOutside
