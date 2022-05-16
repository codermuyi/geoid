import styled from "styled-components"
import { useState, useEffect } from "react"

import { ReactComponent as Arrow } from "../assets/images/up-arrow.svg"

const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    let scrollEvent = window.addEventListener("scroll", (e) => {
      setScrollTop(window.scrollY)
    })
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])

  function scrollToTop(e) {
    window.scrollTo(0, 0)
  }

  return (
    <Button top={scrollTop} onClick={scrollToTop}>
      <Arrow />
    </Button>
  )
}

const Button = styled.button`
  position: fixed;
  bottom: 2em;
  border-color: var(--app-green);
  width: 4em;
  background-color: transparent;
  right: ${props => props.top > 900 ? "2em" : "-10em"};
  transition-duration: .2s;
`

export default ScrollToTop