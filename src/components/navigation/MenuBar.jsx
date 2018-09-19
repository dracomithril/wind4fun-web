import {
  AppBar,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import navigationOptions from './navigationOptions';


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

const ITEM_HEIGHT = 48;

class MenuBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleSelect = path => () => {
    const { history } = this.props;
    this.setState({ anchorEl: null });
    history.push(path);
  };

  handleAwayClick =() => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={this.handleAwayClick}>
          <AppBar className={classes.appBar} position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleClick}
                aria-owns={anchorEl ? 'navigation-menu' : null}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="navigation-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleSelect}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                  },
                }}
              >
                {navigationOptions.map(({ name, path }) => (
                  <MenuItem key={name} onClick={this.handleSelect(path)}>
                    {name}
                  </MenuItem>
                ))}
              </Menu>
              <Typography variant="title" color="inherit" className={classes.flex}>
              Wind4Fun
              </Typography>
            </Toolbar>
          </AppBar>
        </ClickAwayListener>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.any,
    appBar: PropTypes.any,
    classes: PropTypes.any,
    flex: PropTypes.any,
  }).isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(withStyles(styles)(MenuBar));
