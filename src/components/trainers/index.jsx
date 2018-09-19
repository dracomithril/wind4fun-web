import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import CreateNewTrainer from './CreateNewTrainer';
import { createNewTrainer, deleteTrainer } from '../../redux/actions';

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

class Trainers extends Component {
  state = {
    loginError: [false, ''],
  };

  handleCreateNew = (newTrainer) => {
    const { trainers, onCreateNew } = this.props;
    const condition = trainers.filter(f => f.login === newTrainer.login).length === 0;
    if (condition) {
      onCreateNew(newTrainer);
    } else {
      this.setState({ loginError: [true, newTrainer.login] });
    }
  };

  handleDelete = login => () => {
    const { onDelete } = this.props;
    onDelete(login);
  };

  render() {
    const { classes, trainers } = this.props;
    const { loginError } = this.state;
    return (
      <div className={classes.root}>
        <h3 className={classes.header}>
          Trainers
        </h3>
        <CreateNewTrainer
          onCreate={this.handleCreateNew}
          error={loginError[0]}
          errorLogin={loginError[1]}
        />
        <Paper className={classes.tableRoot}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  first name
                </TableCell>
                <TableCell>
                  surname
                </TableCell>
                <TableCell>
                  nickname
                </TableCell>
                <TableCell>
                  login
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {trainers.map((n, index) => (
                <TableRow key={n.login}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    {n.firstName}
                  </TableCell>
                  <TableCell>
                    {n.surname}
                  </TableCell>
                  <TableCell>
                    {n.nickname}
                  </TableCell>
                  <TableCell>
                    {n.login}
                  </TableCell>
                  <TableCell>
                    <Button aria-label="edit" disabled className={classes.button}>
                      <EditIcon />
                    </Button>
                    <Button color="secondary" aria-label="delete" onClick={this.handleDelete(n.login)} className={classes.button}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Trainers.propTypes = {
  classes: PropTypes.shape().isRequired,
  trainers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    surname: PropTypes.string,
    login: PropTypes.string,
    nickname: PropTypes.string,
  })).isRequired,
  onCreateNew: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  trainers: state.data.trainers,
});

const mapDispatchToProps = dispatch => ({
  onCreateNew: (newTrainer) => {
    dispatch(createNewTrainer(newTrainer));
  },
  onDelete: (login) => {
    dispatch(deleteTrainer(login));
  },
});

const VisibleTrainers = connect(mapStateToProps, mapDispatchToProps)(Trainers);

export default withStyles(styles)(VisibleTrainers);
