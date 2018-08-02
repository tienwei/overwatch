import { compose } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import queryString from "query-string";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

export const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  const { lat: intLat, lng: intLng, username } = queryString.parse(window.location.search);
  const lat = parseFloat(intLat);
  const lng = parseFloat(intLng);
  console.log(username, "username");
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat, lng }}>
      <MarkerWithLabel
        position={{ lat, lng }}
        labelAnchor={new google.maps.Point(0, 0)}
        labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
      >
        <div>{username} here</div>
      </MarkerWithLabel>
    </GoogleMap>
  );
});
