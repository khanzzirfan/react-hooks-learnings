import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const AddTodo = ({ dispatch }) => {
  const [value, setValue] = useState(null);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            onChange={handleOnChange}
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
};

export default connect()(AddTodo);
