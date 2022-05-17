import { useEffect, useRef, useState } from 'react';
import { MapContainer as Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from "styled-components"

const magicKingdomLatLng = [28.3852, -81.5639];

function Mapy({country}) {
  const mapRef = useRef();
  const [latLong, setLatLong] = useState(magicKingdomLatLng)
  const [cood, setCood] = useState(JSON.parse(localStorage.getItem("coordinates")))

  useEffect(() => {
    if ( !cood ) return

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
        'X-RapidAPI-Key': '5cb76341c4mshc353bc68b13a6cdp15c19cjsna963896fc6be'
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
        <TileLayer url="https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=5cb76341c4mshc353bc68b13a6cdp15c19cjsna963896fc6be" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </SMap>
  );
}

const SMap = styled(Map)`
  width: calc(100%-4em);
  max-width: 1000px;
  height: 50em;
  margin-block: 6em;
  margin-right: 4em;
  margin-left: 1em;
  border: .5em solid var(--app-green);

  @media (min-width: 1200px) {
    margin-inline: auto;
  }
`

// Extra Map API
// https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=5cb76341c4mshc353bc68b13a6cdp15c19cjsna963896fc6be
// https://retina-tiles.p.rapidapi.com/local/osm{r}/v1/{z}/{x}/{y}.png?rapidapi-key=5cb76341c4mshc353bc68b13a6cdp15c19cjsna963896fc6be

export default Mapy;