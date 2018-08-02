import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import { MapWithAMarkerWithLabel } from "./gmap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapWithAMarkerWithLabel
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT66flK1gV5hymNR39yYdgKU6seGc5gD8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ display: `flex`, width: "100vw", height: `100vh` }} />
          }
          mapElement={<div style={{ flex: 1 }} />}
        />
      </div>
    );
  }
}

export default withAuthenticator(App);
