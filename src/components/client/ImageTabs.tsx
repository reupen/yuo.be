import type { ImageMetadata } from "astro"
import clsx from "clsx"

import "./ImageTabs.pcss"

import { useState, useRef, useEffect, type KeyboardEvent, useId } from "react"

interface ImageTabsProps {
  enlarge?: boolean
  images: {
    src: ImageMetadata
    alt: string
    label: string
  }[]
  pixelate?: boolean
  stateId: string
  stretch?: boolean
}

export function ImageTabs({
  images,
  stateId,
  enlarge = false,
  pixelate = false,
  stretch = false,
}: ImageTabsProps) {
  const id = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHydrated, setIsHydrated] = useState(false)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>(
    new Array(images.length).fill(null),
  )

  const imgClassName = clsx(
    enlarge && "image-tabs-image-enlarge",
    pixelate && "image-tabs-image-pixelate",
    stretch && "image-tabs-image-stretch",
  )

  useEffect(() => {
    const savedIndex = sessionStorage.getItem(stateId)

    if (savedIndex) {
      const parsedIndex = parseInt(savedIndex)

      if (parsedIndex >= 0 && parsedIndex < images.length) {
        setActiveIndex(parsedIndex)
      }
    }

    setIsHydrated(true)
  }, [])

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const tabCount = images.length
    let newIndex

    switch (event.key) {
      default:
        return
      case "ArrowRight":
        newIndex = (activeIndex + 1) % tabCount
        break
      case "ArrowLeft":
        newIndex = (activeIndex - 1 + tabCount) % tabCount
        break
      case "Home":
        newIndex = 0
        break
      case "End":
        newIndex = tabCount - 1
        break
    }

    event.stopPropagation()
    event.preventDefault()
    setActiveIndex(newIndex)
    tabRefs.current[newIndex]?.focus()
  }

  const switchTab = (index: number) => {
    sessionStorage.setItem(stateId, index.toString())
    setActiveIndex(index)
  }

  if (!isHydrated) {
    return (
      <div className={clsx("image-tabs-fallback")}>
        {images.map((image) => (
          <details key={image.src.src}>
            <summary>{image.label}</summary>
            <a href={image.src.src}>
              <img
                src={image.src.src}
                alt={image.alt}
                className={imgClassName}
              />
            </a>
          </details>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className={clsx("image-tabs-hydrated")}>
        {images.map((image, index) => (
          <div
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            className={activeIndex === index ? "active" : undefined}
            key={image.src.src}
            role="tabpanel"
          >
            <a href={image.src.src}>
              <img
                src={image.src.src}
                alt={image.alt}
                className={imgClassName}
              />
            </a>
          </div>
        ))}

        <div role="tablist">
          {images.map((image, index) => (
            <button
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-panel-${index}`}
              aria-selected={activeIndex === index}
              className={clsx(activeIndex === index && "active")}
              key={image.src.src}
              onClick={() => switchTab(index)}
              onKeyDown={handleTabKeyDown}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              role="tab"
              tabIndex={activeIndex === index ? undefined : -1}
            >
              {image.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
