import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <input
          type="text"
          className="searchbox"
          placeholder="Add a todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <span
              className="delete-btn"
              onClick={() => handleDeleteTodo(index)}
            >
              &#10006;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
