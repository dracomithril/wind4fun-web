import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import * as PropTypes from 'prop-types';

export const HeaderCell = ({ name, displayName }) => (
  <TableCell key={`${name}-headerCell`}>
    {displayName || name}
  </TableCell>
);

HeaderCell.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string,
};

HeaderCell.defaultProps = {
  displayName: null,
};


export const createValueCell = (obj, index) => {
  const ValueCell = ({ name, type, renderer }) => (
    <TableCell key={`${name}-${index}-valueCell`} numeric={type === 'numeric'}>
      {renderer ? renderer(obj[name]) : obj[name].toString()}
    </TableCell>
  );
  ValueCell.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['numeric', 'boolean', 'string', 'array']),
    renderer: PropTypes.func,
  };

  ValueCell.defaultProps = {
    type: 'string',
    renderer: null,
  };

  return ValueCell;
};
