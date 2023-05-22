"use client"

import { useState } from 'react';
import TodoList from './TodoList';
import ViewTodoList from './ViewTodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoList todos={todos} setTodos={setTodos} />
      <ViewTodoList todos={todos} />
    </div>
  );
};

export default App;
