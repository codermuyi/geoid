import styled from "styled-components/macro"
import { mid2 } from "../../assets/breakpoints"

const Logo = (props) => {
  return (
    <StyledLogo size={props.size}>
      <p>Geoid</p>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  background: conic-gradient(white 40%, var(--app-color) 40%);
  padding: .1em;
  border-radius: 10px;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;

  p { 
    font-size: ${props => props.size};
    font-weight: bold;
    
    @media (min-width: ${mid2}) {
      letter-spacing: .1em;
    }
  }
`

export default Logo