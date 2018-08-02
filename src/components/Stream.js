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

class Stream extends React.Component {
  render() {
    const { classes, streamUrl } = this.props;

    return(
        <div className={classes.root}>
            <video controls autoPlay src={streamUrl}
                   type="application/x-mpegURL"/>
        </div>
    )
  }
}

Stream.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stream);
