import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState({
    todos: []
  })

  return(
    <div className="todo-container">
      <ul className="todo-list"></ul>
    </div>
  );
}

export default TodoList;