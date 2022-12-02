import React from 'react';
import '../../global.css';
import TodoList from '../../components/TodoList';

function Main() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default Main;