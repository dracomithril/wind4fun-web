import {
  AppBar, IconButton, Toolbar, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import MenuIcon from '../../node_modules/@material-ui/icons/Menu';


export const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ff4500',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const MenuBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Wind4Fun
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

MenuBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.any,
    appBar: PropTypes.any,
    classes: PropTypes.any,
    flex: PropTypes.any,
  }).isRequired,
};

export default withStyles(styles)(MenuBar);
