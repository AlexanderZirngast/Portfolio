"use client"
import React, { ReactNode, useEffect, useRef } from 'react'

export default function ScrollFadeIn({ children }: { children: ReactNode}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("animate-fadein")
      }
      else
      {
         element.classList.remove("animate-fadein")
      }
    }, { threshold: 0.1 })

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className='opacity-0'>{children}</div>
}