import { useEffect, useState } from 'react';
import styled from "styled-components/macro"
import breakpoints from "../../assets/breakpoints"
import useFetch from "../../assets/hooks/useFetch"
import useTheme from "../../assets/theme"
import Map, { useFlyTo } from "../common/Map"

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

  useFlyTo(position, 2.2)

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
  --ml: 4rem;
  width: calc(100% - var(--ml));
  max-width: ${breakpoints.mid2};
  height: 30rem;
  margin: 2em 2rem 5em var(--ml);
  border: .5em solid var(--light-green);
  border-radius: 20px;
  transition: border .4s linear;
  overflow: hidden;

  @media (min-width: ${breakpoints.mid2}) {
    grid-column: 1 / -1;
    margin-left: auto;
  }
  @media (min-width: ${breakpoints.lg2}) {
    margin-right: auto;
  }
  @media (min-width: ${breakpoints.lg3}) {
    grid-column: 2 / -1;
  }
`

export default CountryMap;