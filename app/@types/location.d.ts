export interface GeolocationPosition {
  coords: {
      latitude: number;
      longitude: number;
  };
}

export interface LocationState {
  lat: number;
  lng: number;
}

export interface AssociationMarker {
  name: string;
  position: number[];
  country: string;
  website: string;
  address?: string;
}

export interface MapsProps {
  center: [number, number];
  zoom: number;
  markers: AssociationMarker[];
  userLocation: LocationState | null;
}