/**
 * Created by Gryzli on 12.02.2017.
 */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
    fontSize: 'small',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'right',
    paddingBottom: 5,
    paddingRight: 5,
  },
  icon: {
    fontSize: 16,
  },
});

export const Footer = ({ classes }) => (
  <footer className={classes.root}>
    {'site created by '}
    <a href="https://github.com/dracomithril" target="_newtab">
        dracomithril
    </a>
    <span>{` v${process.env.REACT_APP_VERSION}`}</span>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Footer);
