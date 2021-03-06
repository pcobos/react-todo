import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return(
    <div className="todo-container">
      <ul className="todo-list">
        {/* map through todos and pass info to Todo component as props */}
        {filteredTodos.map(todo => (
          <Todo 
            text={todo.text} 
            key={todo.id}
            todo={todo} 
            todos={todos} 
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;