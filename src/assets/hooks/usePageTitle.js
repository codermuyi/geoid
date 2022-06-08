import { useEffect } from "react"

function usePageTitle(title) {
  useEffect(() => {
    document.title = title === "Geoid" ? "Geoid" : `${title} - Geoid`
  }, [title])
} 

export default usePageTitle