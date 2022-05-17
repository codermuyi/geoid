import { useEffect, useRef, useState } from 'react';
import { MapContainer as Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const magicKingdomLatLng = [28.3852, -81.5639];

function Mapy({country}) {
  const mapRef = useRef();
  const [latLong, setLatLong] = useState(magicKingdomLatLng)

  useEffect(() => {
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
  }, [country])

  useEffect(() => {
    if ( !mapRef.current ) return;

    setTimeout(() => {
      mapRef.current.flyTo(latLong, 5, {
        duration: 3
      });
    }, 1000)
  }, [latLong])

  return (
      <Map ref={mapRef} center={latLong} zoom={4}>
        <TileLayer url="https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=5cb76341c4mshc353bc68b13a6cdp15c19cjsna963896fc6be" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </Map>
  );
}

// Extra Map API
// https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=5cb76341c4mshc353bc68b13a6cdp15c19cjsna963896fc6be
// https://retina-tiles.p.rapidapi.com/local/osm{r}/v1/{z}/{x}/{y}.png?rapidapi-key=5cb76341c4mshc353bc68b13a6cdp15c19cjsna963896fc6be

export default Mapy;