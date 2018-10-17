import PropTypes from 'prop-types';

export const BoardTypeDef = {
  id: PropTypes.number,
  name: PropTypes.string,
  volume: PropTypes.number,
  number: PropTypes.number,
  highTech: PropTypes.bool,
  service: PropTypes.bool,
};

export const EmployeeTypeDef = {
  login: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  employeeType: PropTypes.oneOf(['trainer', 'other']),
};
