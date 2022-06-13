import { useState, useEffect } from "react"
import styled from "styled-components/macro"
import Map, { useFlyTo } from "../common/Map"

const TrackerMap = props => {
  const [position, setPosition] = useState([16.7783, 100.4179])
  const { data, status } = props

  console.log(data)

  useEffect(() => {
    if (status !== "fetched") return
    // if (data.status === 200) {
      setPosition([data.lat, data.lon])
      // setPosition([data.latitude, data.longitude])
    // }
  }, [data, status])

  useFlyTo(position, 1.5, 10)

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
  height: 70vh;
`

export default TrackerMap

// url={`https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`}
// url={`https://retina-tiles.p.rapidapi.com/local/osm{r}/v1/{z}/{x}/{y}.png?rapidapi-key=${process.env.REACT_APP_RAPID_API_KEY}`}