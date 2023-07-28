import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

const rootReducer = combineReducers({
  todoReducer,
});

// rootState store의 상태 조회에서 사용
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
