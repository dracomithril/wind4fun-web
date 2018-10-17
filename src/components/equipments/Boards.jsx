import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import EditDeleteTableRow from '../table/EditDeleteTableRow';
import { createHeaderCell, createValueCell } from '../table/cellUtils';
import { BoardTypeDef } from '../../typesDefinition';
import { createNewBoard, deleteBoard } from '../../redux/actions';
import CreateNewBoard from './CreateNewBoard';


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


class Boards extends Component {
  handleDelete = login => () => {
    const { onDelete } = this.props;
    onDelete(login);
  };

  render() {
    const { classes, boards, onCreateNew } = this.props;
    const fields = ['id', 'name', 'volume', 'number', 'highTech', 'service'];
    return (
      <div>
        <h3 className={classes.header}>
          Boards
        </h3>
        <CreateNewBoard
          onCreate={onCreateNew}
        />
        <Paper className={classes.tableRoot}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell />
                {fields.map(createHeaderCell)}
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {boards.map((board, index) => (
                <TableRow key={board.login}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  {fields.map(createValueCell(board, index))}
                  <EditDeleteTableRow onDelete={this.handleDelete(board.login)} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Boards.propTypes = {
  classes: PropTypes.shape().isRequired,
  boards: PropTypes.arrayOf(PropTypes.shape(BoardTypeDef)).isRequired,
  onCreateNew: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


function mapStateToProps(state) {
  const { data } = state;
  return {
    boards: data.boards,
  };
}

const mapDispatchToProps = dispatch => ({
  onCreateNew: (newTrainer) => {
    dispatch(createNewBoard(newTrainer));
  },
  onDelete: (login) => {
    dispatch(deleteBoard(login));
  },
});


export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boards));
