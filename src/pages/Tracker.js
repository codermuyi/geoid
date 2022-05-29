import { useEffect } from "react"
import styled from "styled-components/macro"

const Tracker = () => {
  useEffect(() => {
    document.title = "Tracker | Geoid"
  }, [])

  return (
    <div className="page">
      <StyledLocator>
        <p>This page is not yet available. Please check back later</p>
      </StyledLocator>
    </div>
  )
}

const StyledLocator = styled.div`
  font-size: 2em;
  padding-block: 10em;
  text-align: center;
  background-color: var(--app-color-3);
`

export default Tracker