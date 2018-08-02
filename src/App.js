import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import { MapWithAMarkerWithLabel } from "./gmap";
import Header from "./components/Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import Banner from "./components/Banner";

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Banner />
          <Header />
          <MapWithAMarkerWithLabel
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT66flK1gV5hymNR39yYdgKU6seGc5gD8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{ display: `flex`, width: "100vw", height: `100vh` }}
              />
            }
            mapElement={<div style={{ flex: 1 }} />}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withAuthenticator(App);
