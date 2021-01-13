import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {/* map through todos and pass info to Todo component as props */}
        {todos.map(todo => (
          <Todo text={todo.text} id={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;