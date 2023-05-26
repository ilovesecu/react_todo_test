import { Todo, TodoState } from "@/redux/types/todoInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: TodoState = [];

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>): TodoState => {
      return state.concat(action.payload);
    },
    toggleTodo: (state: TodoState, action: PayloadAction<number>): TodoState => {
      const index = state.findIndex((v) => v.id === action.payload);
      state[index].done = !state[index].done; //immer로 인해 이렇게 직접 수정해도 된다고했음.
      return state;
    },
    removeTodo: (state: TodoState, action: PayloadAction<number>): TodoState => {
      return state.filter((v) => v.id !== action.payload);
    },
  },
});

const { actions, reducer: todoReducer } = slice;
export const todoActions = actions;
export default todoReducer;
