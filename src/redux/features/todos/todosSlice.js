import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listTodos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { listTodos } = state;
      state.listTodos = [...listTodos, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
