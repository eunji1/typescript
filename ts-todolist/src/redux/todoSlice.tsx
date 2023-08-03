import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../@types/todo";
import { v4 as uuidv4 } from "uuid";
const initialState: { todos: ITodo[] } = {
  todos: [
    {
      id: "num1",
      title: "post 1",
      description: "this is a description",
      status: false,
    },
    {
      id: "num2",
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
    initTodo: (state, { payload }) => {
      console.log("initTodo", state, payload);
    },
    addTodo: (state, { payload }: PayloadAction<ITodo>) => {
      const newTodo: ITodo = {
        id: uuidv4(),
        title: payload.title,
        description: payload.description,
        status: false,
      };
      state.todos = [...state.todos, newTodo];
    },
    checkTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos.filter((todo: ITodo) => {
        if (todo.id === payload) {
          todo.status = !todo.status;
        }
      });
    },
    removeTodo: (state, { payload }: PayloadAction<string>) => {
      // 반성하자 정말
      state.todos = [
        ...state.todos.filter((todo: ITodo) => todo.id !== payload),
      ];
    },
  },
});

export const { initTodo, addTodo, checkTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
