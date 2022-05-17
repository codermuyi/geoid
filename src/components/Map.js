import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from "styled-components"
import { mid2, lg2 } from "../assets/breakpoints"

const magicKingdomLatLng = [28.3852, -81.5639];

function Map({country}) {
  const mapRef = useRef();
  const [latLong, setLatLong] = useState(magicKingdomLatLng)
  const [cood, setCood] = useState(JSON.parse(localStorage.getItem("coordinates")))

  useEffect(() => {
    if ( !cood ) return

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };

    fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${country}&accept-language=en&polygon_threshold=0.0`, options)
      .then(response => response.json())
      .then(res => {
        setLatLong([res[0].lat, res[0].lon])
      })
      .catch(err => console.error(err.message));
    
    setCood(prevCood => ({...prevCood, [country]: latLong}))
    localStorage.setItem("coordinates", JSON.stringify(cood))
  }, [country])

  useEffect(() => {
    if ( !mapRef.current ) return

    setTimeout(() => {
      mapRef.current.flyTo(latLong, 5, {
        duration: 3
      })
    }, 1000)

    setCood(prevCood => ({...prevCood, [country]: latLong}))
    localStorage.setItem("coordinates", JSON.stringify(cood))
  }, [latLong])

  return (
      <SMap ref={mapRef} center={latLong} zoom={4}>
        <TileLayer url={`https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=${process.env.REACT_APP_API_KEY}`} attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </SMap>
  );
}

const SMap = styled(MapContainer)`
  width: calc(100%-4em);
  max-width: 1000px;
  height: 50em;
  margin-block: 6em;
  margin-right: 4em;
  margin-left: 1em;
  border: .5em solid var(--app-green);

  @media (min-width: ${mid2}) {
    width: calc(100%-8em);
    margin-right: 8em;
  }

  @media (min-width: ${lg2}) {
    margin-inline: auto;
  }
`

// Extra Map API
// https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=${process.env.REACT_APP_API_KEY}
// https://retina-tiles.p.rapidapi.com/local/osm{r}/v1/{z}/{x}/{y}.png?rapidapi-key=${process.env.REACT_APP_API_KEY}

export default Map;