import TableCell from '@material-ui/core/TableCell';
import React from 'react';

export const createHeaderCell = name => (name ? (
  <TableCell key={`${name}-headerCell`}>
    {name}
  </TableCell>
) : <TableCell />);

export const createValueCell = (obj, index) => name => (
  <TableCell key={`${name}-${index}-valueCell`}>
    {obj[name]}
  </TableCell>
);
