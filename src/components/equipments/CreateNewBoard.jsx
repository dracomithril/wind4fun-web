import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/SaveTwoTone';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import { BoardTypeDef } from '../../typesDefinition';

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

const defaultState = {
  id: 0,
  name: '',
  volume: 30,
  number: 0,
  highTech: false,
  service: false,
};

class CreateNewBoard extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      ...value,
    };
  }

  handleCreate = () => {
    const {
      id, name, volume, number, highTech, service,
    } = this.state;
    const { onCreate } = this.props;
    onCreate({
      id, name, volume, number, highTech, service,
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

  handleChangeSwitch = (event) => {
    const { target } = event;
    if (target) {
      this.setState({
        [target.value]: target.checked,
      });
    }
  };

  validateTextField = str => (str != null ? str.length > 3 : false);


  render() {
    const { classes } = this.props;
    const {
      id, name, volume, number, highTech, service,
    } = this.state;
    const isValid = {
      name: this.validateTextField(name),
    };
    const buttonEnabled = Object.values(isValid).every(Boolean);
    return (
      <Paper className={classes.createNew}>
        <span style={{ width: '100%', textAlign: 'center' }}>
Add new employee
        </span>
        <TextField
          id="id-input"
          label="id"
          className={classes.textField}
          margin="normal"
          type="number"
          onChange={this.handleChange('id')}
          value={id}
          required
        />
        <TextField
          error={!isValid.name}
          id="name-input"
          label="name"
          className={classes.textField}
          margin="normal"
          value={name}
          onChange={this.handleChange('name')}
          required
        />
        <TextField
          id="volume-input"
          label="volume"
          className={classes.textField}
          margin="normal"
          value={volume}
          type="number"
          onChange={this.handleChange('volume')}
          required
        />
        <TextField
          id="number-input"
          label="number"
          className={classes.textField}
          margin="normal"
          type="number"
          onChange={this.handleChange('number')}
          value={number}
          required
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={highTech}
              onChange={this.handleChangeSwitch}
              value="highTech"
            />)}
          label="highTech"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={service}
              onChange={this.handleChangeSwitch}
              value="service"
            />)}
          label="service"
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

CreateNewBoard.propTypes = {
  classes: PropTypes.shape().isRequired,
  onCreate: PropTypes.func,
  value: PropTypes.shape(BoardTypeDef),
};

CreateNewBoard.defaultProps = {
  onCreate: () => {
  },
  value: defaultState,
};

export default withStyles(styles)(CreateNewBoard);
