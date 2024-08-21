import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/toDoSLice";
export const store = configureStore({
  reducer: {
    toDo: todoReducer,
  },
});
