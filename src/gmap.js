import { compose } from "recompose";
import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import qs from "qs";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

export const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  const { lat: intLat, lng: intLng, username } = qs.parse(
    window.location.search.slice(1)
  );
  const lat = parseFloat(intLat);
  const lng = parseFloat(intLng);
  console.log(window.google);

  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat, lng }}>
      <MarkerWithLabel
        position={{ lat, lng }}
        labelStyle={{
          backgroundColor: "yellow",
          fontSize: "32px",
          padding: "16px"
        }}
      >
        <div>{username} here</div>
      </MarkerWithLabel>
    </GoogleMap>
  );
});
