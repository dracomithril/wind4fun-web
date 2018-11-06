import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/SaveTwoTone';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { EmployeeTypeDef } from '../../typesDefinition';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  createNew: {
    display: 'flex',
    paddingBottom: 10,
    paddingTop: 10,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120,
  },

});

const employeeTypes = {
  trainer: 'trainer',
  other: 'other',
};

const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  employeeType: '',
  error: '',
};

class CreateNewEmployee extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    const isLoginEditable = !value.login;
    this.state = {
      error: '',
      ...value,
      isLoginEditable,
    };
  }

  handleCreate = () => {
    const {
      firstName, lastName, email, employeeType, isLoginEditable, login,
    } = this.state;
    const { onCreate, validate } = this.props;
    const userLogin = isLoginEditable ? this.createLogin(firstName, lastName) : login;
    if (validate(userLogin)) {
      onCreate({
        firstName,
        lastName,
        email,
        employeeType,
        login: userLogin,
      });
      this.clearState();
    } else {
      this.setState({ error: userLogin });
    }
  };

  clearState = () => {
    this.setState(defaultState);
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  normalizeString = str => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u0142/g, 'l');

  validateTextField = (str, length = 3) => (str != null ? str.length >= length : false);

  validateEmail = email => /\S+@\S+\.\S+/.test(email);

  createLogin = (firstName, surname) => {
    if (firstName && surname) {
      return this.normalizeString(`${firstName}.${surname}`) || '';
    }
    return '';
  };

  render() {
    const {
      classes,
    } = this.props;
    const {
      lastName,
      email,
      firstName,
      employeeType,
      isLoginEditable,
      login,
      error,
    } = this.state;
    const isValid = {
      firstName: this.validateTextField(firstName),
      lastName: this.validateTextField(lastName),
      email: this.validateEmail(email),
    };
    const buttonEnabled = Object.values(isValid).every(Boolean);
    const userLogin = isLoginEditable
      ? this.createLogin(firstName, lastName) : login;
    return (
      <Paper className={classes.createNew}>
        <span style={{ width: '100%', textAlign: 'center' }}>
Add new employee
        </span>
        {error !== '' && (
        <FormLabel style={{
          margin: 5, color: 'red', width: '100%', textAlign: 'center',
        }}
        >
          {`Provided user login exists ${userLogin}`}
        </FormLabel>
        )}
        <TextField
          error={!isValid.firstName}
          id="firstName-input"
          label="firstName"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange('firstName')}
          value={firstName}
          required
        />
        <TextField
          error={!isValid.lastName}
          id="lastName-input"
          label="lastName"
          className={classes.textField}
          margin="normal"
          value={lastName}
          onChange={this.handleChange('lastName')}
          required
        />
        <TextField
          error={!isValid.email}
          id="email-input"
          label="email"
          className={classes.textField}
          margin="normal"
          value={email}
          onChange={this.handleChange('email')}
          type="email"
          required
        />
        <TextField
          id="login-input"
          label="login"
          className={classes.textField}
          margin="normal"
          value={userLogin}
          disabled
        />
        <FormControl className={classes.formControl}>
          <InputLabel>
employee type
          </InputLabel>
          <Select
            value={employeeType}
            onChange={this.handleChange('employeeType')}
            inputProps={{
              name: 'employeeType',
              id: 'employeeType-select',
            }}
          >
            <MenuItem value="">
              <em>
None
              </em>
            </MenuItem>
            <MenuItem value={employeeTypes.trainer}>
trainer
            </MenuItem>
            <MenuItem value={employeeTypes.other}>
other
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          style={{ minWidth: 100 }}
          type="submit"
          variant="outlined"
          color="primary"
          disabled={!buttonEnabled}
          onClick={this.handleCreate}
        >
          <SaveIcon />
          {isLoginEditable ? 'ADD' : 'EDIT'}
        </Button>
      </Paper>
    );
  }
}

CreateNewEmployee.propTypes = {
  classes: PropTypes.shape().isRequired,
  value: PropTypes.shape(EmployeeTypeDef),
  onCreate: PropTypes.func,
  validate: PropTypes.func,
};

CreateNewEmployee.defaultProps = {
  onCreate: () => {},
  validate: () => true,
  value: defaultState,
};

export default withStyles(styles)(CreateNewEmployee);
