import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const sanitizedText = newTodo.trim();
    if (sanitizedText) {
      setTodos((prevState) => prevState.concat(sanitizedText));
      setNewTodo('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" disabled={!newTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={uuidv4()}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
