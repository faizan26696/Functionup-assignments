import React,{useState} from 'react'
import { nanoid } from 'nanoid';
import './task.css'

const Task = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Homework' },
    { id: 2, title: 'assignment' },
  ]);
  const [currObj, setCurrObj] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [update, setUpdate] = useState(false);

  const handleClick = () => {
    if (!update) {
      if (inputValue.trim() !== '') {
        const newTodo = {
          id: nanoid(),
          title: inputValue.trim(),
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setInputValue('');
      } else {
        alert('Please enter something!!');
      }
    } else {
      if (inputValue.trim() !== '') {
        const updatedTodos = todos.map((todo) =>
          todo.id === currObj.id ? { ...todo, title: inputValue.trim() } : todo
        );
        setTodos(updatedTodos);
        setInputValue('');
        setUpdate(false);
      } else {
        alert('Please enter something!!');
      }
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const obj = todos.find((todo) => todo.id === id);
    setCurrObj(obj);
    setInputValue(obj.title);
    setUpdate(true);
  };

  return (
    <div className="Container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>{update ? 'Update' : 'Add'}</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <div>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>{' '}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task