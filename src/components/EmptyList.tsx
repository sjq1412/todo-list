import React from 'react';
import { EmptyListProps } from '../types';

const EmptyList: React.FC<EmptyListProps> = ({ todos, setTodos }) => {
  return (
    <div
      className={`absolute bottom-0 flex flex-col  items-center w-full my-6 ${
        !todos.length && 'hidden'
      }`}
    >
      <div className="border border-gray-200 mt-2 mb-4 w-36"></div>
      <div className="flex justify-center">
        <div
          onClick={() => setTodos([])}
          className="text-sm text-primary btn hover:font-semibold transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300"
        >
          empty list
        </div>
      </div>
    </div>
  );
};

export default EmptyList;
