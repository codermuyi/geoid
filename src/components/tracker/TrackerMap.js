import { useState, useEffect } from "react"
import styled from "styled-components/macro"
import Map, { useFlyTo } from "../common/Map"
import useFetch from "../../assets/hooks/useFetch"

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

const TrackerMap = ({location, depStatus}) => {
  const [position, setPosition] = useState([16.7783, 100.4179])
  const [data, status] = useFetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${location}&accept-language=en&polygon_threshold=0.0`, options)

  useEffect(() => {
    if (status === "fetched" && depStatus === "fetched") {
      setPosition([data[0].lat, data[0].lon])
    }
  }, [data, status, depStatus])

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