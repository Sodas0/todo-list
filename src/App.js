import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');  // new state variable

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) {
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  const renderTodos = () => {
    return todos.map((todo, i) => (
      <li key={i}>
        {todo}
        <button onClick={() => removeTodo(i)}>Remove</button>
      </li>
    ));
  }

  return (
    <div>
      <ul>
        {renderTodos()}
      </ul>
      <form>
        <input type="text" placeholder="Add Task" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
        <button onClick={addTodo}>Add</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ToDoList />
      {/* <Time /> */}
    </div>
  );
}

export default App;
