import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableBody from '@material-ui/core/TableBody/TableBody';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper/Paper';
import { createValueCell, HeaderCell } from './cellUtils';
import EditDeleteTableRow from './EditDeleteTableRow';

const createRow = (onDelete, fields) => (rowData, index) => (
  <TableRow key={`rowData-${index}`}>
    <TableCell component="th" scope="row">
      {index + 1}
    </TableCell>
    {fields.map(createValueCell(rowData, index))}
    <EditDeleteTableRow onDelete={() => { onDelete(rowData); }} />
  </TableRow>
);

const styles = theme => ({
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const DataTable = ({
  classes, fields, data, onDelete,
}) => (
  <Paper className={classes.tableRoot}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell />
          {fields.map(HeaderCell)}
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(createRow(onDelete, fields))}
      </TableBody>
    </Table>
  </Paper>
);

DataTable.propTypes = {
  classes: PropTypes.shape().isRequired,
  fields: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.shape()),
  onDelete: PropTypes.func,
};

DataTable.defaultProps = {
  fields: [],
  data: [],
  onDelete: () => {},
};

export default withStyles(styles)(DataTable);
