import React, { ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Todo, TodoFormProps } from '../types';

const MAX_LENGTH = 500;

const TodoForm: React.FC<TodoFormProps> = ({
  inputRef,
  setTodos,
  newTodo,
  setNewTodo,
}) => {
  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const sanitizedTodo = newTodo.trim();

    if (sanitizedTodo) {
      const todo = {
        type: 'todo',
        id: uuidv4(),
        title: sanitizedTodo,
        done: false,
      };
      setTodos((prevState: Todo[]) => [...prevState, todo] as Todo[]);
      setNewTodo('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length <= MAX_LENGTH) {
      setNewTodo(event.target.value);
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <div className="flex items-center justify-center mt-12 mb-12">
        <input
          ref={inputRef}
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          className="border border-gray-300 rounded focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-200 px-3 py-1 w-3/4 transition ease-out duration-500"
        />
        <button
          type="submit"
          disabled={!newTodo}
          className={`ml-2 rounded-full border-2 ${
            newTodo.trim().length
              ? 'border-primary hover:bg-primary text-primary hover:text-white transition ease-out duration-500'
              : 'text-gray-300 border-gray-300'
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 text-inherit"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
