import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = ({ onClick, completed, text }) => {
  const labelId = `checkbox-list-label-${text}`;
  return (
    <ListItem role={undefined} dense button onClick={onClick}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={text} />
    </ListItem>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

// <li
// onClick={onClick}
// style={{
//   textDecoration: completed ? 'line-through' : 'none',
// }}
// >
// {text}
// </li>
