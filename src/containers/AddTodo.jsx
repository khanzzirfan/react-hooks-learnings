import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class AddTodo extends Component {
  state = {
    value: null,
  };

  handleOnChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    const { dispatch } = this.props;
    dispatch(addTodo(value));
    this.setState({ value: null });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="d-flex flex-row">
            <Typography variant="h1" component="h2" gutterBottom color="primary">
              todos
            </Typography>
          </div>
          <div className="d-flex flex-column mx-2">
            <TextField
              required
              id="todo"
              label="What needs to be done?"
              value={value || ''}
              onChange={this.handleOnChange}
              className="my-2"
            />
            <div className="my-2">
              <Button variant="contained" color="primary" type="submit">
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
