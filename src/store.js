import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

/*
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
*/

const toDos = createSlice({
  name: "toDosReducer",
  initialState: () => {
    if (localStorage.getItem("todoList")) {
      return JSON.parse(localStorage.getItem("todoList"));
    } else {
      return [];
    }
  },
  reducers: {
    add: (state, action) => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const date = new Date().getDate();
      state.push({
        id: Date.now(),
        date: `${year}.${month}.${date}`,
        text: action.payload,
      });
      localStorage.setItem("todoList", JSON.stringify(state));
    },
    remove: (state, action) => {
      const newToDos = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("todoList", JSON.stringify(newToDos));
      return newToDos;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
