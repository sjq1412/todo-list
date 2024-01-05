import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Todo, TodoFormProps } from '../types';

const TodoForm: React.FC<TodoFormProps> = ({
  inputRef,
  setTodos,
  newTodo,
  setNewTodo,
}) => {
  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const sanitizedTitle = newTodo.trim();
    const todo = {
      type: 'todo',
      id: uuidv4(),
      title: sanitizedTitle,
      done: false,
    };
    if (sanitizedTitle) {
      setTodos((prevState: Todo[]) => [...prevState, todo] as Todo[]);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <div className="flex items-center justify-center mt-12 mb-12">
        <input
          ref={inputRef}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border border-gray-300 rounded focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-200 px-3 py-1 w-3/4 transition ease-out duration-500"
        />
        <button
          type="submit"
          disabled={!newTodo}
          className="ml-2 rounded-full border-2 border-primary hover:bg-primary text-primary hover:text-white transition ease-out duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 text-inherit"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
