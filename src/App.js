import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import { MapWithAMarkerWithLabel } from "./gmap";
import Header from "./components/Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import { compose } from "ramda";
import Banner from "./components/Banner";
import Stream from "./components/Stream";

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

const styles = {
  content: {
    display: "flex",
    flexWrap: "wrap"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Banner />
          <Header />
          <div className="content">
            <MapWithAMarkerWithLabel
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT66flK1gV5hymNR39yYdgKU6seGc5gD8&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{ display: `flex`, width: "50vw", height: `100vh` }}
                />
              }
              mapElement={<div style={{ flex: 1 }} />}
            />
          </div>
          <Stream />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default compose(
  withStyles(styles),
  withAuthenticator
)(App);
