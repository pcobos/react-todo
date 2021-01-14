import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
  
  const deleteTodoHandler = () => {
    setTodos(todos.filter(item => (item.id !== todo.id)))
  }

  const completeTodoHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        };
      }
      // If the items do not meet the criteria, we just return them the way there were
      // Obs, if we don't do this, we will get an undefined error
      return item;
    }))
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