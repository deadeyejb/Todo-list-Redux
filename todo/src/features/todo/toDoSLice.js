import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  completed: true,
  active: 0,
};

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.items.push(action.payload);
      state.active += 1;
    },
    clearList: (state) => {
      state.items = [];
      state.active = 0;
    },
    deleteList: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      state.active = state.items.filter((item) => !item.completed).length;
    },
    toggleComplete: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.isComplete = !item.isComplete;
        state.active = state.items.filter((item) => !item.isComplete).length;
      }
    },
  },
});

export const { addList, clearList, deleteList, toggleComplete } =
  toDoSlice.actions;

export default toDoSlice.reducer;
