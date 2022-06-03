import { useEffect, useState } from 'react';
import styled from "styled-components/macro"
import { mid2, lg2 } from "../assets/breakpoints"
import useFetch from "../assets/hooks/useFetch"
import useTheme from "../assets/theme"
import Map, { mapRef } from "./Map"

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
};
const Lagos = [6.5934154, 3.2915605]

function CountryMap({ country }) {
  const [position, setPosition] = useState(Lagos)
  const [data, status] = useFetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${country}&accept-language=en&polygon_threshold=0.0`, options)
  const theme = useTheme()

  useEffect(() => {
    if (status === "fetched") {
      setPosition([data[0].lat, data[0].lon])
    }
  }, [data, status])

  useEffect(() => {
    if (!mapRef.current) return

    setTimeout(() => {
      mapRef.current?.flyTo(position, 5, {
        duration: 2.2
      })
    }, 600)
  }, [position])

  const mapUrl = theme.isDarkMode ?
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" :
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"

  return (
    <CountryMapContainer>
      <Map 
        url={mapUrl}
        position={position}
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
    </CountryMapContainer>
  );
}

const CountryMapContainer = styled.div`
  --map-margin: .5em;
  width: calc(100%-4em);
  max-width: 1000px;
  height: 30rem;
  margin-block: 6em;
  margin-right: 4em;
  margin-left: 1em;
  border: .5em solid var(--app-color);
  border-radius: 20px;
  transition: border .4s linear;
  overflow: hidden;
  
  :hover {
    border: .5em solid var(--light-green);
  }

  @media (min-width: ${mid2}) {
    width: calc(100%-8em);
    margin-right: 8em;
    grid-column: 1 / -1;
  }

  @media (min-width: ${lg2}) {
    margin-right: 1rem;
    grid-column: 2 / -1;
  }
`

export default CountryMap;