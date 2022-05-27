import { useState, useEffect } from "react"

export default function useScroll() {
  const [windowScroll, setWindowScroll] = useState(0)

  useEffect(() => {
    let scrollEvent = window.addEventListener("scroll", () => setWindowScroll(window.scrollY))
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])

  return windowScroll
}