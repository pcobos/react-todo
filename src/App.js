import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
      <header>
        <h1>Pedro's Todo list</h1>
      </header>
      {/* passing setInputText method as a prop */}
      <Form setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
