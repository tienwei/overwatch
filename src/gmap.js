import { compose } from 'recompose';
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import qs from 'qs';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { recordLocation } from './services/locations';
import { hackHumanSvg, hackSvg } from './assets/hackSvg';

export const MapWithAMarkerWithLabel = compose(withScriptjs, withGoogleMap)(
  props => {
    const { lat: intLat, lng: intLng, username } = qs.parse(
      window.location.search.slice(1)
    );
    const lat = parseFloat(intLat);
    const lng = parseFloat(intLng);

    const payLoad = {
      userName: username,
      latitude: lat,
      longitude: lng
    };

    recordLocation(payLoad);

    if (!lat || !lng) alert('No coordinates are set');

    return (
      <GoogleMap defaultZoom={15} defaultCenter={{ lat, lng }}>
        <MarkerWithLabel position={{ lat, lng }}>
          <div>
            <div className-="markerContainer">
              <div className="svgContainer">
                {hackHumanSvg}
                {hackSvg}
              </div>
              <div className="nameContainer">
                {username || 'Your friend'} is here
              </div>
            </div>
          </div>
        </MarkerWithLabel>
      </GoogleMap>
    );
  }
);
