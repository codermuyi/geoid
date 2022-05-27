import { useEffect, useRef, useState } from 'react';
import styled from "styled-components/macro"
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from "../assets/images/marker.png"
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { mid2, lg2 } from "../assets/breakpoints"
import useFetch from "../assets/hooks/useFetch"

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const Lagos = [6.5934154, 3.2915605]
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
};

function Map({ country }) {
  const mapRef = useRef({});
  const [position, setPosition] = useState(Lagos)
  const [data, status] = useFetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${country}&accept-language=en&polygon_threshold=0.0`, options)

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

  return (
    <SMap ref={mapRef} center={position} zoom={4} scrollWheelZoom={false}>
      <TileLayer url={`https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png`} attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' />
      <Marker position={position}></Marker>
    </SMap>
  );
}

const SMap = styled(MapContainer)`
  width: calc(100%-4em);
  max-width: 1000px;
  height: 30rem;
  margin-block: 6em;
  margin-right: 4em;
  margin-left: 1em;
  border: .5em solid var(--app-color);
  border-radius: 20px;
  transition: border .4s linear;
  
  :hover {
    border: .5em solid var(--light-green);
  }

  @media (min-width: ${mid2}) {
    width: calc(100%-8em);
    margin-right: 8em;
  }

  @media (min-width: ${lg2}) {
    margin-right: 1rem;
  }
`

// Extra Map APIs
// https://maptiles.p.rapidapi.com/local/osm/v1/{z}/{x}/{y}.png?rapidapi-key=${process.env.REACT_APP_API_KEY}
// https://retina-tiles.p.rapidapi.com/local/osm{r}/v1/{z}/{x}/{y}.png?rapidapi-key=${process.env.REACT_APP_API_KEY}

export default Map;