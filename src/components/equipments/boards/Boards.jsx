import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { BoardTypeDef } from '../../../typesDefinition';
import { createNewBoard, deleteBoard } from '../../../redux/actions';
import CreateNewBoard from './CreateNewBoard';
import DataTable from '../../table/DataTable';

const styles = () => ({
  header: {
    textAlign: 'center',
  },
  root: {
    paddingLeft: 50,
    paddingRight: 50,
  },
});


const Boards = (props) => {
  const {
    classes, boards, onCreateNew, onDelete,
  } = props;
  const fields = [
    { name: 'id', type: 'numeric' },
    { name: 'name' },
    { name: 'volume', type: 'numeric' },
    { name: 'number', type: 'numeric' },
    { name: 'highTech', displayName: 'high tech', type: 'boolean' },
    { name: 'service', type: 'boolean' },
  ];
  return (
    <div className={classes.root}>
      <h3 className={classes.header}>
        Boards
      </h3>
      <CreateNewBoard
        onCreate={onCreateNew}
      />
      <DataTable data={boards} fields={fields} onDelete={onDelete} />
    </div>
  );
};

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
  onDelete: (board) => {
    dispatch(deleteBoard(board.id));
  },
});


export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boards));
