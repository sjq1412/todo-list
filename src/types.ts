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

export interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface EmptyListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
