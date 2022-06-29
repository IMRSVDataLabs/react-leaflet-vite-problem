import React, { StrictMode } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { TileLayer } from 'react-leaflet/TileLayer';

function SimpleExample(props: any) {
  return (
    <StrictMode>
      <MapContainer center={props.position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </StrictMode>
  );
}

export default function App() {
  return <SimpleExample position={{ lat: 51.505, lng: -0.09 }} />;
}
