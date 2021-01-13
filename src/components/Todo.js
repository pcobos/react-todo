import React from 'react';

const Todo = ({text, key, todos, setTodos}) => {
  
  const deleteTodoHandler = () => {
    // setTodos(todos.filter(item => ()))
    console.log(key);
  }

  return(
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteTodoHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo;