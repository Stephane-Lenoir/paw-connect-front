import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapsProps } from '../../@types/location';

const DefaultIcon = L.icon({
  iconUrl: icon as unknown as string,
  shadowUrl: iconShadow as unknown as string,
  iconSize: [20, 36],
  iconAnchor: [12, 41],
});

// Definition of customized icon for user
const CustomUserIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [30, 50],
  iconAnchor: [19, 38],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ center, zoom, markers, userLocation }: MapsProps) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={CustomUserIcon}>
          <Popup>Votre position</Popup>
        </Marker>
      )}
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.position[0], marker.position[1]] as [number, number]}>
          <Popup>
            <strong>{marker.name}</strong>
            <br />
            Pays: {marker.country}
            <br />
            <a href={marker.website} target="_blank" rel="noopener noreferrer">
              Site web
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
