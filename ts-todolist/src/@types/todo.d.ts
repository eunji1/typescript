export interface ITodo {
  id?: string;
  title: string;
  description: string;
  status?: boolean;
}

export type TodocontextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};
