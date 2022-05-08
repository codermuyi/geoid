import styled from "styled-components"
import { mid2 } from "../media-queries"

const Logo = (props) => {
  return (
    <StyledLogo size={props.size}>
      <p>Geoid</p>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  background: conic-gradient(white 40%, var(--app-green) 40%);
  padding: .1em;
  /* margin-bottom: .3em; */
  border-radius: 10px;
  text-align: center;

  p { 
    font-size: ${props => props.size};
    font-weight: bold;
    
    @media (min-width: ${mid2}) {
      letter-spacing: .1em;
    }
  }
`

export default Logo