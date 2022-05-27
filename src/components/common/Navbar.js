import styled from "styled-components/macro"
import { NavLink } from "react-router-dom"
import { mid2 } from "../../assets/breakpoints"

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
  flex-direction: ${props => props.sidebar && "column"};
  gap: .2rem;
`

const NavItem = styled.div`
  cursor: pointer;
  background-color: inherit;
  transition-duration: .2s;
 
  &:hover {
    background-color: var(--light-green);
  }
  
  a {
    padding: .5rem 1rem;
    display: block;
  }

  .active {
    border-left: 3px solid var(--app-color);

  }

  @media (min-width: ${mid2}) {
    .active {
      border: 0;
      border-bottom: 3px solid var(--app-color);
    }
  }
`

export default Navbar