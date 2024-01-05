import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  type: 'todo';
  title: string;
  id: string;
  done: boolean;
}

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todos]);

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
    <div className="text-gray-600 font-body bg-gray-300 h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-3/4  sm:w-96 h-2/4">
        <div className="w-full flex items-center hover:text-primary transition ease-out duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <h1 className="font-bold text-2xl uppercase p-4 text-left ">Todo</h1>
        </div>
        <div className="bg-white h-full rounded overflow-hidden shadow relative">
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
          <div className="px-9 overflow-y-scroll max-h-64 scroll-container w-full">
            <ul>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="mb-3"
                  onClick={() =>
                    setTodos((prevState) =>
                      prevState.map((item) =>
                        todo.id === item.id
                          ? { ...item, done: !item.done }
                          : item
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
        </div>
      </div>
    </div>
  );
};

export default App;
