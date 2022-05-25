import styled, { css } from "styled-components/macro"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import imgUrl from "../assets/images/world.png"
import useScroll from "../assets/useScroll"
import Button from "./Button"

const Header = props => {
  const windowScroll = useScroll()
  const path = useLocation().pathname
  const { toggleSidebar } = props

  return (
    <StyledHeader
      $scrollY={windowScroll}
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
        <Button
          size={3}
          pad={1}
          noShadow
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </Button>
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
  background-color: ${props => props.$homepage ? "transparent" : "white"};
  display: flex;
  transition-duration: .3s;
  z-index: 2000;
  justify-content: space-between;

  img {
    display: ${props => props.$homepage || props.$about ? "none" : "inline-block"};
    ${props =>
    props.$scrollY ?
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
  padding-right: .3rem;
`

const MenuIcon = styled.i`
 transform: scale(var(--ggs,1));

  &,
  &::after,
  &::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 3px;
  background: currentColor
  }

  &::after,
  &::before {
  content: "";
  position: absolute;
  top: -6px;
  right: 0;
  width: 10px
  }

  &::after {
  top: 6px;
  width: 14px
  } 
`

export default Header
