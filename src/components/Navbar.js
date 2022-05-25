import styled, { css } from "styled-components/macro"
import { NavLink } from "react-router-dom"

const Navbar = (props) => {
  return (
    <Nav sidebar={props.sidebar}>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/countries">Countries</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/tracker">Tracker</NavLink>
      </NavItem>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  background-color: var(--app-color-2);

  ${props => props.sidebar ?
    css`
      flex-direction: column;
    `
   : ""}
`

const NavItem = styled.div`
 cursor: pointer;
 /* border: 2px solid black; */
 background-color: inherit;
 
 :hover {
   background-color: var(--light-green);
  }
  
  .active {
    border-left: 3px solid var(--app-color)
  }
  
  a {
   padding: .5rem 1rem;
   display: block;
 }
`

export default Navbar