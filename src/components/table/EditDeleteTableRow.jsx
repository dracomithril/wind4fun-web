import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


const EditDeleteTableRow = ({ classes, onDelete, onEdit }) => (
  <TableCell>
    <Button
      aria-label="edit"
      disabled={onEdit.name === 'defaultFun'}
      className={classes.button}
      onClick={onEdit}
    >
      <EditIcon />
    </Button>
    <Button
      disabled={onDelete.name === 'defaultFun'}
      color="secondary"
      aria-label="delete"
      onClick={onDelete}
      className={classes.button}
    >
      <DeleteIcon />
    </Button>
  </TableCell>
);

EditDeleteTableRow.propTypes = {
  classes: PropTypes.shape().isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

function defaultFun() {}

EditDeleteTableRow.defaultProps = {
  onDelete: defaultFun,
  onEdit: defaultFun,
};

export default withStyles(styles)(EditDeleteTableRow);
