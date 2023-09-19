// src/components/MouseInteraction.js
import React, { useEffect } from "react"
import { gsap } from "gsap"

const MouseInteraction = () => {
  // Mouse position
  let mouseX, mouseY

  useEffect(() => {
    const onMouseMove = e => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Add GSAP Effect
      gsap.to("#header-banner", {
        // The '30' value below corresponds to the effect power, change it as you want
        x: (mouseX / window.innerWidth - 0.5) * 30,
        y: (mouseY / window.innerHeight - 0.5) * 30,
        delay: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    document.addEventListener("mousemove", onMouseMove)

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return null
}

export default MouseInteraction
