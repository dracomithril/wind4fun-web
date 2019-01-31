import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CreateNewEmployee from './CreateNewEmployee';
import { createNewEmployee, deleteEmployee } from '../../redux/actions';
import { EmployeeTypeDef } from '../../typesDefinition';
import DataTable from '../table/DataTable';

const styles = () => ({
  header: {
    textAlign: 'center',
  },
  root: {
    paddingLeft: 50,
    paddingRight: 50,
  },
});

const validateLogin = employees => login => employees.filter(f => f.login === login).length === 0;

function Employees(props) {
  const {
    classes, employees, onDelete, onCreateNew,
  } = props;
  const fields = [
    { name: 'firstName', displayName: 'first name' },
    { name: 'lastName', displayName: 'last name' },
    { name: 'email' },
    { name: 'login' },
    { name: 'employeeType', displayName: 'employee type' },
  ];

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>
        Employees
      </h3>
      <CreateNewEmployee
        onCreate={onCreateNew}
        validateLogin={validateLogin(employees)}
      />
      <DataTable
        fields={fields}
        data={employees}
        onDelete={onDelete}
      />
    </div>
  );
}

Employees.propTypes = {
  classes: PropTypes.shape().isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape(EmployeeTypeDef)),
  onCreateNew: PropTypes.func,
  onDelete: PropTypes.func,
};

Employees.defaultProps = {
  employees: [],
  onCreateNew: () => {},
  onDelete: () => {},
};

const mapStateToProps = state => ({
  employees: state.data.employees,
});

const mapDispatchToProps = dispatch => ({
  onCreateNew: (newTrainer) => {
    dispatch(createNewEmployee(newTrainer));
  },
  onDelete: (employee) => {
    dispatch(deleteEmployee(employee.login));
  },
});

const styledEmployeesTable = withStyles(styles)(Employees);
const connectedEmployeesTable = connect(mapStateToProps, mapDispatchToProps)(styledEmployeesTable);

export { styledEmployeesTable as EmployeesTable };
export default connectedEmployeesTable;
