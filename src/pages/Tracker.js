import { useEffect } from "react"
import styled from "styled-components/macro"
import TrackerMap from "../components/TrackerMap"

const Tracker = () => {
  useEffect(() => {
    document.title = "Tracker | Geoid"
  }, [])

  return (
    <div className="page">
      <StyledLocator>
        <TrackerMap />
      </StyledLocator>
    </div>
  )
}

const StyledLocator = styled.div`
  font-size: 2em;
  /* padding-block: 10em; */
  text-align: center;
  background-color: var(--app-color-3);
  width: 100%;
`

export default Tracker