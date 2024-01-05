import React from 'react';
import { TodoListProps } from '../types';

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const handleDone = (id: string) => () => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        id === todo.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleRemove = (id: string) => () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="px-11 xs:sm-9  overflow-y-scroll max-h-64 scroll-container w-full">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-3 flex justify-between  hover:font-bold break-all"
            onClick={handleDone(todo.id)}
          >
            <div
              className={`inline mr-6  hover:text-gray-700 ${
                todo.done && 'line-through text-green-600'
              }`}
            >
              {todo.title}
            </div>

            <div
              onClick={handleRemove(todo.id)}
              className="inline text-primary hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
