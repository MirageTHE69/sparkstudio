// src/components/FadeInOnScroll.js

import React, { useEffect, useRef, useState } from "react"

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const element = elementRef.current

    const handleScroll = () => {
      const top = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (top < windowHeight) {
        setIsVisible(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fade-in-element ${isVisible ? "is-visible" : ""}`}
      ref={elementRef}
    >
      {children}
    </div>
  )
}

export default FadeInOnScroll
