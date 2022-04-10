import React, { useEffect, useRef, useState, FC, useLayoutEffect } from 'react'
import classnames from 'classnames'
import { Screens } from '../../utils/modifiers'
import { Button } from '../button'
import { Icon } from '../icon'
import './carousel.css'

export interface CarouselBaseProps {
  className?: string
}
export type CarouselItemProps = CarouselBaseProps
export const CarouselItem: FC<CarouselItemProps> = ({ children, className }) => {
  return <div className={classnames('column', className)}>{children}</div>
}

export interface CarouselProps extends CarouselBaseProps {
  isMobile?: boolean
  isFluid?: boolean
  isWideScreen?: boolean
  isFullHD?: boolean
  hasBorder?: boolean
  autoplay?: boolean
  duration?: number
  slidesToShow?: number
}
export const Carousel: FC<CarouselProps> = ({
  children,
  isMobile,
  isFluid,
  isWideScreen,
  isFullHD,
  hasBorder,
  className,
  autoplay,
  duration = 10000,
  slidesToShow = 1,
}) => {
  const classes = Screens({ isMobile, isFluid, isWideScreen, isFullHD })
  const innerContainer = useRef<HTMLDivElement>()
  const childrenAsArray = React.Children.toArray(children)
  const totalSlides = childrenAsArray.length

  const calcSlideClass = (show: number) => {
    let isStyle = 'is-12'
    switch (show) {
      case 1:
        isStyle = 'is-12'
        break
      case 2:
        isStyle = 'is-6'
        break
      case 3:
        isStyle = 'is-4'
        break
      case 4:
        isStyle = 'is-3'
        break
      default:
        isStyle = 'is-12'
        break
    }
    return isStyle
  }

  const kids = childrenAsArray.map((child, i) =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          className: calcSlideClass(slidesToShow),
        })
      : child
  )

  const [carouselOffsest, setCarouselOffsest] = useState(0)

  useEffect(() => {
    if (innerContainer.current) {
      const total = parseFloat(
        getComputedStyle(innerContainer.current, null).width.replace('px', '')
      )
      const currentOffset = total * (1 * carouselOffsest)
      innerContainer.current.style.transform = `translateX(-${currentOffset}px)`
    }
  })

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        if (carouselOffsest < totalSlides - 1) {
          setCarouselOffsest(carouselOffsest + 1)
        } else {
          setCarouselOffsest(0)
        }
      }, duration)

      // clearing interval
      return () => clearInterval(timer)
    }
  })

  return (
    <div className={classnames('container', { 'has-border': hasBorder })}>
      <div className={classnames('is-multi-carousel', className, classes)}>
        <div className="is-multi-carousel-inner columns is-variable" ref={innerContainer}>
          {kids}
        </div>
        <Button
          className="left-next"
          onClick={(e) => {
            e.preventDefault()
            if (carouselOffsest > 0) {
              setCarouselOffsest(carouselOffsest - 1)
            }
          }}
        >
          <Icon icon="chevron-left" fas />
        </Button>
        <Button
          className="right-next"
          onClick={(e) => {
            e.preventDefault()
            if (slidesToShow > 1) {
              const totalBlocks = Math.ceil(totalSlides / slidesToShow)
              if (carouselOffsest < totalBlocks - 1) {
                setCarouselOffsest(carouselOffsest + 1)
              } else {
                setCarouselOffsest(0)
              }
            } else if (carouselOffsest < totalSlides - 1) {
              setCarouselOffsest(carouselOffsest + 1)
            } else {
              setCarouselOffsest(0)
            }
          }}
        >
          <Icon icon="chevron-right" fas />
        </Button>
      </div>
    </div>
  )
}

Carousel.defaultProps = {
  className: '',
  isMobile: false,
  isFluid: false,
  isWideScreen: false,
  isFullHD: false,
}
