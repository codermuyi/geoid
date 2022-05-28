import { useState, useEffect, useCallback } from "react"

export default function useMatchMedia(query, screenSize) {
  const getMatch = useCallback(() => { 
    return window.matchMedia(`(${query}-width: ${screenSize})`).matches
  }, [query, screenSize])
  const [isMatched, setIsMatched] = useState(getMatch())
  
  useEffect(() => {
    let listener = window.addEventListener("resize", () => {
      setIsMatched(getMatch())
    })
    return window.removeEventListener("resize", listener)
  }, [getMatch]);

  return isMatched
}