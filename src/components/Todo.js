import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
  
  const deleteTodoHandler = () => {
    setTodos(todos.filter(item => (item.id !== todo.id)))
  }

  const completeTodoHandler = () => {
    console.log(todo.completed)
  }

  return(
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={completeTodoHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo;