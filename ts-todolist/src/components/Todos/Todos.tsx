import React from "react";
import { useSelector } from "react-redux";
import { ITodo } from "../../@types/todo";
import Todo from "../Todo/Todo";
import { RootState } from "../../redux/rootReducer";

const Todos = () => {
  // const { todos, updateTodo } = useContext(todoContext) as TodocontextType;
  const todos = useSelector((state: RootState) => state.todoReducer.todos);
  console.log(todos);
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </>
  );
};

export default Todos;
