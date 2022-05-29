import styled from "styled-components/macro"
import Navbar from "./Navbar"
import Button from "./Button"
import { CloseIcon } from "../Icons"
import { mid2 } from "../../assets/breakpoints"

const Sidebar = props => {
  const { isOpen, toggle } = props

  return (
    <StyledSidebar isOpen={isOpen}>
      <SidebarTop>
        <Button onClick={toggle} name="close sidebar" noShadow>
          <CloseIcon />
        </Button>
      </SidebarTop>
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
  /* bottom: 0; */
  z-index: 2000;
  background-color: var(--app-color-2);
  transition-duration: .15s;
  padding-block: .3rem;
  box-shadow: -2px 0px 10px 1px rgba(0, 0, 0, .2);

  @media (min-width: ${mid2}) {
    display: none;
  }
`

const SidebarTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid #fefefe;
`

export default Sidebar