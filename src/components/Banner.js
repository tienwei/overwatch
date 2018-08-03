import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../logo.png';
import bgImage from '../bgImage.png';

const styles = {
  root: {
    display: 'flex',
    height: '90px',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'left 34px top 0'
  },
  flex: {
    flexGrow: 1
  },
  logo: {
    justifyContent: 'start',
    width: '90px',
    height: '74px',
    padding: '15px'
  }
};

class Banner extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ padding: '1em 1em 0em 1em' }}>
        <div
          className={classes.root}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <img src={logo} className={classes.logo} alt="banner" />
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
