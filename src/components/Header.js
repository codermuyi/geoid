import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "./Logo"

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/"><Logo /></Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: fixed;
  top: 0;
  width: 100%;
  padding: 1em;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`

export default Header
