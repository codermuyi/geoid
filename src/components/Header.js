import { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"

const Header = props => {
  const [windowScroll, setWindowScroll] = useState(0)

  const path = useLocation().pathname

  useEffect(() => {
    let scrollEvent = window.addEventListener("scroll", () => setWindowScroll(window.scrollY))
    return () => window.removeEventListener("scroll", scrollEvent)
  }, [])

  return (
    <StyledHeader scroll={windowScroll} homepage={path === "/"}>
      <img src="world.png" alt="earth"/>
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
  padding: .5em;
  box-shadow: ${props => props.homepage ? "none" : props.scroll ? "0 3px 4px rgba(0, 0, 0, 0.1)" : "0"};
  background-color: ${props => props.homepage ? "transparent" : "white"};
  display: flex;
  transition-duration: .3s;
  z-index: 100;

  img {
    display: ${props => props.homepage ? "none" : "inline-block"};
    transform: ${props => props.scroll ? "scale(1)" : "scale(0)"};
    width: ${props => props.scroll ? "60px" : "0"};
    height: 50px;
    padding-right: .5em;
    flex-shrink: 0;
    object-fit: cover;
    transition-duration: .2s;
  }
`

export default Header
