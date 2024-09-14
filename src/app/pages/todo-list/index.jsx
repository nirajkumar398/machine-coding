import { useState } from "react";
import "./style.css";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    if (inputValue) {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue("");
    }
  };
  const deleteTask = (val) => {
    const updatedTodos = todos.filter((todo) => todo != val);
    setTodos(updatedTodos);
  };
  return (
    <div className="todo-container">
      <h1>To Do List</h1>
      <div className="inputs">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask} className="button">
          Add
        </button>
      </div>
      {todos.length > 0 && (
        <div className="todo-list">
          {todos.map((todo, index) => (
            <span key={index} className="todo">
              <span>{todo}</span>
              <button onClick={() => deleteTask(todo)} className="button">
                Delete
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
