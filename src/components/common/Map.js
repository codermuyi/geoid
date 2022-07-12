import { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from "../../assets/images/marker.png"
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styled from "styled-components/macro"


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

let mapRef = {}

const MapCont = styled(MapContainer)`
  width: 100%;
  height: calc(100% - var(--map-margin, 1px)/2);
`

function useFlyTo(position, dur = 1, zoom = 5) {
  useEffect(() => {
    if (!mapRef.current) return

    setTimeout(() => {
      mapRef.current?.flyTo(position, zoom, {
        duration: dur
      })
    }, 600)
  }, [position, dur, zoom])
}

export default function Map(props) {
  const { url, position, attribution } = props
  mapRef = useRef({});

  return (
    <MapCont ref={mapRef} center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        url={url}
        attribution={attribution || "Leaflet"}
      />
      <Marker position={position}></Marker>
    </MapCont>
  );
}

export { useFlyTo }