import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listTodos: [],
  previewContent: 'LIST_TODOS'
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { listTodos } = state;
      state.listTodos = [...listTodos, action.payload];
    },
    changePreviewContent: (state, action) => {
        state.previewContent = action.payload
    }
  },
});

export const { addTodo, changePreviewContent } = todoSlice.actions;

export default todoSlice.reducer;
