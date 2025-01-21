import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listTodos: [],
  previewContent: 'INPUT',
  detail: "",
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
    },
    getData: (state, action) => {
        state.detail = action.payload
    }
  },
});

export const { addTodo, changePreviewContent, getData } = todoSlice.actions;

export default todoSlice.reducer;
