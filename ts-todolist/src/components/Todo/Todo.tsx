import React from "react";
import { ITodo } from "../../@types/todo";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, removeTodo } from "../../redux/todoSlice";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.5rem 1rem;
`;

const StyledTitleText = styled("h1")<{ isChecked: boolean }>`
  color: #0970b4;
  text-transform: capitalize;
  ${(props) =>
    props.isChecked &&
    `
  text-decoration: line-through;
  color: #777 !important;
    
  `}
`;

const StyledDetailText = styled("span")<{ isChecked: boolean }>`
  ${(props) =>
    props.isChecked &&
    `
  text-decoration: line-through;
  color: #777 !important;
    
  `}
`;
const StyledTodoButton = styled("button")<{ isChecked: boolean }>`
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  background: #fff;
  margin-bottom: 1rem;
  ${(props) =>
    props.isChecked
      ? `
  color: #777;
  `
      : `
  padding: 0.4rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  background: #fff;
  margin-bottom: 1rem;
  `}
`;

type Props = {
  todo: ITodo;
};

const Todo: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const isChecked: boolean = todo.status;
  return (
    <StyledCard>
      <div>
        <StyledTitleText isChecked={isChecked}>{todo.title}</StyledTitleText>
        <StyledDetailText isChecked={isChecked}>
          {todo.description}
        </StyledDetailText>
      </div>
      <StyledTodoButton
        isChecked={isChecked}
        onClick={() => dispatch(checkTodo(todo.id))}
      >
        Complete
      </StyledTodoButton>
      <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
    </StyledCard>
  );
};

export default Todo;
