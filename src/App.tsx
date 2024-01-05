import { useState, useRef, useEffect } from 'react';

import { Todo } from './types';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import EmptyList from './components/EmptyList';

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
      <div className="w-10/12  sm:w-96 h-2/4">
        <Header />
        <div className="bg-white h-full rounded overflow-hidden shadow relative">
          <TodoForm
            inputRef={inputRef}
            newTodo={newTodo}
            setTodos={setTodos}
            setNewTodo={setNewTodo}
          />
          <TodoList todos={todos} setTodos={setTodos} />
          <EmptyList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
