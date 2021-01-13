import React from 'react';
import Todo from './Todo';

const TodoList = () => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {/* map through todos and pass info to Todo component as props */}
        <Todo />
      </ul>
    </div>
  );
}

export default TodoList;