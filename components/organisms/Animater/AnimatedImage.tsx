"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimateImage() {
  const imgRef = useRef<HTMLDivElement>(null)
  const [translate, setTranslate] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = window.innerHeight
      const percent = Math.min(scrollY / maxScroll, 1)
      setTranslate(percent * 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={imgRef}
      className="absolute left-0 top-0 h-full w-1/3 bg-[url('/images/study_image.jpg')] bg-cover bg-center bg-fixed transition-transform duration-300"
      style={{
        transform: `translateX(${translate}%)`,
      }}
    ></div>
  )
}