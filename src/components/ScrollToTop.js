import styled from "styled-components"

import { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    let scrollEvent = window.addEventListener("scroll", () => {
      setScrollTop(window.scrollY)
    })
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])
  console.log(scrollTop)

  function scrollToTop(e) {
    console.log("positivity")
  }

  return (
    <Button top={scrollTop} onClick={scrollToTop}>
      <p>Scroll to top</p>
    </Button>
  )
}

const Button = styled.button`
  position: fixed;
  bottom: 2em;
  right: 2em;
  padding: 3em;
  background-color: white;
  display: ${props => props.top < 1000 ? "block" : "hidden"};
`

export default ScrollToTop