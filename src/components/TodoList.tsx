import React from 'react';
import { TodoListProps } from '../types';

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="px-9 overflow-y-scroll max-h-64 scroll-container w-full">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-3"
            onClick={() =>
              setTodos((prevState) =>
                prevState.map((item) =>
                  todo.id === item.id ? { ...item, done: !item.done } : item
                )
              )
            }
          >
            <div
              className={`inline ml-2 hover:font-bold hover:text-gray-700 ${
                todo.done && 'line-through'
              }`}
            >
              {todo.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
