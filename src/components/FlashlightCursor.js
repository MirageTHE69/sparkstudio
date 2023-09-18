// src/components/FlashlightCursor.js

import React, { useEffect, useState } from "react"

const FlashlightCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = e => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", updateCursorPosition)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="flashlight"
      style={{
        left: cursorPosition.x - 50 + "px", // Adjust the position as needed
        top: cursorPosition.y - 50 + "px", // Adjust the position as needed
      }}
    ></div>
  )
}

export default FlashlightCursor
