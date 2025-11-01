
"use client"
import Lenis from 'lenis'
import { useLayoutEffect, useRef } from 'react'


const useSmoothScroll = () => {
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null)
  const reqIdRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null)

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    const animate = (time: DOMHighResTimeStamp) => {
      lenis.raf(time)
      reqIdRef.current = requestAnimationFrame(animate)
    }
    reqIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current)
      }
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])
}

export default useSmoothScroll