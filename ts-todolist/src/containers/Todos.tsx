import React, { useContext } from "react";
import { todoContext } from "../context/todoContext";
import { ITodo, TodocontextType } from "../@types/todo";
import Todo from "../components/Todo";

const Todos = () => {
  const { todos, updateTodo } = useContext(todoContext) as TodocontextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo}></Todo>
      ))}
    </>
  );
};

export default Todos;
