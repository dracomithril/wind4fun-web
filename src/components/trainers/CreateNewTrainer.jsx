import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/SaveTwoTone';
import { withStyles } from '@material-ui/core/styles';

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

});
const defaultState = {
  firstName: '',
  surname: '',
  nickname: '',
};

class CreateNewTrainer extends Component {
  state = {
    ...defaultState,
  };

  handleCreate = () => {
    const { firstName, surname, nickname } = this.state;
    const { onCreate } = this.props;
    onCreate({
      firstName, surname, nickname, login: this.createLogin(firstName, surname),
    });
    this.clearState();
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

  validateTextField = str => (str != null ? str.length > 3 : false);

  createLogin = (firstName, surname) => {
    if (firstName && surname) {
      return this.normalizeString(`${firstName}.${surname}`) || '';
    }
    return '';
  };

  render() {
    const { classes, error, errorLogin } = this.props;
    const {
      surname,
      nickname,
      firstName,
    } = this.state;
    const isValid = {
      firstName: this.validateTextField(firstName),
      surname: this.validateTextField(surname),
      nickname: this.validateTextField(nickname),
    };
    const buttonEnabled = Object.values(isValid).every(Boolean);
    return (
      <Paper className={classes.createNew}>
        <span style={{ width: '100%', textAlign: 'center' }}>
Add new trainer
        </span>
        {error && (
        <FormLabel style={{
          margin: 5, color: 'red', width: '100%', textAlign: 'center',
        }}
        >
          {`Provided user login exists ${errorLogin}`}
        </FormLabel>
        )}
        <TextField
          error={!isValid.firstName}
          id="firstName-input"
          label="first name"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange('firstName')}
          value={firstName}
          required
        />
        <TextField
          error={!isValid.surname}
          id="surname-input"
          label="surname"
          className={classes.textField}
          margin="normal"
          value={surname}
          onChange={this.handleChange('surname')}
          required
        />
        <TextField
          error={!isValid.nickname}
          id="nickname-input"
          label="nickname"
          className={classes.textField}
          margin="normal"
          value={nickname}
          onChange={this.handleChange('nickname')}
          required
        />
        <TextField
          id="login-input"
          label="login"
          className={classes.textField}
          margin="normal"
          value={this.createLogin(firstName, surname)}
          disabled
        />
        <Button
          style={{ minWidth: 100 }}
          type="submit"
          variant="outlined"
          color="primary"
          disabled={!buttonEnabled}
          onClick={this.handleCreate}
        >
          <SaveIcon />
          ADD
        </Button>
      </Paper>
    );
  }
}

CreateNewTrainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  onCreate: PropTypes.func,
  error: PropTypes.bool,
  errorLogin: PropTypes.string,
};

CreateNewTrainer.defaultProps = {
  onCreate: () => {
  },
  error: false,
  errorLogin: '',
};

export default withStyles(styles)(CreateNewTrainer);
