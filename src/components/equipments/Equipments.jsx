import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  header: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function Equipment(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h3 className={classes.header}>
        Equipment
      </h3>
      <Paper className={classes.tableRoot}>
        Boards
      </Paper>
    </div>
  );
}

Equipment.propTypes = {
  classes: PropTypes.shape().isRequired,
};

const mapStateToProps = () => ({});

const VisibleEquipment = connect(mapStateToProps)(Equipment);

export default withStyles(styles)(VisibleEquipment);
