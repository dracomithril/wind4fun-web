import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
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

const fields = [
  { name: 'firstName', displayName: 'first name' },
  { name: 'lastName', displayName: 'last name' },
  { name: 'email' },
  { name: 'login' },
  {
    name: 'group',
    type: 'array',
    renderer: data => (
      <div>
        {data.map(({ name, id }) => (
          <div>
            name:
            {' '}
            <span style={{ color: 'green' }}>
              {name}
            </span>
            {' '}
            id:
            {' '}
            <span style={{ color: 'green' }}>
              {id}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];
function Clients(props) {
  const {
    classes, clients, onDelete,
  } = props;
  return (
    <div>
      <h3 className={classes.header}>
        Clients
      </h3>
      <DataTable
        fields={fields}
        data={clients}
        onDelete={onDelete}
      />
    </div>
  );
}

Clients.propTypes = {
  classes: PropTypes.shape().isRequired,
  clients: PropTypes.arrayOf(PropTypes.shape(EmployeeTypeDef)),
  onDelete: PropTypes.func,
};

Clients.defaultProps = {
  clients: [],
  onDelete: () => {},
};

const mapStateToProps = state => ({
  clients: state.data.clients,
});

const mapDispatchToProps = dispatch => ({
  onCreateNew: (newTrainer) => {
    dispatch(createNewEmployee(newTrainer));
  },
  onDelete: (employee) => {
    dispatch(deleteEmployee(employee.login));
  },
});

const styledComponent = withStyles(styles)(Clients);
const VisibleClients = connect(mapStateToProps, mapDispatchToProps)(styledComponent);

export { styledComponent as ClientsTable };
export default VisibleClients;
