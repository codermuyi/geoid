import { useEffect } from "react"
import styled from "styled-components/macro"

const Tracker = () => {
  useEffect(() => {
    document.title = "Tracker | Geoid"
  }, [])

  return (
    <StyledLocator>
      <p>This page is not yet available. Please check back later</p>
    </StyledLocator>
  )
}

const StyledLocator = styled.div`
  font-size: 2em;
  padding-block: 10em;
  text-align: center;
  background-color: hsl(0, 0%, 98%);
`

export default Tracker