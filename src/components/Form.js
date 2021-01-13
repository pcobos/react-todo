import React from 'react';

// When passing the setStateMethod to a component as a prop, we have to set it as a parameter for the component as a whole
const Form = ({ inputText, setInputText, todos, setTodos }) => {

  const inputTextHandler = (e) => {
    // Called setInputText method to set the input's value as the state
    setInputText(e.target.value);
  }

  return(
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;