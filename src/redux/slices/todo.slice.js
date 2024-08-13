import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const current = [...state.todos];
      state.todos = [...current, action.payload];
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      const filteredToddos = state.todos.filter((res) => res.id !== id);
      state.todos = filteredToddos;
    },
    markAsDone: (state, action) => {
      const id = action.payload;
      const selectedTodoIndex = state.todos.findIndex((res) => res.id === id);
      state.todos[selectedTodoIndex].completed =
        !state.todos[selectedTodoIndex].completed;
    },
  }
});

export const { addTodo, removeTodo, markAsDone } = todoSlice.actions;
export default todoSlice;
