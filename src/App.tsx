import { useState, useRef, useEffect } from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';

import { Todo } from './types';

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [todos]);

  return (
    <div className="text-gray-600 font-body bg-gray-300 h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-11/12  sm:w-96 h-2/4">
        <Header />
        <div className="bg-white h-full rounded overflow-hidden shadow relative">
          <TodoForm
            inputRef={inputRef}
            newTodo={newTodo}
            setTodos={setTodos}
            setNewTodo={setNewTodo}
          />
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
