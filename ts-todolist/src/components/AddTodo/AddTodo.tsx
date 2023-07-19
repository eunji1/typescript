import React, { useContext, useState } from "react";
import { todoContext } from "../../context/todoContext";
import { ITodo, TodocontextType } from "../../@types/todo";
import { styled } from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  margin-bottom: 1rem;
`;

const StyledInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitleInput = styled.input`
  background: #f5f6f7;
  padding: 0.5rem 1rem;
  border: 1px solid #0970b4;
  border-radius: 10px;
  display: block;
  margin: 0.3rem 1rem 0 0;
  outline: none;
`;

const StyledAddButton = styled.button`
  background: #099dff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

const AddTodo: React.FC = () => {
  const { saveTodo } = useContext(todoContext) as TodocontextType;
  const [formData, setFormData] = useState<ITodo | any>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSaveTodo = (
    e: React.FormEvent,
    formData: { title: string; description: string }
  ) => {
    e.preventDefault();
    saveTodo(formData);
  };
  const todoArr = [{ name: "title" }, { name: "description" }];
  return (
    <>
      <StyledForm
        onSubmit={(e: React.FormEvent) => handleSaveTodo(e, formData)}
      >
        <StyledInputBox>
          {todoArr.map((item, i) => {
            return (
              <div key={i}>
                <label htmlFor={item.name}>{item.name}</label>
                <StyledTitleInput
                  onChange={handleForm}
                  type="text"
                  id={item.name}
                ></StyledTitleInput>
              </div>
            );
          })}
        </StyledInputBox>
        <StyledAddButton disabled={formData === undefined ? true : false}>
          Add Todo
        </StyledAddButton>
      </StyledForm>
    </>
  );
};

export default AddTodo;
