import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"
import imgUrl from "../assets/images/world.png"
import useScroll from "../assets/useScroll"

const Header = props => {
  const windowScroll = useScroll()
  const path = useLocation().pathname

  return (
    <StyledHeader scrollY={windowScroll} homepage={path === "/"}>
      <img src={imgUrl} alt="earth"/>
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
  box-shadow: ${props => props.homepage ? "none" : props.scrollY ? "0 3px 4px rgba(0, 0, 0, 0.1)" : "0"};
  background-color: ${props => props.homepage ? "transparent" : "white"};
  display: flex;
  transition-duration: .3s;
  z-index: 2000;

  img {
    display: ${props => props.homepage ? "none" : "inline-block"};
    transform: ${props => props.scrollY ? "scale(1)" : "scale(0)"};
    width: ${props => props.scrollY ? "60px" : "0"};
    height: 50px;
    padding-right: .5em;
    flex-shrink: 0;
    object-fit: cover;
    transition-duration: .2s;
  }
`

export default Header
