import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './store';
import './App.css'; 

function App() {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch(); 

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task.trim())); 
      setTask(''); 
    }
  };

  return (
    <div className="app">
      <h1 className="title">TODO</h1>

      <form onSubmit={handleAddTodo} className="form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Введите задачу"
          className="input"
        />
        <button type="submit" className="button">
          Добавить
        </button>
      </form>

      <h2 className="subtitle">TODOS</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
          </li>
        ))}
      </ul>

      <footer className="footer">
        Всего: {todos.length}
      </footer>
    </div>
  );
}

export default App;
