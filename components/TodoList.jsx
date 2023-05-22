"use client"

import { useState, useEffect } from 'react';
import Link from "next/link"

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `✅ ${updatedTodos[index]}`;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded py-2 px-4"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center">
            <span
              className="cursor-pointer"
              onClick={() => handleToggleTodo(index)}
            >
              {todo}
            </span>
            <button
              className="ml-2 text-red-500 hover:text-red-600"
              onClick={() => handleRemoveTodo(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6 5a1 1 0 011-1h6a1 1 0 011 1v1h2a1 1 0 010 2H5a1 1 0 010-2h2V5zM4 8a2 2 0 012-2h8a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8zm5 1a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm-3 0a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

        <Link href="/viewlist">
            <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex justify-center items-center'>
                view to do
            </button>
        </Link>
    </div>
  );
};

export default TodoList;
