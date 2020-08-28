import React from 'react';
import Paper from '@material-ui/core/Paper';
import FilterLinks from '../containers/FilterLinks';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Divider from '@material-ui/core/Divider';
import Navigation from '../containers/Navigation';

const TodoLayout = () => (
  <div>
    <AddTodo />
    <Paper elevation={2}>
      <VisibleTodoList />
      <Divider />
      <FilterLinks />
      <Navigation />
    </Paper>
  </div>
);

export default TodoLayout;
