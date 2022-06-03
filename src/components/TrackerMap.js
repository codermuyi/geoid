import { useState } from "react"
import styled from "styled-components/macro"
import Map from "./Map"

const TrackerMap = () => {
  const [position, setPosition] = useState([16.7783, 100.4179])

  return (
    <TrackerMapContainer>
      <Map 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        position={position}
        zoom={10}
        attribution=' &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
    </TrackerMapContainer>
  )
}

const TrackerMapContainer = styled.div`
  width: 100%;
  height: 90vh;
`

export default TrackerMap