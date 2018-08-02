import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import { MapWithAMarkerWithLabel } from "./gmap";
import Header from "./components/Header";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
    flexGrow: 1
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
          <Grid container classNames={classes.container} spacing={24}>
            <Grid item xs={6} md={6}>
              <MapWithAMarkerWithLabel
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT66flK1gV5hymNR39yYdgKU6seGc5gD8&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                  <div style={{ display: `flex`, height: `100vh` }} />
                }
                mapElement={<div style={{ flex: 1 }} />}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Stream className="stream" />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default compose(
  withStyles(styles),
  withAuthenticator
)(App);
