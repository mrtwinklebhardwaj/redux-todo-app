import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo,enableEditTodo, updateTodo,disableEditTodo } from '../features/todos/todoSlice';

const TodoList = () => {
    const [editedInputs, setEditedInputs] = useState({});
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();


    const handleUpdateInput = () => {
        if (input.trim()) {
          dispatch(addTodo(input));
          setInput('');
        }
      };
    if (todos.length === 0) {
        return (
            <div className="text-center mt-6 text-gray-500 italic">
                No todos yet. Add something!
            </div>
        );
    }
    const handleSave = (id) => {
        const updatedText = editedInputs[id];
        if (updatedText && updatedText.trim()) {
          dispatch(updateTodo({ id, text: updatedText }));
          dispatch(disableEditTodo(id));
        }
      };

    return (
        <div className="w-full max-w-md mx-auto mt-6 space-y-3">
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="flex items-center justify-between bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition duration-200 group"
                >
                    {todo.enableEdit ? (
                        <div className="flex items-center w-full gap-2">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-xl px-3 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                value={editedInputs[todo.id] ?? todo.text}
                                onChange={(e) =>
                                    setEditedInputs({ ...editedInputs, [todo.id]: e.target.value })
                                  }
                            />

                            <button
                                onClick={() => handleSave(todo.id)} 
                                className="text-green-600 hover:text-green-800 text-lg transition"
                                title="Save changes"
                            >
                                ✅
                            </button>

                            <button
                                onClick={() => dispatch(disableEditTodo(todo.id))} 
                                className="text-red-500 hover:text-red-700 text-lg transition"
                                title="Cancel edit"
                            >
                                ❌
                            </button>
                        </div>
                    ) : (
                        <>
                        <p className="text-gray-800 text-sm sm:text-base break-all flex-1">{todo.text}</p>

                         <div className='flex items-center space-x-2'>
                        <button
                            onClick={() => dispatch(enableEditTodo(todo.id))}
                            className="text-blue-500 hover:text-blue-700 transition duration-200 text-lg"
                            title="Edit todo"
                        >
                            ✏️
                        </button>
                        <button
                            onClick={() => {
                                dispatch(disableEditTodo(todo.id));
                                setEditedInputs((prev) => {
                                  const copy = { ...prev };
                                  delete copy[todo.id];
                                  return copy;
                                });
                              }}
                            className="text-red-500 hover:text-red-700 transition duration-200 text-sm"
                            title="Remove todo"
                        >
                            ❌
                        </button>

                    </div>
                        </>
                    )}

                   

                </div>
            ))}
        </div>
    );
};

export default TodoList;
