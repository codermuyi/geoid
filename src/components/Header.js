import { useEffect, useState } from "react"
import styled, { css } from "styled-components/macro"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import Button from "./Button"
import Navbar from "./Navbar"
import { MenuIcon } from "./Icons"
import imgUrl from "../assets/images/world.png"
import useScroll from "../assets/useScroll"
import { mid2 } from "../assets/breakpoints"

function getMatch() {
  return window.matchMedia(`(min-width: ${mid2})`).matches
}

const Header = ({ toggleSidebar }) => {
  const [match, setMatch] = useState(getMatch())
  const windowScroll = useScroll()
  const path = useLocation().pathname

  useEffect(() => {
    let listener = window.addEventListener("resize", () => {
      setMatch(getMatch())
    })
    return () => window.removeEventListener("resize", listener)
  }, [])

  return (
    <StyledHeader $scrollY={windowScroll}
      $homepage={path === "/"}
      $about={path === "/about"}
    >
      <HeaderItem>
        <img src={imgUrl} alt="earth" />
        <Link to="/">
          <Logo />
        </Link>
      </HeaderItem>

      <HeaderItem>
        {
          match ?
            <Navbar /> :
            <Button size={3} pad={1} onClick={toggleSidebar} noShadow>
              <MenuIcon />
            </Button>
        }
      </HeaderItem>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: .5em;
  box-shadow: ${props => props.$homepage ? "none" : props.$scrollY ? "0 3px 4px rgba(0, 0, 0, 0.1)" : "0"};
  background-color: ${props => props.$homepage ? "transparent" : "var(--app-color-2)"};
  display: flex;
  transition-duration: .3s;
  z-index: 1500;
  justify-content: space-between;
  
  & > *:first-child {
    display: ${props => props.$homepage && "none"};
  }

  img {
    display: ${props => props.$about ? "none" : "inline-block"};
    ${props =>props.$scrollY ?
      css`
        transform: scale(1);
        width: 60px;
      `:
      css`
        transform: scale(0);
        width: 0;
      `
    }
    height: 50px;
    padding-right: .5em;
    flex-shrink: 0;
    object-fit: cover;
    transition-duration: .2s;
  }
`

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: .6rem;
`

export default Header