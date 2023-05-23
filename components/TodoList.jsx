"use client"

import { useState, useEffect } from 'react';
import {addNewTodos,getTodos } from '../utils/data'
import useUser from '../hooks/useUser.js'
import useUserMustBeLogged from '../hooks/userUserMustBeLogged'

const TodoList = () => {
    const user = useUser()
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [showLists, setShowLists] = useState(false);

    useUserMustBeLogged(user, "in", "/login");

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getTodos(user.id);
            if (data) {
                setTodos(data);
            } else {
                console.error('Error fetching todos');
            }
        }

        fetchTodos();
    }, [user]);

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = async () => {
        if (newTodo.trim() !== '') {
            const addedTodo = await addNewTodos(user.id, newTodo);
            if (addedTodo.success) {
                setTodos([...todos, newTodo]);
                setNewTodo('');
            } else {
                console.error('Error adding new todo:', addedTodo.error);
            }
        }
    };

    const handleRemoveTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleToggleLists = () => {
        setShowLists(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
            <div className="flex mb-8">

                <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Enter a new task"
                    className="rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={addTodo}
                    className="bg-[#5B8AC7] hover:bg-[#37639D] text-white font-bold py-2 px-4 rounded-r"
                >
                    Add
                </button>

            </div>

            {todos.length > 0 && !showLists && (
                <ul>
                    {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex items-center mb-10 bg-gray-100 rounded p-4"
                    >
                        <span className="flex-grow">{todo}</span>
                        <button
                            onClick={() => handleRemoveTodo(index)}
                            className="text-red-500 hover:text-red-600 focus:outline-none"
                        >
                            Delete
                        </button>
                    </li>
                    ))}
                </ul>
            )}

            {!showLists && (
                <div className="flex justify-center">
                    <button
                    onClick={handleToggleLists}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt rounded"
                    >
                    View Lists
                    </button>
                </div>
            )}

            {showLists && (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#5B8AC7]">My List</h2>
                    <ul>
                    {todos.map((todo, index) => (
                        <li key={index} className="mb-2">
                            {todo}
                        </li>
                    ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TodoList;
