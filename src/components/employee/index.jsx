import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateNewEmployee from './CreateNewEmployee';
import { createNewEmployee, deleteEmployee } from '../../redux/actions';
import { EmployeeTypeDef } from '../../typesDefinition';
import EditDeleteTableRow from '../table/EditDeleteTableRow';
import { createHeaderCell, createValueCell } from '../table/cellUtils';

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

class Employees extends Component {
  state = {
    loginError: [false, ''],
  };

  handleCreateNew = (newEmployee) => {
    const { employees, onCreateNew } = this.props;
    const condition = employees.filter(f => f.login === newEmployee.login).length === 0;
    if (condition) {
      onCreateNew(newEmployee);
    } else {
      this.setState({ loginError: [true, newEmployee.login] });
    }
  };

  handleDelete = login => () => {
    const { onDelete } = this.props;
    onDelete(login);
  };

  render() {
    const { classes, employees } = this.props;
    const { loginError } = this.state;
    const fields = ['firstName', 'lastName', 'email', 'login', 'employeeType'];
    return (
      <div className={classes.root}>
        <h3 className={classes.header}>
          Employees
        </h3>
        <CreateNewEmployee
          onCreate={this.handleCreateNew}
          error={loginError[0]}
          errorLogin={loginError[1]}
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
              {employees.map((employee, index) => (
                <TableRow key={employee.login}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  {fields.map(createValueCell(employee, index))}
                  <EditDeleteTableRow onDelete={this.handleDelete(employee.login)} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Employees.propTypes = {
  classes: PropTypes.shape().isRequired,
  employees: PropTypes.arrayOf(PropTypes.shape(EmployeeTypeDef)).isRequired,
  onCreateNew: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  employees: state.data.employees,
});

const mapDispatchToProps = dispatch => ({
  onCreateNew: (newTrainer) => {
    dispatch(createNewEmployee(newTrainer));
  },
  onDelete: (login) => {
    dispatch(deleteEmployee(login));
  },
});

const VisibleTrainers = connect(mapStateToProps, mapDispatchToProps)(Employees);

export default withStyles(styles)(VisibleTrainers);
