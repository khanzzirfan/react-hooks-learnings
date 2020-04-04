import React from 'react';
// import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const TodoLayout = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default TodoLayout;
