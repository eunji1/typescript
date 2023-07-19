import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../@types/todo";

const initialState: { todos: ITodo[] } = {
  todos: [
    {
      id: 1,
      title: "post 1",
      description: "this is a description",
      status: false,
    },
    {
      id: 2,
      title: "post 2",
      description: "this is a description",
      status: true,
    },
  ],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    initTodo: (state, action) => {},
    saveTodo: (state, action: PayloadAction<ITodo>) => {
      const newTodo: ITodo = {
        id: Math.random(),
        title: action.payload.todo.title,
        description: action.payload.todo.description,
        status: false,
      };
      state.todos = [...state.todos, newTodo];
    },
    updateTodo = (state, action) => {
      state.todos.filter((todo: ITodo) => {
        if (todo.id === action.payload.id) {
          todo.status = true;
        }
      });
    },
  },
});

export const { initTodo, saveTodo, updateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
