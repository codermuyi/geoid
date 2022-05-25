import styled from "styled-components/macro"
import Navbar from "./Navbar"
import Button from "./Button"

const Sidebar = props => {
  const { isOpen, toggle } = props

  return (
    <StyledSidebar isOpen={isOpen}>
      <Button onClick={toggle} style={{float: "right"}} noShadow>
        <CloseIcon />
      </Button>
      <Navbar sidebar />
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  min-width: 250px;
  max-width: 320px;
  position: fixed;
  right: ${props => props.isOpen ? "0" : "-100%"};
  top: 0px; 
  bottom: 0;
  z-index: 2000;
  background-color: var(--app-color-2);
  transition-duration: .1s; /* change later */
  padding-block: .3rem;
  box-shadow: -2px 0px 10px 1px rgba(0, 0, 0, .2);
`

const CloseIcon = styled.i`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;

  &::after,
  &::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px
  }

  &::after {
  transform: rotate(-45deg)
  } 
`

export default Sidebar