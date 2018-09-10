import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  createNew: {
    paddingLeft: 10,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },

});

class CreateNewTrainer extends Component {
  state = {
    firstName: null,
    surname: null,
    nickname: null,
  };

  handleCreate = () => {
    const { firstName, surname, nickname } = this.state;
    const { onCreate } = this.props;
    onCreate({ firstName, surname, nickname });
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  validateTextField = str => (str != null ? str.length > 3 : false);

  render() {
    const { classes } = this.props;
    const { surname, nickname, firstName } = this.state;
    const isValid = {
      firstName: this.validateTextField(firstName),
      surname: this.validateTextField(surname),
      nickname: this.validateTextField(nickname),
    };
    const buttonEnabled = Object.values(isValid).every(Boolean);
    return (
      <Paper className={classes.createNew}>
        <span>
Add new trainer
        </span>
        <TextField
          error={!isValid.firstName}
          id="firstName-input"
          label="First name"
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange('firstName')}
          value={firstName}
          required
        />
        <TextField
          error={!isValid.surname}
          id="surname-input"
          label="Surname"
          className={classes.textField}
          margin="normal"
          value={surname}
          onChange={this.handleChange('surname')}
          required
        />
        <TextField
          error={!isValid.nickname}
          id="nickname-input"
          label="Nickname"
          className={classes.textField}
          margin="normal"
          value={nickname}
          onChange={this.handleChange('nickname')}
          required
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          disabled={!buttonEnabled}
          onClick={this.handleCreate}
        >
          CREATE
        </Button>
      </Paper>
    );
  }
}

CreateNewTrainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  onCreate: PropTypes.func,
};
CreateNewTrainer.defaultProps = {
  onCreate: () => {},
};

export default withStyles(styles)(CreateNewTrainer);
