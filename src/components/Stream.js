import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex"
  },
  flex: {
    flexGrow: 1
  }
};

class Banner extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>This is the streaming div</div>;
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
