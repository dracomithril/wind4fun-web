import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  header: {
    textAlign: 'center',
  },
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  createNew: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 700,
  },
});

const Trainers = ({ classes, trainers }) => (
  <div>
    <h3 className={classes.header}>
      Trainers
    </h3>
    <Paper className={classes.createNew}>
      Add new trainer
      <TextField
        id="firstName-input"
        label="First name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="surname-input"
        label="Surname"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="nickname-input"
        label="Nickname"
        className={classes.textField}
        margin="normal"
      />
    </Paper>
    <Paper className={classes.tableRoot}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              id
            </TableCell>
            <TableCell>
first name
            </TableCell>
            <TableCell>
surname
            </TableCell>
            <TableCell>
login
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trainers.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.id}
              </TableCell>
              <TableCell>
                {n.firstName}
              </TableCell>
              <TableCell>
                {n.surname}
              </TableCell>
              <TableCell>
                {n.login}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

Trainers.propTypes = {
  classes: PropTypes.shape().isRequired,
  trainers: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = state => ({
  trainers: state.data.trainers,
});
const VisibleTrainers = connect(mapStateToProps)(Trainers);

export default withStyles(styles)(VisibleTrainers);
