import React from "react";
import { ITodo } from "../../@types/todo";
import { styled } from "styled-components";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.5rem 1rem;
`;

const StyledTitleText = styled.h1`
  color: #0970b4;
  text-transform: capitalize;
`;

const StyledTodoButton = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  background: #fff;
  margin-bottom: 1rem;
`;

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";
  return (
    <StyledCard>
      <div>
        <StyledTitleText className={checkTodo}>{todo.title}</StyledTitleText>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <StyledTodoButton
        onClick={() => updateTodo(todo.id)}
        className={todo.status ? "hide-button" : "Card--button"}
      >
        Complete
      </StyledTodoButton>
    </StyledCard>
  );
};

export default Todo;
