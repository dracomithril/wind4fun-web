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
  const ValueCell = ({ name, type }) => (
    <TableCell key={`${name}-${index}-valueCell`} numeric={type === 'numeric'}>
      {obj[name].toString()}
    </TableCell>
  );
  ValueCell.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['numeric', 'boolean', 'string']),
  };

  ValueCell.defaultProps = {
    type: 'string',
  };

  return ValueCell;
};
