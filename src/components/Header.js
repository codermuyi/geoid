import { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "./Logo"

const Header = () => {
  const [windowScroll, setWindowScroll] = useState(0)

  useEffect(() => {
    let scrollEvent = window.addEventListener("scroll", () => setWindowScroll(window.scrollY))
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])

  return (
    <StyledHeader scroll={windowScroll}>
      <Link to="/">
        <Logo />
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: .5em 1em;
  box-shadow: ${props => props.scroll ? "0 3px 4px rgba(0, 0, 0, 0.1)" : "0"};
  background: white;
  display: flex;
  transition-duration: .3s;
`

export default Header
