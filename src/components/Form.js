import React from 'react';

// When passing the setStateMethod to a component as a prop, we have to set it as a parameter for the component as a whole
const Form = ({ inputText, setInputText, todos, setTodos }) => {

  const inputTextHandler = (e) => {
    // Called setInputText method to set the input's value as the state
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // Inside this method we want to use our setTodos method to update the state of todos. Don't forget to use the spread operator to get all of the previous info inside the todos state
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 100}
    ])
    // Once we set the state and created an object with the todo info, we will "clean" the input's state by calling setInputText
    setInputText("");
  }

  return(
    <form>
      <input 
        onChange={inputTextHandler}
        value={inputText} 
        type="text" 
        className="todo-input" 
      />
      <button
        onClick={submitTodoHandler} 
        className="todo-button" 
        type="submit"
      >
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