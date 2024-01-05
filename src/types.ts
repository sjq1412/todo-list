export interface Todo {
  type: 'todo';
  title: string;
  id: string;
  done: boolean;
}

export interface TodoFormProps {
  inputRef: React.LegacyRef<HTMLInputElement>;
  newTodo: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}
