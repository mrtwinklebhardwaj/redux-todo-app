import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-3">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full flex-1 px-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-200"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
