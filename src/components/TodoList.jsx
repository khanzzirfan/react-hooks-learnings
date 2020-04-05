import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const TodoList = ({ todos, toggleTodo }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
        );
      })}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
